// Where the magic happens
var key = new Audio();
var key_collection = [
    "dowork.mp3"
];

setInterval(function(){
    key.src = key_collection[0];
    key.play();
}, 300000);