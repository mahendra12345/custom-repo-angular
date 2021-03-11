import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-viewallproductbycategory',
  templateUrl: './viewallproductbycategory.component.html',
  styleUrls: ['./viewallproductbycategory.component.css']
})
export class ViewallproductbycategoryComponent implements OnInit {
    categorysearch : Category;
    productList : Product;
  constructor(private activatedrouter:ActivatedRoute,
             private productService:ProductsService ) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe((data)=>{
      this.categorysearch = data.id;

      this.productService.searchCategoryProduct(this.categorysearch).subscribe(searchdata=>{
         console.log(searchdata);
        this.productList = searchdata;
      });
    });

  }

}
