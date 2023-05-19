import UserRole from "../enums/userRole";

export interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface IUserAuthenticated {
  token: string;
  user: IUser;
}

export interface IUserLogin {
  email: string;
  password: string;
}
