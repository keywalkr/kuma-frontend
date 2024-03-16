import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "../model/login.model";
import { environment } from "../../../environments/environment";
import { Observable, tap } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { JwtTokenService } from "./jwt-token.service";
import { JWT, REFRESH } from "../constant/secure";
import { TokenModel } from "../model/token.model";

const ENDPOINT = "auth/login";
const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService,
    private jwtService: JwtTokenService
  ) { }

  signIn(loginModel: LoginModel): Observable<any> {
    return this.http.post(
      environment.endpoint_api + ENDPOINT,
      loginModel,
      httpOptions
    ).pipe(
      tap(
        (response: any) => this.doSignIn(response))
    )
  }

  private doSignIn(token: TokenModel) {
    this.jwtService.setToken(token.access_token)
    this.storageService.set(JWT, token.access_token)
    this.storageService.set(REFRESH, token.refresh_token)
    console.log(this.jwtService.decodedToken)
  }
}
