# SYSTEM_OVERVIEW.md

## 1. High-Level Architecture

- **Framework:** Next.js 16 App Router (TypeScript)
- **Routing:**
  - `/admin/*` — Admin dashboard (users, roles, projects, tickets, analytics, email, staff)
  - `/portal/*` — Client portal (projects, files, tickets, account)
  - `/staff/*` — Staff dashboard (assigned tickets, projects, conversations)
- **Auth:**
  - Centralized session management via NextAuth
  - Role-based access: admin, staff, client
- **Real-Time:**
  - Pusher for chat, ticket, and notification updates
- **Email:**
  - SMTP via Nodemailer, queue/retry, template system, analytics, deliverability webhooks

## 2. Route Map & Functionality

### Admin

- `/admin/users` — Manage users (admin/staff), invite, edit, assign roles
- `/admin/roles` — Role management
- `/admin/projects` — All projects, status, assignment
- `/admin/tickets` — All support tickets, assign, reply, status
- `/admin/messages` — Internal/admin messages
- `/admin/analytics` — Metrics, charts, breakdowns
- `/admin/settings` — System settings
- `/admin/staff` — Staff management
- `/admin/customers` — Customer management (converted leads, direct clients)
- `/admin/leads` — Lead funnel, conversion, status, detail, conversion modal
- `/admin/email` — Email management, send, templates, analytics

### Portal

- `/portal/projects` — Client projects
- `/portal/projects/new` — Create new project
- `/portal/files` — File management
- `/portal/settings` — Account settings
- `/portal/tickets` — Support tickets

### Staff

- `/staff/projects` — Assigned projects
- `/staff/tickets` — Assigned tickets
- `/staff/conversations` — Client/staff/admin chat

## 3. Database & Prisma Models

- **User:** All users (admin, staff, client, customer)
- **Role:** Role definitions
- **Lead:** Contact form submissions, conversion status
- **CustomerCredential:** Portal credentials for customers
- **ClientEmailEvent:** Logs client-facing email events
- **Project:** Projects, status, assignment
- **Ticket:** Support tickets, status, assignment
- **TicketMessage:** Ticket messages
- **EmailSender, EmailTemplate, EmailLog:** Email system
- **File, FileComment:** File uploads and comments
- **ActivityLog:** Project/ticket activity

## 4. Data Flow

- **Messages:** Real-time via Pusher, stored in TicketMessage, Message, conversation_messages
- **Tickets:** Created by clients, assigned to staff/admin, replied via UI, status tracked
- **Projects:** Created by clients/admin, assigned, updated, tracked
- **Staff Access:** Role-based, limited access to sensitive data, masked fields

## 5. Known Issues

- Hydration errors (client/server mismatch)
- "use client" directive missing in some files
- Vercel build errors (object serialization, config)
- Multiple package-lock.json (legacy)
- Slow Prisma queries on large tables
- Some UI components ignore radius tokens
- Inconsistent rounding/styles
- Sensitive data sometimes exposed to staff

## 6. UI & Styling Audit

- Some admin/portal/staff pages use inconsistent radius tokens
- Rounding too large on some cards/tables
- Legacy components ignore design tokens
- Needs unified theme and layout cleanup

## 7. Security & Permissions

- Role-based access enforced in API and UI
- Admin: full access
- Staff: limited, sensitive data masked
- Client: only own data
- Some endpoints need stricter checks

## 8. Implementation Plan (Phases)

- **Phase 1:** Repo scan & documentation (this file, route-structure.xml)
- **Phase 2:** Stability fixes (hydration, build, Pusher, Prisma)
- **Phase 3:** UI modernization (radius tokens, theme, layout)
- **Phase 4:** Real-time chat (client ↔ admin ↔ staff)
- **Phase 5:** Lead funnel system (contact → lead → customer)
- **Phase 6:** Email system (template editor, preview, SMTP, auto emails)
- **Phase 7:** Staff improvements (permissions, dashboard)
- **Phase 8:** WordPress blog integration
