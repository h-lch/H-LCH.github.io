
$(function(){
	const denlu=document.querySelectorAll(".dropdowm");
	const denlunn=document.querySelectorAll(".delunn");
	xuanxiangka(denlu,denlunn)
	const nav=document.querySelectorAll(".navtwo");
	const navnn=document.querySelectorAll(".navnn");
	xuanxiangka(nav,navnn)

jdlunbo1(".yhlunbo",".zuojian2",".youjian2",".indexbox");
jdlunbo(".row",".left",".right",".rowlis");

//banner图
    const imgs = document.querySelectorAll(".item");
    const box = document.querySelector(".bannerbox");
    const btns = document.querySelectorAll(".dian");
    const pre = document.querySelector(".zuojian");
    const next = document.querySelector(".youjian");
    var t = setInterval(move,2000);
    var now = 0;//当前的
    var z = 10;
    function move() {
        imgs[now].classList.add("leftOut");//代表当前张
        btns[now].classList.remove("active");
        now++;                          //++以后的now就是下一张
        if(now==imgs.length){
            now=0;
        }
        imgs[now].classList.add("leftIn");//下一张
        imgs[now].style.zIndex=z++;
        btns[now].classList.add("active");
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend",function () {
            img.className="";
            flag=true;
        })
    });
    btns.forEach(function (btn,index) {
        btn.onclick=function () {
            if(index==now){//如果我们点击的等于当前的
                return;
            }
            if(index>now){//如果点击的轮播点大于当前的图片
                imgs[now].classList.add("leftOut");
                imgs[index].classList.add("leftIn");
            }
            if(index<now){
                imgs[now].classList.add("rightOut");
                imgs[index].classList.add("rightIn");
            }
            btns[now].classList.remove("active");
            btns[index].classList.add("active");
            imgs[index].style.zIndex=z++;
            now=index;

        }
    });
    box.onmouseover=function () {
        clearInterval(t);
    };
    box.onmouseout=function () {
        t=setInterval(move,2000)
    };
    var flag = true;
    next.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    };
    pre.onclick=function () {
        if(flag){
            flag=false;
            imgs[now].classList.add("rightOut");
            btns[now].classList.remove("active");
            now--;
            if(now == -1){
                now = imgs.length-1;
            }
            imgs[now].classList.add("rightIn");
            imgs[now].style.zIndex=z++;
            btns[now].classList.add("active");
        }
    }

//太原 
ty();
function ty(){
    const taiyuan= document.querySelector(".taiyuan");
    const shanxi = document.querySelector(".shanxi");
    const shanxi2 = document.querySelector(".shanxi2");
    const fh = document.querySelector(".fh");
    const body = document.querySelector("body");
    taiyuan.onclick=function(e){
        shanxi.style.display="block";
        e.stopPropagation();
    }
    fh.onclick=function(e){
        shanxi2.style.display="block";
        shanxi2.style.zIndex=2;
        e.stopPropagation();
    }
    body.onclick=function(){
        shanxi.style.display="none";
        shanxi2.style.display="none";
    }
}

//节点轮播
    // const dadabox=document.querySelector(".yhlunbo");
    // const dahezi=document.querySelector(".neikuan .yhcx");
    // const zuoan=document.querySelector(".zuojian2");
    // const youan=document.querySelector(".youjian2");
    // var t=setInterval(move,3000);
    // var num=4;
    // function move() {
    //     dadabox.style.transition="all 1s";
    //     num++;
    //     dadabox.style.marginLeft=num*-295+"px";
    // }
    // dadabox.addEventListener("transitionend",
    //     function () {
    //         if(num==12){
    //             dadabox.style.transition="none";
    //             num=4;
    //             dadabox.style.marginLeft=num*-295+"px";
    //         }else if(num==0){
    //             dadabox.style.transition="none";
    //             num=8;
    //             dadabox.style.marginLeft=num*-295+"px";
    //         }
    //         flag=true;
    // })
    // dahezi.onmouseover= function () {
    //     clearInterval(t);
    // }
    // dahezi.onmouseout= function () {
    //     t=setInterval(move,3000);
    // }
    // var flag=true;
    // zuoan.onclick= function () {
    //     if(flag){
    //         flag=false;
    //         num-=2;
    //         move();
    //     }
    // }
    // youan.onclick= function () {
    //     if(flag){
    //         flag=false;
    //         move();
    //     }
    // }

})