import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {LoginModel} from "../model/login.model";
import {LocalStorageService} from "./local-storage.service";
import {TokenModel} from "../model/token.model";
import {JWT, REFRESH} from "../constant/secure";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService
  ) { }

  logIn(data: LoginModel) {
    this.authService.postLogin(data).subscribe({
      next: res => {
        this.storeDate(res);
      },
      error: err => {
        console.log(err)
      }
    })
  }

  private storeDate(token: TokenModel) {
    this.storageService.set(JWT, token.access_token)
    this.storageService.set(REFRESH, token.refresh_token)
  }
}
