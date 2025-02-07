import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const c2bPaymentData = [
    {    npx prisma db seed --preview-feature
        transactionId: 'txn123',
        amount: 100.0,
        phoneNumber: '1234567890',
        receiptNumber: 'rcpt123',
    },
    {
        transactionId: 'txn124',
        amount: 200.0,
        phoneNumber: '0987654321',
        receiptNumber: 'rcpt124',
    },
];

const stkPaymentData = [
    {
        merchantRequestID: 'mrq123',
        checkoutRequestID: 'crq123',
        amount: 150.0,
        phoneNumber: '1234567890',
        resultCode: 0,
        resultDesc: 'Success',
    },
    {
        merchantRequestID: 'mrq124',
        checkoutRequestID: 'crq124',
        amount: 250.0,
        phoneNumber: '0987654321',
        resultCode: 0,
        resultDesc: 'Success',
    },
];

async function main() {
    for (const data of c2bPaymentData) {
        await prisma.c2BPayment.create({
            data,
        });
    }

    for (const data of stkPaymentData) {
        await prisma.sTKPayment.create({
            data,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });