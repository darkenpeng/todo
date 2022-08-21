import { Module } from "@nestjs/common";
import { Argon2Encrypt } from "./argon2Encrypt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JWT } from "./jwt";

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: "AUTH_SERVICE",
      useClass: AuthService,
    },
    {
      provide: "ENCRYPT",
      useClass: Argon2Encrypt,
    },
    {
      provide: "IJWT",
      useClass: JWT,
    },
    // {
    //   provide: "AUTH_REPOSITORY",
    //   useClass: ,
    // },
  ],
})
export class UsersModule {}
