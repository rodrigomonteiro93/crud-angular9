import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Product} from "../product.model";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  message: string = 'minha mensagem';

  product: Product = {
    name: null,
    price: null
  }

  constructor(
      private productService: ProductService,
      private router: Router,
      private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Produtos > Criar',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  createProduct(msg: string): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(msg)
      this.router.navigate(['/products'])
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
