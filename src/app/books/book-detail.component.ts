import { Component, OnInit } from '@angular/core';
import { BookService } from "./book.service";
import { ActivatedRoute } from '@angular/router';

/**
 * Represents the Book Detail component
 * 
 * @export
 * @class BookDetailComponent
 * @implements {OnInit}
 */
@Component({
    moduleId: module.id,
    selector: 'app-book-detail',
    templateUrl: 'book-detail.component.html'
})

export class BookDetailComponent implements OnInit {
    // The current book instance
    book:any;

    constructor(public bookService:BookService,
               public route:ActivatedRoute) { 
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.book = this.bookService.getBook(params['id']);

        });
     }
}