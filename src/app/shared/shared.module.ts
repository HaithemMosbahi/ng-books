import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageNotFoundComponent],
  exports:[CommonModule,RouterModule,PageNotFoundComponent]
})
export class SharedModule { }
