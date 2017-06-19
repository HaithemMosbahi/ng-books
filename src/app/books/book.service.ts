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

    private resourceUrl = "http://localhost:8080/books";

    constructor(private http: Http) { }
    
    /**
     * Fetch Books
     * 
     * @param {string} query 
     * @returns {Observable<Book[]>} 
     * 
     * @memberOf BookService
     */
    getBooks(query: string): Observable<Book[]> {
        const resourceUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        return this.http.get(resourceUrl).map(response => response.json().items as Book[]);

    }

    getServerBooks(){
        this.http.get(this.resourceUrl).
           map(response => response.json())
           .subscribe(data => {
               console.log("books data "+JSON.stringify(data));
        });
    }

    /**
     * Fetch Book's detail
     * 
     * @param {string} id 
     * @returns 
     * 
     * @memberOf BookService
     */
    getBook(id:string){
        const resourceUrl = ` https://www.googleapis.com/books/v1/volumes/${id}`;
        return this.http.get(resourceUrl).map(response => response.json() as Book);
       
    }



}