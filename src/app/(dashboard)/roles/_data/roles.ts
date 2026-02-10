// Mock-only role shape (NOT the domain Role type)
export type DemoRole = {
  id: number
  name: string
  description: string
  usersCount: number
  status: "Active" | "Disabled"
  isSystem: boolean
}

export const demoRoles: DemoRole[] = [
  {
    id: 1,
    name: "Admin",
    description: "Full access to all administrative features and settings.",
    usersCount: 3,
    status: "Active",
    isSystem: true,
  },
  {
    id: 2,
    name: "Manager",
    description: "Can manage teams, users, and assigned resources.",
    usersCount: 5,
    status: "Active",
    isSystem: true,
  },
  {
    id: 3,
    name: "Editor",
    description: "Can modify and publish content within assigned areas.",
    usersCount: 7,
    status: "Active",
    isSystem: true,
  },
  {
    id: 4,
    name: "Viewer",
    description: "Read-only access to public or shared content.",
    usersCount: 12,
    status: "Disabled",
    isSystem: true,
  },
]
