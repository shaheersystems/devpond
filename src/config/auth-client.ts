import { createAuthClient } from "better-auth/client";

export const { signIn, signUp, useSession } = createAuthClient();
