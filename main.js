



//              Timer


//             *Legend*
let startBtn = document.getElementById("btnStart");
let stopBtn = document.getElementById("btnStop");

let focusMin = document.getElementById("focusMinutes");
let focusSec = document.getElementById("focusSeconds");

let finishSound = new Audio('Mp3-alarm-clock.mp3')





//             *Setting Legend*
let focusSettingM = document.getElementById("focusSettingMinutes");
let focusSettingS = document.getElementById("focusSettingSeconds");

let smallSettingM = document.getElementById("smallSettingMinutes");
let smallSettingS = document.getElementById("smallSettingSeconds");

let longSettingM = document.getElementById("longSettingMinutes");
let longSettingS = document.getElementById("longSettingSeconds");


// Start Counting
var counting;



// Play Button
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

// Stop Button

$("#btnStop").click(function(){
    if(counting || counting == undefined){
        clearInterval(counting);
        focusMin.innerText = 20;
        focusSec.innerText = '00';
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Restart");
        
    }
});

// Counting Mechanics

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


// Css on LoadPage

window.onload=function(){
    $("#focusBtn").click();
    }


//              Buttons for Type of Timer

$("#focusBtn").click(() =>{
    $("#focusBtn").css("opacity","0.5");
    $("#smallBreakBtn").css("opacity","1");
    $("#longBreakBtn").css("opacity","1");

   if ($("#focusBtn")){
       //change Value
    focusMin.innerText = focusSettingM.value;
    focusSec.innerText = focusSettingS.value;
    clearInterval(counting);
    $("#playBtn").addClass("fas fa-play");
    $("#focusStance").text("Paused");
   }
});
$("#smallBreakBtn").click(() =>{
    $("#smallBreakBtn").css("opacity","0.5");
    $("#focusBtn").css("opacity","1");
    $("#longBreakBtn").css("opacity","1");
    

    if ($("#focusBtn")){
        //change Value
        focusMin.innerText = smallSettingM.value;
        focusSec.innerText = smallSettingS.value;
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
       }
});
$("#longBreakBtn").click(() =>{
    $("#longBreakBtn").css("opacity","0.5");
    $("#focusBtn").css("opacity","1");
    $("#smallBreakBtn").css("opacity","1");


    if ($("#focusBtn")){
        //change Value
        focusMin.innerText = longSettingM.value;
        focusSec.innerText = longSettingS.value;
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
       }
});


//           Update value of timer on exit module click


$("#closeBtn").click( () => {
    if ( $("#focusBtn").css("opacity") === ("0.5")){
        focusMin.innerText = focusSettingM.value;
        focusSec.innerText = focusSettingS.value;  
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
    }
    else if ( $("#smallBreakBtn").css("opacity") === ("0.5")){
        focusMin.innerText = smallSettingM.value;
        focusSec.innerText = smallSettingS.value;  
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
    }
    else if ( $("#longBreakBtn").css("opacity") === ("0.5")){
        focusMin.innerText = longSettingM.value;
        focusSec.innerText = longSettingS.value;  
        clearInterval(counting);
        $("#playBtn").addClass("fas fa-play");
        $("#focusStance").text("Paused");
    }
});

//              purpleBluecolor theme

$(".purpleBlue").click( () =>{
    if ($("#pB")){
        $("body").css("background", "#42378f")
        $("h1").css("color" , "#01ced1")
        $(".typeFocus").css("color","black")
        $("#focusBtn").css("background" , "#01ced1")
        $("#smallBreakBtn").css("background" ,"#01ced1" )
        $("#longBreakBtn").css("background" , "#01ced1")
        $(".timeField").css({background:'radial-gradient(circle, rgb(118,99,248) 20% , #01ced1 80%)'});
        $(".timeField").css("box-shadow","0 0 5px 5px rgb(106, 84, 253), 0 0 5px 5px rgb(161, 148, 247)");
        $(".clockTimer").css("color","black")
        $(".mediaBtn").css("background","#01ced1")
        $(".mediaBtn").css("color","white")
        $(".mediaBtn").css("text-shadow","#000000 1.4px 1.4px")
        $(".mediaBtn").css("box-shadow","inset 5px 5px 10px rgb(119,31,37),inset -5 -5 10px rgb(119,31,37)");
        $("#configBtn").css("color","#01ced1")

    }

})
//              blackWhite color theme

$(".blackWhite").click( () =>{
    if ($("#bW")){
        $("body").css("background", "#000000")
        $("h1").css("color" , "#888888")
        $(".typeFocus").css("color","black")
        $("#focusBtn").css("background" , "#ffffff")
        $("#smallBreakBtn").css("background" ,"#ffffff" )
        $("#longBreakBtn").css("background" , "#ffffff")
        $(".timeField").css({background:'radial-gradient(circle, #ffffff 20% , #000000 80%)'});
        $(".timeField").css("box-shadow","0 0 5px 5px #ffffff, 0 0 5px 5px #ffffff");
        $(".clockTimer").css("color","black")
        $(".mediaBtn").css("background","#ffffff")
        $(".mediaBtn").css("color","black")
        $(".mediaBtn").css("text-shadow","#000000 1.4px 1.4px")
        $(".mediaBtn").css("box-shadow","inset 5px 5px 10px #ffffff,inset -5 -5 10px #ffffff");
        $("#configBtn").css("color","white")
    }

})
//              redGray color theme

$(".redGray").click( () =>{
    if ($("#rG")){
        $("body").css("background", "#9c9999")
        $("h1").css("color" , "#990303")
        $(".typeFocus").css("color","white")
        $("#focusBtn").css("background" , "#990303")
        $("#smallBreakBtn").css("background" ,"#990303" )
        $("#longBreakBtn").css("background" , "#990303")
        $(".timeField").css({background:'radial-gradient(circle, #990303 20% , #9c9999 80%)'});
        $(".timeField").css("box-shadow","0 0 5px 5px #ffffff, 0 0 5px 5px #ffffff");
        $(".clockTimer").css("color","white")
        $(".mediaBtn").css("background","#990303")
        $(".mediaBtn").css("color","white")
        $(".mediaBtn").css("text-shadow","#990303 1.4px 1.4px")
        $(".mediaBtn").css("box-shadow","inset 5px 5px 10px #990303,inset -5 -5 10px #ffffff");
        $("#configBtn").css("color","#990303")
    }

})
//              greenYellow color theme

$(".greenYellow").click( () =>{
    if ($("#gY")){
        $("body").css("background", "#f7f14a")
        $("h1").css("color" , "#00a608")
        $(".typeFocus").css("color","black")
        $("#focusBtn").css("background" , "#00a608")
        $("#smallBreakBtn").css("background" ,"#00a608" )
        $("#longBreakBtn").css("background" , "#00a608")
        $(".timeField").css({background:'radial-gradient(circle, #f7f14a 20% , #00a608 80%)'});
        $(".timeField").css("box-shadow","0 0 5px 5px #00a608, 0 0 5px 5px #ffffff");
        $(".clockTimer").css("color","black")
        $(".mediaBtn").css("background","#00a608")
        $(".mediaBtn").css("color","white")
        $(".mediaBtn").css("text-shadow","#00a608 1.4px 1.4px")
        $(".mediaBtn").css("box-shadow","inset 5px 5px 10px #00a608,inset -5 -5 10px #ffffff");
        $("#configBtn").css("color","#00a608")
    }

});

//             FONT SIZE CHANGER BTN


$(".bigBtnSize").click( () =>{
    $("html").css("font-size", "100%")



})


$(".mediumBtnSize").click( () =>{
    $("html").css("font-size", "90%")



})


$(".smallBtnSize").click( () =>{
    $("html").css("font-size", "80%")



})















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