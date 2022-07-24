import { Injectable, Inject } from "@nestjs/common";
import { CreateUserDto, UserLoginDto } from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
  constructor(
    @Inject("AUTH_REPOSITORY")
    private readonly authRepository: IAuthRepository,
    @Inject("ENCRYPT")
    private readonly encrypt: IEncrypt,
    @Inject("IJWT")
    private readonly jwt: IJWT,
  ){}

  async signUp(user: CreateUserDto): Promise<void> {
    const encrypted = await this.encrypt.encrypt(user.password)
    await this.authRepository.saveUser({
      ...user,
      password: encrypted
    })
  }
  
  async getUser(email: User['email']): Promise<User> {
    const user = await this.authRepository.getUserByEmail(email)
    if(user== undefined){
      throw new Error("cannot find user")
    }
    return user
  }

  async login(user: UserLoginDto): Promise<string>{
    // DB에서 user의 정보를 가져온다
    const DBuser = await this.getUser(user.email)
    // id가 잘못되서 user가 없으면?
    // DB에 있는 user와 로그인하는 유저의 비밀번호를 대조한다
    if(await this.encrypt.verify(DBuser.password, user.password) == true){
      return this.jwt.sign(DBuser.email)
    // 토큰을 만든다~ => 
    
    // token을 반환
    }
    else{
      throw new Error('password incorrect')
    }
    // 비밀번호가 틀리면?
    // => 비밀번호 잘못 입력했습니다! 에러!

  }
}
