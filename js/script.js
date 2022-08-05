$(document).ready(function() {
	
	/*SLIDER*/
	$('.slider').each(function() {
		var $this = $(this);
		var $group = $this.find('.slide_group');
		var $slides = $this.find('.slide');
		var bulletArray = [];
		var currentIndex = 0;
		  
		function move(newIndex) {
			var animateLeft, slideLeft;
			
			if ($group.is(':animated') || currentIndex === newIndex) {
				return;
			}
			
			bulletArray[currentIndex].removeClass('active');
			bulletArray[newIndex].addClass('active');
			
			if (newIndex > currentIndex) {
				slideLeft = '100%';
				animateLeft = '-100%';
			} else {
				slideLeft = '-100%';
				animateLeft = '100%';
			}
			
			$slides.eq(newIndex).css({
				display: 'block',
				left: slideLeft
			});
			
			$group.animate({
				left: animateLeft
			}, function() {
				$slides.eq(currentIndex).css({
					display: 'none'
				});
				
				$slides.eq(newIndex).css({
					left: 0
				});
				
				$group.css({
					left: 0
				});
				
				currentIndex = newIndex;
			});
		}
		  
		$.each($slides, function(index) {
			var $button = $('<a class="slide_btn">&bull;</a>');
			
			if (index === currentIndex) {
				$button.addClass('active');
			}
			
			$button.on('click', function() {
				move(index);
			}).appendTo('.slide_buttons');
			
			bulletArray.push($button);
		});
	});
	/*SLIDER*/
	
	/*MOBILE NAV*/
	$( ".has-dropdown" ).click(function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass("dropdown-open");
        if($(this).hasClass("dropdown-open")) {
            $(this).children().addClass("fa-angle-up");
            $(this).children().removeClass("fa-angle-down");
        } else {
            $(this).children().addClass("fa-angle-down");
            $(this).children().removeClass("fa-angle-up");
        }
    });

    $(".nav-icon4").click(function(){

        $(this).toggleClass('open1');
        $(this).toggleClass('openNav');
        $(this).toggleClass('closeNav');
        
        if($(this).hasClass("closeNav")) {
            $('#mySidenav').addClass('open');
            $('body').addClass('open-bg');
        } else {
			$('#mySidenav').removeClass('open');
            $('body').removeClass('open-bg');
        }
    });
	/*MOBILE NAV*/
});
