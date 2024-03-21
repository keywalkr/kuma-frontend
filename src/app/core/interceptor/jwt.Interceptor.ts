import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { JWT } from "../constant/secure";

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(LocalStorageService).get(JWT)

  req = req.clone({
    url: req.url,
    setHeaders: {
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
    },
  });
  return next(req);
};
