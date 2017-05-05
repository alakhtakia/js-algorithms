import  {Node} from './node'

export class Tree {
	public root:Node;
  width:number;
  height:number;

	constructor(width,height){
    this.width=width;
    this.height=height;
		this.root=null;
	}

  addValue(val){
		let node=new Node(parseInt(val),null,null);
  	if(this.root == null){
			this.root = node;
      this.root.px=null;
      this.root.py=null;
      this.root.x=this.width/2;
      this.root.y=50;
      this.root.level=1;
    }
	  else{
	  	 	this.root.addNode(node);
	  }
	}

  travel (callback){
		return this.root.visit(callback);
  }

  search= function (val){
		return this.root.search(val);
  }
}