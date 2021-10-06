import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { EstateDTO } from "../../models/estate.dto";

@Injectable()
export class EstateService {

  constructor(public http: HttpClient) {

  }

  findAll(): Observable<EstateDTO[]> {
    return this.http.get<EstateDTO[]>(`${API_CONFIG.baseUrl}/estates`);
  }

}
