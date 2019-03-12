import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { CasualService } from 'src/app/components/casuals/casual.service';

@Component({
  selector: 'app-casuals',
  templateUrl: './casuals.component.html',
  styleUrls: ['./casuals.component.css']
})
export class CasualsComponent implements OnInit {
  private products:Product[];

  constructor(
    private casualService:CasualService
  ) { }

  ngOnInit() {
    this.products=this.casualService.findAll();
  }

}
