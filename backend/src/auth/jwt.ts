import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

const PRIVATE_KEY = "1234";

@Injectable()
export class JWT implements IJWT {
  constructor() {}
  async sign(email: User['email']) {
    return new Promise<string>((resolve, reject) => {
      // TODO '1234' Private KEY 환경변수 설정
      jwt.sign(
        { email },
        PRIVATE_KEY,
        { algorithm: "RS256" },
        function (err, token) {
          if (err) {
            reject(err);
          }
          if (token) {
            resolve(token);
          }
        }
      );
    });
  }

  async verify(token: string) {
    return new Promise<User['email']>((resolve, reject) => {
      jwt.verify(token, PRIVATE_KEY, {}, function (err, decodedUser) {
          //에러가 있으면서 user가 있는 경우를 위해 에러 먼저 reject함
        if (err) {
          reject(err);
        }
        if (typeof decodedUser === 'object') {
          resolve(decodedUser.email);
        } else {
            reject(new Error());
        }
      });
    });
  }
}
