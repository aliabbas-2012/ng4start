import { Component,Input } from '@angular/core';

class Article {  
  //no need to define like javastyle , Typescript will handle
  constructor(public title: string,public description: string){}
}

//article component
@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{article.title}}</h2>
      <p>{{article.description}}</p>
    </div>
  `
})


export class ArticleComponent {
  @Input() article: Article;
}

//another component namely sidebar
@Component({
  selector: 'app-side-bar',
  template: `
    <div id="sidebar">
        Side Bar is here
    </div>
  `
})

export class SideBarComponent {

}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-side-bar></app-side-bar>
    <div id="container">
      <div id="content" *ngIf="articles && articles.length">
        <app-article  *ngFor="let article of articles" [article]="article" ></app-article>
        
      </div>
    </div>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article View application!';
  articles: Article[];
  
  constructor(){
    this.articles = [
      //defining instances in array objects
      new Article('Erlang development','Erlang is fastest in network communication') ,
      new Article('Elixir development','Elixer is written as wrapper over erlang') ,
      new Article('Phoenix development','Phoenix is framework of angular') ,
      new Article('Angular JS development','Dynamic web development') ,
   ]
  }
}
