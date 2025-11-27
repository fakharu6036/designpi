-- Migration: Remove Conversation, ConversationMessage, and ConversationParticipant models
-- Do NOT touch Ticket, TicketMessage, or ticket-related tables

-- Drop foreign keys and tables for conversations and conversation_messages
ALTER TABLE `users` 
  DROP FOREIGN KEY IF EXISTS `conversation_messages_staffIdTousers`,
  DROP FOREIGN KEY IF EXISTS `conversation_messages_userIdTousers`,
  DROP FOREIGN KEY IF EXISTS `conversations_assignedToTousers`,
  DROP FOREIGN KEY IF EXISTS `conversations_staffIdTousers`,
  DROP FOREIGN KEY IF EXISTS `conversations_userIdTousers`;

ALTER TABLE `projects`
  DROP FOREIGN KEY IF EXISTS `projects_conversations_fkey`;

-- Drop conversation_messages table
DROP TABLE IF EXISTS `conversation_messages`;

-- Drop conversations table
DROP TABLE IF EXISTS `conversations`;

-- Drop enum for conversations_status if exists
DROP TYPE IF EXISTS `conversations_status`;

-- Remove columns from users and projects referencing conversations
ALTER TABLE `users`
  DROP COLUMN IF EXISTS `conversation_messages_conversation_messages_staffIdTousers`,
  DROP COLUMN IF EXISTS `conversation_messages_conversation_messages_userIdTousers`,
  DROP COLUMN IF EXISTS `conversations_conversations_assignedToTousers`,
  DROP COLUMN IF EXISTS `conversations_conversations_staffIdTousers`,
  DROP COLUMN IF EXISTS `conversations_conversations_userIdTousers`;

ALTER TABLE `projects`
  DROP COLUMN IF EXISTS `conversations`;

-- Remove conversationId from support_tickets
ALTER TABLE `support_tickets`
  DROP FOREIGN KEY IF EXISTS `support_tickets_conversations_fkey`;

ALTER TABLE `support_tickets`
  DROP COLUMN IF EXISTS `conversationId`;

-- End migration
