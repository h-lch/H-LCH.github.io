
$(function(){
    const wx=document.querySelectorAll(".weixinbox");
    const wxnn=document.querySelectorAll(".wxnn");
    xuanxiangka(wx,wxnn);
    const gw=document.querySelectorAll(".gwbox");
    const gwnn=document.querySelectorAll(".gwdnn");
    xuanxiangka(gw,gwnn);
    const yt=document.querySelectorAll(".yy");
    const ytnn=document.querySelectorAll(".ytnn");
    xuanxiangka(yt,ytnn);
    const cd=document.querySelectorAll(".dl1");
    const cdnn=document.querySelectorAll(".dtnrnn_box");
    xuanxiangka(cd,cdnn);
    const sjyt=document.querySelectorAll(".sjyt");
    const sjytnn=document.querySelectorAll(".sjytnn");
    xuanxiangka(sjyt,sjytnn);




//左右轮播
    // zylunbo();
    // function zylunbo(){
        const dabox = $(".ssmp_zuo_juti_nr");
        const leftbtnn = $(".zuojian1");
        const rightbtnn = $(".youjian2");
        for(let i=0;i<dabox.length;i++){
            rightbtnn[i].onclick=function(){
                animate(dabox[i],{marginLeft:-170},500,function(){
                    dabox[i].appendChild(dabox[i].firstElementChild);
                    dabox[i].style.marginLeft=0;
                });
            }
            leftbtnn[i].onclick=function(){
                dabox[i].style.marginLeft=-170+"px";
                dabox[i].insertBefore(dabox[i].lastElementChild,dabox[i].firstElementChild);
                animate(dabox[i],{marginLeft:0},500);
            }
        }

    //banner图
    toumingdu(".bannerimg",".bannerdabox",".lbdian",[],1,"#e5004f",2000,0,"#211616",".zuojian",".youjian");


    louceng(".chaung","section",".chuangbox","img","imgUrl",[],"#e5004f",500,50);
    //返回顶部
    const fanhui=$(".chaung10")[0];
    const body = $("body")[0];
    fanhui.onclick=function(){
        animate(body,{scrollTop:0},500);
    }
    //特卖
    const tm = $(".tatle_1");
    const tmxq = $(".tmnr");
    for(let i=0;i<tm.length;i++){
        tm[i].onmouseover=function(){
            for(let j=0;j<tm.length;j++){
                tm[j].style.borderBottomColor="#333";
                tm[j].style.fontWeight="normal";
                tm[j].children[1].classList.remove("xiaojiao");
                tmxq[j].style.display="none";
            }
             tm[i].style.borderBottomColor="#e5004f";
                tm[i].style.fontWeight="bold";
                tm[i].children[1].classList.add("xiaojiao");
                tmxq[i].style.display="block";
        }
    }
    //银泰百货
    const ytt = $(".s_n_left_lis");
    const ytbh = $(".s_n_right_right");
    // console.log(ytbh);
    for(let i=0;i<ytt.length;i++){
        ytt[i].onmouseover=function(){
            for(let j=0;j<ytt.length;j++){
                ytt[j].style.borderBottomColor="#333";
                ytt[j].style.fontWeight="normal";
                ytt[j].children[1].classList.remove("xj");
                ytbh[j].style.display="none";
            }
             ytt[i].style.borderBottomColor="#e5004f";
                ytt[i].style.fontWeight="bold";
                ytt[i].children[1].classList.add("xj");
                ytbh[i].style.display="block";
        }
    }
    //特卖块
    const temaikuai=$(".tmnr_diyi2");
    for(let i=0;i<temaikuai.length;i++){
        temaikuai[i].onmouseover=function(){
            temaikuai[i].children[0].style.width="100%";
            temaikuai[i].children[1].style.height="100%";
            temaikuai[i].children[2].style.width="100%";
            temaikuai[i].children[3].style.height="100%";
        }
        temaikuai[i].onmouseout=function(){
            temaikuai[i].children[0].style.width="0";
            temaikuai[i].children[1].style.height="0";
            temaikuai[i].children[2].style.width="0";
            temaikuai[i].children[3].style.height="0";
        }
    }
//轮播3
const box = $(".ssmp_nr_zhongzhong");
const tu = $(".ssmp_nr_zhong_danbox");
const zuobtn = $(".zuojian3")[0];
const youbtn = $(".youjian3")[0];
const dian = $(".xlbdian");
dian[0].style.backgroundPosition="0 -13px";
var flag=true;
box[0].onmouseover=function(){
    zuobtn.style.display="block";
    youbtn.style.display="block";
    animate(zuobtn,{left:0},200);
    animate(youbtn,{right:0},200);
}
box[0].onmouseout=function(){
    zuobtn.style.display="none";
    youbtn.style.display="none";
    animate(zuobtn,{left:-30},200);
    animate(youbtn,{right:-30},200);
}

zuobtn.onclick=function(){
    animate(tu[0],{marginLeft:0},500);
    dian[0].style.backgroundPosition="0 -13px";
    dian[1].style.backgroundPosition="0 0";
}
youbtn.onclick=function(){
   animate(tu[0],{marginLeft:-390},500);
   dian[0].style.backgroundPosition="0 0";
   dian[1].style.backgroundPosition="0 -13px";
}

dian[0].onmouseover=function(){
    dian[0].style.backgroundPosition="0 -13px";
    dian[1].style.backgroundPosition="0 0";
    animate(tu[0],{marginLeft:0},500);
}
dian[1].onmouseover=function(){
    dian[0].style.backgroundPosition="0 0";
    dian[1].style.backgroundPosition="0 -13px";
    animate(tu[0],{marginLeft:-390},500);
}

//轮播4
const boxx = $(".ssmp_nr_zhongzhong2");
const tuu = $(".ssmp_nr_zhong_danbox2");
const zuobtnn = $(".zuojian4")[0];
const youbtnn = $(".youjian4")[0];
const diann = $(".xlbdian2");
diann[0].style.backgroundPosition="0 -13px";
var flag=true;
boxx[0].onmouseover=function(){
    zuobtnn.style.display="block";
    youbtnn.style.display="block";
    animate(zuobtnn,{left:0},200);
    animate(youbtnn,{right:0},200);
}
boxx[0].onmouseout=function(){
    zuobtnn.style.display="none";
    youbtnn.style.display="none";
    animate(zuobtnn,{left:-30},200);
    animate(youbtnn,{right:-30},200);
}

zuobtnn.onclick=function(){
    animate(tuu[0],{marginLeft:0},500);
    diann[0].style.backgroundPosition="0 -13px";
    diann[1].style.backgroundPosition="0 0";
}
youbtnn.onclick=function(){
   animate(tuu[0],{marginLeft:-390},500);
   diann[0].style.backgroundPosition="0 0";
   diann[1].style.backgroundPosition="0 -13px";
}

diann[0].onmouseover=function(){
    diann[0].style.backgroundPosition="0 -13px";
    diann[1].style.backgroundPosition="0 0";
    animate(tuu[0],{marginLeft:0},500);
}
diann[1].onmouseover=function(){
    diann[0].style.backgroundPosition="0 0";
    diann[1].style.backgroundPosition="0 -13px";
    animate(tuu[0],{marginLeft:-390},500);
}


});