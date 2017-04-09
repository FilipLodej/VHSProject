
import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie';


@Pipe({
  name: 'rentedPipe'
})
export class RentedPipe implements PipeTransform {

  transform(movies: any, args?: any): any {
    return movies.filter((movie: Movie) => movie.status == "rented");
  }
}
