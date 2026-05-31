import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'experience', loadComponent: () => import('./pages/experience/experience').then(m => m.Experience) },
    { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
    { path: 'training', loadComponent: () => import('./pages/training/training').then(m => m.Training) },
    { path: 'skills', loadComponent: () => import('./pages/skills/skills').then(m => m.Skills) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound) },
];
