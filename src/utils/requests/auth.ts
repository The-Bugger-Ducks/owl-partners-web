import api from "../../services/api";

import StorageController from '../controllers/session'

import { IUserAuthenticated, IUserLogin } from "../interfaces/user";
import {USER_ENDPOINTS} from "../enums/endpoints";
import { isAxiosError } from "axios";

class AuthRequests {
  async authenticate(payload: IUserLogin) {
    try {
      const response = await api.post<IUserAuthenticated>(
        USER_ENDPOINTS.USER_LOGIN,
        payload,
      );

      const data = response.data;

      await StorageController.setToken(data.token);
      await StorageController.setUserInfo(data.user);

    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            throw new Error(error.response.data.message);
          }
        }
      }
      const genericMessageError = "Algo inesperado aconteceu, tente novamente!";

      throw new Error(genericMessageError);
    }
  }
}

export default new AuthRequests();
