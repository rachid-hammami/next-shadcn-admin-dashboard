export const PERMISSIONS = {
  USERS_READ: "users.read",
  USERS_WRITE: "users.write",
  ROLES_READ: "roles.read",
  ROLES_WRITE: "roles.write",
} as const

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS]

export const ROLE_IDS = {
  ADMIN: "admin",
  EDITOR: "editor",
  VIEWER: "viewer",
} as const

export type RoleId =
  (typeof ROLE_IDS)[keyof typeof ROLE_IDS]

export interface Role {
  id: RoleId
  name: string
  permissions: Permission[]
}

export interface RbacConfig {
  roles: Role[]
}

export interface RbacState {
  role: Role | null
}