declare var isUnique: any;
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import './algo/string-unique';

@Component({
  selector: 'string-unique',
  template: `
  <div>
  <h1>Find Unique String</h1>
  <div class="row">
    <input class="form-control" placeholder="Enter any string" value [(ngModel)]="uniqueStr"/>
  </div>
  <div class="row">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-primary" (click)="unique()">Is unique</button>
      <button type="button" class="btn btn-default" (click)="showCode('unique')">Show Code</button>
    </div>
    <span class="result"><i class="fa fa-laptop" aria-hidden="true"></i> Output:{{uResult}}</span>
  </div>
  </div>
  `
})
export class UniqueComponent {

  uResult:string;  
  code:string;
  uniqueStr:string;
  @Output() onShowCode = new EventEmitter<string>();
  @Output() onShowError = new EventEmitter<string>();

  constructor() {}

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
        this.onShowCode.emit(isUnique.toString());
        break;      
      case "insertion":         
        this.onShowCode.emit(isUnique.toString());
        break;      
      default:
        // code...
        break;
    }   
  }

  showError(msg) {
    this.onShowError.emit(msg);
  }
}