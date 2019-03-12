import { Injectable } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root'
})
export class TrouserService {
  private products:Product[];

  constructor() { 
    this.products=[
      {id:'T123',name:'Black Jeans',price:1500,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1502347/2016/11/9/11478681818086-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-4371478681817668-1.jpg'},
      {id:'T234',name:'Armary Jeans',price:2500,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2493701/2018/2/16/11518775834109-Maniac-Mens-Camouflage-Cotton-Jogger-7531518775833867-1.jpg'},
      {id:'T345',name:'Comfort',price:3500,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7149913/2018/9/27/b2d4a09b-2f19-4376-a642-c32a00ba77e71538045103524-INVICTUS-Men-Black-Slim-Fit-Self-Design-Formal-Trousers-8031-1.jpg'},
      {id:'T456',name:'Black Formal',price:4000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2364732/2018/3/8/11520492367813-US-Polo-Assn-Men-Black-Slim-Fit-Self-Design-Formal-Trousers-2731520492367671-1.jpg'},
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
