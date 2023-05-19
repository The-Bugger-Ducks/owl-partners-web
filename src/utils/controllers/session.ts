import {IUser} from "../interfaces/user";

class SessionController {
  clearRecords() {
    sessionStorage.clear();
  }

  setToken(token: string) {
    sessionStorage.setItem("authentication_token", JSON.stringify(token));
  }

  getToken() {
    const sessionToken = sessionStorage.getItem("authentication_token");

    if (!sessionToken) return null;

    const token: string = JSON.parse(sessionToken);

    return token;
  }

  setUserInfo(user: IUser) {
    sessionStorage.setItem("user_data", JSON.stringify(user));
  }

  getUserInfo() {
    const sessionUser = sessionStorage.getItem("user_data");

    if (!sessionUser) return null;

    const user: IUser = JSON.parse(sessionUser);

    return user;
  }
}

export default new SessionController();
