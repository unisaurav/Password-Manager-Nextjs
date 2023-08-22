import { NextResponse } from "next/server";
import { dbConnect } from "@/app/connection/dbConnect";
const AddPasswordModel = require("../../../model/addPasswordModel");

export async function GET(req: Request, { params }: any) {
  await dbConnect();
  const id = params.id;
  try {
    const mydata = await AddPasswordModel.find({ userObjectId: id }); //getId
    return NextResponse.json(
      mydata.length > 0 ? mydata : { info: "No Passwords saved" },
      { status: mydata.length > 0 ? 200 : 201 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
