import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsbarcode',
  templateUrl: './jsbarcode.component.html',
  styleUrls: ['./jsbarcode.component.css']
})
export class JsbarcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    JsBarcode('#barcode', '05235993992410');
  }

}
