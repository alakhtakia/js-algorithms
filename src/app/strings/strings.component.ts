import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UniqueComponent } from './unique.component';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  isPopup:boolean;
  code:string;
  public options = {
        position: ["bottom", "right"],
        timeOut: 0,
        lastOnBottom: true,
  };
  constructor(private _service: NotificationsService ) { 
    this.isPopup=false;
   }

  ngOnInit() {
  }

  showCode(code){    
    this.code=code;
    this.isPopup=true; 
  }

  close(){
    this.isPopup=false;
  }

  showError(msg){
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
    )
  }
}
