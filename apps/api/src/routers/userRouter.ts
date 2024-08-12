import { UserController } from '@/controllers/users.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getListUser);
    this.router.post('/', this.userController.createUser);
    this.router.get('/:id', this.userController.getDetailUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
