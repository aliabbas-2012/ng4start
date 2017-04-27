import { Component,Input } from '@angular/core';
import {Article} from './article'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
