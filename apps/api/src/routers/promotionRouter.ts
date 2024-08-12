import { PromotionController } from '@/controllers/promotion.controller';
import { Router } from 'express';

export class PromotionRouter {
  private router: Router;
  private promotionController: PromotionController;

  constructor() {
    this.router = Router();
    this.promotionController = new PromotionController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.promotionController.getListPromotion);
    this.router.post('/', this.promotionController.createPromotion);
    this.router.get('/:id', this.promotionController.getDetailPromotion);
  }
  getRouter(): Router {
    return this.router;
  }
}
