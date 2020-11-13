import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RulesService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/assets/rules.json");
  }
  getRawData() {
    return this.http.get("/assets/in-rules.json");
  }
}
