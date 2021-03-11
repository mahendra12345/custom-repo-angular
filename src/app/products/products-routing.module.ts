import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewallproductbycategoryComponent } from './viewallproductbycategory/viewallproductbycategory.component';

const routes: Routes = [
         { path: '', component: ViewAllProductsComponent  },
         { path: 'create-product', component: CreateProductComponent },
         { path: 'list-products', component: ViewAllProductsComponent },
         { path: 'category/:id', component:ViewallproductbycategoryComponent },
         { path: 'search-date', component:ViewAllProductsByDateComponent},
         { path: 'update-product/:id', component:UpdateProductComponent},
         { path: 'delete-product/:id', component:DeleteProductComponent},
         {path:'view-product/:id',component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
