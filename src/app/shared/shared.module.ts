import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";
import { NavBarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PageNotFoundComponent,NavBarComponent],
  exports:[CommonModule,RouterModule,FormsModule,PageNotFoundComponent,NavBarComponent]
})
export class SharedModule { }
