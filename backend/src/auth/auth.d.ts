type User = {
  name: string;
  email: string;
  password: string;
};

interface IAuthRepository {
  getUserByEmail: (email: User["email"]) => Promise<User | undefined>;
  existsByEmail: (email: User["email"]) => Promise<boolean>;
  saveUser: (user: User) => Promise<void>;
}

interface IEncrypt {
  encrypt: (password: User["password"]) => Promise<User["password"]>;
  verify: (
    encryptedPassword: User["password"],
    password: User["password"]
  ) => Promise<boolean>;
}

interface IJWT {
  // 사용자 id(email)를 암호화해서 jwt 토큰으로 만들기!
  sign: (email: User["email"]) => Promise<string>;
  // jwt 토큰을 검증하고, 암호를 풀어서, 사용자 id(email)를 꺼내는 거!
  verify: (token: string) => Promise<User["email"]>;
}
