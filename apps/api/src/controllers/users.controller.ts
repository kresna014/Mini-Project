import prisma from '@/prisma';
import { userService } from '@/services/userService';
import { Request, Response } from 'express';

export class UserController {
  async getListUser(req: Request, res: Response) {
    const sampleData = await userService.getListUser();
    const data = {
      massage: 'Success get List User',
      status: 'true',
      data: sampleData,
    };
    return res.status(200).send(data);
  }
  async getDetailUser(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }
  async createUser(req: Request, res: Response) {
    const { body } = req;
    const result = await userService.createUser(body.data);
    return res.status(200).send(result);
  }
}
