//函数节流 指某些代码不能在没有间断的情况连续重复进行。实现方法：函数在第一次调用的时候，会创建一个定时器，指定时间间隔之后执行代码。之后函数被调用的时候，它会清楚前一次的定时器并设置另一个。如果前一个定时器已经执行，那么这个操作没有任何意义。如果前一个定时器没有执行，那么就相当于将它替换成一个新的定时器。

var processOr={
    tmID:null,
    exeProcess:function(){

    },
    process:function(){
        clearTimeout(this.tmID);
        var that=this;
        this.tmID=setTimeout(function(){
            that.exeProcess();
        },100);
    }
};
processOr.process();

function throttle(fn,context){
    clearTimeout(fn.tid);
    fn.tid=setTimeout(function(){
        fn.call(context);
    },100)
}

//resize 事件的处理函数
function resizeDiv(){
    var div=document.getElementById("myDiv");
    div.style.height=div.offsetWidth+'px';
}

window.onresize=function(){
    throttle(resizeDiv);
};