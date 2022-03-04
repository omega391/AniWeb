var sound = new Howl ({
   src:['media/jazz.mp3'],
   volume: 0.2,
   loop:true,

});
var music = document.getElementById("bg_music");
$(document).ready(function() {
    // document is loaded and DOM is ready
  sound.play();
   display_c();



});

function pauseAudio() {
    if(sound.playing(true)){
        sound.pause();
    }else{
        sound.play();
    }
}

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }
