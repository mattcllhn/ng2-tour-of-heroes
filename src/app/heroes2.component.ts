import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';




@Component({
  selector: 'my-heroes',
  template: `

  <h2>My Heroes</h2>
  <ul class = "heroes">
    <li *ngFor = "let hero of heroes" (click) ="onSelect(hero)" [class.selected] = "hero===selectedHero">
      <span class = "badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
<my-hero-detail [hero] = "selectedHero"></my-hero-detail>

`,
providers:[HeroService]
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero:Hero;

constructor(private heroService:HeroService){}
getHeroes():void{
  this.heroService.getHeroes().then(heroes=> this.heroes = heroes);
}
ngOnInit(){
  this.getHeroes();
}
  // hero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
