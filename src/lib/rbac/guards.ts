// UI-side permission guards.
// These checks are meant for frontend rendering only.
// Server-side enforcement must be handled by the backend.


import type { RBACUser, RoleId } from "./types"
import type { Permission } from "./permissions"
import { ROLE_PERMISSIONS } from "./role-permissions"

export function hasPermission(
  user: RBACUser | null | undefined,
  permission: Permission
): boolean {
  if (!user || !user.roleId) return false

  return ROLE_PERMISSIONS[user.roleId]?.includes(permission) ?? false
}


export function hasAnyPermission(
  user: RBACUser,
  permissions: Permission[]
): boolean {
  if (!user.roleId) return false
  return permissions.some(permission =>
    ROLE_PERMISSIONS[user.roleId].includes(permission)
  )
}

/**
 * Route-level RBAC guard
 */
export function canAccessRoute(
  user: RBACUser,
  allowedRoles: RoleId[]
): boolean {
  if (!user.roleId) return false
  return allowedRoles.includes(user.roleId)
}
