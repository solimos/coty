$('.save').on('click', function(){
	html2canvas($('.trump'), {
		onrendered: function(canvas) {
			var myImage = canvas.toDataURL('image/png');
			$('.lightbox').fadeIn(200);
			$('.cover').attr('src', myImage).fadeIn(200);
		}
	});
});

$('.close, .overlay').on('click', function(){
	$('.lightbox').css("display","none");
});

$('.behead').on('click', function(){
	$('.head').fadeToggle(200);
});


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');