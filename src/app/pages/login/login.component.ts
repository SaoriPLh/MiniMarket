import { Component } from '@angular/core';
import { usuarioRepository } from 'src/app/core/repositories/usuario.repository';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from 'src/app/models/login_response';
import { LoginRequest } from 'src/app/models/loginRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  form: FormGroup;
  //tipo de respuesta q vamos a conseguir que es el token, podemos borrarlo ya que pues no tenemos por que mostrarlo 
  response?: LoginResponse; // 👈 ahora la respuesta es un objeto

  constructor(private usuarioRepo: usuarioRepository, private fb: FormBuilder,private router:Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 
//no devolvemos nada ya que como practica solamente cambiaremos el response
async login(): Promise<void> {
  try {
    const loginRequest: LoginRequest = {
      nombre_usuario: this.form.value.nombre,
      password: this.form.value.password
    };

    this.response = await this.usuarioRepo.login(loginRequest);
    if(this.response){
      //guardamos en localStorage
    localStorage.setItem('token', this.response.access_token);
    console.log('Token:', this.response.access_token);

    this.router.navigate(['/admin']);
    }
    
  } catch (e) {
    console.error('Error en login:', e);
  }
}
}
