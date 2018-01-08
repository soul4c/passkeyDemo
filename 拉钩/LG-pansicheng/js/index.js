$('.nav_find,.nav_job,.nav_main').on('click',function(){
	$(this).addClass('nav_focus').siblings().removeClass('nav_focus');
})
$('.nav_find').on('click',function(){
	$('.nav_job>span').css('background-position','-32px -2px');
	$('.nav_find>span').css('background-position','-14px -20.5px');
	$('.nav_main>span').css('background-position','-52.2px -2px');
})
$('.nav_job').on('click',function(){
	$('.nav_job>span').css('background-position','-32px -20.5px');
	$('.nav_find>span').css('background-position','-14px -2px');
	$('.nav_main>span').css('background-position','-52.2px -2px');
})
$('.nav_main').on('click',function(){
	$('.nav_job>span').css('background-position','-32px -2px');
	$('.nav_find>span').css('background-position','-14px -2px');
	$('.nav_main>span').css('background-position','-52.2px -20.5px');
})
$('footer>p>a').on('click',function(){
	$('body').scroll('0')
})
