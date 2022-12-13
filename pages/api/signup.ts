import { NextApiHandler } from "next";

const SignUpHandler: NextApiHandler = (req, res) => {
  const { email, password } = req.body;

  console.log({ email, password });

  res.json({});
};

export default SignUpHandler;
