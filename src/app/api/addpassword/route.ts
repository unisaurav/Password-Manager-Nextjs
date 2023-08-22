import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "@/app/connection/dbConnect";
const UserModel = require("../../model/userModel");
const AddPasswordModel = require("../../model/addPasswordModel");

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const { username, webpassword, webUrl, userId } = body;

  // const mydata = await UserModel.findOne({ name: userId }); //getId

  const data = new AddPasswordModel({
    username: username,
    webpassword: webpassword,
    webUrl: webUrl,
    userObjectId: userId, //id
  });

  try {
    const dataToSave = await data.save();
    return NextResponse.json(
      { message: "Saved....", saved: dataToSave },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving Password", errro: error },
      {
        status: 400,
      }
    );
  }
}
