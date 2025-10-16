import { Injectable } from '@angular/core';
import { ProductFake } from '../app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: ProductFake[] = [];
  constructor() {}

  getFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return this.favorites;
  }

  saveInFavorites(producto: ProductFake) {
  
    let localFavorites: ProductFake[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    const encontrado = localFavorites.find((p) => p.id === producto.id);
    console.log(encontrado);
    if (encontrado) {
      this.favorites = localFavorites.filter((p) => p.id !== producto.id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      return;
    }

    console.log(localFavorites);

    this.favorites.push(producto);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
