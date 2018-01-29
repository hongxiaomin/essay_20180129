//函数绑定 是指创建一个函数，可以在特定的this环境中已指定的参数调用另一个函数。
function bind(fn,context){
    return function(){
        return fn.apply(context,arguments);
    }
}
//bind 函数按如下方式使用
var handler={
    message:'handled',
    handleClick:function(event){
        console.log(this.message+':'+event.type);
    }
};

var btn=document.getElementById('btn');
btn.onclick=bind(handler.handleClick,handler);
//被绑定函数与普通函数相比有更多的开销，消耗更多内存，同时也因为多重函数调用稍微慢一点，所以最好只在必要时调用。