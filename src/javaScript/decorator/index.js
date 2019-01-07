import React, { Component } from 'react'

const commonComponentDidMount = (func) => {
    return (target, name, descriptor) => {
        /*
         * target: 类的原型
         * name: 属性名
         * descriptor 属性描述
         * descriptor.value 属性值
         */
        const oldValue = descriptor.value;

        descriptor.value = function(...args) {
            // 注意这里可以获取到this, 但是必须用普通函数，不能用箭头函数，因为定义的时候还没有所属对象。
            this.setState({
                style: {color: 'red'}
            })
            return oldValue.apply(this, args);
        };

        return descriptor;
    }
}

const changeConstructor = (func) => {
  //可以返回一个新的类
  return target => {
        class New extends target {
            constructor(props) {
                super(props)
                func && func()
            }
        }
        return New;
    }
}

const changeName = (name) => {
    return target => {
        target.prototype.name1 = name;
        return target;
    }
}

const base = function (target) {
    target.base = 'base_decorator，静态属性'; //对于静态属性，装饰器中的优先级高
    target.prototype.base = 'base_decorator，实例属性'; //对于实例属性，类本身的优先级高
    return target
}

const func = () => {
    console.log('这里有一个组件被调用了');
}


// a()
@changeConstructor(func)
@changeName('xiaoming')
@base
class DecoratorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {color: '#333'}
        }
    }

    static base = 'base，静态属性'
    base = 'base，实例属性'
    // name1 = 'name1，实例属性'
    @commonComponentDidMount(func)
    componentDidMount() {
        console.log('1111111');
    }

    render() {
        return (
            <div>
                <p>装饰器中定义的静态属性可以覆盖类中的定义，实例属性则不能覆盖，只能添加</p>
                <div style={this.state.style}>
                    <div>base，静态属性： { DecoratorComponent.base }</div>
                    <div>base，实例属性：{ this.base }</div>
                    <div>name1，实例属性：{ this.name1 }</div>
                </div>
            </div>
        )
    }
}

// console.log(DecoratorComponent, DecoratorComponent.name1);

export default DecoratorComponent;