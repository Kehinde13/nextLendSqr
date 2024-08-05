
import prisma from '@/app/lib/db'; // Adjust the import path according to your project structure
import { NextResponse } from 'next/server';



export async function GET(req: Request){
  try {
    const customers = await prisma.customers.findMany();
  
    return NextResponse.json(customers, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}

