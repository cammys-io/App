import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ProductFake } from '../../../app.interfaces';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card shadow rounded-4">
      <img
        (click)="goToDetail(product.id)"
        class="card-img-top"
        [src]="product.image"
        alt="{{ product.title }}"
      />
      <div class="card-body">
        <h4 class="card-title">{{ product.title }}</h4>
        <h5>{{ product.price | currency }}</h5>

        <div class="botones">
          <button type="button" class="btn btn-success">
            <i class="bi bi-cart4"></i>
          </button>

          <button (click)="toFavorite(product)" type="button" class="btn btn-danger ms-2">
            <i class="bi bi-heart-fill"></i>
          </button>

          @if (product.rating && product.rating.rate > 3) {
          <span class="best-product-badge">⭐ Best Product</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    img {
      cursor: pointer;
    }
    .botones {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
    .best-product-badge {
      background-color: gold;
      color: #000;
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent {
  @Input({ required: true }) product!: ProductFake;
  private _favoritesS = inject(FavoritesService);
  private router = inject(Router);

  goToDetail(id: number) {
    console.log('ir a detalles del producto');
    this.router.navigateByUrl(`/product/${id}`);
  }
  toFavorite(product: ProductFake) {
    this._favoritesS.saveInFavorites(product);
    Swal.fire({
      text: 'Producto agregado a favoritos',
      icon: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
