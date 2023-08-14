import mongoose from "mongoose";

export async function dbConnect() {
  mongoose.connect(
    "mongodb+srv://mongodbuser:mongodbuser@cluster0.1vexxda.mongodb.net/compassdb"
  );
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}
