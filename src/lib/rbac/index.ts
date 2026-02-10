export type { RoleId, RBACUser } from "./types"
export type { Permission } from "./permissions"

export { ROLE_PERMISSIONS } from "./role-permissions"

export {
  hasPermission,
  hasAnyPermission,
  canAccessRoute,
} from "./guards"

export { useRouteGuard } from "./useRouteGuard"
export { usePermissionGuard } from "./usePermissionGuard"
export { Can } from "./Can"
