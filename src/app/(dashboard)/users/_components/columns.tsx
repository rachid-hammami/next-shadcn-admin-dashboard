"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { User } from "../_data/users"

import { UserActions } from "./UserActions"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }: { row: { original: User } }) => (
      <UserActions user={row.original} />
    ),
  },
]
