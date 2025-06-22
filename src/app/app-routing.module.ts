import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard.spec';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AdminComponent } from './pages/admin/admin.component';
const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' }, //si esta vacia redirige a login
  { path: 'login', component: LoginComponent },
 
  
  { path: 'productos', component: ProductosComponent, canActivate: [authGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
