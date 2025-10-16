import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductFake } from '../app.interfaces';
import { User } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosSer {
  private _http = inject(HttpClient);
  constructor() {}
  getUsers() {
    return this._http.get<User[]>(('https://fakestoreapi.com/users'));
  }
}
