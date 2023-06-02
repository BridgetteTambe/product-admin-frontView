import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products', component: ProductComponent},
  {path:'customer', component: CustomerComponent},
  {path:'admin', component: AdminComponent}
  // {path:'profile', component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
