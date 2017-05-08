declare var isUnique: any;
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import './algo/string-unique';
@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  uResult:string;
  isPopup:boolean;
  code:string;
  uniqueStr:string;
  public options = {
        position: ["bottom", "right"],
        timeOut: 0,
        lastOnBottom: true,
  };

  constructor(private _service: NotificationsService ) { 
    this.isPopup=true;
   }

  ngOnInit() {
  }

  unique(){
    if(this.checkInput(this.uniqueStr))
      this.uResult= isUnique(this.uniqueStr.trim());
  }

  checkInput(str){
   if(str ==null || str==0){
      this.showError('Enter string to check for uniqueness');    
      return false;
    } else{
      return true;
    }
  }

  showCode(type){

    switch (type) {
      case "unique":
        this.code=isUnique.toString();
        break;      
      case "insertion":         
        break;      
      default:
        // code...
        break;
    }   
    this.isPopup=false; 

  }


  showError(msg) {
    this._service.error(
        'Error',
        msg,
        {
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            timeOut:2000,    
            animate:"fromLeft",           
            maxLength: 0
        }
    )}

}
