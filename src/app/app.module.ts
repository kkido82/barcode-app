import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxbarcodeComponent } from './components/ngxbarcode/ngxbarcode.component';
import { JsbarcodeComponent } from './components/jsbarcode/jsbarcode.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxbarcodeComponent,
    JsbarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBarcodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
