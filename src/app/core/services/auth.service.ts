import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "../model/login.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { TokenModel } from "../model/token.model";

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.endpoint_api + "auth/";

  constructor(
    private http: HttpClient
  ) {
  }

  postLogin(data: LoginModel): Observable<TokenModel> {
    return this.http.post<TokenModel>(this.authUrl + 'login', data, httpOptions);
  }

  getProfile(): Observable<any> {
    console.log("Auth Service getProfile...")
    return this.http.get(this.authUrl + 'profile', httpOptions);
  }

}
