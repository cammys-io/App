import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../Navbar/card_product/card_product.component';
import { ProductFake } from '../../app.interfaces';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favoritos',
  imports: [CardProductComponent],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  misfavoritos: ProductFake[] = [];
  private _favoritesS = inject(FavoritesService);

  constructor() {
    this.misfavoritos = this._favoritesS.getFavorites();
    console.log(this.misfavoritos);
  }
}
