"use client"

import { createContext, useState, type ReactNode } from "react"
import type { Role } from "./types"

interface RbacContextValue {
  role: Role | null
  setRole: (role: Role | null) => void
}

export const RbacContext = createContext<RbacContextValue | undefined>(
  undefined
)

export function RbacProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null)

  return (
    <RbacContext.Provider value={{ role, setRole }}>
      {children}
    </RbacContext.Provider>
  )
}