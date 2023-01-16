import { NextApiHandler, PageConfig } from "next";
import { Stripe } from "stripe";
import { Readable } from "node:stream";
import { StripeWebhookEvents } from "../../stripeEvents";

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const stripeWebhook: NextApiHandler = async (req, res) => {
  const body = await buffer(req);
  const signature = req.headers["stripe-signature"];

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey) {
    res.status(500).json({ message: `Missing: STRIPE_SECRET_KEY` });
    return;
  }
  if (!stripeWebhookSecret) {
    res.status(500).json({ message: `Missing: STRIPE_WEBHOOK_SECRET` });
    return;
  }
  if (typeof signature !== "string") {
    res.status(500).json({ message: `stripe-signature is not a string` });
    return;
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2022-11-15" });

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    stripeWebhookSecret
  ) as StripeWebhookEvents;

  switch (event.type) {
    case "checkout.session.completed":
      // @todo - update order in GraphCMS
      return;
  }

  res.status(204).end();
};

export default stripeWebhook;

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
