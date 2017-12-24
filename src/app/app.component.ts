import { Component, OnInit,Inject ,ViewChild } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query, stagger } from '@angular/animations';
import { DataService } from './data.service';
import {RemoveBookComponent} from './remove-book/remove-book.component';
import {FormBuilder, FormGroup, NgForm,Validators,FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatExpansionPanel} from '@angular/material';
import { forbiddenNameValidator,ForbiddenValidatorDirective } from './forbidden-validator-directive.directive';
import { slideUpDownAnimation,slideInOutAnimation} from './_animations/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[ slideUpDownAnimation  ,slideInOutAnimation]
      
})
export class AppComponent {
  isDisabled:boolean = false;
  isLinear = false;
  ok:boolean = false;
  saveUpdate:boolean = false;
  autuor:string;
  title:string;
  ctrlChange:string;
  titleFormGroup:FormGroup;
  autourFormGroup:FormGroup;
  dateFormGroup:FormGroup;
  date:Date;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  contactsArr = [];
  panelOpenState: boolean = false;
  needleRegExp :RegExp;
  titlePattern:FormControl;
  matExpansionPanel : MatExpansionPanel;
  valid :any;
  fvd = new ForbiddenValidatorDirective;

  constructor(private _data: DataService,private _formBuilder: FormBuilder,
    public dialog: MatDialog) {
      
   
   }
   getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }


  ngOnInit() {
    
 
    this._data.contact.subscribe(res => this.contactsArr = res);
   
    this.titleFormGroup =   this._formBuilder.group({
      titleCtrl: ['',this.valid ]
      
    });
    this.autourFormGroup = this._formBuilder.group({
      autourCtrl: ['', Validators.required]
    });
    this.dateFormGroup = this._formBuilder.group({
      dateCtrl: [this.date, Validators.required]
    });
    this._data.contact.subscribe(res => this.contactsArr = res);
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  
  patterns = new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern("[a-zA-Z ]*")])
  getErrorMessage() {
    return this.patterns.hasError('required') ? 'You must enter a value' :
        this.patterns.hasError('minlength') ? 'You must enter at least 4 letters' :
        this.patterns.hasError('pattern') ? 'You must enter an english letters only' :
            '';
  }
  validNum = 4;
 
  
  titleFilter(i){
  
    return this.titlePattern.hasError('forbiddenName') ? 'This book is already exsist' : 
     this.titlePattern.hasError('required') ? 'You must enter a value' :
     this.titlePattern.hasError('minlength') ? 'You must enter at least 4 letters' :
     this.titlePattern.hasError('pattern') ? 'You must enter an english letters only' :
    '';
  
           
  }




    counter:number = 0;
changeCtrlName(i){
  console.log("change clicked "+i);
 if(this.counter == 0 ){
//saving the fealdes values in case the user won't save the chainges
  this.title = this.contactsArr[i].title;
  this.autuor = this.contactsArr[i].autuor;
  this.contactsArr[i].date = new Date(this.contactsArr[i].date);
  this.date = new Date(this.contactsArr[i].date);

  //preppare the validations for the specific title

  this.initTitleValidations(i);
 
  console.log("change clicked "+ this.title+" , "+this.date);
    this.ctrlChange = i;
     this.counter++;
 } 
 if(this.panelOpenState == false && this.saveUpdate == false && this.counter == 33){
   this.contactsArr[i].title = this.title ;
   this.contactsArr[i].autuor = this.autuor ;
  this.contactsArr[i].date =new Date(this.date);
  
 console.log("abbort changes")
 } 
     
    
 
}

initTitleValidations(i:number){
  

  this.fvd.validTitle(i,this.contactsArr);
  this.needleRegExp = new RegExp(this.fvd.validValue(),"i");
  this.valid = forbiddenNameValidator(this.needleRegExp);
  this.titlePattern = new FormControl( this.title,[Validators.required,this.valid,
  Validators.minLength(this.validNum),
  Validators.pattern("[a-zA-Z ]*"), ])
     
  this.titleFormGroup =   this._formBuilder.group({
   titleCtrl: [this.title,this.valid]
      
    });
}


panelCloseState(i:number){
  this.panelOpenState = false;
  this.isDisabled = false;
  if(this.counter != 0){
    
    this.counter = 33;
    console.log("closing the pannel counter is = "+ this.counter);
  }
  
  
  this.panelOpenState = false;
  
}
panelOpenStateFunck(){
  this.counter = 0;
  this.panelOpenState = true;
  this.isDisabled = true;
  

}


 
  removeContact(i):void{ 


    let dialogRef = this.dialog.open(RemoveBookComponent, {
      width: '500px', 
    
      data: { ok: this.ok, title: this.contactsArr[i].title }
    });

    dialogRef.afterClosed().subscribe(result => { 
     
      console.log('The dialog was closed'+this.ok);
      this.ok = result;
      if(this.ok){
        this.contactsArr.splice(i,1);
        this.ok = false;
      }
      
    });
    
    
      }
    
    
  getContact(){
    this._data.getContactArr();
    this._data.contact.subscribe(res => this.contactsArr = res);
    console.log("get contact!" );
  }
  updateBook(index:number){ 
    this.saveUpdate = true;
   
  
    
    this._data.updateBook(this.contactsArr[index].autuor,this.contactsArr[index].title,this.contactsArr[index].date,index);
    console.log(this.contactsArr[index].autuor+" "+this.contactsArr[index].title+" "+this.contactsArr[index].date);
    this.counter = 0;
    this.panelOpenState = false;
    this.saveUpdate = false;
  }
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);

  initBookValues(i:number){
    
    this.title = this.contactsArr[i].title;
    this.autuor = this.contactsArr[i].autuor;
    this.date = this.contactsArr[i].date;
  }
  
 
}


