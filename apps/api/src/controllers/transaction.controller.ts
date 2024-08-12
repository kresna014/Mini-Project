import { transactionService } from '@/services/transactionService';
import { Request, Response } from 'express';

export class TransactionController {
  async getListTransaction(req: Request, res: Response) {
    const sampleData = await transactionService.getListTransaction();
    const data = {
      massage: 'Success get list transaction',
      status: 'true',
      data: sampleData,
    };
    return res.status(200).send(data);
  }

  async getDetailTransaction(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await transactionService.getDetailTransaction(id);
    return res.status(200).send(data);
  }

  async createTransaction(req: Request, res: Response) {
    const { body } = req;
    const result = await transactionService.createTransaction(body.data);
    return res.status(200).send(result);
  }
}
