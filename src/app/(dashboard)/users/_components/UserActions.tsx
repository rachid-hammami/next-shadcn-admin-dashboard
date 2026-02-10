"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type { User } from "../page"

interface UserActionsProps {
  user: User
  onToggleStatus: (userId: string) => void
}

export function UserActions({
  user,
  onToggleStatus,
}: UserActionsProps) {
  const isActive = user.status === "Active"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => onToggleStatus(user.id)}
        >
          {isActive ? "Disable user" : "Enable user"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
