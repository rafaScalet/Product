import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

	products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
		this.loadProducts();
  }

	loadProducts () {
		this.productService.getProducts().subscribe({
			next: products => this.products = products
		})
	}

}
