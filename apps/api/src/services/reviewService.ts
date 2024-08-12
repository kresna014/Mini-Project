import prisma from '@/prisma';

export class ReviewService {
  constructor() {}
  async getListReview() {
    const data = await prisma.reviews.findMany({});
    return data;
  }
  async createReview(payload: any) {
    try {
      const resultSavePayload = await prisma.reviews.create({
        data: {
          id: payload.id,
          id_event: payload.id,
          id_transaction: payload.id_transaction,
          title: payload.title,
          description: payload.description,
          rate: payload.rate,
          created_at: new Date(`${payload.startDate} ${payload.startTime}`),
        },
      });
      return resultSavePayload;
    } catch (error) {
      return error;
    }
  }
  async getDetailReview(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }
}

export const reviewService = new ReviewService();
