import { Injectable } from "@angular/core";
import { CredentialsDTO } from "../models/credencials.dto";
import { HttpClient } from "@angular/common/http"
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {

  }
  authenticate(creds: CredentialsDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`,
    creds,
    {
      observe: "response",
      responseType: "text" // n pode ser um json por conta de retornar um corpo vazio
    })
  }
}
