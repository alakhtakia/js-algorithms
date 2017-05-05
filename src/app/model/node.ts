export class Node {
public left:Node;
public right: Node;
public value:number;
public x:number;
public y:number;
public px:number;
public py:number;
public level:number;

constructor(val,x,y){
	this.left=null;
	this.right=null;
	this.x=x;
	this.y=y;
	this.value=val;
	this.level=0;
}

addNode(node){
	if(node.value < this.value){
		if(this.left===null){
			this.left= node;			
			this._setLeftLocation();		
		}
		else
			this.left.addNode(node);
	} else if(node.value > this.value){
		if(this.right===null){
			this.right= node;
			this._setRightLocation();
		}
		else
			this.right.addNode(node);
	}
}

_setLeftLocation(){
	this.left.px=this.x;
	this.left.py=this.y;
	this.left.x= this.x-(500 / Math.pow(2, this.level));
	this.left.y=this.y + 100;
	this.left.level= this.level+1;
}

_setRightLocation(){
	this.right.px=this.x;
	this.right.py=this.y;
	this.right.x= this.x + (500 / Math.pow(2, this.level));
	this.right.y= this.y + 100; 
	this.right.level= this.level+1;
}

visit(callback){
	if(this.left !==null)
		this.left.visit(callback);
	callback(this);

	if(this.right !==null)
		this.right.visit(callback);
}

search (val){
	if(this.value==val){
		return this;
	}

	if(val< this.value && this.left)
		return this.left.search(val);
	if(val > this.value && this.right)
		return this.right.search(val);
}
}

