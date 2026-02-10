"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import type { Role } from "@/types/role"
import type { RBACUser } from "@/lib/rbac"
import { Can } from "@/lib/rbac"

interface RoleActionsProps {
  role: Role
  currentUser: RBACUser
  onEdit: (role: Role) => void
  onDelete: (role: Role) => void
}


export function RoleActions({
  role,
  currentUser,
  onEdit,
  onDelete,
}: RoleActionsProps) {
  const [openDelete, setOpenDelete] = React.useState(false)

  const isSystemRole = role.isSystem === true

  const handleDelete = () => {
    onDelete(role)
    toast.success("Role deleted successfully")
    setOpenDelete(false)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Role actions"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {/* -------------------- Edit -------------------- */}
          <Can
            user={currentUser}
            permission="roles.manage"
            fallback={
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="w-full">
                    <DropdownMenuItem disabled>
                      Edit
                    </DropdownMenuItem>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  You do not have permission to edit roles
                </TooltipContent>
              </Tooltip>
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="w-full">
                  <DropdownMenuItem
                    disabled={isSystemRole}
                    onClick={() => !isSystemRole && onEdit(role)}
                  >
                    Edit
                  </DropdownMenuItem>
                </span>
              </TooltipTrigger>
              {isSystemRole && (
                <TooltipContent>
                  System roles cannot be edited
                </TooltipContent>
              )}
            </Tooltip>
          </Can>

          {/* -------------------- Delete -------------------- */}
          <Can
            user={currentUser}
            permission="roles.manage"
            fallback={
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="w-full">
                    <DropdownMenuItem
                      disabled
                      className="text-muted-foreground"
                    >
                      Delete
                    </DropdownMenuItem>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  You do not have permission to delete roles
                </TooltipContent>
              </Tooltip>
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="w-full">
                  <DropdownMenuItem
                    disabled={isSystemRole}
                    className={
                      isSystemRole
                        ? "text-muted-foreground"
                        : "text-destructive focus:text-destructive"
                    }
                    onClick={() => !isSystemRole && setOpenDelete(true)}
                  >
                    Delete
                  </DropdownMenuItem>
                </span>
              </TooltipTrigger>
              {isSystemRole && (
                <TooltipContent>
                  System roles cannot be deleted
                </TooltipContent>
              )}
            </Tooltip>
          </Can>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* -------------------- Delete confirmation -------------------- */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete role</DialogTitle>
            <DialogDescription>
              This action cannot be undone. The role will be permanently removed.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpenDelete(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
