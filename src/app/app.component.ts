import { Component } from '@angular/core';

//article component
@Component({
  selector: 'app-article',
  template: `
    <div>Article Goes here</div>
  `
})

export class ArticleComponent {

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
        <app-article></app-article>
        <app-article></app-article>
        <app-article></app-article>
      </div>
    </div>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
