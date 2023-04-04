var names=new Array();
names[0]="Abigail";
names[1]="John";
names[2]="Jenny";
names[3]="jack";
names[4]="paula";
names[5]="franky";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jimbo";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
