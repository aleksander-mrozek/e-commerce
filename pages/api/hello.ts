import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).json({});
  }

  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    return res
      .status(500)
      .json({ error: "Environmental variables are not provided..." });
  }

  const email = req.body.email;

  if (typeof email !== "string") {
    return res.status(400).json({});
  }

  const response = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
      },
      body: JSON.stringify({
        email,
      }),
    }
  );

  if (!response.ok) {
    res.status(500).json({
      error: "There is a problem signing you to the newsletter...",
    });
  }

  return res.status(201).json({});
};

export default handler;
