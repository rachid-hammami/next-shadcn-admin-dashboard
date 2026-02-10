"use client"

import type { ReactNode } from "react"

import type { RBACUser } from "./types"
import type { Permission } from "./permissions"
import { hasPermission, hasAnyPermission } from "./guards"

type CanProps =
  | {
      user: RBACUser
      permission: Permission
      anyOf?: never
      children: ReactNode
      fallback?: ReactNode
    }
  | {
      user: RBACUser
      permission?: never
      anyOf: Permission[]
      children: ReactNode
      fallback?: ReactNode
    }

export function Can(props: CanProps) {
  const { user, children, fallback = null } = props

  const allowed =
    "permission" in props
      ? hasPermission(user, props.permission)
      : hasAnyPermission(user, props.anyOf)

  if (!allowed) {
    return fallback
  }

  return <>{children}</>
}
