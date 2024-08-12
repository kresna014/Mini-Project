import { reviewService } from '@/services/reviewService';
import { Request, Response } from 'express';

export class ReviewController {
  async getListReview(req: Request, res: Response) {
    const sampleData = await reviewService.getListReview();

    const data = {
      massage: 'Success get Review',
      status: 'true',
      data: sampleData,
    };
    return res.status(200).send(data);
  }
  async getDetailReview(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await reviewService.getDetailReview(id);
    return res.status(200).send(data);
  }

  async createReview(req: Request, res: Response) {
    const { body } = req;
    const result = await reviewService.createReview(body.data);
    return res.status(200).send(result);
  }
}
