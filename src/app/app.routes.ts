import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import(`./Pages/landing/landing.component`).then(
        (c) => c.LandingComponent,
      ),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import(`./Pages/project-details/project-details.component`).then(
        (c) => c.ProjectDetailsComponent,
      ),
  },
];
