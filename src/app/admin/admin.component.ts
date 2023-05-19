import { Component, Injectable, OnInit } from "@angular/core";
import { Product } from "../shared/product.models";
import { ProductService } from "../shared/product.service";


@Component({
    selector: 'admin-app',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']

})

@Injectable()
export class AdminComponent implements OnInit {
    ngOnInit(): void {
    }


}