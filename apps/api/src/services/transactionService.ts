import prisma from '@/prisma';

const status_transaction = {
  pending: 'pending',
  decline: 'decline',
  approve: 'approve',
  canceled: 'canceled',
};

export class TransactionService {
  constructor() {}
  async getListTransaction() {
    const data = await prisma.transaction.findMany({});
    return data;
  }
  async createTransaction(payload: any) {
    try {
      const resultSavePayload = await prisma.transaction.create({
        data: {
          id: payload.id,
          id_event: payload.id_event,
          tickets: payload.tickets,
          id_promotion: payload.id_promotion,
          price: payload.price,
          total_price: payload.total_price,
          status: status_transaction.pending,
          proof: '',
          created_at: new Date(),
        },
      });
      return resultSavePayload;
    } catch (error) {
      return error;
    }
  }
  async getDetailTransaction(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }
}

export const transactionService = new TransactionService();
