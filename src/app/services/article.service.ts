import { Injectable } from '@angular/core';
import {Article} from './../article'  
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ArticleService {
  private  articles: Article[]
  constructor() {
     this.articles = [
          //defining instances in array objects
          new Article('Erlang development','Erlang is fastest in network communication',"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png") ,
          new Article('Elixir development','Elixer is written as wrapper over erlang',"http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png") ,
          new Article('Phoenix development','Phoenix is framework of angular',"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png") ,
          new Article('Angular JS development','Dynamic web development',"http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png") ,
      ]
   }

  //using Promise
  public getArticles():Promise<Article[]> {
      // old code
      //  return Promise.resolve(this.articles)
      return new Promise((resolve, reject) => {
          setTimeout(() => {resolve(this.articles)}, 2000)
          
      });
  } 
  //using Observable
  public getArticlesUsingObs():Observable<Article[]>{
    return new Observable(observer => {
          setTimeout(() => {
              observer.next(this.articles);
            observer.complete();
          }, 2000)
      });
  }

}
