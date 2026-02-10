"use client"

import { useState } from "react"

import UsersTable from "./_components/UsersTable"
import { columns } from "./_components/columns"

import { Button } from "@/components/ui/button"

/* ================= TYPES ================= */

export type UserStatus = "Active" | "Disabled"

export type User = {
  id: string
  name: string
  email: string
  roleId: string | null
  status: UserStatus
}

/* ================= PAGE ================= */

export default function UsersPage() {
  /* ---- USERS (SOURCE OF TRUTH) ---- */
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@acme.com",
      roleId: null,
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@acme.com",
      roleId: "admin",
      status: "Disabled",
    },
  ])

  const handleToggleStatus = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Disabled"
                  : "Active",
            }
          : user
      )
    )
  }

  return (
    <section className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>

        <Button disabled>
          Add user (coming soon)
        </Button>
      </div>

      <UsersTable
        columns={columns(handleToggleStatus)}
        data={users}
      />
    </section>
  )
}
