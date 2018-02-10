import { Component, OnInit ,ViewChild} from '@angular/core';
import { trigger,style,transition,animate,keyframes,query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import {FormBuilder, FormGroup, NgForm,Validators,FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import { forbiddenNameValidator,ForbiddenValidatorDirective } from '../forbidden-validator-directive.directive';
import { slideInOutAnimation } from '../_animations/index';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] ,
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
  
     // attach the slide in/out animation to the host (root) element of this component
    // host: { '[@slideInOutAnimation]': '' },
     
  
})
export class HomeComponent implements OnInit {
  needleRegExp:RegExp;
  valid = forbiddenNameValidator(this.needleRegExp);  
  titlePattern:FormControl;
  date: Date = new Date();
  title : string ='';
  autuor:string = '';
  age:number ;
  contactsArr = []; 
  found:boolean = false;
  answerDisplay : string = "";
  showSpinner : boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  boo :boolean = true;

  fvd = new ForbiddenValidatorDirective;
  constructor (private _data:DataService,private route: ActivatedRoute,private router: Router,){
    this._data.invokeEventAsObs.subscribe(value => {
      this.setTitleValidations();
    })
    this._data.contact.subscribe(res => this.contactsArr = res);
    
    if(this.contactsArr.length === 0){
      setTimeout(() => {
        this.setTitleValidations()
     },2000)
 
    }
    this.setTitleValidations();
      }

  ngOnInit() {
    
   
  }

  setTitleValidations(){
   
    this.fvd.validTitle(-1,this.contactsArr);
 
    this.needleRegExp = new RegExp(this.fvd.validValue(),"i");
    this.valid = forbiddenNameValidator(this.needleRegExp);
   
    this.titlePattern = new FormControl('', [Validators.required,this.valid,
      Validators.minLength(4),
        Validators.pattern("[a-zA-Z ]*"), ]);
        this.titlePattern.setErrors(forbiddenNameValidator);

  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday from being selected.
    return day !== 6;
  }

  showAnswer(){

    this.showSpinner = true;

    setTimeout(() => {
       
       this.showSpinner = false;
    },2000)
  }
  onNameKeyUp(event){
    this.autuor = event.target.value;
  }


createProfile(){
  this._data.createProfile(this.autuor,this.title,this.date);
  this._data.contact.subscribe(res => this.contactsArr = res);
  
  setTimeout(() => {
  this.router.navigate(['']);
  },2000);
}
minDate = new Date();
maxDate = new Date(2020, 0, 1);

patterns = new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern("[a-zA-Z ]*")])
getErrorMessage() {
  return this.patterns.hasError('required') ? 'You must enter a value' :
      this.patterns.hasError('minlength') ? 'You must enter at least 4 letters' :
      this.patterns.hasError('pattern') ? 'You must enter an english letters only' :
          '';
}
validNum = 4;


titleFilter(i){
  
  if(this.titlePattern.hasError('forbiddenName') ){
          console.log("we have a custom error! ");     
  }
  return this.titlePattern.hasError('forbiddenName') ? 'This book is already exsist' : 
   this.titlePattern.hasError('required') ? 'You must enter a value' :
   this.titlePattern.hasError('minlength') ? 'You must enter at least 4 letters' :
   this.titlePattern.hasError('pattern') ? 'You must enter an english letters only' :
  '';
 
         
}
cancel(){
  this.router.navigate(['']);
}


}

