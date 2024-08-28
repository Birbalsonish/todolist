const input = document.getElementById("text");
const list= document.getElementById("list");
function addtask(){
    if(input.value===""){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        //e.target.toggle("check");
        e.target.parentElement.remove();

    }
   // else if (e.target.tagName="span"){
   //     e.target.parentElement.remove();
    //}
},false)