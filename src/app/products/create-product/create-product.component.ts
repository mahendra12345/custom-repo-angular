import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form){
         console.log(form.value);
        let newProduct={
          id:10,
          categoryId:form.value.product_category,
          productName:form.value.product_name,
          description:form.value.description,
          rating:form.value.ratings,
          productImg:'',
          isAvailable:form.value.isAvailable,
          color:form.value.color,
          reviews:form.value.review,

        };

        console.log(newProduct);

        this.productService.createProduct(newProduct).subscribe(data=>{
          console.log(data);
        })

  }



}
