$(document).ready(function(){
	intro();
	play();
});


function play(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-still").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "350px"},
			500,
			function(){
				$(this).hide();
				$(this).css("left", "-200px");
			}
		);
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
	
	$(document).keydown(function ( e ) {
		if (e.which === 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
	})
	.keyup(function ( e ) {
		if (e.which === 88) {
			$(".ryu-cool").hide();
			$(".ryu-ready").hide();
			$(".ryu-still").show();
			
		}
	});
}


function intro(){
	$(".logo-sf").fadeIn(2500, function() {
		$(this).fadeOut(1000, function() {
			$(".broughttoyou").fadeIn(1000, function () {
				$(this).fadeOut(1000, function() {
					$(".logo-jq").fadeIn(1000, function() {
						$(this).fadeOut(1000, function() {
							$(".instruction").fadeIn(1000);	
						})
					})
				})
			})
		})
	})
}


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


