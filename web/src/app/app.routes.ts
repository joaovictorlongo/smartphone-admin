import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/dashboards/welcome' },
  { path: 'auth', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [authGuard], children: [
    { path: '', redirectTo: 'dashboards/welcome', pathMatch: 'full' },
    { path: 'dashboards/welcome', loadComponent: () => import('./pages/dashboards/welcome/welcome.component').then(m => m.WelcomeComponent) },
    { path: 'registers/products', loadComponent: () => import('./pages/registers/products/products.component').then(m => m.ProductsComponent) },
  ]}
];
