import { Component, OnInit} from '@angular/core';
import{Router} from '@angular/router';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';




@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
providers:[HeroService]
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero:Hero;


constructor(
  private router: Router,
  private heroService:HeroService
){}
getHeroes():void{
  this.heroService.getHeroes().then(heroes=> this.heroes = heroes);
}
goToDetail(){
  this.router.navigate(['/detail', this.selectedHero.id]);
}
ngOnInit(){
  this.getHeroes();
}
  // hero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
