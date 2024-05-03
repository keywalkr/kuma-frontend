import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../../layout/auth-layout/auth-layout.component";


export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
      }, {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(mod => mod.RegisterComponent)
      },  {
        path: '**',
        loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
      },
    ]
  }
]
