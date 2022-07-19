type User = {
  name: string;
  email: string;
  password: string;
};

interface IAuthRepository {
  getUserByEmail: (email: User['email']) => Promise<User>;
  existsByEmail: (email: User['email']) => Promise<boolean>;
  saveUser: (user: User) => Promise<void>;
}

interface IEncrypt {
  encrypt: (password: User['password']) => Promise<User['password']>
  verify: (encryptedPassword: User['password'], password: User['password']) => Promise<boolean>
}

