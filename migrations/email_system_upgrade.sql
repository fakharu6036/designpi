-- Email System Upgrade Migration
-- Run this SQL directly in your Hostinger MySQL phpMyAdmin or database client
-- Note: If columns already exist, you'll see "Duplicate column" errors - that's OK!

-- ============================================
-- STEP 1: Add new fields to email_templates
-- ============================================

ALTER TABLE `email_templates` ADD COLUMN `description` TEXT NULL AFTER `name`;
ALTER TABLE `email_templates` ADD COLUMN `version` INT NOT NULL DEFAULT 1 AFTER `description`;
ALTER TABLE `email_templates` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT 1 AFTER `isDefault`;
ALTER TABLE `email_templates` ADD COLUMN `meta` JSON NULL AFTER `isActive`;

-- Add unique constraint to name (check for duplicates first!)
-- If you have duplicate template names, rename them before running this:
-- UPDATE email_templates SET name = CONCAT(name, '_', id) WHERE name IN (SELECT name FROM (SELECT name FROM email_templates GROUP BY name HAVING COUNT(*) > 1) AS dups);

ALTER TABLE `email_templates` ADD UNIQUE INDEX `email_templates_name_key` (`name`);

-- ============================================
-- STEP 2: Add new fields to email_logs  
-- ============================================

ALTER TABLE `email_logs` ADD COLUMN `deliveredAt` DATETIME(3) NULL AFTER `sentAt`;
ALTER TABLE `email_logs` ADD COLUMN `bouncedAt` DATETIME(3) NULL AFTER `deliveredAt`;
ALTER TABLE `email_logs` ADD COLUMN `complainedAt` DATETIME(3) NULL AFTER `bouncedAt`;
ALTER TABLE `email_logs` ADD COLUMN `openedAt` DATETIME(3) NULL AFTER `complainedAt`;
ALTER TABLE `email_logs` ADD COLUMN `clickedAt` DATETIME(3) NULL AFTER `openedAt`;
ALTER TABLE `email_logs` ADD COLUMN `bounceType` VARCHAR(191) NULL AFTER `clickedAt`;
ALTER TABLE `email_logs` ADD COLUMN `bounceReason` TEXT NULL AFTER `bounceType`;
ALTER TABLE `email_logs` ADD COLUMN `messageId` VARCHAR(191) NULL AFTER `bounceReason`;
ALTER TABLE `email_logs` ADD COLUMN `scheduledFor` DATETIME(3) NULL AFTER `messageId`;
ALTER TABLE `email_logs` ADD COLUMN `retryCount` INT NOT NULL DEFAULT 0 AFTER `scheduledFor`;
ALTER TABLE `email_logs` ADD COLUMN `lastRetryAt` DATETIME(3) NULL AFTER `retryCount`;
ALTER TABLE `email_logs` ADD COLUMN `meta` JSON NULL AFTER `lastRetryAt`;

-- ============================================
-- STEP 3: Add indexes for performance
-- ============================================

ALTER TABLE `email_templates` ADD INDEX `email_templates_isActive_idx` (`isActive`);
ALTER TABLE `email_logs` ADD INDEX `email_logs_scheduledFor_idx` (`scheduledFor`);
ALTER TABLE `email_logs` ADD INDEX `email_logs_messageId_idx` (`messageId`);

-- ============================================
-- STEP 4: Verify migration
-- ============================================

-- Check email_templates structure
SELECT 'email_templates columns:' AS info;
SHOW COLUMNS FROM `email_templates`;

-- Check email_logs structure  
SELECT 'email_logs columns:' AS info;
SHOW COLUMNS FROM `email_logs`;

-- Check counts
SELECT 'Templates count:' AS info, COUNT(*) AS count FROM `email_templates`;
SELECT 'Email logs count:' AS info, COUNT(*) AS count FROM `email_logs`;

SELECT 'Migration complete!' AS status;
