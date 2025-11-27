-- Manual migration: ticket system refactor
-- Drops legacy chat/support tables and creates tickets + ticket_messages.

-- Safety: drop old tables if they exist
DROP TABLE IF EXISTS `chat_messages`;
DROP TABLE IF EXISTS `support_messages`;

-- Create tickets table
CREATE TABLE `tickets` (
  `id` VARCHAR(191) NOT NULL,
  `customerId` VARCHAR(191) NULL,
  `assignedTo` VARCHAR(191) NULL,
  `subject` VARCHAR(191) NOT NULL,
  `description` TEXT NULL,
  `status` ENUM('OPEN','IN_REVIEW','IN_PROGRESS','RESOLVED','CLOSED') NOT NULL DEFAULT 'OPEN',
  `priority` ENUM('LOW','MEDIUM','HIGH','URGENT') NOT NULL DEFAULT 'MEDIUM',
  `source` VARCHAR(191) NOT NULL DEFAULT 'web',
  `attachments` JSON NULL,
  `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` TIMESTAMP(3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `tickets_customerId_idx`(`customerId`),
  INDEX `tickets_assignedTo_idx`(`assignedTo`),
  INDEX `tickets_status_idx`(`status`),
  INDEX `tickets_priority_idx`(`priority`),
  INDEX `tickets_source_idx`(`source`),
  INDEX `tickets_createdAt_idx`(`createdAt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Foreign keys for tickets
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_assignedTo_fkey` FOREIGN KEY (`assignedTo`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- Create ticket_messages table
CREATE TABLE `ticket_messages` (
  `id` VARCHAR(191) NOT NULL,
  `ticketId` VARCHAR(191) NOT NULL,
  `authorUserId` VARCHAR(191) NULL,
  `authorStaffId` VARCHAR(191) NULL,
  `body` TEXT NOT NULL,
  `isInternal` BOOLEAN NOT NULL DEFAULT false,
  `isRead` BOOLEAN NOT NULL DEFAULT false,
  `messageType` VARCHAR(191) NOT NULL DEFAULT 'message',
  `attachments` JSON NULL,
  `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` TIMESTAMP(3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `ticket_messages_ticketId_idx`(`ticketId`),
  INDEX `ticket_messages_authorUserId_idx`(`authorUserId`),
  INDEX `ticket_messages_authorStaffId_idx`(`authorStaffId`),
  INDEX `ticket_messages_isInternal_idx`(`isInternal`),
  INDEX `ticket_messages_isRead_idx`(`isRead`),
  INDEX `ticket_messages_createdAt_idx`(`createdAt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Foreign keys for ticket_messages
ALTER TABLE `ticket_messages` ADD CONSTRAINT `ticket_messages_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `tickets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `ticket_messages` ADD CONSTRAINT `ticket_messages_authorUserId_fkey` FOREIGN KEY (`authorUserId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE `ticket_messages` ADD CONSTRAINT `ticket_messages_authorStaffId_fkey` FOREIGN KEY (`authorStaffId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
