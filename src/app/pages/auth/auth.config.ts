import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./auth.route";

export const authConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
