//作用域安全的构造函数
//当我们在使用构造函数创建实例的时候，如果我们忘记使用new，那么该函数就相当于普通函数被调用。由于this是在运行时才绑定的，所以this会映射到全局对象window上。也就是说，调用该函数相当于全局对象添加属性，这会污染全局空间，造成不必要的错误。
//解决该为题的方法就是创建作用域安全的构造函数
function Person(name,age){
    if(this instanceof Person){
        this.name=name;
        this.age=age;
    }else{
        return new Person(name,age);
    }
}
//这样，调用Person构造函数时，无论是否使用new操作符，都会返回一个Person的实例，这就避免了在全局对象上意外设置属性