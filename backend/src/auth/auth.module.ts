import { Module } from "@nestjs/common";
// import { AuthController } from "./users.controller";
import { AuthService } from "./auth.service";

@Module({ 
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
  ]
})
export class UsersModule {}
