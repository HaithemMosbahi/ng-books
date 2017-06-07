import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookDetailComponent } from "./book-detail.component";
import { BookService } from "./book.service";
import { BooksRoutingModule } from "./book-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [BookComponent,BookDetailComponent],
  exports: [BookComponent,BookDetailComponent],
  providers:[BookService]
})
export class BooksModule { }
