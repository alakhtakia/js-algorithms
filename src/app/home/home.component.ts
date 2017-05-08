declare var bubbleSort: any;
declare var insertionSort: any;
declare var mergeSort:any;
declare var quickSort:any;
declare var selectionSort:any;
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import '../../library/sorting/bubble-sort';
import '../../library/sorting/insertion-sort';
import '../../library/sorting/merge-sort';
import '../../library/sorting/quick-sort';
import '../../library/sorting/selection-sort';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  providers: [NotificationsService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bubbleSortStr:string;
  insertionSortStr:string;
  selectionSortStr:string;
  mergeSortStr:string;
  quickSortStr:string;
  bsResult:string;
  isResult:string;
  msResult:string;
  qsResult:string;  
  ssResult:string;
  bubbleSortAlgo:any;
  isPopup:boolean;
  code:string;
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

  sort(type){

    switch (type) {
      case "bubble":
        if(this.checkInput(this.bubbleSortStr))
          this.bsResult= bubbleSort(this.bubbleSortStr.split(',').map(Number));
        break;      
      case "insertion":
        if(this.checkInput(this.insertionSortStr))
          this.isResult=insertionSort(this.insertionSortStr.split(',').map(Number));
        break;
      case "selection":
        if(this.checkInput(this.selectionSortStr))
          this.ssResult=selectionSort(this.selectionSortStr.split(',').map(Number));
        break;
      case "merge":
        if(this.checkInput(this.mergeSortStr))
          this.msResult=mergeSort(this.mergeSortStr.split(',').map(Number));
        break;
      case "quick":
      if(this.checkInput(this.quickSortStr))
        this.qsResult=quickSort(this.quickSortStr.split(',').map(Number));
        break;
      default:
        // code...
        break;
    }    
  } 

  showCode(type){

    switch (type) {
      case "bubble":
        this.code=bubbleSort.toString();
        break;      
      case "insertion":
         this.code=insertionSort.toString();
        break;
      case "selection":
        this.code=selectionSort.toString();        
        break;
      case "merge":
        this.code=mergeSort.toString();
        break;
      case "quick":
        this.code=quickSort.toString();
        break;
      default:
        // code...
        break;
    }   
    this.isPopup=false; 

  }

  checkInput(str){
   if(str ==null || str==0){
      this.showMessage('Enter array to sort');    
      return false;
    } else{
      return true;
    }
  }

  showMessage(msg) {
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
