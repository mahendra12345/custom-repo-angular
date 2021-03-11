import { Component, OnInit } from '@angular/core';
import{ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ViewProductComponent } from '../view-product/view-product.component';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   prodId:Product;
   productDetails:Product;
  constructor(private activatedroute:ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data)=>{
      this.prodId = data.id;
      console.log("this id="+this.prodId);

    });


  }

  updateNewProduct(formdata){

  }

}
