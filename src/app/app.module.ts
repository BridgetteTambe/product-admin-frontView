import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
// import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { InputTextModule } from 'primeng/inputtext';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './shared/product.service';
import { CustomerService } from './shared/customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { AdminService } from './shared/admin.service';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, AdminComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    MenuModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    PasswordModule
    
  ],
  providers: [ProductService, CustomerService,AdminService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
