 audioend = new Audio('endaudio.mp3');
 gameaudio = new Audio('strtaudio.mp3');

 setTimeout(() => {
 	gameaudio.play() ;
 },1000);

 let isJumping = false;
document.onkeydown = function(e){
console.log("the key code is: " , e.keyCode)
if ((e.keyCode==38 || e.keyCode==32) && !isJumping) {
	isJumping = true;
	alice=document.querySelector('.alice');
    alice.classList.add('jumpAlice');
    setTimeout(() =>{
    	alice.classList.remove('jumpAlice');
    	isJumping = false;
    },900);
	}
}

score=0;
cross = true;
function updatescore(score){
	scorecount.innerHTML = "YOUR SCORE : " + score;
}
setInterval (() => {
	alice = document.querySelector('.alice');
	gameover = document.querySelector('.gameover');
	welcome =document.querySelector('.welcome');
	den = document.querySelector('.den');

	ax = parseInt(window.getComputedStyle(alice , null).getPropertyValue('left'));
	ay = parseInt(window.getComputedStyle(alice, null).getPropertyValue('bottom'));

	dx = parseInt(window.getComputedStyle(den, null).getPropertyValue('left'));
	dy = parseInt(window.getComputedStyle(den, null).getPropertyValue('bottom'));

	offsetX = Math.abs(ax - dx);
	offsetY = Math.abs(ay - dy);
	//console.log(offsetX,offsetY);
	if( offsetX< 129 && offsetY< 50){

		gameover.style.visibility = 'visible';
		den.classList.remove('moveden');
		welcome.innerHTML ="Reload to PLAY AGAIN";
		audioend.play();
		gameaudio.pause();
		setTimeout(() => {
			audioend.pause();

		},3000);

	}else if (offsetX<50 && cross){
		score ++;
		updatescore(score);
		cross = false;
		setTimeout(() =>{
	                     cross = true;
                         },4000);
		
		 setTimeout(() => {
	                    speed=parseFloat(window.getComputedStyle(moveden, null).getPropertyValue('animation-duration'));
	                    incspeed = speed - 0.1
	                    den.style.animationDuration = incspeed - 's';
                        },5000);
	}

},1);






