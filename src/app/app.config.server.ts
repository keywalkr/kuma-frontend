import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { authConfig } from "./pages/auth/auth.config";
import { modulesConfig } from "./modules/modules.config";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(
  appConfig,
  authConfig,
  modulesConfig,
  serverConfig
);
