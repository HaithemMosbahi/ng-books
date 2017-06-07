import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Book } from "./book.model";

/**
 * Service responsible of fetching books
 * 
 * @export BooksService
 * @class BookService
 */
@Injectable()
export class BookService {

    constructor(private http: Http) { }

    fetch(query: string): Observable<Book[]> {
        const resourceUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        return this.http.get(resourceUrl).map(response => response.json().items as Book[]);

    }

}