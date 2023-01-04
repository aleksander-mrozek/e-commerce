import { NextApiHandler } from "next";
import { StripeWebhookEvents } from "../../stripeEvents";

const stripeWebhook: NextApiHandler = (req, res) => {
  // @todo - verify signing secret

  console.log(req.body);

  const event = req.body as StripeWebhookEvents;

  switch (event.type) {
    case "checkout.session.completed":
      // @todo - update order in GraphCMS
      return;
  }

  res.status(204).end();
};

export default stripeWebhook;
