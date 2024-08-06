import React from 'react'
import CardWrapper from '../ui/dashboard/Card'
import Table from '../ui/dashboard/Table'
import prisma from '../lib/db';
import { DataTable } from '../ui/dashboard/Data-table';

const page = async () => {
  const customers = await prisma.customers.findMany({
    take: 10,
    select: {
      organization: true,
      username: true,
      email: true,
      phone: true,
      joined: true,
      status: true,
      id: true
    },
  });

  return (
    <div className='md:px-10 py-1'>
      <h1 className='font-bold mb-5 text-4xl'>Users</h1>
      <CardWrapper />
      {/* <Table customers={customers}/> */}
      <DataTable data={customers} />
    </div>
  )
}

export default page