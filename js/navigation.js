function navigation(lis,index){
    this.lis =lis;
    this.index = index;//index表示是那个页面
}
navigation.prototype.init = function(){
    this.bind();
}
navigation.prototype.bind = function(){
    for(var i=0;i<this.lis.length;i++){
        var me = this;
        this.lis[i].onmouseover = function(){
            me.animation(true,this);
        }
        this.lis[i].onmouseout = function(){
            me.animation(false);       
        }
    }
}
navigation.prototype.animation = function(flage,li){
    var ac = document.getElementsByClassName('active');
    for(var i=0;i<ac.length;i++){
        ac[i].className = '';
    }
    if(flage){
        li.childNodes[0].className = 'active';
    }else {
        this.lis[this.index].childNodes[0].className = 'active';  
    }
}
