import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserDto, UserLoginDto } from "./dto/create-auth.dto";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
  constructor(
    @Inject("AUTH_SERVICE")
    private readonly usersService: AuthService
  ) {}

  @Post()
  async signUp(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.signUp(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string>{
    return this.usersService.login(dto)
  }
}
