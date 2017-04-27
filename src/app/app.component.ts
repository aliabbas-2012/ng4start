import { Component,Input } from '@angular/core';

//article component
@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{article.title}}</h2>
      <p>{{article.discription}}</p>
    </div>
  `
})

export class ArticleComponent {
  @Input() article: Object;
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
  articles: Object[];
  
  constructor(){
    this.articles = [{
      title: 'Erlang development',
      discription: 'Erlang is fastest in network communication'
    },
    {
      title: 'Elixir development',
      discription: 'Elixer is written as wrapper over erlang'
    },
    {
      title: 'Phoenix development',
      discription: 'Phoenix is framework of angular'
    },
    {
      title: 'Angular JS development',
      discription: 'Dynamic web development'
    }]
  }
}
