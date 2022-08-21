import { Module } from '@nestjs/common';
// import { UsersModule } from './auth/auth.module';
import { TodoListModule } from './todoList/todoList.module';
@Module({ 
  imports: [TodoListModule], //UsersModule,
  controllers: [],
  providers: []
})
export class AppModule {}