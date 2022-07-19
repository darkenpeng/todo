import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(
    @Inject("AUTH_REPOSITORY")
    private readonly authRepository: IAuthRepository,
    @Inject("ENCRYPT")
    private readonly encrypt: IEncrypt
  ){}

  async createUser(user: User) {
    const encrypted = await this.encrypt.encrypt(user.password)
    await this.authRepository.saveUser({
      ...user,
      password: encrypted
    })
  }
  
  async getUser(email: User['email']) {
    await this.authRepository.getUserByEmail(email);
  }
}
