import db from "../../lib/db"
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields required" }, { status: 400 });
    }

    await db.query(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return NextResponse.json({ message: "Saved successfully" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
