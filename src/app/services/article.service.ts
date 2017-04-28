import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from '@angular/http'

import {Article} from './../article'  
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const apiUrl = "https://newsapi.org"
const apiKey = "3b2b1a59a3f6448fb8ecbc5f19c49789"

@Injectable()
export class ArticleService {
  private  articles: Article[]
  constructor(private _http:Http) {
     this.articles = [
          //defining instances in array objects
          new Article('Erlang development','Erlang is fastest in network communication',"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png") ,
          new Article('Elixir development','Elixer is written as wrapper over erlang',"http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png") ,
          new Article('Phoenix development','Phoenix is framework of angular',"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png") ,
          new Article('Angular JS development','Dynamic web development',"http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png") ,
      ]
   }

  public getArticlesOverApi():Promise<Article[]> {
      let params = new URLSearchParams()
      params.set('apiKey',apiKey)
      params.set('source','reddit-r-all')
      
      //this will make the url like this
      /** 
          https://newsapi.org/apiKey=3b2b1a59a3f6448fb8ecbc5f19c49789&source=reddit-r-all 
      **/

      return this._http.get(`${apiUrl}/v1/articles`,{'search': params}).toPromise()
        .then(resp=>resp.json())
        .then(json=>{
            console.log("json=>",json)
            return json.articles
        }).then(articles=>{
           //old method
           /*
            return articles.map(article=>{
                return new Article(article.title,article.description,article.urlToImage)
            })
           */
           //new method
           return articles.map(article=>{
                return Article.getFromJSON(article)
            })

        })
        .catch(err=>{
            console.log("error in fetching data",err)
        })

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
