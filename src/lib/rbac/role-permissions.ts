import type { RoleId } from "./types"
import type { Permission } from "./permissions"

export const ROLE_PERMISSIONS: Record<RoleId, Permission[]> = {
  admin: [
    "users.read",
    "users.edit",
    "users.assign_role",
    "roles.read",
    "roles.manage",
  ],
  manager: [
    "users.read",
    "users.edit",
    "users.assign_role",
    "roles.read",
  ],
  editor: ["users.read"],
  viewer: ["users.read"],
}
