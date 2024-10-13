import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query(`
  SELECT comp_name, Region, Country, city, Contact_Number, Company_Overview, Categories, Supplier_type, image_url, Website
  FROM add_listing
  WHERE v_status = 1
    AND v_admin = 1
    AND image_url != ''
    AND Website != ''
  LIMIT 4,6
`);
    return Response.json(rows);
  } catch (error) {
    return Response.json({ error: "Database query failed" });
  }
}
