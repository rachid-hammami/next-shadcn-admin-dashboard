import type { RbacConfig } from "./types"
import { PERMISSIONS, ROLE_IDS } from "./types"

export const rbacConfig: RbacConfig = {
  roles: [
    {
      id: ROLE_IDS.ADMIN,
      name: "Administrator",
      permissions: [
        PERMISSIONS.USERS_READ,
        PERMISSIONS.USERS_WRITE,
        PERMISSIONS.ROLES_READ,
        PERMISSIONS.ROLES_WRITE,
      ],
    },
    {
      id: ROLE_IDS.EDITOR,
      name: "Editor",
      permissions: [
        PERMISSIONS.USERS_READ,
        PERMISSIONS.ROLES_READ,
      ],
    },
    {
      id: ROLE_IDS.VIEWER,
      name: "Viewer",
      permissions: [],
    },
  ],
}