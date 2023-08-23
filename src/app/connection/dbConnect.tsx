import mongoose from "mongoose";

export async function dbConnect() {
  const mongourl: any = process.env.MBURL;
  mongoose.connect(mongourl);
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}
