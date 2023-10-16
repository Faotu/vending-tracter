import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createVendingSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createVendingSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newVending = await prisma.vending.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newVending, { status: 201 });
}
