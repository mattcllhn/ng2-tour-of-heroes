import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';



@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type':'application/json'});
  private heroesUrl = 'api/heroes';
  constructor(private http: Http){}


  getHeroes():Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(res => res.json().data as Hero[])
      .catch(this.handleError);
  }//getHeroes

  getHero(id:number):Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }//getHero
  update(hero:Hero):Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
    .put(url, JSON.stringify(hero),{headers: this.headers})
    .toPromise()
    .then(()=> hero)
    .catch(this.handleError);
  }//update

  private handleError(error:any): Promise<any>{
    console.error('There was some friggin\' error',error);
    return Promise.reject(error.message ||error);
  }//handleError
}
