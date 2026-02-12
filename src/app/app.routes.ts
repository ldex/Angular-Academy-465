import { Routes } from '@angular/router';
import { Home } from './shared/home';
import { ErrorPage } from './shared/error';
import { ProductDetails } from './products/product-details/product-details';
import { ProductForm } from './products/product-form/product-form';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'products', children:[
        { path: '', loadComponent: () => import('./products/product-list/product-list') },
        { path: 'create', component: ProductForm },
        { path: ':id', component: ProductDetails }
    ]},
    { path: 'contact', loadComponent: () => import('./shared/contact') },
    { path: 'admin', loadComponent: () => import('./shared/admin') },
    { path: '**', component: ErrorPage }
];
