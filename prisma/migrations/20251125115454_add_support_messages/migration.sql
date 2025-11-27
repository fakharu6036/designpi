-- CreateTable
CREATE TABLE "support_messages" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT,
    "guestEmail" TEXT,
    "guestName" TEXT,
    "isFromUser" BOOLEAN NOT NULL DEFAULT true,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "support_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "support_messages_userId_idx" ON "support_messages"("userId");

-- CreateIndex
CREATE INDEX "support_messages_guestEmail_idx" ON "support_messages"("guestEmail");

-- CreateIndex
CREATE INDEX "support_messages_createdAt_idx" ON "support_messages"("createdAt");

-- AddForeignKey
ALTER TABLE "support_messages" ADD CONSTRAINT "support_messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
