"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import type { User, Role } from "../page"

interface AssignRoleDialogProps {
  open: boolean
  user: User | null
  roles: Role[]
  onClose: () => void
  onConfirm: (userId: string, roleId: string) => void
}

export function AssignRoleDialog({
  open,
  user,
  roles,
  onClose,
  onConfirm,
}: AssignRoleDialogProps) {
  const [selectedRole, setSelectedRole] = useState<string>("")

  // ✅ PRÉ-SÉLECTION DU RÔLE ACTUEL
  useEffect(() => {
    if (user) {
      setSelectedRole(user.roleId)
    }
  }, [user])

  const handleConfirm = () => {
    if (!user || !selectedRole) return
    onConfirm(user.id, selectedRole)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign role</DialogTitle>
        </DialogHeader>

        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>

          <SelectContent>
            {roles.map(role => (
              <SelectItem key={role.id} value={role.id}>
                {role.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
