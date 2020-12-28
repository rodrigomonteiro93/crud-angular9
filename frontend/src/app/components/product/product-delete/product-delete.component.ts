import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute,
      private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Produtos > excluir',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    const productInd = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(productInd).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(msg): void{
    this.productService.delete(this.product.id).subscribe(() =>{
      this.productService.showMessage(msg)
      this.cancel()
    })

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
