var min=0;
var sec=0;
var msec=0;

var minHeading= document.getElementById("min");
 var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function timer()
{
    msec++
    msecHeading.innerHTML = msec

    if(msec>=100)
    {
        sec++
        secHeading.innerHTML=sec
        msec=0
        msecHeading.innerHTML = msec
        
    
        
    }
    else if(sec>=60)
    {
        min++
        minHeading.innerHTML = min
        sec=0
        secHeading.innerHTML=sec
    }
}

function start()
{
    interval = setInterval(timer,10);
    document.getElementById("st").disabled = true;

}
function pause()
{
    clearInterval(interval);
    document.getElementById("st").disabled = false;

}
function restart(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    document.getElementById("st").disabled = false;
    clearInterval(interval);
}

