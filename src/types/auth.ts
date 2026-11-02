import { User } from './review';

export type AuthInfo = User & {
  email: string;
  token: string;
};

export type AuthData = {
  email: string;
  password: string;
};
