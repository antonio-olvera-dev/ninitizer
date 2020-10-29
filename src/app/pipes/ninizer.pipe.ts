import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ninizer'
})
export class NinizerPipe implements PipeTransform {

  transform(value: string): string {
    const array: string[] = value.split(' ');
    let text: string = '';
    

    for (const item of array) {
      switch (item) {
        case 'por':
          text += 'x ';
          break;

        case 'que':
          text += 'ke ';
          break;

        default:
          text += item + ' ';
          break;
      }
    }

    text += '\ntO xUlo. xOxO'
    let tex = '';
    for (let i = 0; i < text.length; i++) {
      const element = text[i];
      const num:number = Math.round((Math.random()*10) );

      if (num >= 5) {
        tex += element.toLowerCase();
      }else{
        tex += element.toUpperCase();
      }
      
    }




//tO xUlo. xOxO
    return tex;
  }

}
