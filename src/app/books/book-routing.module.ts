import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookDetailComponent } from "./book-detail.component";

const routes: Routes = [
  {path:'book',children:[
     { path: '', component: BookComponent },
     { path:':id',component:BookDetailComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }

export const routedComponents = [BookComponent];