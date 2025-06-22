import { Injectable } from '@angular/core';
import { environment } from 'src/environtments/environtment';
import { HttpClientService } from '../http/http-client.service';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'  
})
export class ApiService {

  constructor(private http: HttpClientService) {}

  //desde aca vamos a empezar a declarar nuestro metodos asi ahorrandonos solamente configurar cosas q hacemos en el httpClientService 

  //tipo de dato generico
 
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint);
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(endpoint, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(endpoint, data);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(endpoint);
  }
}
