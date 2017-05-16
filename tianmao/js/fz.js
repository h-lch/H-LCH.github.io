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
//btn:选中的参数    con:显示的参数

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
	// lisColor			轮播点						(字符串的选择器)
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
			num=j;
			banner.style.background=color[j]
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