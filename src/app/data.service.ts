import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

 
  private contactsArr = new BehaviorSubject<any>([]); 
  contact = this.contactsArr.asObservable(); 
  private invokeEvent: BehaviorSubject<any> = new BehaviorSubject([]); 
  invokeEventAsObs = this.invokeEvent.asObservable();
  constructor(private httpClient:HttpClient) {
    console.log("constractor service")
   
    this.httpClient.get(`https://my-json-server.typicode.com/orenAzuz/Books/bookList/`)
    .subscribe(
      
      (data:any[]) => {
     
        if(data.length) {
          this.contactsArr.next(data);
        console.log(this.contactsArr.value[0].author);
       
          
        }
      }
    );
   }
   ngOnInit() {
    
   }

  
  getContactArr(){
    this.httpClient.get(`https://my-json-server.typicode.com/orenAzuz/Books/bookList/`)
    .subscribe(
      
      (data:any[]) => {
     
        if(data.length) {
          this.contactsArr.next(data);
     
        }
      }
    );

    
  }
  createProfile(autuor:string,title:string,newDate:Date){
   
    this.httpClient.post(`https://my-json-server.typicode.com/orenAzuz/Books/bookList/`,{
      autuor: autuor,  
      title: title,
      date: newDate

    })
    .subscribe(
    (data:any)=>{
  
         this.contactsArr.next(this.contactsArr.getValue().concat([data]));

      console.log(this.contactsArr)
    }
   
   
    );


  }
  updateBook(autuor,title,newDate,index){
    console.log(" this is the autuor from the service  "+autuor);
    this.contactsArr.value[index].autuor = autuor;
    this.contactsArr.value[index].title = title;
    this.contactsArr.value[index].date = newDate;
    
    
  }

 updateTitleV(){

  this.invokeEvent.next("1");
  console.log("update title service");
 }



}
