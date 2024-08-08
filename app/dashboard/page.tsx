import React from 'react'
import CardWrapper from '../ui/dashboard/Card'
import prisma from '../lib/db';
import { DataTable } from '../ui/dashboard/Data-table';

const Page = async () => {
  const customers = await prisma.customers.findMany();
  const totalCustomers = await prisma.customers.count()

  return (
    <div className='md:px-10 py-1'>
      <h1 className='font-bold mb-5 text-4xl'>Users</h1>
      <CardWrapper />
      <DataTable customers={customers} totalCustomers={totalCustomers} />
    </div>
  )
}

export default Page