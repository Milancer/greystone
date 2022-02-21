import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageRating'
})
export class AverageRatingPipe implements PipeTransform {

  transform(value: number[]): number {
    let averageTotal: number = 0;
    value.forEach(x => (averageTotal = averageTotal + x))
    return Math.floor(averageTotal/value.length)
  }

}
