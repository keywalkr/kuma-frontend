import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  token!: string;
  decodedToken!: { [key: string]: string };
  decodedHeader!: { [key: string]: string };

  constructor() {
  }

  setToken(token: string) {
    if(token){
      this.token = token;
    }
  }

  /**
   * Decode the token payload and return
   * {
   *   foo: "bar",
   *   exp: 1234567890,
   *   iat: 1234567890,
   *   ...
   * }
   */
  decodeToken() {
    if(this.token){
      console.log("Decode ", jwtDecode(this.token));
      this.decodedToken = jwtDecode(this.token);
    }
  }


  /**
   * Decode header by passing in options (useful for when you need `kid` to verify a JWT):
   * {
   *   typ: "JWT",
   *   alg: "HS256"
   * }
   */
  decodeHeader() {
    if(this.token) {
      this.decodedHeader = jwtDecode(this.token, {header: true});
    }
  }

  getDecodeToken() {
    return jwtDecode(this.token);
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['displayname'] : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  /*isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }*/
}
