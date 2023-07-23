import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class CurrentUserPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    let temp:any = sessionStorage.getItem('logged-user')
    temp = JSON.parse(temp)
    return temp.firstName + ' ' + temp.lastName
  }
}
