import React from 'react'
import CardWrapper from '../ui/dashboard/Card'
import Table from '../ui/dashboard/Table'

const page = () => {
  return (
    <div className='md:px-10 py-1'>
      <h1 className='font-bold mb-5 text-4xl'>Users</h1>
      <CardWrapper />
      <Table />
    </div>
  )
}

export default page