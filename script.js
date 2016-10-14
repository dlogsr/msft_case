$whiteArtifact = $('.white-artifact');
$hButton = $('.hidden-toggle');

window.addEventListener("load", function() { window. scrollTo(0, 0); });
document.addEventListener("touchmove", function(e) { e.preventDefault() });

window.scrollTo(0,1);

$whiteArtifact.pep();

$(document).ready(function(){
	$hButton.on('tap',function(){
		console.log('test');
		// $whiteArtifact.data('plugin_pep').revert();
		$whiteArtifact.removeAttr('style');
		$whiteArtifact.animate({top:'-300'},0)
		setTimeout(function(){
			
			$whiteArtifact.animate({top:'+=600'},1000,"easeOutExpo");
		},500);
	});
});