function $(select,obj=document){
	if(typeof select == "function"){
		window.onload=function(){
			select();
		}
	}else if(typeof select == "string"){
		return obj.querySelectorAll(select)
	}
}



//选项卡
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

function xxkk(btn,con){
		// he[0].style.color="#ff6700"
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let j=0;j<con.length;j++){
					con[j].style.display="none"
				}
				con[i].style.display="block";
			}	
			// btn[0].onmouseout=function(){
			// // 	// con[i].style.display="none";
			// 	he[0].style.color="#000"
			// }
		}
	}

//遮罩
function zhezhao(q,w){
	for(let i=0;i<q.length;i++){
		q[i].onmouseover=function (){
			for(let j=0;j<w.length;j++){
				w[j].style.display="none"
			}			
		w[i].style.display="block"
		}
		q[i].onmouseout=function (){
			w[i].style.display="none"
		}
	}
}


// 轮播图
	// pic				轮播图						(字符串的选择器)
	// bigbannerBox		通屏的banner盒子			(字符串的选择器)
	// lis				轮播点						(字符串的选择器)
	// colorArr			通屏banner盒子的所有颜色	(数组["red","blue"])
	// tuactiveZ		第一个轮播图的变化后的优先级
	// liactivebgcolor	第一个轮播点的改变颜色
	// LunBoTime		轮播点的变化时间
	// tuZ 				第一个轮播图的初始优先级
	// lisColor 		轮播点原始的颜色
function zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgcolor,LunBoTime,tuZ,lisColor,bannershu){
	// $(function(){
	const tup=$(pic);
	const banner=$(bigbannerBox)[0];
	const li=$(lis);
	const color=colorArr;
	tup[0].style.zIndex=tuactiveZ;
	li[0].style.background=liactivebgcolor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,LunBoTime);
	banner.onmouseover=function(){
		clearInterval(t)
	}
	banner.onmouseout=function(){
		t=setInterval(move,LunBoTime)
	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			for(let i=0;i<tup.length;i++){
				tup[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			tup[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgcolor;
			banner.style.background=color[j];
			num=j;
		}
	}

	function move(){
		num++;
		if(num>bannershu){
			num=0;
		}
		for(let i=0;i<tup.length;i++){
			tup[i].style.zIndex=tuZ;
			li[i].style.background=lisColor;
		}
		tup[num].style.zIndex=tuactiveZ;
		li[num].style.background=liactivebgcolor;
		banner.style.background=color[num];
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
		document.body.scrollTop=1;
		document.documentElement.scrollTop=1;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;

			return obj;

}


// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
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
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
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
				btn[i].style.background=activese;
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


// 5.左右轮播图的封装函数
	// pic:轮播图
	// lunbo_hezi:轮播盒子
	// lis：轮播点
	// zuoBtn：左箭头
	// youBtn：右箭头
	// second：轮播图的时间间隔时间
	// second_inner：轮播图轮播的动画时间，是second的一半

		function lunbo_zuoyou(pic,lunbo_hezi,zuoBtn,youBtn,lis,second,second_inner){
		// 获取轮播图
		const tu = $(pic);
		// 获取轮播盒子
		const img = $(lunbo_hezi)[0];
		// 获取左按钮
		const leftBtn = $(zuoBtn)[0];
		// 获取右按钮
		const rightBtn = $(youBtn)[0];
		// 获取轮播图的宽
		const imgW = parseInt(window.getComputedStyle(img,null).width);
		// 获取轮播点
		const li = $(lis);
		// 初始化
		// 开关开
		var flag = true;
		// 将轮播图都置于右边
		for(let i=0;i<tu.length;i++){
			tu[i].style.marginLeft=imgW + "px";
		}	
		// 将第一张轮播图置于轮播盒子中，让他显示
		tu[0].style.marginLeft=0;
		// 将第一个轮播点变为白色 
		// li[0].style.backgroundColor="#fff";
		// 开始轮播
		var t = setInterval(move,second);
		// 当前轮播图的下标
		var now = 0;
		// 下一张图片的下标
		// next也可以为1，但在函数中就是让next++在最后
		var next = 0;
		// 轮播点的变化
		// 循环遍历每一个轮播点给他加事件
		// for(let i=0;i<li.length;i++){
		// 	li[i].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 			// 让所有的点都变为初始颜色
		// 		for(let j=0;j<li.length;j++){
		// 			li[j].style.backgroundColor="orange";
		// 			tu[j].style.marginLeft=imgW+"px";
		// 		}
		// 		// 鼠标移到哪个点身上就让他变颜色
		// 		li[i].style.backgroundColor="#fff";
		// 		tu[i].style.marginLeft=0;
		// 		// 让now和next也改变
		// 		now=i;
		// 		next=i;
		// 		}
		// 	}
		// }
		// 采用第二种方法做轮播点
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					// 让所有的点都变为初始颜色
				for(let j=0;j<li.length;j++){
					li[j].classList.remove("active");
					tu[j].style.marginLeft=imgW+"px";
				}
				// 鼠标移到哪个点身上就让他变颜色
				li[i].classList.add("active");
				tu[i].style.marginLeft=0;
				// 让now和next也改变
				now=i;
				next=i;
				}
			}
		}
		// 轮播函数
		function move(type="l"){
			flag=false;
			// 开关是判断左箭头还是右箭头
			if(type=="l"){
				next++;
				if(next>tu.length-1){
					// 最后一张完了就是第一张
				next=0;
				}
				// 轮播
				// 下一张图做好准备
				tu[next].style.marginLeft=imgW+"px";
				// 让第一张图片移到左边
				animate(tu[now],{marginLeft:-imgW},second_inner);
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				// 轮播
					tu[next].style.marginLeft=-imgW+"px";
					animate(tu[now],{marginLeft:imgW},second_inner);
			}
			// 让下一张图移过来
			animate(tu[next],{marginLeft:0},second_inner,function(){
				// 轮播结束后需要执行的函数
				flag=true;
				// 轮播结束后轮播点再动
				// li[next].style.backgroundColor="#fff";
				// li[now].style.backgroundColor="orange";
				li[now].classList.remove("active");
				li[next].classList.add("active");
				now=next;
				
			});
		}
		// 鼠标移入轮播图，让时间间隔函数停止
		img.onmouseover=function(){
			clearInterval(t);
		}
		// 鼠标移出轮播图，让他继续轮播起来
		img.onmouseout=function(){
			// t不用重新定义
			t = setInterval(move,second);
		}
		// 鼠标移到左箭头，清除时间间隔函数
		leftBtn.onmouseover=function(){
			clearInterval(t);
		}
		// 鼠标移到右箭头
		rightBtn.onmouseover=function(){
			clearInterval(t);
		}
		// 点击左箭头
		leftBtn.onclick=function(){
			if(flag){
				move("l");
			}
		}	
		// 点击右箭头
		rightBtn.onclick=function(){
			if(flag){
				move("r");
			}
		}	
		}	




// pic （轮播图）字符串的选择器，
	// bigbannerBox(通屏的banner盒子)
	// lis  （轮播点 ） 字符串的选择器
	// colorArr（ 通屏的banner盒子的所有颜色）是个数组 例如["red","blue","black"]
	// tuActiveBigZ  （图轮播时的透明度）
	// liactiveBgColor （轮播获得焦点的颜色）
	// lunboTime （轮播时间）  填的是数字
	// tuChushiZ  （图的初始层级）
	// liscolor （轮播的颜色）
	//zuo   左按钮
	//you  右按钮

// 透明度轮播
function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,zuo,you,bbox){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftbtn=$(zuo)[0];
	const rightbtn=$(you)[0];
	const box=$(bbox)[0];
	var flag=true;

	tu[0].style.opacity=tuActiveBigZ;
	li[0].style.background=liactiveBgColor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,lunboTime);
	// banner.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout=function(){
	// 	t=setInterval(move,lunboTime);
	// }
	// leftbtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	leftbtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	// rightbtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	rightbtn.onclick=function(){
		if(flag){
			move("r");
		}	

	}
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(move,lunboTime);
	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuChushiZ;
					li[i].style.background=liscolor;
				}
				// tu[j].style.opacity=tuActiveBigZ;
				animate(tu[j],{opacity:1},500);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
				li[j].style.background=liactiveBgColor;
				banner.style.background=color[j];
				num=j;
		}
	}

	function move(type="r"){
		flag=false;
		if(type=="r"){
			num++;
			if(num>tu.length-1){
				num=0;
			}
		}
		else if(type=="l"){
			num--;
			if(num<0){
				num=tu.length-1;
			}	
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=tuChushiZ;
			li[i].style.background=liscolor;
		
		}
		// tu[num].style.opacity=tuActiveBigZ;
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.background=liactiveBgColor;
		banner.style.background=color[num];

	}

}	






// huatiao();
function huatiao(btn,con,tiaoq,weizhi){
			const zzss=$(btn);
			const xiak=$(con);
			const tiao=$(tiaoq)[0];
			const wei=weizhi;
			// console.log(weizhi)
			// console.log(zzss,xiak,tiao)
			
			for(let i=0;i<zzss.length;i++){
				zzss[i].onmouseover=function(){
					for(let j=0;j<xiak.length;j++){
						xiak[j].style.display="none";
						// animate(tiao,{left:52},500);
					}
					tiao.style.transform=weizhi[i];
					xiak[i].style.display="block";
				}
			}

		}



//11. 节点左右轮播
//box   放图的盒子
//dabox  放图盒子的盒子
function jdlunbo(box,zleftbtn,zrightbtn,dabox){
	const zybox=$(box)[0];  				 //获取ul的盒子
	const leftbtn=$(zleftbtn)[0];  			 //获取左按钮
	const rightbtn=$(zrightbtn)[0];   		//获取右按钮
	const zuoyouw=parseInt(window.getComputedStyle(document.querySelector(dabox),null).width);		//获取放ul盒子的宽度
	// console.log(zuoyouw);

	let flag=true;   //定一个开关变量
	let n=5;		//在框内出现几张图
	// var t = setInterval(move,2000);   //每一秒循环一次
	function move(type="l"){          //循环的内容
		flag=false;		//在刚循环的时候，开关就是关着的

		if(type=="l"){
			animate(zybox,{marginLeft:-zuoyouw},1000,function(){		//
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

	leftbtn.onclick=function(){
		if(flag==true){
			move("r");
		}
	}
	rightbtn.onclick=function(){
		if(flag==true){
			move("l");
		}
	}

};
