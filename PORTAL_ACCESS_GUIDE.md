# Portal Access Guide - Test Accounts

## 🔐 Test User Accounts

✅ **Passwords have been reset and verified!** All accounts below are ready to use.

**Login URL**: `http://localhost:3000/auth/signin`

---

## 👨‍💼 Admin Portal

**Portal URL**: `http://localhost:3000/admin/dashboard`  
**Login URL**: `http://localhost:3000/auth/signin`

### Admin Account

- **Email**: `hello@designpi.com`
- **Password**: `admin123`
- **Role**: Administrator
- **Access**: Full platform access, all admin features

**Features Available**:

- User management
- Project oversight
- Analytics dashboard
- Message monitoring
- Blog management
- Settings configuration
- Customer support chat

---

## 👥 Staff/Member Portal

**Portal URL**: `http://localhost:3000/member/`  
**Login URL**: `http://localhost:3000/auth/signin`

### Staff Member 1

- **Email**: `sarah@designpi.com`
- **Password**: `staff123`
- **Role**: Staff
- **Name**: Sarah Johnson
- **Phone**: +1-555-0101

### Staff Member 2

- **Email**: `mike@designpi.com`
- **Password**: `staff123`
- **Role**: Staff
- **Name**: Mike Chen
- **Phone**: +1-555-0102

**Features Available**:

- Task dashboard
- Project files
- Chat with admin
- File uploads
- Schedule/calendar

---

## 👤 Customer Portal

**Portal URL**: `http://localhost:3000/customer/`  
**Login URL**: `http://localhost:3000/auth/signin`

### Customer Account 1

- **Email**: `john.doe@example.com`
- **Password**: `customer123`
- **Role**: Customer
- **Name**: John Doe
- **Company**: Acme Corporation
- **Phone**: +1-555-0201

### Customer Account 2

- **Email**: `jane.smith@example.com`
- **Password**: `customer123`
- **Role**: Customer
- **Name**: Jane Smith
- **Company**: Tech Solutions Inc
- **Phone**: +1-555-0202

### Customer Account 3

- **Email**: `bob.wilson@example.com`
- **Password**: `customer123`
- **Role**: Customer
- **Name**: Bob Wilson
- **Company**: Global Ventures LLC
- **Phone**: +1-555-0203

**Features Available**:

- Project dashboard
- My projects view
- File uploads
- Invoices
- Support chat with admin
- Notifications

---

## 💬 Chat Feature Access

### Admin Messages

- **URL**: `http://localhost:3000/admin/messages`
- **Login as**: `hello@designpi.com` / `admin123`
- **Can chat with**: All customers and staff members

### Customer Messages

- **URL**: `http://localhost:3000/customer/messages`
- **Login as**: `john.doe@example.com` / `customer123`
- **Can chat with**: Admin support team

### Member Messages

- **URL**: `http://localhost:3000/member/messages`
- **Login as**: `sarah@designpi.com` / `staff123`
- **Can chat with**: Admin and assigned customers

---

## 🚀 Quick Test Instructions

### 1. Start the Development Server

```bash
npm run dev
```

Server will run at: `http://localhost:3000`

### 2. Ensure Database is Seeded

```bash
npm run seed
```

### 3. Test Admin Portal

1. Go to: `http://localhost:3000/auth/signin`
2. Login with: `hello@designpi.com` / `admin123`
3. Navigate to: `http://localhost:3000/admin/messages`
4. View admin chat interface with conversation list

### 4. Test Customer Portal

1. Sign out from admin
2. Go to: `http://localhost:3000/auth/signin`
3. Login with: `john.doe@example.com` / `customer123`
4. Navigate to: `http://localhost:3000/customer/messages`
5. View customer chat with admin

### 5. Test Member Portal

1. Sign out from customer
2. Go to: `http://localhost:3000/auth/signin`
3. Login with: `sarah@designpi.com` / `staff123`
4. Navigate to: `http://localhost:3000/member/messages`
5. View member chat with admin

---

## 📋 Portal Features Comparison

| Feature   | Admin                | Customer            | Member            |
| --------- | -------------------- | ------------------- | ----------------- |
| Dashboard | ✅ Full Analytics    | ✅ Project Overview | ✅ Task Dashboard |
| Messages  | ✅ All Conversations | ✅ Admin Chat       | ✅ Admin Chat     |
| Projects  | ✅ Manage All        | ✅ View Own         | ✅ Assigned Tasks |
| Users     | ✅ Manage            | ❌                  | ❌                |
| Settings  | ✅ Global            | ✅ Profile          | ✅ Profile        |
| Files     | ✅ All Files         | ✅ Own Files        | ✅ Project Files  |
| Support   | ✅ Monitor All       | ✅ Create Tickets   | ✅ View Assigned  |

---

## 🔧 Troubleshooting

### Can't Login?

- Ensure you've run `npm run seed` to create test accounts
- Check database connection in `.env`
- Verify Next Auth is configured correctly

### Chat Not Loading?

- Check browser console for errors
- Ensure `date-fns` package is installed
- Verify component imports are correct

### Wrong Portal Access?

- Check user role in database
- Verify session is active
- Clear browser cookies and re-login

---

## 📝 Notes

- **Mock Data**: All chat messages are currently using placeholder data
- **Backend Integration**: Ready for API connection (see `/components/dpi/chat/README.md`)
- **Authentication**: Uses existing Next Auth setup
- **Role-Based Access**: Portals check user roles (can be enhanced)
- **Responsive**: All portals work on mobile and desktop

---

## 🔗 Portal URLs Summary

| Portal            | URL                  | Test Account                           |
| ----------------- | -------------------- | -------------------------------------- |
| **Admin**         | `/admin/dashboard`   | `hello@designpi.com` / `admin123`      |
| **Customer**      | `/customer/`         | `john.doe@example.com` / `customer123` |
| **Member**        | `/member/`           | `sarah@designpi.com` / `staff123`      |
| **Admin Chat**    | `/admin/messages`    | `hello@designpi.com` / `admin123`      |
| **Customer Chat** | `/customer/messages` | `john.doe@example.com` / `customer123` |
| **Member Chat**   | `/member/messages`   | `sarah@designpi.com` / `staff123`      |

---

**Last Updated**: November 26, 2025  
**System**: DPI Chat v1.0 - Next.js 16 App Router
