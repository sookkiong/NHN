$(document).ready(function(){

AOS.init();

// .gnb li hover
$(".gnb li").on("mouseover",function(){
	$(this).stop().addClass("on");
});
$(".gnb li").on("mouseout",function(){
	$(this).stop().removeClass("on");
});


$(".goside").on("click",function(){
	$("#sideinfo").fadeIn(300);
});

$(".closeinfo").on("click",function(){
	$("#sideinfo").fadeOut(300);
});

$(".lang").on("click",function(){
	$(".lang_sub").fadeToggle(300);

});

//nav_bar 클릭 시 메뉴 등장
$(".nav_bar").on("click",function(){
	$(".nav_bar").css("background","none");
	$(".nav_bar_menu").show();
});

$(".nav_bar_s").on("click",function(){
	$(".nav_bar_s").hide();
	$(".nav_bar_menu_s").slideDown();
});

$(".down_link").on("mouseover",function(){
	$(".down_link").removeClass("dk_on");
	$(this).addClass("dk_on");
});

// go top
$(".go_top button").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});

//사이드 메뉴 뉴스 마우스오버
$(".news_contents li").on("mouseover",function(){
	$(".news_contents li").removeClass("alert");
	$(this).addClass("alert");

});





});