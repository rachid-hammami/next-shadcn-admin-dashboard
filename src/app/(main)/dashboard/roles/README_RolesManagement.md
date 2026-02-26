# Roles Management — Module Overview

## 🎯 Objective
Provide a self-contained dashboard module to manage application roles.

This module is intentionally aligned with the Users Management module
and currently operates on **mock data**, allowing iteration without
backend dependencies.

---

## 🧩 Core Concepts

### Roles
A **Role** represents a collection of privileges assigned to users.
Roles are the foundation of the upcoming **RBAC (Role-Based Access Control)** system.

### System Roles
Some roles are marked as **system roles**.

System roles:
- cannot be edited
- cannot be deleted
- are protected at the UI level

This design prevents accidental or unintended modifications.

---

## ✨ Current Features

- Roles list (name, description, users count, status)
- Search, sorting, pagination (TanStack Table)
- Create, edit, and delete roles (**UI-level only**)
- Explicit UI guards for system roles
- Clear, honest UX (no backend simulation)
- Shadcn UI components

---

## 🏗 Architecture

```
src/app/(dashboard)/roles/
├─ page.tsx
├─ layout.tsx
├─ _components/
│  ├─ RolesTable.tsx
│  ├─ columns.tsx
│  ├─ RoleActions.tsx
│  └─ RoleBadge.tsx
└─ _data/
   └─ roles.ts
```

### Design Principles
- Pages handle data and permissions
- Components are primarily presentational
- Business rules are explicit and visible
- No misleading backend assumptions

---

## 🧱 RBAC Foundation (Internal)

A lightweight RBAC foundation is present in:

```
src/lib/rbac
```

This layer provides shared types and permission helpers consumed by the UI.
It does **not** enforce security and is intentionally limited to prepare
future backend integration.

---

## 🚀 Usage

Accessible at:

```
/dashboard/roles
```

Role data is currently sourced from:

```
_data/roles.ts
```

---

## 🚫 Out of Scope (by design)

- Backend persistence
- Permission enforcement
- Role assignment to users

These aspects will be introduced in future iterations.

---

## 🔮 Roadmap

The Roles Management module prepares the ground for RBAC.

Planned steps:
1. Introduce permission definitions
2. Associate permissions with roles (read-only)
3. Enable role-permission editing
4. Integrate backend persistence and enforcement

Each step will be introduced incrementally to preserve clarity and stability.

---

## ✅ Status

The module is stable, self-contained, and aligned with the Users Management module.
