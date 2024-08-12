import { EventController } from '@/controllers/event.controller';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private sampleController: EventController;

  constructor() {
    this.sampleController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.sampleController.getListEvent);
    this.router.post('/', this.sampleController.createEvent);
    this.router.get('/:id', this.sampleController.getDetailEvent);
    // this.router.post('/', this.sampleController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}
