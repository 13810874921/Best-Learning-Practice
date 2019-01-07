import React, { Component, PureComponent } from 'react';
const store = {time: 0};
const store1 = {time: 0};

//普通组件，只要父组件的state或者props有任何风吹草动，不管跟它有没关系，它都会重新执行一次render函数。
class NormalComponent extends Component {
    constructor(props) {
        super(props);
        this.time = 0;
    }
    render() {
        this.time = this.time + 1
        console.log('render NormalComponent')
        return <div>普通 Component 渲染了{this.time}次</div>
    }
}


class ShouldUpComponent extends Component {
    constructor(props) {
        super(props);
        this.time = 0;
    }
    //shouldComponentUpdate 可以进行最精准的判断
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text === this.props.text) {
            return false;
        }
        return true;
    }
    render() {
        this.time = this.time + 1
        return <div>ShouldUpComponent 渲染了 {this.time}次 </div>
    }
}

//react15.3后增加了PureComponent，只有props发生变化时才会渲染。等效于在shouldComponentUpdate中判断nextProps === this.props
class TestPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.time = 0;
    }
    render() {
        this.time = this.time + 1
        console.log('render PureComponent')
        return <div>PureComponent 渲染了{this.time}次</div>
    }
}

//普通函数式组件
const FuncComponent = (props) => {
    store.time = store.time + 1
    return <div>FuncComponent 渲染了{store.time}次</div>
}

//React.memo包裹的函数式组件，相当于PureComponent
const MemoComponent = React.memo((props) => {
    store1.time = store1.time + 1
    return <div>MemoComponent 渲染了{store1.time}次</div>
});

class BadPureComponent extends PureComponent {
  state = {
    items: [1, 2, 3]
  }
  handleClick = () => {
    const { items } = this.state;
    items.pop();
    this.setState({ items });
  }

  //因为item是一个引用，所以前后比较都是同一个，点delete没有任何反应
  render() {
    return (
        <div>
            <ul>
                {this.state.items.map(i => <li key={i}>{i}</li>)}
            </ul>
            <button onClick={this.handleClick}>delete</button>
        </div>
    )
  }
}

class TestComponent extends Component {
    state = {
        arr: null,
        a: null
    }
    render() {
        var arr = [1, 2, 3]
        return (
            <div>
                <NormalComponent text="1"/>
                <TestPureComponent text="1" arr={this.state.arr}/>
                <ShouldUpComponent text="1" arr={this.state.arr}/>
                <FuncComponent text="1" />
                <MemoComponent text="1" arr={this.state.arr}/>

                <button onClick={() => this.setState({a : 1})}>跟子组件Props没关系</button>
                <button onClick={() => this.setState({arr : arr})}>改变子组件Props</button>
                <p>1、普通的组件只要父组件的props或者state发生任意的变化，都会进行render</p>
                <p>2、PureComponent会比较前后的props和state,如果没有变化，则不会render,React.memo则对函数式组件起到同样的效果。</p>
                <p>3、shouldComponentUpdate 可以进行最精准的判断，优先级也最高，可以在PureComponent中使用</p>
                <p style={{color: 'red'}}>4、最佳实践: 如果子组件非常复杂，父组件又可能进行一些跟子组件无关的操作，那么可以使用shouldComponentUpdate对这些无关操作进行屏蔽，如果子组件不是复杂到影响性能，建议还是使用正常的组件。</p>
                <br/>
                <br/>

                <BadPureComponent />
                <p>因为item是一个引用，所以前后比较都是同一个，点delete没有任何反应,这是使用PureComponent时需要注意的</p>
            </div>
        )
    }
}

export default TestComponent;