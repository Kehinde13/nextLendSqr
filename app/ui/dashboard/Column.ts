"use client"

import { customers } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"




export const columns: ColumnDef<customers>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
  },
  {
    accessorKey: 'balance',
    header: 'Balance',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'organization',
    header: 'Organization',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'marital',
    header: 'Marital Status',
  },
  {
    accessorKey: 'residence',
    header: 'Residence',
  },
  {
    accessorKey: 'children',
    header: 'Children',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'joined',
    header: 'Joined',
    cell: info => info.getValue<Date>().toLocaleDateString(),
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'index',
    header: 'Index',
  },
]
