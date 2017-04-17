import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "sort"
})
export class ArraySortPipe implements PipeTransform {

    transform(array: Array<string>, arg: string, asc: boolean): Array<string> {
        array.sort((a: any, b: any) => {
            if (a[arg] < b[arg]) {
                return -1;
            } else if (a[arg] > b[arg]) {
                return 1;
            } else {
                return 0;
            }
        });
        if (!asc) { return array.reverse(); }
        return array;
    }
}
