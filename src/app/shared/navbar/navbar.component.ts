import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styles: [`
    md-sidenav-container {
      background: rgba(0, 0, 0, 0.03);
    }
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `]
})

export class NavBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}