import { DataSource } from "typeorm/data-source/DataSource";
import { AuthTable } from "./auth/auth.table";
import { TodoTable } from "./todoList/todoList.todoTable";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      return new DataSource({
        type: "sqlite",
        database: "database.db",
        synchronize: true,
        logging: true,
        entities: [TodoTable, AuthTable],
        subscribers: [],
        migrations: [],
      }).initialize();
    },
  },
];

