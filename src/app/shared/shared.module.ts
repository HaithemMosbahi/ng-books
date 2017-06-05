import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PageNotFoundComponent],
  exports:[CommonModule,RouterModule,FormsModule,PageNotFoundComponent]
})
export class SharedModule { }
