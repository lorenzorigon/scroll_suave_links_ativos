$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

$('.menu-nav a[href^="#"]').click(function (e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffSet = $(id).offset().top,
		menuHeight = $('.menu').innerHeight();

	$('html, body').animate({
		scrollTop: targetOffSet - menuHeight
	}, 500);

});

$('.logo').click(function (e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	},300);
});

$('section').each(function (){
	var height = $(this).height(),
		offSetTop = $(this).offset().top,
		menuHeight = $('.menu').innerHeight(),
		id = $(this).attr('id'),
		itemMenu = $('a[href="#' + id + '"]');

	$(window).scroll(function (){
		var scrollTop = $(this).scrollTop();
		if((offSetTop - menuHeight) < scrollTop && (offSetTop + height - menuHeight) > scrollTop){
			$(itemMenu).addClass('active');
		}else{
			$(itemMenu).removeClass('active');
		}
	});
});