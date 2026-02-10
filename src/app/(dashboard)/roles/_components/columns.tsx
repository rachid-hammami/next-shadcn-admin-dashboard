"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { RoleActions } from "./RoleActions"
import { RoleBadge } from "./RoleBadge"

import type { Role } from "@/types/role"
import type { RBACUser } from "@/lib/rbac"

interface ColumnsProps {
  currentUser: RBACUser
  onEdit: (role: Role) => void
  onDelete: (role: Role) => void
}

export const getColumns = ({
  currentUser,
  onEdit,
  onDelete,
}: ColumnsProps): ColumnDef<Role>[] => [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.name}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.original.description || "—"}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <RoleBadge status={row.original.status as "Active" | "Disabled"} />
    ),
  },
  {
    id: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.isSystem ? "System" : "Custom"}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <RoleActions
        role={row.original}
        currentUser={currentUser}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ),
  },
]
