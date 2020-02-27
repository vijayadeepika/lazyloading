import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { 
    path: 'shop', 
  loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) 
},
  
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
