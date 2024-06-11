import NextAuth from "next-auth/next";
import { authOtions } from "../../../lib/auth";

const handler = NextAuth(authOtions)

export { handler as GET , handler as POST}