import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  inputs: ['nombre', 'apellido', 'email', 'fecha']
})
export class profile{
  title = 'Cuenta Creada'
  info = 'A traves de esta cuenta contara con la informacion actualizada acerca la plantilla del RM'

  nombre: string;
  apellido: string
  fecha: string;
  email: string;



}
