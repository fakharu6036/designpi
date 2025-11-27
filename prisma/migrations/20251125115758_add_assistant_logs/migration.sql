-- CreateTable
CREATE TABLE "assistant_logs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "userId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assistant_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "assistant_logs_userId_idx" ON "assistant_logs"("userId");

-- CreateIndex
CREATE INDEX "assistant_logs_createdAt_idx" ON "assistant_logs"("createdAt");

-- AddForeignKey
ALTER TABLE "assistant_logs" ADD CONSTRAINT "assistant_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
