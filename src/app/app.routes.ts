import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'display-data',
    loadComponent: () => import("../features/display-data/display-data.component").then((c) => c.DisplayDataComponent)
  }
];
