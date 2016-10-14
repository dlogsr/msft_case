$whiteArtifact = $('.white-artifact');
$hButton = $('.hidden-toggle');
$rButton = $('.hidden-reload');
$bottom = $('.bottom');
bouncecheck = null;

window.addEventListener("load", function() { window. scrollTo(0, 0); });
document.addEventListener("touchmove", function(e) { e.preventDefault() });

window.scrollTo(0,1);

$whiteArtifact.pep();

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

$(document).ready(function(){
	if(page == "shop.html" || page == "checkin.html"){
		bouncecheck = setInterval(function(){
			position = $whiteArtifact.css("top");
			position = position.substr(0,position.length-2);
			if(position < -100){
				bounceback();
				console.log('bouncing');
				position = 0;
				clearInterval(bouncecheck);
			}
		},500)
	};
	$hButton.on('tap',function(){
		$bottom.text("");
		$whiteArtifact.animate({top:'-300'},0)
		if(bouncecheck){
			clearInterval(bouncecheck);
		};
		setTimeout(function(){
			bounceback();
		},1000);
	});
	$rButton.on('tap',function(){
		console.log('reload');
		location.reload();
	}); 
});

function bounceback(){
		// $whiteArtifact.data('plugin_pep').revert();
		$whiteArtifact.removeAttr('style');
		$whiteArtifact.animate({top:'-300'},0)
		setTimeout(function(){
			if(page == "shop.html"){
				console.log("coupontime");
				$whiteArtifact.removeClass('art-shop');
				$whiteArtifact.addClass('art-coupon');
				$bottom.text("GOT COUPON!");
			}
			else if(page == "checkin.html"){
				$whiteArtifact.removeClass('art-checkin');
				$whiteArtifact.addClass('art-checkin-done');
				$bottom.text("CHECKED IN!");
			}
			else if(page == "lecture.html"){
				$bottom.text("RECEIVED LECTURE");
			}
			else if(page == "pay.html"){
				$bottom.text("RECEIVED MONEY");
			}
			$whiteArtifact.animate({top:'+=600'},1000,"easeOutExpo");
		},500);
}