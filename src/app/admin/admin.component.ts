import { Component, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Admin } from "../shared/admin.models";
import { AdminService } from "../shared/admin.service";
import { CustomerService } from "../shared/customer.service";
import { Product } from "../shared/product.models";
import { ProductService } from "../shared/product.service";


@Component({
    selector: 'admin-app',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']

})

@Injectable()
export class AdminComponent implements OnInit {
   
   admins: Admin[] =[];
   admin:any ={};


   adminForm!:  FormGroup;
    customers: any;
    id: any;
    // customerService: any;

   constructor(private adminService:AdminService,private formBuilder: FormBuilder){

   }


    ngOnInit(): void {
this.buildForm();

    }

    buildForm(): void {
        this.adminForm = this.formBuilder.group({
            id: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            idNumber: [null, Validators.required],
            email: [null, Validators.required],
            phoneNumber: [null, Validators.required],
            dateOfBirth: [null, Validators.required],
            password: [null,Validators.required],
        })
    }

    getAllAdmin(): void {
        this.adminService.getAllAdmin().subscribe(admin => {
            this.admins = admin
            console.log("Admin: ", admin)
        })
    }

    submit(): void {
        let admin = this.adminForm?.value;
        console.log("Admin:", admin);
        if (this.id == null) {
            this.adminService.createAdmin(admin).subscribe(admin => {
                console.log("Customer:", admin);

                this.getAllAdmin();
               
                 this.closeAdminFrom();

            })
        } else {
            admin.id = this.id;
            this.adminService.updateAdmin(admin).subscribe(admin => {
                this.getAllAdmin();
                this.adminForm.reset();
                // this.closeCustomerFrom();
                console.log("Customer:", admin);
            })

        }

    }

    // loginCustomer(email: string, password: string): void {
    //     this.adminService.loginAdmin(email, password).subscribe(adminLogin => {
    //         console.log("Customer login:", customerLogin)
    //     })
    // }

    deleteCustomerById(id: any): void {
        this.adminService.deleteAdminById(id).subscribe(admin => {
            // this.customers=customer;
            console.log("Admin:", admin);

        })
    }


    openAdminForm(): void {
        const dialog: any = document.getElementById("adminDialog");
        dialog.showModal();
    }

    closeAdminFrom(): void {
        const dialog: any = document.getElementById("adminDialog");
        dialog.close();

    }

    editAdminForm(admin: Admin): void {
        this.id = admin.id;
        this.adminForm.patchValue(admin);
        console.log("adminForm:", this.adminForm.value);
        this.openAdminForm();
    }

    resetCustomerForm(): void {
        this.adminForm.reset();
    }


}