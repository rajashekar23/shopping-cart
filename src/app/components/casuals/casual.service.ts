import { Injectable } from '@angular/core';

import { Product } from 'src/app/entities/product';



@Injectable({
  providedIn: 'root'
})
export class CasualService {
  private products:Product[];

  constructor() { 
    this.products=[
      {id:'C123',name:'Casual',price:1000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg'},
      {id:'C002',name:'Redchecks',price:2000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg'},
      {id:'C003',name:'Blue Party ',price:3000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7432057/2018/9/19/3e816f15-5fe5-4cdc-b239-4f4ee8673e811537337776056-India-3011537337775771-1.jpg'},
      {id:'C004',name:'Black Party',price:4000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4324020/2018/3/21/11521616551399-ZOTW-Mens-Solid-Black-Collared-Kurta-8801521616551258-1.jpg'},
    ];
  }
  findAll():Product[]{
    return this.products;
  }
  find (id:string):Product{
    return this.products[this.getSelectedIndex(id)];
  }
  private getSelectedIndex(id:string){
    for(var i=0; i<this.products.length;i++){
      if(this.products[i].id==id){
        return i;
      }
    }
    return -1;
  }
}
