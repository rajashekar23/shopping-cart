import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "./shared/shared.module";
import { ShirtsComponent } from './components/shirts/shirts.component';
import { TrousersComponent } from './components/trousers/trousers.component';
import { CasualsComponent } from './components/casuals/casuals.component';
import { HomeComponent } from './components/home/home.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { TrouserService } from 'src/app/components/trousers/trouser.service';
import { ShirtService } from './components/shirts/shirt.service';
import { CasualService } from './components/casuals/casual.service';
 

@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    TrousersComponent,
    CasualsComponent,
    HomeComponent,
    CartsComponent,
    ProfilesComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule
  ],

  providers: [
   TrouserService,ShirtService,CasualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }