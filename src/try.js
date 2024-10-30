// Import your providers
// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/"] };

// export { default } from "next-auth/middleware";

// export function middleware(req) {
//   const session = req.nextauth;
//   console.log("Session in middleware:", session);
//   return NextAuth(req);
// }

// export const config = { matcher: ["/"] };

// import { withAuth } from "next-auth/middleware";
// import authOptions from "./lib/authOptions";
// import { getServerSession } from "next-auth";
// import dbConnect from "./lib/MongoDB";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   async function middleware(req) {
//     // await dbConnect();
//     console.log(req.nextauth.token, "TOKENNN...");
//   },

//   {
//     // jwt: { decode: authOptions.jwt?.decode },
//     callbacks: {
//       authorized: async ({ token }) => {
//         // await dbConnect();
//         const session = await getServerSession(authOptions);
//         const name = session?.user?.name;
//         console.log(session, "SESSION ON AUTHORIZED");
//         // Token is valid and authenticated
//         // You can use it to access your API
//         console.log(name, "AUTHORIZED");
//         return name ? true : false;
//       },
//     },
//   }
// );

// export const config = { matcher: ["/"] };
