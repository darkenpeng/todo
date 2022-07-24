import { Entity , Column, PrimaryColumn, Repository, DataSource } from "typeorm"
import { Inject, Injectable } from "@nestjs/common";
import { TodoTable } from "./todoList.todoTable";

@Injectable()
export class TypeOrmRepository implements ITodoRepository {
  _repository: Repository<TodoTable>
  constructor(
    @Inject("DATA_SOURCE")
    dataSource: DataSource
  ) {
    this._repository = dataSource.getRepository(TodoTable);
  }

  async saveAll(newTodoList: Todo[]) {
      const oldTodoList = await this.getAll();
      // delete 구현해야 
      // newTodoList에서 oldTodo의 content와 같은 게 한개도 없다면~ 
      const deletedTodos = oldTodoList.filter((oldTodo)=> newTodoList.every((newTodo)=> newTodo.content !== oldTodo.content))
      await this._repository.remove(deletedTodos)

      await this._repository.save(newTodoList) // insert, update
  }

  async getAll() {
    return this._repository.find()
  }
}