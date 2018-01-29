// 惰性载入表示函数执行的分支只会发生一次，实现方式有两种。
//第一种是在第一次调用函数时，自身会被覆盖成另一个更适合的函数，如下：
var addEvent=function(el,type,handle){
    if(el.addEventListener){
        addEvent=function(el,type,handle){
            el.addEventListener(type,handle,false);
        }
    }else if(el.attachEvent){
        addEvent=function(el,type,handle){
            el.attachEvent("on"+type,handle);
        }
    }else{
        addEvent=function(el,type,handle){
            el["on"+type]=handle;
        }
    }
    addEvent(el,type,handle);
};
//或者简单一点
var addEvent=function(el,type,handle){
    addEvent=el.addEventListener?function(el,type,handle){
        el.addEventListener(type,handle,false);
    }:function(el,type,handle){
        el.attachEvent("on"+type,handle);
    };
    addEvent(el,type,handle);
};

//第二种是在声明函数时就指定合适的函数
var addEvent=(function(el,type,handle){
    if(addEventListener){
        return function (el,type,handle) {
            el.addEventListener(type,handle,false);
        }
    }else if(attachEvent){
        return function(el,type,handle){
            el.attachEvent("on"+type,handle);
        }
    }else{
        return function(el,type,handle){
            el["on"+type]=handle;
        }
    }
})();
