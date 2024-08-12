import prisma from '@/prisma';

export class PromotionService {
  constructor() {}
  async getListPromotion() {
    const data = await prisma.promotion.findMany({});
    return data;
  }
  async createPromotion(payload: any) {
    try {
      const resultSavePayload = await prisma.promotion.create({
        data: {
          id_event: payload.id_event,
          code_promotion: payload.code_promotion,
          max_claim: payload.max_claim,
          startdate_discount: new Date(),
          enddate_discount: new Date(),
          nominal_discount: payload.nominal_discount,
          type_discount: payload.type_discount,
          create_at: new Date(`${payload.startDate} ${payload.startTime}`),
        },
      });
      return resultSavePayload;
    } catch (error) {
      return error;
    }
  }
  async getDetailPromotion(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }
}

export const promotionService = new PromotionService();
