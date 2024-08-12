import prisma from '../prisma';

export class eventService {
  constructor() {}
  async getListEvent() {
    const data = await prisma.event.findMany({});

    return data;
  }

  async createEvent(payload: any) {
    try {
      const resultSavePayload = await prisma.event.create({
        data: {
          name: payload.name,
          location: payload.location,
          location_description: payload.location_description,
          price_event: payload.price_event,
          description: payload.description,
          available_seats: payload.available_seats,
          is_paid: payload.is_paid,
          image_url: payload.image,

          created_at: new Date(),
          time_event: new Date(`${payload.startDate} ${payload.startTime}`),
        },
      });
      return resultSavePayload;
    } catch (error) {
      return error;
    }
  }

  async getDetailEvent(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }

  async getDeleteEvent(id: any) {
    const data = await prisma.event.findFirst({ where: { id } });

    return data;
  }
}

export const eventServices = new eventService();
