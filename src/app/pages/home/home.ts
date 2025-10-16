import { Component } from '@angular/core';
import { CardProductComponent } from '../Navbar/card_product/card_product.component';
import { Product, ProductFake } from '../../app.interfaces';
import { FakestoreService } from '../../services/fakestore.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CardProductComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private _stroeService = inject(FakestoreService);
  constructor() {
    this._stroeService.getProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => console.log(error),
    });
  }

  products: ProductFake[] = [];
}
