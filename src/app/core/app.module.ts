import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailEditComponent } from './movie-detail-edit.component';
import { MoviesComponent } from './movies-list.component';
import { MovieService } from './movie.service';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailComponent,
    MovieDetailEditComponent,
    MoviesComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
