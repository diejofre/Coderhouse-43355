import { NextResponse } from "next/server";

export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
];

export const GET = async () => {
  return NextResponse.json(users);
};

export const POST = async (req) => {
  const { id, name } = await req.json();
  const user = { id, name };
  users.push(user);
  return NextResponse.json(user);
};
