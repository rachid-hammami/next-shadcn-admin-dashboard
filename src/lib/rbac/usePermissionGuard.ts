// UI-side permission guards.
// These checks are meant for frontend rendering only.
// Server-side enforcement must be handled by the backend.


"use client"

import type { RBACUser } from "./types"
import type { Permission } from "./permissions"
import { hasPermission, hasAnyPermission } from "./guards"

type UsePermissionGuardParams =
  | {
      user: RBACUser
      permission: Permission
      anyOf?: never
    }
  | {
      user: RBACUser
      permission?: never
      anyOf: Permission[]
    }

export function usePermissionGuard(params: UsePermissionGuardParams): boolean {
  const { user } = params

  if ("permission" in params) {
    return hasPermission(user, params.permission)
  }

  return hasAnyPermission(user, params.anyOf)
}
