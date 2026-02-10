"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { RoleId, RBACUser } from "./types"
import { canAccessRoute } from "./guards"

type UseRouteGuardParams = {
  user: RBACUser
  allowedRoles: RoleId[]
  redirectTo?: string
}

export function useRouteGuard({
  user,
  allowedRoles,
  redirectTo = "/dashboard",
}: UseRouteGuardParams) {
  const router = useRouter()

  useEffect(() => {
    if (!canAccessRoute(user, allowedRoles)) {
      router.replace(redirectTo)
    }
  }, [user, allowedRoles, redirectTo, router])
}
