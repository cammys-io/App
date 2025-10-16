import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { Home } from './pages/home/home';
import { NavbarComponent } from './pages/Navbar/navbar';
import { ProductDetail } from './pages/product_detail/product_detail';
import { Favoritos } from './pages/favoritos/favoritos';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  {
    path: 'acercade',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'Navbar',
    component: NavbarComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetail,
  },
  {
    path: 'favoritos',
    component: Favoritos,
  },
  {
    path:'usuarios',
    component:Usuarios
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
];
