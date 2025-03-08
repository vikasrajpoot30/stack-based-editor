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
    const undo = document.getElementById('undo');
    const clear = document.getElementById('clear');
    const temptext = document.getElementById('temptext');

    textbox.value="";
    let text = "";
    let stack = new Stack();

    textbox.onclick= function(){
        textbox.selectionStart = textbox.selectionEnd= textbox.value.length;

    };// in middle of text , editor wont work . cursor always remaines at end of string ;

    clear.onclick= function(){
        start.clear();
        text="";
        textbox.value= "";
        textbox.innerHTML= "LIFO REAL WORLD EXAMPLE";
    };

    textbox.oninput = function(event){
        //
        switch(event.inputType){
            case "insertText":
                stack.push(0,event.data);
                break;

            case "deleteContentBackward":
                stack.push(1,text[text.length-1]);
                break;

        }

        temptext.innerHTML = "on stack "+stack.top()+"<br>"+temptext.innerHTML;
        //present on top of stack 
        text = textbox.value;
    };

  undo.onclick = function (){
    let operation = stack.pop();
    if(operation[0]!==-1){
        temptext.innerHTML="Undo operation in Progress..<br>"+temptext.innerHTML;
        if(operation[0]==0){
            let len =operation[1].length;
            textbox.value = textbox.value.substring(0,textbox.value.length-len);

        }
        else {
            textbox.value+=operation[1];

        }
        text = textbox.value;

    }
  };


};





