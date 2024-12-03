import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authRedirectGuard } from './guards/auth-redirect.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { 
    path: 'auth', 
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent),
    canActivate: [authRedirectGuard]
  },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'menu', 
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'reviews', 
    loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: 'auth' }
];
