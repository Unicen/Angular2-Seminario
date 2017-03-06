import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
  name: 'filterbeer'
})
export class FilterbeerPipe implements PipeTransform {

  transform(value: Beer[], letters: String): Beer[] {
  
    if (letters == null || letters==""){
 
        return value;
    }else{
       
      let newbeers= new Array<Beer>();
      value.forEach((b: Beer)=>{
        if((b.name.length>=letters.length)&&(this.control(b.name,letters))){
         newbeers.push(b);
      }
      });
      return newbeers;
    }
    ;
  }

  control(name,letters){
   let retornable;
   let i;
   for ( i=0;i<letters.length;i++) {
     if(letters[i]==name[i]){
       retornable=true;
     }
     else return false;
   }
    return retornable;
  };

}
