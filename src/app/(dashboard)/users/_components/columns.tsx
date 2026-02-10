"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { User } from "../page"

import { UserActions } from "./UserActions"

export const columns = (
  onToggleStatus: (userId: string) => void
): ColumnDef<User>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "roleId",
    header: "Role",
    cell: ({ row }) => {
      const roleId = row.original.roleId

      return roleId ? (
        <span className="capitalize">{roleId}</span>
      ) : (
        <span className="text-muted-foreground">—</span>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={
          row.original.status === "Active"
            ? "text-emerald-600 font-medium"
            : "text-muted-foreground"
        }
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <UserActions
        user={row.original}
        onToggleStatus={onToggleStatus}
      />
    ),
  },
]
