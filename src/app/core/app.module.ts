import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailEditComponent } from './movie-detail-edit.component';
import { MoviesComponent } from './movies-list.component';
import { RentedMoviesComponent } from './rented-movies-list.component';
import { MovieService } from './movie.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieSearchComponent } from './movie-search.component';
import { TitleFilterPipe } from './title-filter.pipe';
import { DirectorFilterPipe } from './director-filter.pipe';
import { YearFilterPipe } from './year-filter.pipe';
import { GenreFilterPipe } from './genre-filter.pipe';
import { RentedPipe } from './rented.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailComponent,
    MovieDetailEditComponent,
    MoviesComponent,
    MovieSearchComponent,
    TitleFilterPipe,
    DirectorFilterPipe,
    YearFilterPipe,
    GenreFilterPipe,
    RentedPipe,
    RentedMoviesComponent

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);