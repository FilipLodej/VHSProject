
import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if (term === undefined) return movies;
    return movies.filter(function(movie: Movie){
      return movie.title.toLowerCase().includes(term.toLowerCase());
    })
  }
} 
