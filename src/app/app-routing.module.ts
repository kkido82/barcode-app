import { JsbarcodeComponent } from './components/jsbarcode/jsbarcode.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxbarcodeComponent } from './components/ngxbarcode/ngxbarcode.component';


const routes: Routes = [
  {
    path: 'ngxbarcode',
    component: NgxbarcodeComponent
  },
  {
    path: 'jsbarcode',
    component: JsbarcodeComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'ngxbarcode',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
