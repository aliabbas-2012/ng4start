import { Component, OnInit,Input } from '@angular/core';
import {Article} from '.././article'


//article component
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
  
})


export class ArticleComponent implements OnInit  {
  @Input() article: Article;

  upvote():void{
    console.log('---up vote--');
    this.article.voteUp()
    
  }
  downvote():void{
    console.log('---down vote--');
    this.article.voteDown()
  }


  ngOnInit() {
  }
}