
import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie';

@Pipe({
  name: 'directorFilter'
})
export class DirectorFilterPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if (term === undefined) return movies;
    return movies.filter(function(movie: Movie){
      return movie.director.toLowerCase().includes(term.toLowerCase());
    })
  }
} 
