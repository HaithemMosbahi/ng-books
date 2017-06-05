import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "./shared/shared.module";

import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";

import { MaterialModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    HomeModule,
    LoginModule,
    AppRoutingModule,
    MaterialModule

  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
