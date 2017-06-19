import { Component, OnInit } from '@angular/core';
import { BookService } from "./book.service";

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;
  query:string;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.query = "Think";
    this.books = this.bookService.getBooks(this.query);
    //this.bookService.getServerBooks();
  }

}
