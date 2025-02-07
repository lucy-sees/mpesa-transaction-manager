// services/MpesaCallBackService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveC2BCallback = async (data: any) => {
  await prisma.c2BPayment.create({
    data: {
      transactionId: data.TransactionType,
      amount: parseFloat(data.TransAmount),
      phoneNumber: data.MSISDN,
      receiptNumber: data.ReceiptNo,
    },
  });
};

const MpesaCallbackService = { saveC2BCallback };

export default MpesaCallbackService;