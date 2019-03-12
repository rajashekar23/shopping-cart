import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { TrouserService } from 'src/app/components/trousers/trouser.service';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css']
})
export class TrousersComponent implements OnInit {
  private products:Product[];

  constructor(
    private trouserService:TrouserService
  ) { }

  ngOnInit() {
    this.products=this.trouserService.findAll();
  }

}
