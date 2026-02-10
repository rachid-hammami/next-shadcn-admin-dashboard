"use client"

import { useState } from "react"

import RolesTable from "./_components/RolesTable"
import { AddRoleDialog } from "./_components/AddRoleDialog"
import { EditRoleDialog } from "./_components/EditRoleDialog"
import { RolePermissions } from "./_components/RolePermissions"

import { Button } from "@/components/ui/button"
import type { Role, RoleStatus } from "@/types/role"

import { demoRoles } from "./_data/roles"

import { hasPermission, useRouteGuard, Can } from "@/lib/rbac"
import type { RBACUser, RoleId } from "@/lib/rbac"

// -----------------------------------------------------------------------------
// Mock current user (temporary, same behavior as before)
// -----------------------------------------------------------------------------
const currentUser: RBACUser = {
  roleId: "admin" as RoleId,
}

export default function RolesPage() {
  // ---------------------------------------------------------------------------
  // RBAC — route guard
  // ---------------------------------------------------------------------------
  useRouteGuard({
    user: currentUser,
    allowedRoles: ["admin"],
    redirectTo: "/access-denied",
  })

  const canReadRoles = hasPermission(currentUser, "roles.read")
  const canManageRoles = hasPermission(currentUser, "roles.manage")

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const [roles, setRoles] = useState<Role[]>(
    demoRoles.map((role) => ({
      id: String(role.id),
      name: role.name,
      description: role.description,
      usersCount: role.usersCount,
      status: role.status as RoleStatus,
      isSystem: role.isSystem,
    }))
  )

  const [editingRole, setEditingRole] = useState<Role | null>(null)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [isAddOpen, setIsAddOpen] = useState(false)

  // ---------------------------------------------------------------------------
  // Handlers
  // ---------------------------------------------------------------------------
  const handleEdit = (role: Role) => {
    if (!canManageRoles) return
    setSelectedRole(null)
    setIsAddOpen(false)
    setEditingRole(role)
  }

  const handleDelete = (role: Role) => {
    if (!canManageRoles) return

    setRoles((prev) => prev.filter((r) => r.id !== role.id))

    if (selectedRole?.id === role.id) {
      setSelectedRole(null)
    }
  }

  const handleToggle = (role: Role) => {
    if (!canManageRoles) return

    setRoles((prev) =>
      prev.map((r) =>
        r.id === role.id
          ? {
              ...r,
              status: r.status === "Active" ? "Disabled" : "Active",
            }
          : r
      )
    )
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  if (!canReadRoles) {
    return null
  }

  return (
    <section className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Roles Management</h1>

        <Can
  user={currentUser}
  permission="roles.manage"
  fallback={<Button disabled>Add role</Button>}
>
  <Button
    onClick={() => {
      setSelectedRole(null)
      setEditingRole(null)
      setIsAddOpen(true)
    }}
  >
    Add role
  </Button>
</Can>

      </div>

      <RolesTable
  roles={roles}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onToggle={handleToggle}
  onSelect={setSelectedRole}
  selectedRoleId={selectedRole?.id ?? null}
  canManage={canManageRoles}
  currentUser={currentUser}
/>


      {selectedRole && (
        <div className="rounded-md border p-4">
          <RolePermissions role={selectedRole} />
        </div>
      )}

      <AddRoleDialog
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onConfirm={(role) => {
          setRoles((prev) => [...prev, role])
          setIsAddOpen(false)
        }}
      />

      {editingRole && (
        <EditRoleDialog
          role={editingRole}
          onClose={() => {
            setSelectedRole(null)
            setEditingRole(null)
          }}
          onConfirm={(updated) =>
            setRoles((prev) =>
              prev.map((r) => (r.id === updated.id ? updated : r))
            )
          }
        />
      )}
    </section>
  )
}
