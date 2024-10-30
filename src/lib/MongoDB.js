// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGO_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       console.log("Db connected");
//       return mongoose;
//     });
//   }
//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;

import mongoose from "mongoose";

let isConnected = false; // Track connection status

const dbConnect = async () => {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("Mongo URI not set in environment variables");
  }

  try {
    const db = await mongoose.connect(MONGO_URI);

    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};

export default dbConnect;

//ANOTHER TO CONNECT

// const connection = { isConnected: 0 };

// async function DBCONNECT() {
//   if (connection.isConnected) {
//     return;
//   }

//   const db = await mongoose.connect(process.env.MONGODB_URI);
//   connection.isConnected = db.connection[0].readyState;
// }
//EXPORT DEAFULT DBCONNECT
