import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query("SELECT * FROM blog ORDER BY Published_date DESC LIMIT 8");
    return Response.json(rows);
  } catch (error) {
    return Response.json({ error: "Database query failed" });
  }
}
