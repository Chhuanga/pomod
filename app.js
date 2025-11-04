const bells = new Audio('sounds/bell.wav');
const startBtn= document.querySelector('.btn-start')
const session=document.querySelector('.minutes');

let myInterval;
let state=true;

const appTimer=()=>{
    const sessionAmount= Number.parseInt(session.textContent);

    if (state){
        state=false;
        let totalSeconds=sessionAmount*60;

        const updateSeconds=()=>{
            //function code to be added.
        };
        myInterval=setInterval(updateSeconds,1000);
    }
    else{
        alert("Session is already running")
    }
    
}