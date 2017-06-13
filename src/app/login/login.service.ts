import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

/**
 * Login service
 * 
 * @export
 * @class LoginService
 */
@Injectable()
export class LoginService {

    constructor(public http:Http) { }


    login(credentails?){
       
    }
}