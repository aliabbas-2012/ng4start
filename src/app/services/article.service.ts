import { Injectable } from '@angular/core';
import {Article} from './../article'  
@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles():Promise<Article[]> {
    
    return Promise.resolve([
          //defining instances in array objects
          new Article('Erlang development','Erlang is fastest in network communication',"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png") ,
          new Article('Elixir development','Elixer is written as wrapper over erlang',"http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png") ,
          new Article('Phoenix development','Phoenix is framework of angular',"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png") ,
          new Article('Angular JS development','Dynamic web development',"http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png") ,
      ]
   )
  } 

}
