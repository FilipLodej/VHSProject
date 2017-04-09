
import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if (term === undefined) return movies;
    return movies.filter(function(movie: Movie){
      return movie.genre.toLowerCase().includes(term.toLowerCase());
    })
  }
} 
