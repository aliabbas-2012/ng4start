import { Component,Input } from '@angular/core';

class Article {  
  //no need to define like javastyle , Typescript will handle
  constructor(public title: string,public description: string){}
}

//article component
@Component({
  selector: 'app-article',
  template: `
    <div class='image'>
      <img src="http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" />
    </div>
    <div class='content'>
      <div class="header">
        {{article.title}}
      </div>
      <div class="meta">
        Voting and votes will go here
      </div>
      <div class="meta date">
        Today
      </div>
      <div class="meta description">
        {{article.description}}
      </div>
      <div class="extra">
        <a 
          href="#" target="_blank" 
          class='ui right floated button primary'>
            Read more
          <i class="right chevron icon"></i>
        </a>
      </div>
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
    
    <div clss="ui container">
      <app-side-bar></app-side-bar>
      <div clss="ui divided items" *ngIf="articles && articles.length">
        <app-article class='item'  *ngFor="let article of articles" [article]="article" ></app-article>
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
