import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    // 1. data from frontend
    // 2. DB logic

    const db_data = await prisma.blog.findMany();
    // 3. data to frontend


    return NextResponse.json({ message: "Blog API", data: db_data });
}
