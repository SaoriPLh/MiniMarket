import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ApiService } from 'src/app/core/repositories/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ProductoRepository {

  constructor(private api: ApiService) {}

  obtenerProductos(): Promise<Producto[]> {
    return firstValueFrom(this.api.get<Producto[]>('productos'));
  }

  obtenerProductoPorId(id: number): Promise<Producto> {
    return firstValueFrom(this.api.get<Producto>(`productos/${id}`));
  }

  crearProducto(producto: Producto): Promise<Producto> {
    return firstValueFrom(this.api.post<Producto>('productos', producto));
  }

  eliminarProducto(id: number): Promise<void> {
    return firstValueFrom(this.api.delete<void>(`productos/${id}`));
  }

  actualizarProducto(id: number, producto: Producto): Promise<Producto> {
    return firstValueFrom(this.api.put<Producto>(`productos/${id}`, producto));
  }
}
