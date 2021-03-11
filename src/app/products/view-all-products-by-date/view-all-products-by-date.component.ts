import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-date',
  templateUrl: './view-all-products-by-date.component.html',
  styleUrls: ['./view-all-products-by-date.component.css']
})
export class ViewAllProductsByDateComponent implements OnInit {
   searchdate='';
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe((data)=>{
         this.searchdate = data.date;
    })
  }

}
