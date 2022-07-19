export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export class VerifyEmailDto {
  signupVerifyToken: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}
