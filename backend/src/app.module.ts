import { Module } from '@nestjs/common';
import { UsersModule } from './auth/users/user.module';
import { TodoListModule } from './todoList/todoList.module';
@Module({ 
  imports: [UsersModule, TodoListModule],
  controllers: [],
  providers: []
})
export class AppModule {}