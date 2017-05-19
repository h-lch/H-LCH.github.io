class Draw{  //类
    constructor(cobj,option){  //option:lineWidth  fillStyle 等等   //构造函数
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;

    }
    init(){ //初始化的样式
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){  //矩形方法
        this.init();//先调用初始化
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();//调用
    }
    line(ox,oy,mx,my){//直线方法
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    circleout(ox,oy,mx,my){//通过2个点的坐标画圆
        this.init();
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;    //求平方
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    circlein(ox,oy,mx,my){//内切圆
        this.init();
        this.cobj.beginPath();
        var r = Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy):Math.abs(mx-ox);
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,2*Math.PI);     //圆心的坐标
        this.cobj[this.style]();
    }
    circlecon(ox,oy,mx,my){//中心圆
        this.init();
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        this.cobj.arc(ox,oy,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    poly(ox,oy,mx,my,s){  //多边形
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);//90度
        var angle = Math.PI/ s ;
        var r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        var x = Math.cos(angle) * r;
        var y = Math.sin(angle)  * r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(var i=0;i<s;i++){
            this.cobj.lineTo(x, -y);
            this.cobj.rotate(-angle * 2);
        }
        this.cobj[this.style]();
        this.cobj.restore();
    }
    pen(ox,oy,mx,my){  //铅笔
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,20,20);
    }
}