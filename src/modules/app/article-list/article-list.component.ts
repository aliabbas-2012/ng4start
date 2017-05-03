import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Article} from '../article'
import {ArticleService} from './../services/article.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[]; // for promise 
  articles_obs: Observable<Article[]>;
  
  constructor(private _articleService:ArticleService) { 
    this.articles_obs = _articleService.articlesOb;
    console.log("--constructore--");
    console.log(this.articles_obs)
  }

  ngOnInit() {
    //  this.setArticlesUsingApiPromise()

    this._articleService.setArtcilesUsingObServeAble();
  }

   private setArticlesUsingApiPromise():void{
      this._articleService.getArticlesOverApi().then(articles=>this.articles = articles)
      //====call back error
      this._articleService.getArticlesOverApi().catch((err) => {
          console.log('I get called:', err.message); // I get called: 'Something awful happened'
      });
  }

  private setArticlesUsingPromise():void{
      this._articleService.getArticles().then(articles=>this.articles = articles)
      // //above is equal to in js
      // /*
      //   this._articleService.getArticles().then(function(articles){
      //     this.articles = articles;
      //   })
      // */
      //====call back error
      this._articleService.getArticles().catch((err) => {
          console.log('I get called:', err.message); // I get called: 'Something awful happened'
      });
  }

  private setArticlesUsingObservables():void{

     this._articleService.getArticlesUsingObs().subscribe(
         res => {this.articles = res},
            err => {
                console.log('I get called:', err.message)
            }
      )
  }

}
