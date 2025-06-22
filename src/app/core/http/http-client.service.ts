import { Injectable,  } from '@angular/core';  //convierte la clase en un servicio que podemos inyectar
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicio nativo de angular para hacer solicitudes http
import { Observable, throwError } from 'rxjs'; //respuesta que puede tardar supongo que es como una promesa, throw emite un error personalizado 
import { catchError } from 'rxjs/operators'; //Permite interceptar errores y tratarlos
import { environment } from 'src/environtments/environtment'; //Aquí definimos la baseURL de nuestro backend Flask

@Injectable({
    providedIn: "root"  //creo qye esto significa que podemos usar esto donde sea
})
export class HttpClientService {
    //recogemos la url base
    private apiUrl = environment.apiUrl;   //cargamos la apiurl de nuestro archivo environtment

    //aca creo que establecemos la inyeccion de dependencias de http nativo de angular
    constructor(private http: HttpClient){}

   //aca es un metodo privado q en cada solicitud busca el token y lo coloca en los headers de cada peticion
    private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // suponemos JWT
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    });
  }
   //recordemos que es un httpClient este solo se encargara de configurar nuestras solicitudes htpp ya condfiguramos que por cada solicitud que entre use la funcion que coloca los headers
   //ahora bien, este cliente htpp tendra servicos get post, put etc en los cuales nosotros los declaramos explicitamente por varias razones como lo es pues ponerle los headers y unir las url que lleguen con las url base
    get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: any) {
    console.error('Error en HTTP:', error);
    return throwError(() => new Error('Error en la solicitud HTTP'));
  }








}









