import { Component,Input } from '@angular/core';

class Article {  
  //no need to define like javastyle , Typescript will handle
  public publishedAt:Date;
  constructor(public title: string,public description: string,public votes?:number){
    this.votes = votes || 0
    this.publishedAt = new Date()
  }

  public voteUp():void{
    this.votes +=1
  }

  public voteDown():void{
    this.votes -=1
  }
}

//article component
@Component({
  selector: 'app-article',
  template: `
    <div class='image'>
      <img src="http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" />
    </div>
    <div class='ui content'>
      <div class="ui header">
        {{article.title}}
      </div>
      <div class="ui meta">
        <span class="ui blue small label">
          <i class="heart icon"></i>
          <div class="ui detail">
            {{article.votes}}
          </div>
        </span>
      
        <span class="ui right floated">
          <a (click)="upvote()" class="ui small label">
            <i class="arrow up icon"></i>
            Upvote
          </a>
          <a (click)="downvote()" class="ui small label">
            <i class="arrow down icon"></i>
            Downvote
          </a>
        </span>
      </div>

      <div class="ui meta date">
        {{article.publishedAt | date:'medium'}}
      </div>
      <div class="ui meta description">
        {{article.description}}
      </div>
      <div class="ui extra">
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

  upvote():void{
    console.log('---up vote--');
    this.article.voteUp()
    
  }
  downvote():void{
    console.log('---down vote--');
    this.article.voteDown()
  }
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
    
    <div clss="ui main text container">
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
