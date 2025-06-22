import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // ✅ este es el módulo necesario
import { AppComponent } from './app.component';
import { ProductosComponent } from './pages/productos/productos.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [ //mis comoponentes
    AppComponent,
    ProductosComponent,
    LoginComponent,
    AdminComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    ReactiveFormsModule,
    AppRoutingModule,
    // otros módulos como HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
