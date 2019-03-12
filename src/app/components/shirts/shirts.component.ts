import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ShirtService } from 'src/app/components/shirts/shirt.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
private products:Product[];
  constructor(
    private shirtService:ShirtService
  ) { }

  ngOnInit() {
    this.products=this.shirtService.findAll();
  }

}
