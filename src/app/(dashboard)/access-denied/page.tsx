export default function AccessDeniedPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Access denied</h1>
        <p className="text-muted-foreground">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  )
}
