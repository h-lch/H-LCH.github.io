var $li = $('.pingpairight ul li');
var $ul = $('.pingpairight ul');
var $btn = $('.refresh');
var timer = null,timer2 = null;
var flag = true;

// $ul.css('position','relative');

var liWidth = 122, liHeight = 109;
var iX = 0,iY = 0;

$li.each(function(i){
	iX = i%6;
	iY = parseInt(i/6);
	this.x = iX;
	this.y = iY;
	console.log(iX,iY);
	$(this).css({
		'position':'absolute',
		'left':iX*liWidth,
		'top':iY*liHeight
	});
});

$btn.click(function(){
	// clearInterval(timer);
	var sum = 0;
	
	if(flag){
		// flag = false;
		timer = setInterval(function(){


			$li.each(function(i){

				if( this.x+this.y== sum){
					$li.eq(i).css({
						'transform':'rotateY(180deg)',
						'transition':'0.6s'
					});
				}
			});
			sum++;

			if(sum==8){
				clearInterval(timer);
			}

		},150);

	}else{
		timer = setInterval(function(){


			$li.each(function(i){

				if( this.x+this.y== sum){
					$li.eq(i).css({
						'transform':'rotateY(360deg)',
						'transition':'0.6s'
					});
				}
			});
			sum++;

			if(sum==8){
				clearInterval(timer);
			}

		},150);
	}

	flag = !flag;
	

});

