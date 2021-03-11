import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productdelete = 0;
  productDeleted:Product;
  constructor(private activatedroute:ActivatedRoute,
    private produtService:ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data)=>{
        this.productdelete= data.id;

         this.produtService.deleteProduct(this.productdelete).subscribe(deleteProductData=>{
           this.productDeleted = deleteProductData;

           console.log("deleteData="+ this.productDeleted);
         });
    });
  }

}
