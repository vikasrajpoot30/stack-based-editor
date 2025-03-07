class stack {

    constructor(){
        this.size=0;
        this.stack=[];
        this.buffer=10;
    }

     clear() {
     this.size=0;
     this.stack=[];

    }
    
   isEmpty(){
    return(this.size==0);
   }
   top(){
    return(this.stack[this.size-1]);

   }




}

