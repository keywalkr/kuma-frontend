import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },{
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(auth => auth.routes)
  }, {
    path: 'content',
    loadChildren: () => import('./modules/modules.routes').then(mod => mod.modulesRoutes)
  }
];
