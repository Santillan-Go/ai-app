import connect from "@/lib/MongoDB";

export async function register() {
  console.log("MONGODB, CONNECTED");
  await connect();
}
//middleware
//instrumentation
