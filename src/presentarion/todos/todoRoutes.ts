import { Router } from 'express';
import { TodosController } from './todosController';
import { TodoDatasourceImpl } from '../../infrastructure/datasources/todo.datasource.impl';
import { TodoRepositoryImpl } from '../../infrastructure/repositories/todo.repository.impl';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TodoDatasourceImpl();
    const repository = new TodoRepositoryImpl(datasource);

    const todocontroller = new TodosController(repository);

    router.get('/', todocontroller.getTodos );
    router.get('/:id', todocontroller.getTodoById );
    router.post('/', todocontroller.createTodo );
    router.put('/:id', todocontroller.updateTodo );
    router.delete('/:id', todocontroller.deleteTodo );

    return router;
  }
}
