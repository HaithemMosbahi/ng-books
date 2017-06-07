import { Component, OnInit } from '@angular/core';
import { BookService } from "./book.service";

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.fetch("Think");
  }

}
