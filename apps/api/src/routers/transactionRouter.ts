import { TransactionController } from '@/controllers/transaction.controller';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.initializeRouter();
  }
  private initializeRouter(): void {
    this.router.get('/', this.transactionController.getListTransaction);
    this.router.post('/', this.transactionController.createTransaction);
    this.router.get('/:id', this.transactionController.getDetailTransaction);
  }

  getRouter(): Router {
    return this.router;
  }
}
