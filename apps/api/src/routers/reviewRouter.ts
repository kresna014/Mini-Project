import { ReviewController } from '@/controllers/review.controller';
import { Router } from 'express';

export class ReviewRouter {
  private router: Router;
  private reviewController: ReviewController;

  constructor() {
    this.router = Router();
    this.reviewController = new ReviewController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.reviewController.getListReview);
    this.router.post('/', this.reviewController.createReview);
    this.router.get('/:id', this.reviewController.getDetailReview);
  }
  getRouter(): Router {
    return this.router;
  }
}
