## Proxy, Decorator, defineProperty 的区别，优缺点

这三个东西都可以让一个对象对外的表现进行增强或者限制，比如get的时候加一句console之类的。

#### 区别1：Decorator作用于类/类中的实例方法，Proxy和defineProperty作用于已实例化的对象。

相当于Decorator是对工厂设备进行升级，Proxy和defineProperty是对已出厂的产品进行改进。

所以SDK，通用组件之类的业务适合使用Decorator，将一些通用逻辑抽取为装饰器。
双向绑定框架，业务处理适合使用Proxy和defineProperty


#### 区别2：Proxy只拦截原对象，但是不会改变原对象，defineProperty则是对原对象进行了更改。Decorator则直接生产了一个跟原类不同的新对象。


#### 区别3：Proxy可以进行完整的拦截，而装饰器做不到对原类方法的覆盖，只能做到添加
proxy能做到的事情更多一些



#### 区别4：浏览器兼容性
Decorator 目前浏览器不支持，但是可以polyfill, polyfill方案需基于defineProperty，所以只支持到IE8
defineProperty IE8以上都支持，不能polyfill
Proxy 新的浏览器支持（IE11不支持），不能polyfill

注意：babel7中需使用 babel-plugin-proposal-decorators，并将legacy设置为true.
目前像mobx等使用的都是老的 decorators 语法