// window.onload 只能写一次
// 函数库
 //obj=document 范围 是select的父级元素 select是选择器 功能：封装了window.onload以及查找元素或者集合的方法
	// $功能 1、获取元素 2、创建元素 3页面加载
	function $(select,obj=document){          
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
				//select 选择器
			}
			
		}
	}


// 1.选项卡函数
// btn：选项卡按钮。con是选项卡内容

	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let j=0;j<con.length;j++){
					con[j].style.display="none";
				}
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}


// 2.遮罩函数
	// outer是外面的盒子，inner是加的遮罩

	function zhezhao(outer,inner){
		for(let i=0;i<outer.length;i++){
			outer[i].onmouseover=function(){
				inner[i].style.display="block";
			}
			outer[i].onmouseout=function(){
				inner[i].style.display="none";
			}
		}
	}



// 3.层级轮播图函数的封装
	// pic            轮播图  （字符串的选择器）  
	// bigbannerBox   通屏的banner盒子  （字符串的选择器）
	// lis            轮播点   （字符串的选择器）
	// colorArr       通屏banner盒子的所有颜色   (数组["red","blue"])
	// second         轮播图变化的时间 
	// tuactiveZ      轮播图获得焦点之后的层级
	// liactivebgcolor轮播点获得焦点之后的颜色
	// tuZ            轮播图的默认层级
	// liscolor       轮播点的默认颜色

		function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;

			// 给出初始值
			tu[0].style.zIndex=tuactiveZ;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					tu[j].style.zIndex=tuactiveZ;
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

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>tu.length-1){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				tu[num].style.zIndex=tuactiveZ;
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
				}
			}



// 4.透明轮播图的封装函数
	// pic            轮播图  （字符串的选择器）  
	// bigbannerBox   通屏的banner盒子  （字符串的选择器）
	// lis            轮播点   （字符串的选择器）
	// colorArr       通屏banner盒子的所有颜色   (数组["red","blue"])
	// second         轮播图变化的时间 
	// tuactiveO      轮播图获得焦点之后的透明度
	// liactivebgcolor轮播点获得焦点之后的颜色
	// tuO            轮播图的默认透明度
	// liscolor       轮播点的默认颜色
			function lunbo_touming(pic,bigbannerBox,lis,colorArr,second,tuactiveO,liactivebgcolor,tuO,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;

			// 给出初始值
			tu[0].style.opacity=tuactiveO;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.opacity=tuO;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					tu[j].style.opacity=tuactiveO;
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

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>2){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuO;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				tu[num].style.opacity=tuactiveO;
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
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
function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,bbox){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	// const leftbtn=$(zuo)[0];
	// const rightbtn=$(you)[0];
	const box=$(bbox)[0];
	// const leftbtn = document.querySelectorAll(zuo);
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
	// leftbtn.onclick=function(){
	// 	if(flag){
	// 		move("l");
	// 	}
	// }
	// rightbtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// rightbtn.onclick=function(){
	// 	if(flag){
	// 		move("r");
	// 	}	

	// }
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
			tu[i].style.left=imgW + "px";
		}	
		// 将第一张轮播图置于轮播盒子中，让他显示
		tu[0].style.left=0;
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
		// 			tu[j].style.left=imgW+"px";
		// 		}
		// 		// 鼠标移到哪个点身上就让他变颜色
		// 		li[i].style.backgroundColor="#fff";
		// 		tu[i].style.left=0;
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
					tu[j].style.left=imgW+"px";
				}
				// 鼠标移到哪个点身上就让他变颜色
				li[i].classList.add("active");
				tu[i].style.left=0;
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
				tu[next].style.left=imgW+"px";
				// 让第一张图片移到左边
				animate(tu[now],{left:-imgW},second_inner);
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				// 轮播
					tu[next].style.left=-imgW+"px";
					animate(tu[now],{left:imgW},second_inner);
			}
			// 让下一张图移过来
			animate(tu[next],{left:0},second_inner,function(){
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




//6. 获取scrollTop前的对象
		function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=1;
			html.scrollTop=1;
			let obj;
			if(body.scrollTop==0){
				obj=html;
			}else{
				obj=body;
			}
			return obj;
		}




//7. one one(obj,type,fn)
// 事件执行一次
// obj 对象 type 事件类型 fn 对象要做的事情
function one(obj,type,fn){
		// 添加第一个type类型事件 执行函数fn
		obj.addEventListener(type,fn,false);
		// obj.addEventListener(type,function(){
		// 	obj.removeEventListener(type,fn,false);
		// },false);//添加一个事件清除
		// 添加第二个type类型事件 执行函数clear
		obj.addEventListener(type,clear,false);
		function clear(){
			// 清除type类型中fn的处理程序
			obj.removeEventListener(type,fn,false);
			// 清除type类型中clear的处理程序
			obj.removeEventListener(type,clear,false);
		}

}



//8. 楼层跳转 按需加载
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
	



//9. 拖拽
// tuozhuai(box)
// box 要求要拖拽的对象必须绝对定位
	function tuozhuai(box){
			box.addEventListener("mousedown",down,false);
			let shubiaox;
			let shubiaoy;
			let boxx;
			let boxy;
			function down(e){
				// 当鼠标按下的时候要记录鼠标距离窗口的距离。
				shubiaox=e.clientX;//鼠标的位置
				shubiaoy=e.clientY;
				boxx=box.offsetLeft;
				boxy=box.offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			
			function move(e){
				let mx=e.clientX;//新的鼠标x值
				let my=e.clientY;
				let chax=mx-shubiaox;
				let chay=my-shubiaoy;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				const cw=document.documentElement.clientWidth;
				const ch=document.documentElement.clientHeight;
				if(lefts<0){
					lefts=0;
				}
				if(tops<0){
					tops=0;
				}
				if(lefts>cw-box.offsetWidth){
					lefts=cw-box.offsetWidth;
				}
				if(tops>ch-box.offsetHeight){
					tops=ch-box.offsetHeight;
				}
				// if(){

				// }
				box.style.left=lefts+"px";//定位的left跟top
				box.style.top=tops+"px";
			}
			function up(){
				window.removeEventListener("mousemove",move,false);
				window.removeEventListener("mouseup",up,false);
			}

	}


//10.鼠标滚轮事件  ogj:元素
//ogj:鼠标滚轮在谁身上起作用
//shang:鼠标滚轮向上触发的事件的处理程序
//xia:鼠标滚轮向下触发的事件的处理程序


// mouseWheel(obj,shang,xia);
	function mouseWheel(obj,shang,xia){
		obj.addEventListener("mousewheel",scrollFn,false);
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		function scrollFn(e){
			e.preventDefault();//阻止浏览器的默认行为( 如有滚动条，不动)
			if(e.wheelDelta){
				//谷歌
				if(e.wheelDelta>0){
					//上
					shang();
				}else{
					//下
					xia();
				}
			}else{
				// 火狐
				if(e.detail>0){
					//下
					xia();
				}else{
					//上
					shang();
				}
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
	var t = setInterval(move,2000);   //每一秒循环一次
	function move(type="l"){          //循环的内容
		flag=false;		//在刚循环的时候，开关就是关着的

		if(type=="l"){
			animate(zybox,{left:-zuoyouw},1000,function(){		//
				for(let i=0;i<n;i++){
					let first = zybox.firstElementChild;  //获取第一个元素
					zybox.appendChild(first);				//把第一个子元素放在父元素的最后面
				}
				zybox.style.left=0;		//动画完以后，ul的marginLeft又恢复为零
				flag=true;					//动画完以后，开关为开着，才可点击
			});
		}else if(type=="r"){
			for(let i=0;i<n;i++){
				let first = zybox.firstElementChild;		//获取第一个元素
				let last = zybox.lastElementChild;			//获取最后一个元素
				zybox.insertBefore(last,first);				//把最后一个元素放在第一个元素之前
				zybox.style.left=-zuoyouw+"px";
															//ul盒子的marginLeft在左边（在动画之前就先定位置，否则移动后，zuoyou盒子是空白的） 
			}
			animate(zybox,{left:0},1000,function(){
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



/*12.
获得obj元素的style   (width、heithg等) 样式值 
attrn(obj,style)
attrn:获取谁的样式   obj:获取谁的样式 类型：DOM元素
					style  类型：string   
*/
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
}





//13.下拉导航

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



// 14.
//添加 cookie
// addCookie(key,val,[time])   [time]，可写可不写
//key：键名   string 
//val：键值   string
//time(可不填)：过期时间 单位s
function addCookie(key,val,time){
	val = escape(val);
		if(time){
			let date = new Date();
			time*=1000;
			date.setTime(date.getTime()+time);
			date = date.toGMTString();
			document.cookie=`${key}=${val};expires=${date}`;
		}else{
			document.cookie=`${key}=${val}`;
		}
	}

// 查看
function getCookie(key){
				let cookies = document.cookie;
				let cookiearr = cookies.split("; ");//多个用分号隔开
				let val;
				for(let i=0;i<cookiearr.length;i++){
					let arr = cookiearr[i].split("=");
					if(key==arr[0]){
						val=arr[1];
					}
				}
				return unescape(val);
			}

// 删除
delCookie("info");
console.log(getCookie("info"));
function delCookie(key){
		let date = new Date();
		date.setTime(date.getTime()-10000);
		date =date.toGMTString();
		document.cookie=`${key}=aa;expires=${date}`;
	}