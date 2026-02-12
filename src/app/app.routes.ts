import { Routes } from '@angular/router';
import { Home } from './shared/home';
import { ProductList } from './products/product-list/product-list';
import { Contact } from './shared/contact';
import { Admin } from './shared/admin';
import { ErrorPage } from './shared/error';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'products', component: ProductList },
    { path: 'contact', component: Contact },
    { path: 'admin', component: Admin },
    { path: '**', component: ErrorPage }
];
