var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	document.getElementById('player1').play();
// 	console.log("Play Video");
// });

//play

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= document.querySelector("#slider").value +"%"
});

//pause

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

//slow

document.querySelector("#slower").addEventListener("click", function() {
	var speed = video.playbackRate;
	video.playbackRate = .95*speed;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	var speed = video.playbackRate;
	video.playbackRate = 1.05*speed;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var timespot = video.currentTime;
	var duration = video.duration;
	if (timespot < duration-15) {
		console.log("Original location" + video.currentTime);
		video.currentTime = timespot+15;
		console.log("New Location" + video.currentTime);
	} else {
		console.log("Original location" + video.currentTime);
		video.currentTime = 0;
		video.play();
		console.log(video.currentTime);
		console.log("New Location" + video.currentTime);
	}
});
	
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute Video")
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	} else {
		console.log("Unmute Video")
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		}
	});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML= document.querySelector("#slider").value +"%";
	});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML= document.querySelector("#slider").value +"%";
	});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});