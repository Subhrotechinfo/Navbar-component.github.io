$(document).ready(function (){
				 
		$('.projects').hide();

		$('.link1').mouseenter(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			$(this).text('Hi');
		});
		$('.link1').mouseleave(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			$(this).text('goodbye');
		});
		
		$('.logo').hover(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			 $(this).css("cursor","pointer"); 
		});
		
		$('li a').mouseenter(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			$(this).css("color","#ccffff");
		});
		$('li a').mouseleave(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			$(this).css("color","#f2f2f2")
		});
		$('.link2').mouseenter(function(event) {
			// "cursor","pointer"
			event.preventDefault();
			$(this).text('ClickMe');
		});

});