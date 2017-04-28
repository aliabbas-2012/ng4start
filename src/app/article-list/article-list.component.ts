import { Component, OnInit,Input } from '@angular/core';
import {Article} from '../article'
import {ArticleService} from './../services/article.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  
  constructor(private _articleService:ArticleService) { 
      _articleService.getArticles().then(articles=>this.articles = articles)

       //above is equal to in js
      /*
      _articleService.getArticles().then(function(articles){
        this.articles = articles;
      })
      */

      _articleService.getArticles().catch((err) => {
          console.log('I get called:', err.message); // I get called: 'Something awful happened'
      });
  }

  ngOnInit() {
  }

}
