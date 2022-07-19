import { Module } from '@nestjs/common';
import { TodoListController } from './todoList.controller';
import { TodoListService } from './todoList.service';
import { TypeOrmRepository } from './todoList.typeOrmRepository';

@Module({ 
  imports: [],
  controllers: [TodoListController],
  providers: [
    {
      provide: 'TODO_SERVICE',
      useClass: TodoListService
    },
    {
      provide: 'TODO_REPOSITORY',
      useClass: TypeOrmRepository,
    },
  ]
})
export class TodoListModule {}