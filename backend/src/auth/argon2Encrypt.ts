import { Injectable } from "@nestjs/common";
import * as argon2 from "argon2";

@Injectable()
export class Argon2Encrypt implements IEncrypt {
    constructor(){}
    encrypt(password: User['password']){
        return argon2.hash(password);
    }

    verify(encrypted: User['password'], password: User['password']){
        return argon2.verify(encrypted, password)
    }

}

// https://www.npmjs.com/package//argon2
