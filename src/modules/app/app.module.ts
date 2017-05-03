import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from './services/article.service';

import { HighlightDirective } from './highlight.directive';

/* Contact Imports */
import { ContactModule }      from '.././contact/contact.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    SidebarComponent,
    ArticleComponent,
    ArticleListComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
