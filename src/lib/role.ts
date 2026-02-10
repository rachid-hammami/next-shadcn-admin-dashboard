export type RoleStatus = 'Active' | 'Inactive'

export type Role = {
  id: string
  name: string
  description?: string
  status: RoleStatus
  usersCount: number
  isSystem: boolean
}
