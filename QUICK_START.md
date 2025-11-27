# Quick Start Guide - Multi-Customer Conversation System

##

```bash
cd designpi

# 1. Push database schema
npx prisma db push

# 2. Seed demo data
npm run seed

# 3. Start server
npm run dev
```

##

### Admin Account

- **Email**: hello@designpi.com
- **Password**: [Configure during setup]
- **Access**: /admin/conversations

### Staff Accounts

- **Sarah**: sarah@designpi.com / [Configure during setup]
- **Mike**: mike@designpi.com / [Configure during setup]
- **Access**: /staff/conversations

### Customer Accounts

- **John**: john.doe@example.com / [Configure during setup]
- **Jane**: jane.smith@example.com / [Configure during setup]

> ⚠️ **Security Note**: Set strong passwords for all accounts during initial setup

- **Bob**: bob.wilson@example.com / customer123
- **Access**: /portal/chat

## What Was Implemented

### 1. Database Schema

Added `assignedTo` field to conversations
Added `status` field (OPEN, PENDING, RESOLVED, CLOSED)
Added `source` field ('customer' or 'lead')
Created `SupportTicket` model
Added proper relations

### 2. Demo Data

3 demo customers automatically created
2 staff members automatically created
3 demo leads automatically created
Pre-populated conversations with assignments
Sample messages and tickets

### 3. Admin Portal

View all conversations
Assign conversations to staff
Change conversation status
Filter by status, source, assignment
View and reply to messages
Added to admin sidebar navigation

### 4. Staff Portal

New staff portal created
View only assigned conversations
Filter by status
Reply to customer messages
Unread message indicators

### 5. Customer Portal

Enhanced chat page
Auto-creates conversations
Auto-creates support tickets
Real-time message updates
Isolated experience per customer

### 6. Access Control

Customers: See only their conversations
Staff: See only assigned conversations
Admin: See all conversations
Proper isolation enforced

##

Staff

1. Login as customer (john.doe@example.com)
2. Send message in /portal/chat
3. Logout, login as admin (hello@designpi.com)
4. Go to /admin/conversations
5. Assign conversation to Sarah
6. Logout, login as Sarah (sarah@designpi.com)
7. Go to /staff/conversations
8. View and reply to John's message

### Test Flow 2: Admin Assignment

1. Login as admin
2. Go to /admin/conversations
3. Filter by status, source, or assignment
4. Reassign conversations
5. Change statuses
6. View conversation details

### Test Flow 3: Multiple Customers

1. Login as different customers
2. Each sends messages
3. Verify isolation (can't see other conversations)
4. Check tickets are created

##

### API Routes

- `/api/admin/conversations` - Admin conversation management
- `/api/staff/conversations` - Staff conversation access
- `/api/conversations/[id]/messages` - Message handling
- `/api/portal/conversation` - Customer conversation init

### Pages

- `/app/admin/conversations/page.tsx` - Admin conversation list
- `/app/admin/conversations/[id]/page.tsx` - Admin chat view
- `/app/staff/conversations/page.tsx` - Staff conversation list
- `/app/staff/conversations/[id]/page.tsx` - Staff chat view
- `/app/portal/chat/page.tsx` - Customer chat (enhanced)
- `/app/staff/layout.tsx` - Staff portal layout

### Schema

- `prisma/schema.prisma` - Updated with new fields
- `seed.js` - Enhanced with demo data

##

- [ ] Database migrated successfully
- [ ] Seed script ran without errors
- [ ] Can login as admin
- [ ] Can see all conversations in admin portal
- [ ] Can assign conversations to staff
- [ ] Can login as staff
- [ ] Staff sees only assigned conversations
- [ ] Can login as customer
- [ ] Customer can send messages
- [ ] Support tickets auto-created
- [ ] Messages update in real-time
- [ ] Unread indicators work

##

| Role     | URL                                       | Credentials                        |
| -------- | ----------------------------------------- | ---------------------------------- |
| Admin    | http://localhost:3000/admin/conversations | hello@designpi.com / admin123      |
| Staff    | http://localhost:3000/staff/conversations | sarah@designpi.com / staff123      |
| Customer | http://localhost:3000/portal/chat         | john.doe@example.com / customer123 |

##

- **Auto-Assignment**: Admin assigns conversations to staff
- **Auto-Tickets**: Support tickets created when customers message
- **Real-Time**: Messages poll every 5 seconds
- **Isolation**: Complete data isolation per role
- **Filtering**: Filter conversations by status, source, assignment
- **Unread Counts**: Visual indicators for new messages
- **Status Management**: OPEN, PENDING, RESOLVED, CLOSED

##

```bash
# Build for production
npm run build

# Start production server
npm start
```

##

- **1 Admin**: Full system access
- **2 Staff**: Sarah Johnson, Mike Chen
- **3 Customers**: John Doe, Jane Smith, Bob Wilson
- **3 Leads**: Alice Brown, David Lee, Emma Garcia
- **3 Conversations**: Pre-assigned with messages
- **Support Tickets**: Linked to conversations

##

- **Authentication**: NextAuth with role-based access
- **Authorization**: Middleware enforces role requirements
- **Isolation**: Users can only access their data
- **Validation**: Input validation on all endpoints

All changes integrate seamlessly with the existing system without duplicating chat components!
