let [millisec,sec,min,hours]=[0,0,0,0];
let timeDis=document.querySelector(".time-display");
let interval=null;
let strTime=document.querySelector("#start-time");    //start-timer
strTime.addEventListener("click", () => {
    if(interval!==null){
        clearInterval(interval);
    }
    interval=setInterval(displayTimer,10);
});

function displayTimer(){
    millisec+=10;
    sec=millisec==1000?(sec+1)%60:sec;
    min=sec==0 && millisec==0?(min+1)%60:min;
    hours=min==0 && sec==0 && millisec==0?(hours+1)%60:hours;
    millisec=millisec==1000? 0:millisec;

    let h=String(hours).padStart(2,"0");
    let m=String(min).padStart(2,"0");
    let s=String(sec).padStart(2,"0");
    let ms=String(millisec).padStart(4,"0");

    timeDis.innerHTML=`${h}:${m}:${s}:${ms}`;
    console.log("its work");
}

let pause=document.querySelector("#pause-timer");     //pause the-timer
pause.addEventListener("click", ()=>{
    clearInterval(interval);
    console.log("its work pause");
});
let reset=document.querySelector("#reset-time");    //reset the time
reset.addEventListener("click", ()=>{
    clearInterval(interval);
    console.log("reset work");
    [millisec,sec,min,hours]=[0,0,0,0];
    timeDis.innerHTML="00:00:00:000";
});
