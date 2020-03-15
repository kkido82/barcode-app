import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxbarcode',
  templateUrl: './ngxbarcode.component.html',
  styleUrls: ['./ngxbarcode.component.css']
})
export class NgxbarcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  get barcodeValue() {
    return '05235993992580';
  }
}
