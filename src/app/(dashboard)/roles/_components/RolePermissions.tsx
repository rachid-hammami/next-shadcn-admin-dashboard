"use client";

import type { Role } from "@/types/role";
import { permissions, type PermissionGroup } from "../_data/permissions";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface RolePermissionsProps {
  role: Role | null;
}

const GROUP_LABELS: Record<PermissionGroup, string> = {
  users: "Users",
  roles: "Roles",
  content: "Content",
  settings: "Settings",
  system: "System",
};

export function RolePermissions({ role }: RolePermissionsProps) {
  if (!role) {
    return (
      <div className="text-sm text-muted-foreground">
        Select a role to view its permissions.
      </div>
    );
  }

  const permissionsByGroup = permissions.reduce<
    Record<PermissionGroup, typeof permissions>
  >((acc, permission) => {
    if (!acc[permission.group]) {
      acc[permission.group] = [];
    }
    acc[permission.group].push(permission);
    return acc;
  }, {} as Record<PermissionGroup, typeof permissions>);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Permissions</h3>
        <p className="text-sm text-muted-foreground">
          Permissions are read-only.
        </p>
      </div>

      <Separator />

      {Object.entries(permissionsByGroup).map(([group, groupPermissions]) => (
        <div key={group} className="space-y-2">
          <h4 className="text-sm font-medium">
            {GROUP_LABELS[group as PermissionGroup]}
          </h4>

          <div className="flex flex-wrap gap-2">
            {groupPermissions.map((permission) => (
              <Badge
                key={permission.key}
                variant="secondary"
                className="cursor-default select-none"
              >
                {permission.label}
              </Badge>
            ))}
          </div>
        </div>
      ))}

      {role.isSystem && (
        <p className="text-xs text-muted-foreground">
          System roles have fixed permissions.
        </p>
      )}
    </div>
  );
}
