import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-auth.dto";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
  constructor(
    @Inject("AUTH_SERVICE")
    private readonly usersService: AuthService
  ) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.createUser(dto);
  }
}
