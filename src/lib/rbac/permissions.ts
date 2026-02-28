import type { Permission, Role, RoleId } from "./types"
import { rbacConfig } from "./config"

export function hasPermission(
  role: Role | null,
  permission: Permission
): boolean {
  if (!role) return false
  return role.permissions.includes(permission)
}

export function hasAnyPermission(
  role: Role | null,
  permissions: Permission[]
): boolean {
  if (!role) return false
  return permissions.some((p) => role.permissions.includes(p))
}

export function hasAllPermissions(
  role: Role | null,
  permissions: Permission[]
): boolean {
  if (!role) return false
  return permissions.every((p) => role.permissions.includes(p))
}

export function getRoleById(roleId: RoleId): Role | undefined {
  return rbacConfig.roles.find((r) => r.id === roleId)
}

export function isRoleId(value: string): value is RoleId {
  return rbacConfig.roles.some((r) => r.id === value)
}