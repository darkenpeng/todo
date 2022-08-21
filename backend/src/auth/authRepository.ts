import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { AuthTable } from "./auth.table";

// @Injectable()
// export class authRepository implements IAuthRepository {
//   _repository: Repository<AuthTable>
//   constructor(
//     @Inject("DATA_SOURCE")
//     dataSource: DataSource
//   ) {
//     this._repository = dataSource.getRepository(AuthTable)
    
//   }

//     async getUserByEmail(email: User['email']){
//         return this._repository.findOneBy({ email })
//             .then(user => user ?? undefined);
//     }
    // async existsByEmail(){

    // }
    // async saveUser(){
        
    // }
//}
