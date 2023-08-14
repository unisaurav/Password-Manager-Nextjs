import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "@/app/connection/dbConnect";
const UserModel = require("../../model/userModel");

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const data = new UserModel({
    name: body.name,
    password: body.password,
  });

  const mydata = await UserModel.find({ name: body.name });
  if (mydata.length > 0) {
    const response = {
      message: `Username ${body.name}, Already exist`,
    };
    return NextResponse.json(response, {
      status: 400,
    });
  } else {
    try {
      const dataToSave = await data.save();
      return NextResponse.json(dataToSave, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        {
          message: { message: error },
        },
        {
          status: 400,
        }
      );
    }
  }
}
