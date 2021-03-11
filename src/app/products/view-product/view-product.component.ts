import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
   categoryId :Category;
   productList : Product;
  constructor(private activateroute:ActivatedRoute,
   private productService:ProductsService) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe((data)=>{
    this.categoryId = data.id;
     this.productService.viewProduct(this.categoryId).subscribe(proddata=>{
        this.productList = proddata;
     });

    })
  }

}
