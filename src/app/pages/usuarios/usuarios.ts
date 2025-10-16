import { Component } from '@angular/core';
import { UsuariosSer } from '../../services/usuariosSer.service';
import { inject } from '@angular/core';
import { User } from '../../app.interfaces';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

  private _UserServ = inject(UsuariosSer);
  constructor() {
    this._UserServ.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (error) => console.log(error),
    });
  }

  users: User[] = [];


}
