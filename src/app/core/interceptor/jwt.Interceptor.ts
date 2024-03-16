import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { JWT } from "../constant/secure";

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  let token = localStorageService.get(JWT)

  if(token){
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
