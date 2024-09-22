import { Router } from 'express';
import { TodosController } from './todosController';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todocontroller = new TodosController();

    router.get('/', todocontroller.getTodos );
    router.get('/:id', todocontroller.getTodoById );
    router.post('/', todocontroller.createTodo );
    router.put('/:id', todocontroller.updateTodo );
    router.delete('/:id', todocontroller.deleteTodo );

    return router;
  }
}
