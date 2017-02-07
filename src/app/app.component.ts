import { Component, OnInit } from '@angular/core';
// import {HeroesComponent} from "./heroes2.component.ts";

@Component({
  moduleId:module.id,
  selector: 'my-app',
  template:`
  <nav>
    <h1>{{title}}</h1>
    <a routerLink = "/heroes" routerLinkActive = "active">Heroes</a>
    <a routerLink  = "/" routerLinkActive = "active">Dashboard</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {  }

  ngOnInit() {}
}
