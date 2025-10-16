import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../services/fakestore.service';
import { ProductFake } from '../../app.interfaces';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product_detail.html',
  styles: `
    .producto-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  gap: 40px;
}

.producto-info {
  flex: 1;
  max-width: 50%;
}
  .best-product {
  background-color: #ffc107;
  color: #000;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.producto-info h1 {
  margin-bottom: 15px;
  font-size: 28px;
}

.producto-info p {
  margin-bottom: 10px;
}

.producto-imagen {
  flex: 1;
  text-align: right;
}

.producto-imagen img {
  width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: black 2px 2px 8px;
}


.botones {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.btn-agregar {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.btn-agregar:hover {
  background-color: darkgreen;
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  private activeRoute = inject(ActivatedRoute);
  private apiService = inject(FakestoreService);
  producto!: ProductFake;
  constructor() {
    console.log('Obteniendo Id del producto');
    this.activeRoute.params.subscribe({
      next: (params) => {
        console.log(params['id']);
        this.getProduct(params['id']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getProduct(id: string) {
    this.apiService.getProduct(id).subscribe({
      next: (product) => {
        console.log('producto', product);
        this.producto = product;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
