

$(window).load(function(){
	var t = document.getElementById('body');
	t.addEventListener("touchmove", function(e){
		e.preventDefault();
	});
	(function(){ 
		var startX,startY,endX,endY,moveLength;
		var el = document.getElementsByClassName("works-box"); 
		//获取点击开始的坐标
		for(var i=0;i<el.length;i++){
			el[i].addEventListener("touchstart", function (e){
			var w=parseInt($(this).css('left'));//获得标签当前left数值
			startX = e.touches[0].pageX;
			startY = e.touches[0].pageY;
			this.addEventListener("touchmove", function (e){
			var nowX=e.touches[0].pageX-startX;//移动距离
    			if(parseInt(nowX)>=0){
    				$(this).css('left',w+nowX+'px');//div移动相应距离
    			}else{
    				$(this).css('left',w+nowX+'px');//div移动相应距离
    			};
    		}); 
    		this.addEventListener("touchend", function (e){
    			var z=$(this).children('.work-list').length;
    			var t=parseInt($('.work-list').width())*z;
    			var u=parseInt($('.works-box').width());
    			var nowT=t-parseInt($('.work-list').width());
    			var q=parseInt($(this).css('left'));//获得标签当前left数值
    			if(q>=0){
    				$(this).css('left','0px');//当鼠标释放，如果左侧无内容则恢复原位
    			}else if(q<(nowT*-1)){
    				$(this).css('left',nowT*-1+'px');//当鼠标释放，如果右侧无内容则恢复原位
    			}; 
    		});
		}); 
		}
		})(); 
//	$('.works-box').mousedown(function(e){
//			
//			var w=parseInt($(this).css('left'));//获得标签当前left数值
//			var x = e.clientX;//当前鼠标x轴位置
//  		$(this).mousemove(function(e){
//  			var nowX=e.clientX-x;//移动距离
//  			if(parseInt(nowX)>=0){
//  				$(this).css('left',w+nowX+'px');//div移动相应距离
//  			}else{
//  				$(this).css('left',w+nowX+'px');//div移动相应距离
//  			};
//  		}); 
//  		$(this).mouseup(function(){
//  			var z=$(this).children('.work-list').length;
//  			var t=parseInt($('.work-list').width())*z;
//  			var nowT=t-parseInt($('.work-list').width());
//  			var q=parseInt($(this).css('left'));//获得标签当前left数值
//  			if(q>=0){
//  				$(this).css('left','0px');//当鼠标释放，如果左侧无内容则恢复原位
//  			}else if(q<(nowT*-1)){
//  				$(this).css('left','0px');//当鼠标释放，如果右侧无内容则恢复原位
//  			};
//  			$(this).unbind('mousemove'); 
//  		});
//		});

		






	var w=$('.header-body img').width();
	$('.header-body img').height(w);
	if($('body').width()<=420){
		$('html').css('font-size','14px');
//		$('.top').addClass('top-shrink1');
		$('.header-jl').css('font-size','0.8rem');
	}else if($('body').width()<=520){
		$('html').css('font-size','18px');
//		$('.top').addClass('top-shrink2');
	}else if($('body').width()<=640){
		$('html').css('font-size','22px');
//		$('.top').addClass('top-shrink');
	}else{
//		$('.top').addClass('top-shrink');
	};
	var h=$('.about-me-right').height();
	$('.contant-list-left img').css('line-height',h+'px');
	
	var h=$('.about-me-right').height();
		$('.about-me').height(h+'px');
	var w=$('.jineng-right').height();
		$('.jineng').height(w+'px');
		
	$('.top-gd').click(function(){
	if($('body').width()<=420){
		$('.top').toggleClass('top-shrink1');
	}else if($('body').width()<=520){
		$('.top').toggleClass('top-shrink2');
	}else if($('body').width()<=640){
		$('.top').toggleClass('top-shrink');
	}else{
		$('.top').toggleClass('top-shrink');
	};
	$('.top').addClass('s-hui')
});
	$('s-hui').click(function(){
		$('.top').removeClass('top-shrink');
		$('.top').removeClass('top-shrink1');
		$('.top').removeClass('top-shrink2');
		$('.top').removeClass('s-hui');
	})
		
});
$(window).resize(function(){
	var w=$('.jineng-right').height();
		$('.jineng').height(w+'px');
	var h=$('.about-me-right').height();
	$('.about-me').height(h+'px');
	var w=$('.header-body img').width();
	$('.header-body img').height(w);
	if($('body').width()<=420){
		$('html').css('font-size','14px');
//		$('.top').addClass('top-shrink1');
		$('.header-jl').css('font-size','0.8rem');
	}else if($('body').width()<=520){
		$('html').css('font-size','18px');
//		$('.top').addClass('top-shrink2');
	}else if($('body').width()<=640){
		$('html').css('font-size','22px');
		
//		$('.top').addClass('top-shrink');
	}else{
//		$('.top').addClass('top-shrink');
	};
	
	
});
$(window).ready(function(){
	var h=$('.about-me-right').height();
	$('.about-me').height(h+'px');
	var w=$('.jineng-right').height();
		$('.jineng').height(w+'px');
});
$('.top-logo').ready(function(){
	var h=$('.top-logo').innerHeight();
	var p=parseInt($('.top-logo').css('padding-top'));
	var hp=h-2*p;
	$('.t-top').height(hp)
});

