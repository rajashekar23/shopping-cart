import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShirtsComponent } from './components/shirts/shirts.component';
import { TrousersComponent } from './components/trousers/trousers.component';
import { CasualsComponent } from './components/casuals/casuals.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shirts',component:ShirtsComponent},
  {path:'trousers',component:TrousersComponent},
  {path:'casuals',component:CasualsComponent},
  {path:'carts',component:CartsComponent},
  {path:'profiles',component:ProfilesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
