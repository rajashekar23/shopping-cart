import { Injectable } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {
  private products:Product[];

  constructor() { 
    this.products=[
      {id:'S123',name:'Suitings',price:1000,photo:'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
      {id:'S02',name:'Olive T-shirt',price:2000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1830401/2018/9/18/dd3bed25-189f-4d61-8a3f-67e061e8758f1537269958987-Roadster-Men-Olive-Green-Printed-Round-Neck-T-Shirt-43215372-1.jpg'},
      {id:'S03',name:'Roadster',price:3000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1301358/2016/11/21/11479716524889-Roadster-Charcoal-Grey-Flock-Print-Sweatshirt-1311479716524565-1.jpg'},
      {id:'S04',name:'Blueprinted',price:4000,photo:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2310385/2018/5/2/11525245401383-Roadster-Men-Teal-Printed-V-Neck-T-shirt-6191525245401228-1.jpg'},
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
