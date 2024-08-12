import prisma from '@/prisma';

export class UserService {
  constructor() {}
  async getListUser() {
    const data = await prisma.users.findMany();

    return data;
  }

  generateReferalCode(name: string) {
    const random = Math.floor(Math.random() * 1000);
    return name.substring(0, 3).toUpperCase() + random;
  }

  async createUser(payload: any) {
    try {
      const resultSavePayload = await prisma.users.create({
        data: {
          id: payload.id,
          name: payload.name,
          email: payload.email,
          password: payload.password,
          referal_code: this.generateReferalCode(payload.name),
          poin: 0,
          image_url: payload.image_url,
          phone_number: payload.phone_number,
          isVerify: payload.isVerify,
          created_at: new Date(),
        },
      });
      return resultSavePayload;
    } catch (error) {
      return error;
    }
  }
}

export const userService = new UserService();
