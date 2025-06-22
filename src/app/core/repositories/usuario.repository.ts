//vamos a definir los metodos disponibles para el usuario basicamente
//haremos uso de nuestro ApiService
import { ApiService } from "./ApiService";
import { Injectable } from '@angular/core';  //esto porque el respositorio es un servicio 
import { firstValueFrom } from 'rxjs';  //esto para algo de observable q creo q es para recuperar los valores que nos lleguen no se jsja
import { Usuario } from "src/app/models/usuario";
import { LoginRequest } from "src/app/models/loginRequest";
import { LoginResponse } from "src/app/models/login_response";
@Injectable({

providedIn: "root" //esto creo que es para q pdodamos utilizar esto donde queramos (investigar como seria si no )
})
export class usuarioRepository{
  
    //inyectamos el api service para q lo podamos usar 
    constructor(private api: ApiService){}

    //metodos correspondientes al usuario haciendo uso de nuestro api service
    
    register(usuario: Usuario): Promise<string>{
        return firstValueFrom(this.api.post<string>(`productos/`,usuario));
    }
    login(loginRequest:LoginRequest): Promise<LoginResponse>{
        return firstValueFrom(this.api.post<LoginResponse>(`login`,loginRequest));
    }

}