export class Node {
public left:Node;
public right: Node;
public value:number;
public x:number;
public y:number;

constructor(val,x,y){
	this.left=null;
	this.right=null;
	this.x=x;
	this.y=y;
	this.value=val;
}

addNode(node){
	if(node.value < this.value){
		if(this.left===null){
			this.left= node;
			this.left.x=this.x-50;
			this.left.y=this.y + 100;
		}
		else
			this.left.addNode(node);
	} else if(node.value > this.value){
		if(this.right===null){
			this.right= node;
			this.right.x=this.x+50;
			this.right.y=this.y + 100;
		}
		else
			this.right.addNode(node);
	}
}

visit(callback){
	if(this.left !==null)
		this.left.visit(callback);
	console.log(this.value);
	callback(this);

	if(this.right !==null)
		this.right.visit(callback);
}

search (val){
	if(this.value==val){
		console.log('Found '+ val);
		return this;
	}

	if(val< this.value && this.left)
		return this.left.search(val);
	if(val > this.value && this.right)
		return this.right.search(val);
}
}

