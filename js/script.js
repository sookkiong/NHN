$(document).ready(function(){

AOS.init();

$(".goside").on("click",function(){
	$("#sideinfo").fadeIn(300);
});

$(".closeinfo").on("click",function(){
	$("#sideinfo").fadeOut(300);
});

$(".lang").on("click",function(){
	$(".lang_sub").fadeToggle(300);

});

// .gnb li hover
$(".gnb li").on("mouseover",function(){
	$(this).stop().addClass("on");
});
$(".gnb li").on("mouseout",function(){
	$(this).stop().removeClass("on");
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


$(".slide-contents").slick({
	dots:true,
	arrows:false,
	autoplay:true,
	pauseOnHover:false,
	pauseOnFocus:false,
	pauseOnDotsHover:false,
	lazyLoad:'progressive',
	speed:1000,
	autoplaySpeed:1700
});


var slider=$(".slide-contents");
var timer;

$(window).on('load resize',function(){         
    clearTimeout(timer);          
    timer = setTimeout(sliderResponsive(), 100); 
})

function sliderResponsive(){         
    if($(window).width() < 1330){             
        slider.filter('.slick-initialized').slick('unslick');  
    } else{             
        slider.not('.slick-initialized').slick({                
            dots:true,
			arrows:false,
			autoplay:true,
			pauseOnHover:false,
			pauseOnFocus:false,
			pauseOnDotsHover:false,
			lazyLoad:'progressive',
			speed:1000,
			autoplaySpeed:1700           
        });                         
    }       
}


//사이드 메뉴 뉴스 마우스오버
$(".news_contents li").on("mouseover",function(){
	$(".news_contents li").removeClass("alert");
	$(this).addClass("alert");

});






});