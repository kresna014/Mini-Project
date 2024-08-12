import { Request, Response } from 'express';
import { eventServices } from '@/services/eventService';

export class EventController {
  async getListEvent(req: Request, res: Response) {
    //  const eventService = new EventService();
    const sampleData = await eventServices.getListEvent();
    // const  sampleData = await prisma.sample.findMany();
    const data = {
      massage: 'Success get list event',
      status: 'true',
      data: sampleData,
    };
    return res.status(200).send(data);
  }

  async getDetailEvent(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await eventServices.getDetailEvent(id);
    return res.status(200).send(data);
  }

  async getDeleteEvent(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await eventServices.getDeleteEvent(id);
    return res.status(200).send(data);
  }

  async createEvent(req: Request, res: Response) {
    const { body } = req;
    const result = await eventServices.createEvent(body.data);
    return res.status(200).send(result);
  }
}

console.log('Hello');
