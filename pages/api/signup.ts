import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt";
import { authorizedApolloClient } from "../../GraphQL/apolloClient";
import {
  CreateAccountMutation,
  CreateAccountMutationVariables,
  CreateAccountDocument,
} from "../../generated/graphql";

const SignUpHandler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await authorizedApolloClient.mutate<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >({
    mutation: CreateAccountDocument,
    variables: {
      email,
      password: passwordHash,
    },
  });

  res.json({ userId: user.data?.createAccount?.id });
};

export default SignUpHandler;
