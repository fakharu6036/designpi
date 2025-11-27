-- AlterTable
ALTER TABLE "support_messages" ADD COLUMN     "senderId" TEXT;

-- CreateIndex
CREATE INDEX "support_messages_senderId_idx" ON "support_messages"("senderId");

-- AddForeignKey
ALTER TABLE "support_messages" ADD CONSTRAINT "support_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
