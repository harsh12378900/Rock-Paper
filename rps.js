let userscore=0;
let compscore=0;
let choises=document.querySelectorAll(".choice");
let p=document.querySelector("#show");
let div=document.querySelector(".cont");
let y=document.querySelector("#Y");
let c=document.querySelector("#C");
// console.log(choises);
choises.forEach((choise)=>{
choise.addEventListener('click',(e)=>{
    let userchoise=choise.getAttribute("id");
        playgame(userchoise);
})     
})
function playgame(userchoise){
    console.log("userchoise was = ",userchoise);
    //generate random choise
     let gencompchoise =compchoise();
     console.log("computer choise is = ",gencompchoise );
     if(userchoise===gencompchoise){
         p.innerText=" Game  Draw ."
         div.style.backgroundColor="red";
     }else{
        let userwin=true;
       if(userchoise==='Rock'){
        userwin=gencompchoise==="Paper"?false:true;
       }else if(userchoise==='Paper') {
       userwin= gencompchoise==='Scissor'? false:true;
       }
       else{
        userwin=gencompchoise==='Rock'? false:true;
       }
    showinner(userwin);
        
     }
    }
    let showinner=(userwin)=>{
       if(userwin===true){
        p.innerText="You  Win"
      div.style.backgroundColor="green";
      userscore++;
      y.innerText=userscore;
       }else{
        p.innerText="you Lose"
      div.style.backgroundColor="red";
      compscore++;
      c.innerText=compscore;
       }
    }


function compchoise(){
    let arr=['Rock','Paper','Scissor'];
    let randomchoise=Math.floor(Math.random()*3);
    return arr[randomchoise];
}