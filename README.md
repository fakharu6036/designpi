This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

1. **Database Setup**: MySQL database (Hostinger or other provider)
2. **SendGrid Account**: For email notifications (optional but recommended)
3. **Environment Variables**: Copy `.env.example` to `.env` and configure

### Environment Configuration

```bash
# Copy example environment file
cp .env.example .env
```

Configure the following in your `.env` file:

- `DATABASE_URL`: Your MySQL connection string
- `NEXTAUTH_URL`: Your application URL (http://localhost:3000 for local)
- `NEXTAUTH_SECRET`: A random secret for NextAuth.js
- `SENDGRID_API_KEY`: Your SendGrid API key for email notifications
- `SENDGRID_FROM_EMAIL`: Verified sender email (hello@designpi.com)

**Getting a SendGrid API Key:**

1. Sign up at [SendGrid](https://signup.sendgrid.com/)
2. Go to Settings > API Keys
3. Create a new API key with "Mail Send" permissions
4. Verify your sender email (hello@designpi.com) in SendGrid settings

### Database Setup

```bash
# Install dependencies
npm install

# Run Prisma migrations
npx prisma migrate dev

# Seed admin user (email: hello@designpi.com, password: admin123)
node seed.js
```

### Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key Features

### 🎯 Leads & Contact Management

Complete lead management system that captures, tracks, and converts contact form submissions:

- **Contact Form**: `/contact` - Capture leads with tier and source tracking
- **Admin Dashboard**: `/admin/leads` - Manage all leads, update statuses, convert to customers
- **Email Notifications**: Automated emails to info@designpi.com for new leads
- **Lead Conversion**: One-click convert leads to customers with automatic user creation
- **Status Tracking**: NEW → CONTACTED → CONVERTED/LOST workflow

📖 **Documentation**: See [`docs/LEADS_FLOW.md`](docs/LEADS_FLOW.md) for complete guide

⚠️ **Database Migration Required**: See [`MIGRATION_INSTRUCTIONS.md`](MIGRATION_INSTRUCTIONS.md) to enable tier/sourcePage tracking

### 📧 Fully Integrated Email Platform

**NEW!** Complete dashboard-integrated email platform with advanced features:

- **Multi-Sender Support**: Unlimited SMTP configurations (Hostinger, Gmail, SendGrid, etc.)
- **Template System**: Version-controlled templates with variable substitution
- **Queue & Scheduling**: Delayed sending with automatic retry logic
- **Deliverability Tracking**: Bounce, complaint, delivery, open, and click tracking
- **Analytics Dashboard**: Real-time metrics at `/admin/email/analytics`
- **Role-Based Access**: Admin manages senders, staff can send
- **Complete Audit Trail**: Every email logged with full metadata

**Quick Start:**

1. Run migration: `npx prisma migrate dev`
2. Configure sender at `/admin/email`
3. Start queue worker (see docs)

📖 **Documentation**:

- [`docs/EMAIL_PLATFORM_GUIDE.md`](docs/EMAIL_PLATFORM_GUIDE.md) - Complete usage guide
- [`docs/EMAIL_SYSTEM.md`](docs/EMAIL_SYSTEM.md) - Technical architecture

### 💬 Real-Time Messaging

Pusher-powered real-time chat for tickets and support:

- Customer-Admin ticket conversations with instant updates
- Read receipts and message status tracking
- File attachments support

📖 **Documentation**: See [`docs/SUPPORT_CHAT.md`](docs/SUPPORT_CHAT.md)

### 🎫 Support Ticket System

Full-featured ticket management:

- Customer portal at `/portal/tickets`
- Admin management at `/admin/tickets`
- Priority levels, status tracking, assignments
- Internal notes and customer-facing messages

### 📝 Blog & Content

Built-in blog system with categories, SEO, and RSS:

- Public blog at `/blog`
- Admin management at `/admin/blog`
- Category navigation, search, pagination
- SEO metadata and sitemap generation

### 👥 User & Role Management

Comprehensive admin panel:

- User management at `/admin/users`
- Role-based access control
- Customer portal at `/portal`
- Activity logging

## Project Structure

```
app/
├── contact/          # Contact form (captures leads)
├── admin/
│   ├── leads/       # Lead management dashboard
│   ├── tickets/     # Support ticket management
│   ├── email/       # Email system configuration
│   ├── blog/        # Blog management
│   └── ...
├── portal/          # Customer portal
│   ├── tickets/     # Customer support tickets
│   ├── chat/        # Real-time messaging
│   └── ...
├── api/
│   ├── contact/     # Contact form API
│   ├── leads/       # Lead management APIs
│   ├── tickets/     # Ticket APIs with Pusher
│   └── ...
docs/
├── LEADS_FLOW.md              # Lead management guide
├── EMAIL_SYSTEM.md            # Email configuration
├── SUPPORT_CHAT.md            # Real-time chat guide
└── ...
lib/
├── unified-email.ts           # Email sending utilities
├── auth.ts                    # Authentication
└── prisma.ts                  # Database client
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
