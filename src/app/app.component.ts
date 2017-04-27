import { Component,Input } from '@angular/core';
import {Article} from './article'
import {ArticleService} from './services/article.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  title = 'Article View application!';
  articles: Article[];
  
  constructor(private _articleService:ArticleService){
    this.articles = this._articleService.getArticles()
  }
}
