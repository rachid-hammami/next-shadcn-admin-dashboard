# 👥 Users Management Module

This module provides the **Users Management UI foundation** for the admin dashboard.

It is intentionally **frontend-only** and designed to align with the project’s current scope and the upcoming RBAC roadmap.

---

## 🎯 Purpose

- Display a list of users
- Show user roles and statuses
- Enable or disable users
- Provide a clean, extensible UI base

No backend logic is included at this stage.

---

## ✨ Current Features

- Users table built with **TanStack Table**
- Pagination
- User status: **Active / Disabled**
- Enable / Disable action per user
- Clear **“coming soon”** placeholders for future features

---

## 🚫 Out of Scope (by design)

The following features are intentionally **not implemented**:

- Creating users
- Editing user details
- Deleting users
- Backend API integration
- Demo / production mode switching

These elements are planned for future iterations.

---

## 📂 Location

```
src/app/(dashboard)/users/
```

---

## 🔮 Future Work

- Backend integration
- Full RBAC enforcement
- User creation and editing
- Role assignment from the Users module

---

## ✅ Status

The module is stable, readable, and ready to be extended without breaking the current architecture.
