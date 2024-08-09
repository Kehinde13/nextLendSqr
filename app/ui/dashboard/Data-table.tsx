"use client";

import * as React from "react";
import "./styles.css";
import view from "@/public/icons/np_view_1214519_000000 1.png";
import activate from "@/public/icons/np_user_2995993_000000 1.png";
import blacklist from "@/public/icons/np_delete-friend_3248001_000000 1.png";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/app/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/ui/shadcn/dropdown-menu";
import { Input } from "@/app/ui/shadcn/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/shadcn/table";
import Image from "next/image";
import Link from "next/link";
import { Customer } from "@/app/lib/definitions";

export type tableData = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  joined: Date;
  status: string;
  id: string;
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "organization",
    header: "ORGANIZATION",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("organization")}</div>
    ),
  },
  {
    accessorKey: "username",
    header: "USERNAME",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "EMAIL",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "PHONE NUMBER",
    cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "joined",
    header: "JOINED",
    cell: ({ row }) => (
      <div className="lowercase">
        {new Date(row.getValue("joined")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      return (
        <div
          className={`lowercase 
       ${
         row.getValue("status") == ("Active" || "active")
           ? "active"
           : row.getValue("status") == "Inactive"
           ? "inactive"
           : row.getValue("status") == "Blacklisted"
           ? "blacklisted"
           : "pending"
       }
       `}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const rowId = row.original.id; // Use row.original to access the raw data
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link
                href={`/dashboard/${rowId}/userdetails`}
                className="flex gap-1"
              >
                <Image src={view} alt="" />
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image src={blacklist} alt="" className="mx-1" />
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image src={activate} alt="" className="mx-1" />
              Activate User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTable({ customers, totalCustomers }: { customers: Customer[]; totalCustomers: number }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [currentPageNumber, setCurrentPageNumber] = React.useState(1)
  const [data, setData] = React.useState<Customer[]>([])
  const TOTAL_VALUES_PER_PAGE = 10;
  const totalPages = Math.ceil(totalCustomers / TOTAL_VALUES_PER_PAGE);

  React.useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setData((customers?.slice(start, end)));
  }, [currentPageNumber, customers]);

  const goOnPrevPage = () => {
    setCurrentPageNumber((prev) => prev - 1);
  };

  const goOnNextPage = () => {
    setCurrentPageNumber((prev) => prev + 1);
  };


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setColumnVisibility({
        organization: !isMobile,
        phone: !isMobile,
        joined: !isMobile,
        email: !isMobile,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter status..."
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onChange={(event: { target: { value: any } }) =>
            table.getColumn("status")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border p-2 drop-shadow-lg">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div>
          
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goOnPrevPage}
            disabled={currentPageNumber === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goOnNextPage}
            disabled={currentPageNumber >= totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
