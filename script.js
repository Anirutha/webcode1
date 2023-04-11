var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Enter the Name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let country=document.createElement("div");
country.setAttribute("id","county_id");

let probability=document.createElement("div");
probability.setAttribute("id","probability");

div.append(input,button,country,probability);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById("country").value;
    let url=`https://api.nationalize.io/?name=${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    
    for(var i=0;i<=1;i++){
       country.innerHTML=`Top Two Countries : ${res2.country[0].country_id} , ${res2.country[1].country_id}`;
       }
    for(var j=0;j<=1;j++){
        probability.innerHTML=`Probability : ${res2.country[0].probability} , ${res2.country[1].probability}`;
    }
    }
    catch(error){
    console.log(error);
    }
}