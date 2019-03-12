import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrouserService } from 'src/app/components/trousers/trouser.service';
import { ShirtService } from 'src/app/components/shirts/shirt.service';
import { CasualService } from 'src/app/components/casuals/casual.service';
import { Item } from 'src/app/entities/item';
// import { BrowserAnimationFactory } from '@angular/platform-browser/animations/src/animation_builder';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  private items: Item[] = [];
  private total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trouserService: TrouserService,
    private shirtService: ShirtService,
    private casualService: CasualService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        var item: Item = {
          product: this.trouserService.find(id)||this.shirtService.find(id)||this.casualService.find(id),
           
          quantity: 1
        };
        if (localStorage.getItem('carts') == null) {
          let carts: any = [];
          carts.push(JSON.stringify(item));
          localStorage.setItem('carts', JSON.stringify(carts));
        } else {
          let carts: any = JSON.parse(localStorage.getItem('carts'));
          let index: number = -1;
          for (var i = 0; i < carts.length; i++) {
            let item: Item = JSON.parse(carts[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            carts.push(JSON.stringify(item));
            localStorage.setItem('carts', JSON.stringify(carts));
          }else{
            let item:Item=JSON.parse(carts[index]);
            item.quantity+=1;
            carts[index]=JSON.stringify(item);
            localStorage.setItem("carts",JSON.stringify(carts));
          }
        }
        this.loadCarts();
      
      }else{
        this.loadCarts();
      }
    });
  }
  loadCarts():void{
    this.total=0;
    this.items=[];
    let carts=JSON.parse(localStorage.getItem('carts'));
    for(var i=0;i<carts.length;i++){
      let item=JSON.parse(carts[i]);
      this.items.push({
        product:item.product,
        quantity:item.quantity
      });
      this.total+=item.product.price*item.quantity;
    }
  }
  remove(id:string):void{
    let carts:any=JSON.parse(localStorage.getItem('carts'));
    let index:number=-1;
    for(var i=0;i<carts.length;i++){
      let item:Item=JSON.parse(carts[i]);
      if(item.product.id==id){
        carts.splice(i,1);
        break;
      }
    }
    localStorage.setItem("carts",JSON.stringify(carts));
    this.loadCarts();
  }
}

