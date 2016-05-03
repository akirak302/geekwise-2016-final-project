var html5_audiotypes={
	"mp3": "audio/mpeg",
	"wav": "audio/wav"
};

function createsoundbite(sound){
	var html5audio=document.createElement('audio');
	if (html5audio.canPlayType){ 
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source');
			sourceel.setAttribute('src', arguments[i]);
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1]);
			html5audio.appendChild(sourceel);
		}
		html5audio.load();
		html5audio.playclip=function(){
			html5audio.pause();
			html5audio.currentTime=0;
			html5audio.play();
		};
		return html5audio;
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}};
	}
}




var clickOne=createsoundbite("./drum/Perc_028.wav");
var clickTwo=createsoundbite("./drum/Perc_029.wav");
var clickThree=createsoundbite("./drum/Perc_030.wav");
var clickFour=createsoundbite("./drum/Perc_031.wav");
var clickFive=createsoundbite("./drum/Perc_032.wav");
var clickSix=createsoundbite("./drum/Perc_033.wav");
var clickSeven=createsoundbite("./drum/Perc_034.wav");
var clickEight=createsoundbite("./drum/Perc_035.wav");
var clickNine=createsoundbite("./drum/Perc_036.wav");
var clickTen=createsoundbite("./drum/Perc_037.wav");
var clickEleven=createsoundbite("./drum/Perc_038.wav");
var clickTwelve=createsoundbite("./drum/Perc_039.wav");
var clickThirteen=createsoundbite("./drum/Perc_040.wav");
