import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText) 
      return items
    return items.filter(search => search.title.toUpperCase().indexOf(searchText.toUpperCase()) != -1)
  }
}