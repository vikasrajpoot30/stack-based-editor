 export class Stack {

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
   pop(){
    if(!stack.isEmpty()){
        this.size--;
        return this.stack.top();
    }
    else {
        return [-1,'']
    }
   }
 
   push(type,char){
        if(this.isEmpty()){
            if(type==0) this.stack.push([type,char]);
        }
        else {
            let temp = this.top();
            if(temp[0]==type && temp[1].length<this.buffer){
                let top = this.pop();
                top[1]=char+top[1];
                this.stack.push(top);
            }

        }
   }






}

