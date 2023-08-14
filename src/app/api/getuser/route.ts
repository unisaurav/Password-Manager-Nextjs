import { NextResponse } from "next/server";
import { dbConnect } from "@/app/connection/dbConnect";
const userModel = require("../../model/userModel");

export async function GET() { // unused....
  await dbConnect();
  try {
    const mydata = await userModel.find(); //getId
    return NextResponse.json(mydata);
  } catch (error) {
    return NextResponse.json(
      {
        message: "fdasfas",
      },
      {
        status: 400,
      }
    );
  }
}
