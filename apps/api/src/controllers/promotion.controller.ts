import { promotionService } from '@/services/promotionService';
import { Request, Response } from 'express';

export class PromotionController {
  async getListPromotion(req: Request, res: Response) {
    const sampleData = await promotionService.getListPromotion();

    const data = {
      massage: 'Success get Promotion Event',
      status: 'true',
      data: sampleData,
    };

    return res.status(200).send(data);
  }

  async getDetailPromotion(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await promotionService.getDetailPromotion(id);
    return res.status(200).send(data);
  }

  async createPromotion(req: Request, res: Response) {
    const { body } = req;
    const result = await promotionService.createPromotion(body.data);
    return res.status(200).send(result);
  }
}
