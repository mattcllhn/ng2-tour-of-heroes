import { Component, OnInit } from '@angular/core';
// import {HeroesComponent} from "./heroes2.component.ts";

@Component({
  selector: 'my-app',
  template:`
  <nav>
    <h1>{{title}}</h1>
    <a routerLink = "/heroes">Heroes</a>
    <a routerLink = "/">Dashboard</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {  }

  ngOnInit() {}
}
