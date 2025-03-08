import {Stack} from "./stack.js"

// preventing user from copy pasting any text on box 
document.onkeydown= function(event){
    if(event.ctrlKey || event.metaKey){
        event.preventDefault();
    }
};

onload =function(){
    //get reference to elements 
    const textbox = document.getElementById('comment');
    
}




