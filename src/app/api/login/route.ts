import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "@/app/connection/dbConnect";
const UserModel = require("../../model/userModel");

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const username = body.name;
  const pass = body.password;
  const mydata = await UserModel.find({ name: username, password: pass });
  if (mydata.length === 1) {
    const response = {
      message: "Auth Successful",
      id: mydata[0]._id,
    };
    return NextResponse.json(response, {
      status: 200,
    });
  }
  if (mydata.length === 0) {
    return NextResponse.json(
      { message: "Auth Unsuccessful" },
      {
        status: 400,
      }
    );
  }
}
