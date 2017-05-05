import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import {Tree} from '../model/tree';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  providers: [NotificationsService],
  styleUrls: ['./binary-tree.component.css']
})
export class BinaryTreeComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  tree:Tree;
  input:string;
  result:string;
  searchInput:number;
  width:number;
  height:number;
  radius:number=35;
  ctx:any;
  public options = {
    position: ["bottom", "right"],
    timeOut: 0,
    lastOnBottom: true,
  };

  constructor(private _service: NotificationsService ) {  

    this.width=window.innerWidth;
    this.height=window.innerHeight;
    this.input='8, 5, 4, 9, 7, 11, 1, 12, 3, 2';

    this.tree=new Tree(this.width,this.height); 
    this.result='';
  }

  ngOnInit() {

    this.ctx= CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');
    

    this.canvasRef.nativeElement.width = this.width;
    this.canvasRef.nativeElement.height = this.height;

  }

  addValue(){
    if(this.input.indexOf(",")>0){
      let arr=this.input.split(',');
      arr.forEach((num)=>{
        this.tree.addValue(num);
      })
    } else{
      this.tree.addValue(parseInt(this.input));
    }
    this.showInfo('Node Added');
    this.input=null;
  }

  search(){
    let node=this.tree.search(this.searchInput);
    if(node!=null)
      this.result='Found value';
    else{
      this.result='not found';
    }
  }

  visit(){
    let counter=1;
    this.ctx.beginPath();
    this.tree.travel((node)=>{      
      if(node.value && node.value!='undefined')
        this.result +='  ' + node.value;
      setTimeout(()=>{
           this._drawCircle(node,this,counter); 
            this._drawLine(node,this,counter);     
        },counter*300);
      counter++;        
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  _drawCircle(node,self,counter){

    var circle = new Path2D();    
    circle.moveTo(node.x, node.y);    
    circle.arc(node.x, node.y, this.radius, 0, 2 * Math.PI);
    self.ctx.fillStyle = '#0275d8';
    self.ctx.fill(circle);
    self.ctx.fillStyle = '#fff';
    self.ctx.fillText(node.value,node.x-7, node.y);      
  }

  _drawLine(node,self,counter){
    if(node.px && node.py){
      self.ctx.beginPath();
      self.ctx.moveTo(node.px,node.py+this.radius);
      self.ctx.lineTo(node.x,node.y-this.radius);
      self.ctx.stroke();  
    }  
  }

  showInfo(msg) {
    this._service.success(
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
