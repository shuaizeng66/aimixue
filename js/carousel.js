//轮播类
function carousel(car){
    this.car=car;
    this.imgs=car.getElementsByTagName("img");
    this.btns=car.getElementsByTagName("button");
    this.lis=car.getElementsByTagName("li");
    this.j=0;
    this.timer=null;
}
carousel.prototype.init=function(){
    this.bind();
    this.setdsq();
}
carousel.prototype.bind=function(){
    var me=this;
    for(var i=0;i<this.btns.length;i++){
        this.btns[i].onclick=function(){
            if(this.innerHTML=="&gt;"){
                me.animation(1);
            }else{
                me.animation(-1);
            }
        }
    }
    for(var i=0;i<this.lis.length;i++){ // 绑定lis
        this.lis[i].onclick = function(){
            me.animation(0,this);
        }
    }

    this.car.onmouseover = function(){ //
        clearInterval(me.timer);
        me.timer = null;
    }
    this.car.onmouseout = function(){
        me.setdsq();
    }
}
carousel.prototype.animation = function(x,li){
    if(x){
        this.j+=x;
        if(this.j==3){
            this.j=0;
        }else if(this.j==-1){
            this.j=2;
        }
    }else {
        this.j = li.getAttribute('key')*1;
    }

    for(var i=0;i<this.imgs.length;i++){
        this.imgs[i].className = '';
        this.lis[i].className = '';
    }
    this.imgs[this.j].className='active_car';
    this.lis[this.j].className='active_car';

}

carousel.prototype.setdsq = function(){
        this.timer = setInterval(() => {
            this.animation(1);
        }, 2000);
}