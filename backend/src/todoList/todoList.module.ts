import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/ormConfig';
import { TodoListController } from './todoList.controller';
import { FsTodoRepository } from './todoList.fsRepository';
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
      useClass: FsTodoRepository,
    },
    // ...databaseProviders
  ]
})
export class TodoListModule {}