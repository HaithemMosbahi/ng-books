import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded LoginComponent
 * 
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(`Sigin in ng-books ${this.username} - ${this.password}`);
  }

}
