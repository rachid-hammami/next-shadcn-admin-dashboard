import { demoUsers } from "@/lib/demo-users"
import UsersTable from "./_components/UsersTable"

export default function UsersPage() {
  return (
    <section className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>

      <UsersTable data={demoUsers} />
    </section>
  )
}
