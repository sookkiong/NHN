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


// 상세페이지 닫기
$(".tn_close").on("click",function(){
	$(".tag_in").fadeOut();

});

//사이드 메뉴 뉴스 마우스오버
$(".news_contents li").on("mouseover",function(){
	$(".news_contents li").removeClass("alert");
	$(this).addClass("alert");

});

//상세페이지 작동
$("#go1, #go5, #go8, #go12, #go14, #go16, #go18").on("click",function(){
	$("#tag_in1").fadeIn();
});


$("#go2, #go3, #go4").on("click",function(){
	$("#tag_in2").fadeIn();
});
$("#go2_m, #go3_m, #go4_m").on("click",function(){
	$("#tag_in2").fadeIn();
});

$("#go6, #go7, #go15").on("click",function(){
	$("#tag_in3").fadeIn();
});
$("#go6_m, #go7_m, #go15_m").on("click",function(){
	$("#tag_in3").fadeIn();
});

$("#go9, #go10, #go11, #go13, #go17, #go19").on("click",function(){
	$("#tag_in4").fadeIn();
});
$("#go9_m, #go10_m, #go11_m, #go13_m, #go17_m, #go19_m").on("click",function(){
	$("#tag_in4").fadeIn();
});





})