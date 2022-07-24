import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("Auth")
export class AuthTable {
  constructor(name:string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
    
    @Column('text',{ nullable: false, name: "Name" })
    name: string
    
    @PrimaryColumn('text',{ nullable: false, name: "Email" })
    email: string

    @Column('text', { nullable: false, name: "Password"})
    password: string
}