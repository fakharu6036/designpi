# Database Migration Instructions

## Complete Leads & Contact Flow Implementation

The Leads flow has been fully implemented with the following components:

### ✅ Completed Implementation

1. **Prisma Schema Updated** (`prisma/schema.prisma`)

   - Added `tier`, `sourcePage`, `customerId` fields to Lead model
   - Created `LeadStatus` enum (NEW, CONTACTED, CONVERTED, LOST)
   - Added relation to User model

2. **Contact Page Enhanced** (`app/contact/page.tsx`)

   - Captures `tier` and `source` from query parameters
   - Displays selected tier/plan to user
   - Sends all data to API

3. **API Endpoints Created/Updated**

   - `POST /api/contact` - Creates leads (updated to handle tier/sourcePage)
   - `GET /api/leads` - Fetches all leads with filters (admin only)
   - `GET /api/leads/[id]` - Fetch single lead (admin only)
   - `PUT /api/leads/[id]` - Update lead status (admin only)
   - `DELETE /api/leads/[id]` - Delete lead (admin only)
   - `POST /api/leads/[id]/convert` - Convert lead to customer (admin only)

4. **Admin UI Built** (`app/admin/leads/page.tsx`)

   - Full leads management interface
   - Status filtering (All, NEW, CONTACTED, CONVERTED, LOST)
   - Inline status updates
   - Convert to Customer button
   - Message preview section

5. **Email Notifications Enhanced** (`lib/unified-email.ts`)

   - Includes tier and sourcePage in notification emails
   - Sent to info@designpi.com for each new lead

6. **Documentation Created**
   - `docs/LEADS_FLOW.md` - Complete system documentation
   - This file - Migration instructions

## 🔧 Required Database Migration

**IMPORTANT:** The code is ready, but the database schema needs to be updated.

### Option 1: Manual SQL Migration (Recommended)

Run the SQL migration file against your database:

```bash
# The migration file is located at:
# prisma/migrations/manual_add_lead_fields.sql

# Run it using your database client or:
mysql -h srv653.hstgr.io -u u859590789_designpi -p u859590789_designpi_live < prisma/migrations/manual_add_lead_fields.sql
```

### Option 2: Using Prisma Migrate (If Shadow DB Available)

```bash
npx prisma migrate deploy
```

### Option 3: Prisma DB Push (Without Migration Files)

```bash
npx prisma db push
```

### After Migration

Once the database is updated, run:

```bash
npx prisma generate
```

This will regenerate the Prisma Client with the new schema.

## ⚠️ Temporary Compatibility Mode

The code currently supports BOTH old and new status values during the transition:

**Old Status Values (currently in database):**

- `"new"` → Will map to `"NEW"`
- `"contacted"` → Will map to `"CONTACTED"`
- `"converted"`, `"qualified"` → Will map to `"CONVERTED"`
- `"closed"` → Will map to `"LOST"`

**New Enum Values (after migration):**

- `"NEW"`
- `"CONTACTED"`
- `"CONVERTED"`
- `"LOST"`

## 📋 Post-Migration Steps

After running the database migration:

1. **Regenerate Prisma Client:**

   ```bash
   npx prisma generate
   ```

2. **Restart Next.js Dev Server:**

   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

3. **Test the Flow:**

   - Visit `/contact?tier=Pro&source=/pricing`
   - Fill out and submit the form
   - Check `/admin/leads` to see the lead
   - Try converting a lead to customer
   - Verify email notification received

4. **Update Pricing/Service Pages:**
   Add links with query params:
   ```tsx
   <Link href="/contact?tier=Starter&source=/pricing">Get Started</Link>
   ```

## 🎯 What Works NOW (Before Migration)

The following works with the current database schema:

✅ Contact form submission
✅ Lead creation with name, email, phone, company, message
✅ Email notifications
✅ Admin leads list view
✅ Status updates (using old values)
✅ Lead deletion

## 🔜 What Needs Migration to Work

The following requires the database migration:

⏳ Tier/Plan capture and display
⏳ Source page tracking
⏳ Lead-to-Customer relationship
⏳ Status enum validation
⏳ Convert to Customer feature (creates user but can't link)

## 🐛 Troubleshooting

### "Unknown field 'customer'" Error

This is expected before migration. The customer relation requires the `customerId` field to exist in the database.

### "Unknown argument 'tier'" Error

This is expected before migration. The tier and sourcePage fields need to be added to the database.

### Migration Fails with Shadow Database Error

Use `npx prisma db push` instead, which doesn't require shadow database permissions.

### Database Connection Issues

Ensure the database server at `srv653.hstgr.io:3306` is accessible and credentials in `.env` are correct.

## 📊 Migration SQL Preview

The migration adds:

- `tier VARCHAR(191) NULL`
- `sourcePage VARCHAR(191) NULL`
- `customerId VARCHAR(191) NULL`
- Foreign key constraint to users table
- Index on customerId
- Status value updates to match enum
- Message column type change to TEXT

## 🚀 Final Notes

- The implementation follows all existing patterns in the codebase
- No breaking changes to existing features
- Admin authentication required for all lead management
- Email system uses existing unified email configuration
- Fully type-safe with TypeScript
- Production-ready once migration is complete

## Need Help?

Review the documentation:

- `docs/LEADS_FLOW.md` - Complete system guide
- `docs/EMAIL_SYSTEM.md` - Email configuration
- `README.md` - Project overview

---

**Status:** Implementation complete, awaiting database migration
**Last Updated:** November 26, 2025
