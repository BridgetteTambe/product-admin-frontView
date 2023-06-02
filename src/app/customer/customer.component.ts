import { Component, OnInit } from "@angular/core";
 import { Customer } from "../shared/customer.model";
import { CustomerService } from "../shared/customer.service";


@Component({
    selector: 'customer-app',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']

})

export class CustomerComponent implements OnInit{
    customers: Customer[] = [];
    customer: any = {};
    constructor( private customerService: CustomerService){
        
    }
    
    
    getAllCustomers(): void {
        this.customerService.getAllCustomers().subscribe(customer => {
            this.customers = customer
            console.log("Customer: ", customer)
        })
    }

    ngOnInit(): void {
        this.getAllCustomers();
    }


    


    
}