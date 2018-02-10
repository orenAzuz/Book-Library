import { Directive, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
 
 let obs = new Observable;
  return ( control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
   
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;
  
  validate(control: AbstractControl): {[key: string]: any} {
    console.log(this.forbiddenName)
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }

  books = [];
  index:number;
 
validValue(){
  let w = '\b|^ |';
  let n =1;
  console.log(this.books.length);
  if (this.books.length <= 1 ){
    if(this.index === -1 && this.books.length === 1){
      w += this.books[0].title;
      }else{
          w += '0';
        }
        }else{  
          w = '\b|^ |';
  if(this.index == this.books.length -1){n=2}

  for(let i = 0; this.books.length > i; i++){
  

  if(i != this.index){
    w += '^';
    w += this.books[i].title;
    w += '$';
    if(i < this.books.length -n){
      w += "|";
    }
  }

}
        }
w += '| $|\b';

console.log(w);
return w;
}

 validTitle(index:number,books:any){

                 this.books = books;
                 this.index = index;
 }
  
}

