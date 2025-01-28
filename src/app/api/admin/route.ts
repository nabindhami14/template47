import { NextResponse } from "next/server";

import { auth } from "@/auth";

export const GET = auth((req) => {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
