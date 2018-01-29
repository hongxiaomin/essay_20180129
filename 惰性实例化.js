//惰性实例化避免了在页面中js初始化执行的时候就实例化了类。如果在页面中没有使用到这个实例化的对象，那么这就造成了一定的内存浪费和性能消耗，那么如果将一些类的实例化推迟到需要使用它的时候才开始去实例化，那么这就避免了刚才说的问题，做到了“按需供应”。惰性实例化应用到资源密集、配置开销大、需要加载大量数据的单体时是很有用的。

var myNamespace2=function(){
    var Configure=function(){
        var privateName="someone's name";
        var privateReturnName=function(){
            return privateName;
        };
        var privateSetName=function(name){
            privateName=name;
        };
        return {
            setName:function(name){
                privateSetName(name);
            },
            getName:function(){
                return privateReturnName();
            }
        }
    };
    var instance;
    return {
        init:function(){
            if(!instance){
                instance=Configure();
            }
            for(var key in instance){
                if(instance.hasOwnProperty(key)){
                    this[key]=instance[key];
                }
            }
            this.init=null;
            return this;
        }
    }
}();
    myNamespace2.init();
    console.log(myNamespace2.getName());