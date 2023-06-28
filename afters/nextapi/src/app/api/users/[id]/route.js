import { NextResponse } from "next/server";
import { users } from "../route.js";

export const GET = (req) => {
  const id = req.url.split("users/")[1];
  const user = users.find((user) => user.id == id);
  return NextResponse.json(user);
};

export const PUT = async (req) => {
  const id = req.url.split("users/")[1];
  const user = users.find((user) => user.id == id);
  const { name } = await req.json();
  user.name = name;
  return NextResponse.json(user);
};

export const DELETE = (req) => {
  const id = req.url.split("users/")[1];
  const user = users.find((user) => user.id == id);
  users.splice(users.indexOf(user), 1);
  return NextResponse.json(user);
};
