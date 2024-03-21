import {Routes} from "@angular/router";
import {ContentLayoutComponent} from "../layout/content-layout/content-layout.component";

export const modulesRoutes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(comp => comp.DashboardComponent)
      }
    ]
  }

]
