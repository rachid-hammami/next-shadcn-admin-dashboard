/**
 * Permission definitions used as the foundation of the RBAC system.
 *
 * At this stage, permissions are static and not yet bound to roles in the UI.
 * This file intentionally contains no logic and no runtime behavior.
 *
 * Its purpose is to:
 * - provide a clear and stable permission vocabulary
 * - serve as a single source of truth for future role-permission mapping
 * - be easily consumed by both frontend and backend layers
 */

/**
 * A Permission represents an atomic capability that can be granted to a role.
 *
 * The `key` must remain stable over time, as it will eventually be persisted
 * and enforced by the backend.
 */
export type Permission = {
  key: string
  label: string
  description?: string
  group: PermissionGroup
}

/**
 * Permission groups are used to organize permissions by functional domain.
 * This improves readability and allows future UI grouping without refactoring.
 */
export type PermissionGroup =
  | "users"
  | "roles"
  | "content"
  | "settings"
  | "system"

/**
 * Canonical list of all permissions supported by the application.
 *
 * Naming convention:
 * - lowercase
 * - dot-separated
 * - verb-oriented (read, create, update, delete, manage)
 *
 * Examples:
 * - users.read
 * - roles.manage
 * - settings.update
 */
export const permissions: Permission[] = [
  // ─────────────────────────────────────────────
  // Users
  // ─────────────────────────────────────────────
  {
    key: "users.read",
    label: "Read users",
    description: "View user profiles and basic information.",
    group: "users",
  },
  {
    key: "users.create",
    label: "Create users",
    description: "Create new users in the system.",
    group: "users",
  },
  {
    key: "users.update",
    label: "Update users",
    description: "Edit existing user information.",
    group: "users",
  },
  {
    key: "users.delete",
    label: "Delete users",
    description: "Remove users from the system.",
    group: "users",
  },

  // ─────────────────────────────────────────────
  // Roles
  // ─────────────────────────────────────────────
  {
    key: "roles.read",
    label: "Read roles",
    description: "View roles and their basic properties.",
    group: "roles",
  },
  {
    key: "roles.create",
    label: "Create roles",
    description: "Create new roles.",
    group: "roles",
  },
  {
    key: "roles.update",
    label: "Update roles",
    description: "Edit role details and metadata.",
    group: "roles",
  },
  {
    key: "roles.delete",
    label: "Delete roles",
    description: "Delete non-system roles.",
    group: "roles",
  },
  {
    key: "roles.manage",
    label: "Manage role permissions",
    description: "Assign and revoke permissions on roles.",
    group: "roles",
  },

  // ─────────────────────────────────────────────
  // Content
  // ─────────────────────────────────────────────
  {
    key: "content.read",
    label: "Read content",
    description: "View content and resources.",
    group: "content",
  },
  {
    key: "content.publish",
    label: "Publish content",
    description: "Publish or unpublish content.",
    group: "content",
  },

  // ─────────────────────────────────────────────
  // Settings
  // ─────────────────────────────────────────────
  {
    key: "settings.read",
    label: "Read settings",
    description: "View application settings.",
    group: "settings",
  },
  {
    key: "settings.update",
    label: "Update settings",
    description: "Modify application settings.",
    group: "settings",
  },

  // ─────────────────────────────────────────────
  // System
  // ─────────────────────────────────────────────
  {
    key: "system.manage",
    label: "System management",
    description:
      "Perform critical system-level operations. Reserved for system roles.",
    group: "system",
  },
]
