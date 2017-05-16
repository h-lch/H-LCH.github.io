	// const lis = document.querySelectorAll(".xuanxiangka li");
	// const div = document.querySelectorAll(".xuanxiangka li div");
	// const div = document.querySelectorAll(".xuanxiangka dl dt");

	function $(select,obj=document){
		if(typeof select == "function"){
			window.onload=function(){
				select();
			}
		}else if(typeof select == "string"){
			return obj.querySelectorAll(select);
		}
	}



	/* 选项卡
		xuanxiangka(btn,con)
		btn 按钮
		con 内容
	*/
function xuanxiangka(btn,con){
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<con.length;j++){
				con[j].style.display="none"
			}			
			con[i].style.display="block"
		}
		btn[i].onmouseout=function (){
			con[i].style.display="none"
		}
	}	
}
	// xuanxiangka(lis,div)

	/* 遮罩
		zhezhao(btn,con)
		btn 按钮
		con 内容
	*/

	// const box=document.querySelectorAll(".box");
	// const zz=document.querySelectorAll(".zhezhao");

	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}

	}
	/* 层级轮播
			Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor)

			pic 				轮播图片(string类型的选择器)
			bigbannerBox 		通屏的banner盒子(string类型的选择器)
			lis 				轮播点(string类型的选择器)
			colorArr			通屏的banner盒子的所有颜色(元素为颜色的数组["red","blue","green"]);
			tuactiveZ  			第一个轮播图的变化后的优先级
			liactivebgColor		激活时的第一个轮播点的颜色
			lunboTime			轮播点变化的时间(每一秒轮播一回)
			tuZ                 轮播图的原始优先级
			lisColor            轮播点的原始颜色
			*/
			var lunboTime=1000;
			function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor){
				const tu = $(pic);
				const banner = $(bigbannerBox)[0];
				const li = $(lis);
				const color = colorArr;
				
				tu[0].style.zIndex=tuactiveZ;
				li[0].style.backgroundColor=liactivebgColor;
				banner.style.backgroundColor=color[0];
				var num = 0;
				var t = setInterval(move,lunboTime);
				banner.onmouseover=function(){
					clearInterval(t);
				}
				banner.onmouseout=function(){
					t = setInterval(move,lunboTime);
				}
			
				for(let j =0;j<li.length;j++){

					li[j].onmouseover=function(){
						for(let i = 0; i < tu.length; i ++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=lisColor;
						banner.style.backgroundColor=color[0];
						}
						tu[j].style.zIndex=tuactiveZ;
						li[j].style.backgroundColor=liactivebgColor;
						banner.style.backgroundColor=color[j];
						num = j;
					}				
				}

				function move(){
					num++;
					if(num>tu.length-1){
						num = 0;
					}
					for(let i = 0; i < tu.length; i ++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=lisColor;
					}
					tu[num].style.zIndex=tuactiveZ;
					li[num].style.backgroundColor=liactivebgColor;
					banner.style.backgroundColor=color[num];
				}
			}

/* 左右轮播
	lrCarousel(pic,imgBox,leftBtn,rightBtn,lis)

	pic 				轮播图片(string类型的  选择器)
	imgBox 				轮播图片所在的盒子
	leftBtn  			左按钮  
	rightbtn  			右按钮
	lis 				轮播点   (string类型的  选择器)
	lunboTime     		轮播的时间
	lisColor			轮播点的原始颜色
	liactivebgColor		显示第一个轮播点激活的颜色 
*/
	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);

		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].style.backgroundColor=liactivebgColor;
		//开始轮播
		var t= setInterval(move,lunboTime);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				animate(tu[now],{left:imgW},500);
			}
			
			
			
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true;
					li[next].style.backgroundColor=liactivebgColor;
					li[now].style.backgroundColor=lisColor;
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t= setInterval(move,lunboTime);
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		//鼠标移到轮播点上的效果
		for(let i = 0; i < tu.length; i ++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					//
					for(let j = 0; j < tu.length; j ++){
						li[j].style.backgroundColor=lisColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor=liactivebgColor;
					now = i;
					next = i;
				}															
			}
		}
	}
			

// 透明度轮播图函数的封装
// pic            轮播图  （字符串的选择器）  
// bigbannerBox   通屏的banner盒子  （字符串的选择器）
// lis            轮播点   （字符串的选择器）
// colorArr     通屏banner盒子的所有颜色   (数组["red","blue"])
// second         轮播图变化的时间 
// tuactiveZ      轮播图获得焦点之后的层级
// liactivebgcolor轮播点获得焦点之后的颜色
// tuZ            轮播图的默认 颜色
// liscolor       轮播点的默认颜色

function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor,zuojiant,youjiant){
	const tu = $(pic);
	const banner = $(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftBtn=$(zuojiant)[0];
	const rightBtn=$(youjiant)[0];
	// 给出初始值
	// tu[0].style.zIndex=tuactiveZ;
	tu[0].style.opacity=1;
	li[0].style.backgroundColor=liactivebgcolor;
	banner.style.backgroundColor=color[0];
	var num = 0;
	flag=true;
	var t = setInterval(move,second);
	// 轮播点的变化
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			// 回到默认样式
			for(let i=0;i<tu.length;i++){
				// tu[i].style.zIndex=tuZ;
				tu[i].style.opacity=0;
				li[i].style.backgroundColor=liscolor
			}
			// 提高层级，轮播点变颜色，banner背景也跟着变颜色
			// tu[j].style.zIndex=tuactiveZ;
			animate(tu[j],{opacity:1},1000);
			li[j].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[j];
			num=j;
		}
	}
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t = setInterval(move,second);
	}
	
	// 点击左箭头
	leftBtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	console.log(leftBtn)	
	// 点击右箭头
	rightBtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	
	// 轮播图的变化，把他封装到一个函数中
	function move(type="l"){
		flag=false;
		// 开关是判断左箭头还是右箭头
		if(type=="l"){
			num++;
			if(num>tu.length-1){
			num=0;
			}
		}else if(type=="r"){
			num--;
			if(num<0){
			num=tu.length-1;
			}
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=0;
			li[i].style.backgroundColor=liscolor;
			}
		// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.backgroundColor=liactivebgcolor;
		banner.style.backgroundColor=color[num];
	}
}



	/*
	获得obj元素的style   (width、heithg等) 样式只 
	attrn(obj,style)
	attrn:获取谁的样式   obj:获取谁的样式 类型：DOM元素
						style  类型：string   
	*/
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}


	//下拉导航

		function xldaohang(items,itemsul){
		const item = $(items);
		const ul = $(itemsul);
		for(let i=0;i<ul.length;i++){
			let h = parseInt(attr(ul[i],"height"));
			ul[i].setAttribute("h",h);//保存，给ul设置H属性
			ul[i].style.height=0;
		}
		for(let i=0;i<item.length;i++){
			hover(item[i].onmouseover=function(){
				let ul =item[i].children[2];
				if(item[i].children[2]){
					animate(ul,{height:ul.getAttribute("h")},500);
				}
			},item[i].onmouseout=function(){
					let ul =item[i].children[2];
					if(item[i].children[2]){
						animate(ul,{height:0},500);
					}
				});
		}
		
	};
		
	
