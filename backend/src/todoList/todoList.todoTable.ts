import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("Todos")
export class TodoTable {
  constructor(content: string, completed: boolean, createdAt: number){
    this.content = content;
    this.completed = completed;
    this.createdAt = createdAt;
  }
    @PrimaryColumn('text', { nullable: false, length: 140, name: "Content" })
    content: string
    
    @Column('boolean',{ nullable: false, name: "Completed" })
    completed: boolean

    @Column('integer', { nullable: false, name: "CreatedAt"})
    createdAt: number
}