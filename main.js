



//              Timer


//             *Legend*
let startBtn = document.getElementById("btnStart");
let stopBtn = document.getElementById("btnStop");

let focusMin = document.getElementById("focusMinutes");
let focusSec = document.getElementById("focusSeconds");

let finishSound = new Audio('Mp3-alarm-clock.mp3')





// Setting **
let focusSettingM = document.getElementById("focusSettingMinutes");
let focusSettingS = document.getElementById("focusSettingSeconds");

let smallSettingM = document.getElementById("smallSettingMinutes");
let SmallSettingS = document.getElementById("smallSettingSeconds");

let LongSettingM = document.getElementById("longSettingMinutes");
let LongSettingS = document.getElementById("longSettingSeconds");


var counting;




$("#btnStart").click(function(){
    if(counting === undefined){
        counting = setInterval(focusTimer,1000);
        $("#playBtn").removeClass();
        $("#playBtn").addClass("fas fa-pause");
        $("#focusStance").text("Playing");
        
    }
    else if ($("#playBtn").hasClass("fas fa-pause")){
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        counting=undefined;
        $("#focusStance").text("Paused");
    }
});

$("#btnStop").click(function(){
    if(counting || counting == undefined){
        clearInterval(counting);
        focusMin.innerText = 20;
        focusSec.innerText = '00';
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
        
    }
});



function focusTimer(){
    if(focusSec.innerText != 0){
        focusSec.innerText--;

    } else if (focusMin.innerText != 0 && focusSec.innerText == 0){
        
        focusSec.innerText = 59;
        focusMin.innerText--;
    } else if ( focusMin.innerText == 0 && focusSec.innerText == 0){
        finishSound.play()
    }

}




window.onload=function(){
    $("#focusBtn").click();
    }


$("#focusBtn").click(() =>{
    $("#focusBtn").css("background-color","rgb(255, 100, 110)")
    $("#smallBreakBtn").css("background-color","rgb(255, 180, 185)")
    $("#longBreakBtn").css("background-color","rgb(255, 180, 185)")
});
$("#smallBreakBtn").click(() =>{
    $("#smallBreakBtn").css("background-color","rgb(255, 100, 110)")
    $("#focusBtn").css("background-color","rgb(255, 180, 185)")
    $("#longBreakBtn").css("background-color","rgb(255, 180, 185)")
});
$("#longBreakBtn").click(() =>{
    $("#longBreakBtn").css("background-color","rgb(255, 100, 110)")
    $("#focusBtn").css("background-color","rgb(255, 180, 185)")
    $("#smallBreakBtn").css("background-color","rgb(255, 180, 185)")
});



//          Modal Shows

$("#configBtn").click(function(){
    if($("#configBtn")){
        $(".modal-settings").css("display","flex")
    }
});
$("#closeBtn").click(function(){
    if($("#configBtn")){
        $(".modal-settings").css("display","none")
    }
});




















//          Timer


/*
const startingMinutes = 2;
let time = startingMinutes * 60;
let playBtn = $("#playBtn");
let pauseBtn = $("#pauseBtn");

// Clock Path
const countdownEl = document.getElementById("clock");



// Countdown
function updateCountDown() {
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Time below 0
    time = time < 0 ? 0 : time; 

    // Removing additional 0
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Displaying
    countdownEl.innerHTML = `${minutes} : ${seconds}`;

    time--;
    if (time < 0){
        console.log("1")
    }
    

    
}




$("#btnStart").click(function(){
    if($("#btnStart").focus()){
        setInterval(updateCountDown , 1000)
        $("#playBtn").removeClass();
        $("#playBtn").addClass("fas fa-pause");
    }else{
        
    }
});
$("#btnStop").click(function(){
    if($("#btnStop")){
        time = 0;
        $("#playBtn").removeClass();
        $("#playBtn").addClass("fas fa-play");
    }
});
*/