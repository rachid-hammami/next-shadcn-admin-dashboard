"use client"

import { useContext } from "react"
import { RbacContext } from "./context"
import {
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
} from "./permissions"
import type { Permission } from "./types"

export function useRBAC() {
  const context = useContext(RbacContext)

  if (!context) {
    throw new Error("useRBAC must be used within RbacProvider")
  }

  const { role, setRole } = context

  return {
    role,
    setRole,
    can: (permission: Permission) =>
      hasPermission(role, permission),
    canAny: (permissions: Permission[]) =>
      hasAnyPermission(role, permissions),
    canAll: (permissions: Permission[]) =>
      hasAllPermissions(role, permissions),
  }
}