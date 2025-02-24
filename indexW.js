const tempr=document.querySelector(".weather1");
const place=document.querySelector(".weather2 p");
const date=document.querySelector(".weather2 span"); 
const imj=document.querySelector(".weather3 img");
const cond=document.querySelector(".weather3 span");  


const form=document.querySelector("form");

        
const city=document.querySelector(".inputID");
const btn=document.querySelector("button");  

let target="kolkata";


const fetchdata= async ()=>{  
const url=`https://api.weatherapi.com/v1/current.json?key=3773df008861490fa5050416242007&q=${target}`;
try{
const responce= await fetch(url);
const data=await responce.json(); 

console.log(data); 





 updatedom(data.current.temp_c,data.location.name,data.current.condition.icon,
    data.current.condition.text,data.location.localtime); 

 }catch(e){
    console.log(e);
 }
    

 





};

function updatedom(tempr,place,imj,cond,date,){

document.querySelector(".weather1").innerHTML=tempr;
document.querySelector(".weather2 p").innerHTML=place;
document.querySelector(".weather2 span").innerHTML=date 
document.querySelector(".weather3 img").src=imj;
document.querySelector(".weather3 span").innerHTML=cond; 






};


 form.addEventListener("submit",(e)=>{ 
     e.preventDefault();  

     target=city.value;
     fetchdata(target);

    
    
    

    
})  
fetchdata();

