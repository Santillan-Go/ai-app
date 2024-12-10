import Credential from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, registerUserWithOutPassword } from "./userRequest";
import dbConnect from "./MongoDB";

// import JWT from "jsonwebtoken";
//GOOGLE_API_KEY
const authOptions = {
  providers: [
    Credential({
      name: "credential",
      credentials: {
        name: { type: "text", placeholder: "enter your name" },
        password: { type: "password", placeholder: "enter your password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await dbConnect();
        const foundOne = await getUserByEmail({ email });

        if (!foundOne) throw new Error("User not foud");
        if (!foundOne.password.includes(password))
          throw new Error("Wrong password");

        return {
          id: foundOne._id,
          email: foundOne.email,
          name: foundOne.username,
        };

        console.log(credentials);
      },
    }),
    GoogleProvider({
      //ADD ID AND SECRET
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  session: { strategy: "jwt" },

  jwt: {
    // async encode({ secret, token }) {
    //   console.log(secret, "SECRET");
    //   console.log(token, "token");

    //   return JWT.sign(token, secret);
    // },
    // async decode({ secret, token }) {
    //   console.log(secret, "SECRET");
    //   console.log(token, "token");
    //   return JWT.verify(token, secret);
    // },
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt(params) {
      const { user, token } = params;
      try {
        if (user) {
          //CALL API TO SAVE USER'S INFO

          const response = await registerUserWithOutPassword({
            email: user.email,
            username: user.name,
            _id: user.id,
          });
          token.id = user.id;
          token.email = user.email;
        }
        console.log(token, "TOKEN");
        return token;
      } catch (error) {
        console.log(error.message, "ERROR AUTHOPTIONS");
        return null;
      }
      // Add user information to the token
    },
    session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };

      // try {
      //   // Add token information to the session
      //   if (session.user) {
      //     session.user.id = token.id;
      //   }
      //   console.log(session, "SESSION");
      //   return session;
      // } catch (error) {
      //   return null;
      // }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

// clientId: process.env.GOOGLE_CLIENT_ID,
//clientSecret: process.env.GOOGLE_CLIENT_SECRET,

//export { Handler as GET, Handler as POST };
