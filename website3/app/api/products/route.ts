import { NextResponse } from "next/server";

export async function GET() {
  // In a real app, fetch products from database
  return NextResponse.json({ message: "Products fetched", products: [] });
}

export async function POST() {
  // In a real app, save product to database
  return NextResponse.json({ message: "Product created", product: {} });
}
