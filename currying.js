//函数柯里化（function currying）用于创建已经设置好了一个或多个参数的函数。其思想是使用一个闭包返回一个函数。
//柯里化函数创建步骤：调用另一个函数并传入要柯里化和必要参数。

function curry(fn){
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs=Array.prototype.slice.call(arguments);
        var finalArgs=args.concat(innerArgs);
        return fn.apply(null,finalArgs);
    };
}

function add(n1,n2){
    return n1+n2;
}

var currAdd=curry(add,5);
console.log(currAdd(3));