import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent }   from '../navbar/navbar.component';
import { MoviesComponent }      from './movies-list.component';
import { MovieDetailComponent }  from './movie-detail.component';


const routes: Routes = [
    {path: '', redirectTo: '/navbar', pathMatch:'full'},
    {path: 'navbar', component: NavbarComponent},
    {path: 'detail/:id', component: MovieDetailComponent},
    {path: 'movies', component: MoviesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}