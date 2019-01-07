import React, { Component, createContext } from 'react';

const ThemeState = createContext({
  theme: 'red',
  changeThemeFunc: null
});

class Ctrl extends Component {
    static contextType = ThemeState
    changeData = () => {
        var color = this.context.theme !== 'red' ? 'red' : 'yellow';
        if (this.context.changeThemeFunc) {
            this.context.changeThemeFunc(color)
        }
    }
    render() {
        return (
            <ThemeState.Consumer>
              { (value) => {
                return <button onClick={this.changeData}>在子孙组件中进行触发</button>
              }
            }
            </ThemeState.Consumer>
        )
    }
}


//如果不是子节点的话，value一直是默认值，不会随之渲染
//
const Brothor = () => {
    return (
        <ThemeState.Consumer>
            { (context) => {
                console.log('Brothor', context.theme);
                return <div style={{ color: context.theme }}>Brothor</div>
              }
            }
        </ThemeState.Consumer>
    )
}

class Child extends Component {
    render() {
        //Consumer 的 children 是必须为一个函数，不然就会报错
        return (
            <ThemeState.Consumer>
                { (context) => {
                    console.log('Child1', context.theme);
                    return (
                      <div>
                        <div style={{ color: context.theme }}>Child</div>
                        <GrandChild />
                      </div>
                      )
                  }
                }
            </ThemeState.Consumer>
        )
    }
}

class GrandChild extends Component {
    //指定contextType后，可以获取到this.context的值
    static contextType = ThemeState

    changeData = () => {
        //可以直接修改context的值，但是不会触发渲染值变化
        this.context.theme = '#333333';
    }

    render() {
        return (
            <p style={{ color: this.context.theme }} onClick={this.changeData}>hhhhhhhhhhhhh</p>
        )
    }
}

class Othor extends Component {
    render() {
        console.log('小透明也render了')
        return (
            <p>一个小透明</p>
        )
    }
}

class Wrapper extends Component {
    constructor(props){
    super(props);
    this.state = {
        theme: 'red',
        //如果需要在子组件触发context改变，则需要把触发函数放在context里
        changeThemeFunc: (color) => {
            this.setState({theme: color});
        }
    }
}

  changeData = () => {
    this.setState({
      theme: (1 - Math.random() > 0.5) ? 'blue' : 'green'
    })
  }

  render() {
      return (
              <ThemeState.Provider value={this.state}>
                  {this.props.children /* 建议不将Wrapper作为父组件，如果Wrapper为父组件会造成整体重渲 */}
                  <button onClick={this.changeData}>修改数据</button>
              </ThemeState.Provider>

      );
  }
}

const App = () => {
    return (
        <div>
            <Wrapper>
                <Othor />
                <Child />
                <Ctrl />
            </Wrapper>
            <Brothor />
        </div>
    )
}

export default App;