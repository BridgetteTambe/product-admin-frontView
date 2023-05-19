import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/product.models";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'product-app',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit{
   
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getAllProduct().subscribe((data) => {
            this.products = data;
        });
    }
    
}