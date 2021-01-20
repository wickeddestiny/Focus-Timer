
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



const startingMinutes = 10;
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
    time--
    setInterval(updateCountDown , 1000)

    
}
$("#btnStart").click(function(){
    if($("#btnStart")){
        updateCountDown()
        $("#playBtn").removeClass();
        $("#playBtn").addClass("fas fa-pause");
    }else{

    }
});
$("#btnStop").click(function(){
    if($("#btnStop")){
        time=0;
        $("#playBtn").removeClass();
        $("#playBtn").addClass("fas fa-play");
    }
});

