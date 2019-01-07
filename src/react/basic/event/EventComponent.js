import React, { Component } from 'react'

 class event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        //在构造函数中绑定this
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.persist(); //让这个合成事件保留,可以异步被获取
        //注意这里的event是react自己实现的“合成事件”层（synthetic event system），用法和原生的基本一致。
        console.log(event.target);

        //需要注意：event只在当前事件循环生效，在promise和settimeout中均无效。,如果需要生效，需要使用event.persist();
        //注意，这个例子中event.preventDefault()在异步情况下无法阻止表单默认提交.
        //使用event.persist()只是能让你正确的拿到preventDefault函数和event.target
        new Promise((resolve, reject) => resolve()).then(() => console.log('promise', event.target));
        setTimeout(() => {
            event.preventDefault();
            console.log('setTimeout', event.target);
        })

        this.setState({count:this.state.count+1})
    }

    handleClickNotBindThis(event){
        this.setState({count:this.state.count+1})
    }

    //推荐使用
    handleClickArrow = (event) => {
        this.setState({count:this.state.count+1})
    }


  render() {
    return (
      <div>
          <p>以下五种方式都可以对事件进行绑定，目前第五种是最佳实践，即直接在定义时使用箭头函数</p>
          <p>inline方式，以及在JSX中进行bind(this)操作，每次会产生一个新的函数，对性能有影响</p>
          <p>在构造函数中绑定this，和直接在定义时使用箭头函数不会有这个问题，但是在构造函数中绑定this会产生额外的冗余代码，容易忘记，所以
        直接在定义时使用箭头函数是最佳实践
          </p>
            <form>
                <input type="hidden" name="name" />
                <button onClick={this.handleClick}>bind-in-constructor</button>
            </form>
            <button onClick={() => console.log('123')}>inline-define</button>
            <button onClick={this.handleClickNotBindThis.bind(this)}>inline-bind</button>
            <button onClick={(e) => this.handleClickNotBindThis(e)}>inline-arrow</button>
            <button onClick={this.handleClickArrow}>define-arrow</button>

        <h3>{this.state.count}</h3>
      </div>
    )
  }

}
export default event;