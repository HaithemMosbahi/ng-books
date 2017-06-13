import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";
import { NavBarComponent } from "./navbar/navbar.component";

import { MaterialModule } from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [PageNotFoundComponent,NavBarComponent],
  exports:[CommonModule,RouterModule,FormsModule,PageNotFoundComponent,NavBarComponent,MaterialModule]
})
export class SharedModule { }
