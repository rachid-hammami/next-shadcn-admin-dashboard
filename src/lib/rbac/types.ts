export type RoleId = "admin" | "manager" | "editor" | "viewer"

export type RBACUser = {
  roleId: RoleId | null
}
