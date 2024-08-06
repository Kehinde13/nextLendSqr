import React from 'react'
import CardWrapper from '../ui/dashboard/Card'
import Table from '../ui/dashboard/Table'
import prisma from '../lib/db';

const page = async () => {
  const customers = await prisma.customers.findMany({
    take: 10
  });

  return (
    <div className='md:px-10 py-1'>
      <h1 className='font-bold mb-5 text-4xl'>Users</h1>
      <CardWrapper />
      <Table customers={customers}/>
    </div>
  )
}

export default page