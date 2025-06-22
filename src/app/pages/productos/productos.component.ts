import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoRepository } from 'src/app/core/repositories/producto.repository';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  error: string = '';

  constructor(private productoRepo: ProductoRepository) {} // ✅ INYECTAMOS la clase aquí

  async ngOnInit(): Promise<void> {
    try {
      this.productos = await this.productoRepo.obtenerProductos(); // ✅ usamos el objeto inyectado
    } catch (err) {
      this.error = 'No se pudieron cargar los productos';
      console.error(err);
    }
  }
}
