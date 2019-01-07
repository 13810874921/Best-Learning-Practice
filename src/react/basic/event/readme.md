### event
可以在构造器中对this进行绑定
可以在JSX中对this进行绑定
可以使用箭头函数

最佳实践：
这样的写法并没有错，但是可有可能会引起一些性能问题，因为ButtonList的render函数每一次被调用的时候，都会创建一个新的函数，然后赋值给onClick属性，在Button组件内部属性的比较又是用===，在某些情况下，这样会引起Button组件不必要的重新渲染。深究其原因是因为每次调用bind函数都会返回一个新的函数(还没彻底弄明白bind函数原理的猿可以看这篇文章)。比如，下面的代码：

function print() {
    console.log(this.a);
}
let obj = {a: 'A'}
print.bind(obj) === print.bind(obj);
最后一行代码比较的结果始终是false，因为每次调用bind函数都会返回一个新的函数对象的引用。这就是为什么要尽量避免在行内写bind函数，<Button type='button' onClick={(event) => {}} />这样的写法也有相同的问题，因为这样相当于每次都声明一个新的匿名函数。最佳的写法是在constructor内写this.handleClick = this.handleClick.bind(this)（相当于在组件初始化时，就把bind函数返回的新函数保存在一个成员变量中，这样，在组件的更新阶段，每次给onClick属性都传递的都是同一个函数的引用），并在组件上这样写<Button onClick={this.handleClick} />。
但是，假如在演示组件ButtonList有十几个函数需要绑定，你可能会抱怨，每添加一个事件处理函数，都要写类似这样的代码，导致组件臃肿不堪。身为一个有逼格的程序猿，怎么可以干这种重复的机械运动呢！这时，你可以这样写：

constructor() {
    // 省略其他非关键代码,并假设我们已经声明了以下事件处理函数
    this.bind([
      'eventHandler1',
      'eventHandler2',
      'eventHandler3',
      'eventHandler4',
      'eventHandler5'
    ])
}

bind(methodArray) {
    methodArray.forEach(method => this[method] = this[method].bind(this));
}

箭头函数会自动绑定到当前组件的作用域种，不会被call改变

它避免了第2种和第3种的可能潜在的性能问题

它避免了第4种绑定时大量重复的代码

总结：

如果你使用ES6和React 16以上的版本，最佳实践是使用第5种方法来绑定this

###规范用法
在某一个业务的根组件中使用



```js
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 组建内绑定this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```