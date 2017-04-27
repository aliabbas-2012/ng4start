import { Component,Input } from '@angular/core';

//article component
@Component({
  selector: 'app-article',
  template: `
    <div>{{article.title}}</div>
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
      <div id="content">
        <app-article [article]="article"></app-article>
        <app-article [article]="article"></app-article>
        <app-article [article]="article"></app-article>
      </div>
    </div>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  article: Object;
  
  constructor(){
    this.article = {
      title: 'Erlang development',
      discription: 'Erlang is fastest in network communication'
    }
  }
}
