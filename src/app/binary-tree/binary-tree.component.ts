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
  ctx:any;
  public options = {
        position: ["bottom", "right"],
        timeOut: 0,
        lastOnBottom: true,
  };

  constructor(private _service: NotificationsService ) {  

  this.width=window.innerWidth;
    this.height=window.innerHeight;
    this.input='100,2,1,4,200,300';
 
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
    this.ctx.beginPath();
    this.tree.travel((node)=>{
      console.log(node);
      if(node.value && node.value!='undefined')
        this.result +='  ' + node.value;

        var circle = new Path2D();
        circle.moveTo(node.x, node.y);
        circle.arc(node.x, node.y, 35, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#0275d8';
    this.ctx.fill(circle);
    this.ctx.fillStyle = '#000';
    this.ctx.fillText(node.value,node.x-7, node.y);
    
    
    // this.ctx.fillStyle = '#0275d8';
    // this.ctx.arc(node.x, node.y, 30, 0, 2 * Math.PI, false);
    // this.ctx.fillStyle = '#0275d8';
    // this.ctx.fill();
    });

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
