function buttonclick(val){
    
    document.getElementById("text-area").value+=val;
}
function clearDisplay(){
    document.getElementById("text-area").value=""
}

function equalClick(){

     var text=document.getElementById("text-area").value
     var result=eval(text)
     document.getElementById("text-area").value=result
}