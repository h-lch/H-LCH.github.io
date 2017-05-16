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
			
//层级轮播(背景也变)	
	function TMCarousel(pic,bigbannerBox,lis,colorArr,tuactiveO,liactivebgColor,lunboTime,tuO,lisColor){
		const tu = $(pic);
		const banner = $(bigbannerBox)[0];
		const li = $(lis);
		const color = colorArr;
		
		tu[0].style.opacity=tuactiveO;
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
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
				// banner.style.backgroundColor=color[0];
				}
				tu[j].style.opacity=tuactiveO;
				// animate(tu[j],{opacity:1},500);
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
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
			}
			tu[num].style.opacity=tuactiveO;
			// animate(tu[num],{opacity:1},500);
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.backgroundColor=color[num];
		}
	}




//解决scrollTop兼容性 
function scrollobj(){
		// let body=document.body;
		// let html=document.documentElement;
		// body.scrollTop=100;
		// html.scrollTop=100;
		// let obj;
		// if(body.scrollTop==0){
		// 	obj=html;
		// }else{
		// 	obj=body;
		// }
		// body.scrollTop=0;
		// html.scrollTop=0;
		// return obj;

		// 第二种方法
		document.body.scrollTop=100;
		document.documentElement.scrollTop=100;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;
		obj.scrollTop=0;
			return obj;

}


// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片   img
	// picurl  放图片的地址属性名   imgurl
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num){
	const btn=$(anniu);
	// console.log(btn);
	const section=$(Section);
	// console.log(section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		if(i<=btn.length-2){
			btn[i].onclick=function(){
				animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
			}
		}else{
			btn[i].onclick=function(){
				animate(scroll,{scrollTop:0},donghuaTime);
			}
		}
		
	}
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese[i];
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}
}







// 节点左右轮播
//box   放图的盒子
//dabox  放图盒子的盒子
function jdlunbo(box,zleftbtn,zrightbtn,dabox){
	const zybox=$(box)[0];  				 //获取ul的盒子
	const leftbtn=$(zleftbtn)[0];  			 //获取左按钮
	const rightbtn=$(zrightbtn)[0];   		//获取右按钮
	const zuoyouw=parseInt(window.getComputedStyle(document.querySelector(dabox),null).width);		//获取放ul盒子的宽度
	console.log(zuoyouw);

	let flag=true;   //定一个开关变量
	let n=1;		//在框内出现几张图
	var t = setInterval(move,2000);   //每一秒循环一次
	function move(type="l"){          //循环的内容
		flag=false;		//在刚循环的时候，开关就是关着的

		if(type=="l"){

			animate(zybox,{marginLeft:-zuoyouw},1000,function(){	
			// console.log(marginLeft);
				for(let i=0;i<n;i++){
					let first = zybox.firstElementChild;  //获取第一个元素
					zybox.appendChild(first);				//把第一个子元素放在父元素的最后面
				}
				zybox.style.marginLeft=0;		//动画完以后，ul的marginmarginLeft又恢复为零
				flag=true;					//动画完以后，开关为开着，才可点击
			});
		}else if(type=="r"){
			for(let i=0;i<n;i++){
				let first = zybox.firstElementChild;		//获取第一个元素
				let last = zybox.lastElementChild;			//获取最后一个元素
				zybox.insertBefore(last,first);				//把最后一个元素放在第一个元素之前
				zybox.style.marginLeft=-zuoyouw+"px";
															//ul盒子的marginmarginLeft在左边（在动画之前就先定位置，否则移动后，zuoyou盒子是空白的） 
			}
			animate(zybox,{marginLeft:0},1000,function(){
				flag=true;
			});
		}
	}

	zybox.onmouseover=function(){
		clearInterval(t);
	}
	zybox.onmouseout=function(){
		t=setInterval(move,1000);
	}
	leftbtn.onmouseover=function(){
		clearInterval(t);
	}
	leftbtn.onmouseout=function(){
		t=setInterval(move,1000);
	}
	leftbtn.onclick=function(){
		if(flag==true){
			move("r");
		}
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onmouseout=function(){
		t=setInterval(move,1000);
	}
	rightbtn.onclick=function(){
		if(flag==true){
			move("l");
		}
	}

};


//自动上下轮播
// 	const box=$(".juxing");//大盒子
// 	for(let i=0;i<box.length;i++){
// 			var t = setInterval(function(){
// 		let first = box[i].firstElementChild;
// 		animate(box[i],{marginTop:-30},500,function(){
// 		box[i].appendChild(first);
// 		box[i].style.marginTop=0;
// 	});
// },2000);

// }








	
