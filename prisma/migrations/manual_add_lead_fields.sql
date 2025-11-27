-- Migration: Add tier, sourcePage, customerId to Lead model and convert status to enum
-- Run this SQL against your database to update the leads table

-- Step 1: Add new columns
ALTER TABLE `leads` 
  ADD COLUMN `tier` VARCHAR(191) NULL AFTER `status`,
  ADD COLUMN `sourcePage` VARCHAR(191) NULL AFTER `tier`,
  ADD COLUMN `customerId` VARCHAR(191) NULL AFTER `sourcePage`;

-- Step 2: Add index on customerId
ALTER TABLE `leads` 
  ADD INDEX `leads_customerId_idx` (`customerId`);

-- Step 3: Add foreign key constraint to link leads to users
ALTER TABLE `leads`
  ADD CONSTRAINT `leads_customerId_fkey` 
  FOREIGN KEY (`customerId`) 
  REFERENCES `users`(`id`) 
  ON DELETE SET NULL 
  ON UPDATE CASCADE;

-- Step 4: Update existing lead statuses to match new enum values
UPDATE `leads` SET `status` = 'NEW' WHERE `status` = 'new';
UPDATE `leads` SET `status` = 'CONTACTED' WHERE `status` = 'contacted';
UPDATE `leads` SET `status` = 'CONVERTED' WHERE `status` = 'converted' OR `status` = 'qualified';
UPDATE `leads` SET `status` = 'LOST' WHERE `status` = 'closed' OR `status` NOT IN ('NEW', 'CONTACTED', 'CONVERTED');

-- Step 5: Change message column to TEXT type if not already
ALTER TABLE `leads` 
  MODIFY COLUMN `message` TEXT NOT NULL;

-- After running this migration, run: npx prisma generate
-- This will update the Prisma Client to recognize the new fields
