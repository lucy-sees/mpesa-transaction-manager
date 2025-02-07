-- CreateTable
CREATE TABLE "C2BPayment" (
    "id" SERIAL NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "receiptNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "C2BPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "STKPayment" (
    "id" SERIAL NOT NULL,
    "merchantRequestID" TEXT NOT NULL,
    "checkoutRequestID" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "resultCode" INTEGER NOT NULL,
    "resultDesc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "STKPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "C2BPayment_transactionId_key" ON "C2BPayment"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "STKPayment_merchantRequestID_key" ON "STKPayment"("merchantRequestID");

-- CreateIndex
CREATE UNIQUE INDEX "STKPayment_checkoutRequestID_key" ON "STKPayment"("checkoutRequestID");
