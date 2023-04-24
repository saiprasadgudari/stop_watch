let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');

let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let count = 0;
let timer = false;
let lapCount = 0;
let startTimer = false;


startButton.addEventListener('click',function(){
    lapButton.disabled = false;
    startTimer = true;
    timer=true;
    stopWatch();
})
stopButton.addEventListener('click',function(){
    timer=false;

})
resetButton.addEventListener('click',function(){
    startTimer = false;
    lapCount = 0;
    timer=false;
    document.getElementById('display').innerHTML='00:00:00:00'
    const myNode = document.getElementById("laps");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }

})
lapButton.addEventListener('click',function(){
    if(startTimer){
        if(timer){ // if the timer is running, add a new lap
            lapCount++;
            let lapstr = document.getElementById('display').innerHTML;
            const d = document.createElement("div");
            d.innerHTML = `${lapCount}   ${lapstr}`;
            d.style.fontFamily = 'Verdana';
            document.getElementById('laps').style.overflow=scroll;
            document.getElementById('laps').appendChild(d);
        } else { // if the timer is stopped, add only one lap and disable the lap button
            lapCount++;
            let lapstr = document.getElementById('display').innerHTML;
            const d = document.createElement("div");
            d.innerHTML = `${lapCount}   ${lapstr}`;
            d.style.fontFamily = 'Verdana';
            document.getElementById('laps').style.overflow=scroll;
            document.getElementById('laps').appendChild(d);
            lapButton.disabled = true;
        }
    }
})

function stopWatch(){
    if(timer){
        count++;
        if(count == 100){
            seconds++;
            count=0;
        }
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        if(minutes == 60){
            hour++;
            minutes = 0;
        }
        let hstring = hour < 10?"0"+hour:hour;
        let mstring = minutes<10?"0"+minutes:minutes;
        let sstring = seconds<10?"0"+seconds:seconds;
        let mistring = count;
        document.getElementById('display').innerHTML = `${hstring} : ${mstring} :${sstring}:${count}ms`
        setTimeout(stopWatch,10);
    }
}