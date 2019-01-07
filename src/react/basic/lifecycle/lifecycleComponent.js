import React, { Component } from 'react'

 class lifecycle extends Component {
    constructor(props) {
        super(props)
        this.lifecycles = [];
        this.state = {
            lifecycles: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextStates){
      this.lifecycles.push('shouldComponentUpdate')
      if(this.state.count>3) return false
      return true
    }

    componentDidUpdate (prevProps,prevState, snapshot) {
      //除第一次外的每一次
      this.lifecycles.push('componentDidUpdate');
    }

    //常用于比较当前props和将传入的props,以便进行一些相应的处理
    UNSAFE_componentWillReceiveProps(nextProps) {
      this.lifecycles.push('UNSAFE_componentWillReceiveProps')
      // if (this.props.currentRow !== nextProps.currentRow) {
      //   this.setState({
      //     isScrollingDown: nextProps.currentRow > this.props.currentRow
      //   })
      // }
    }

    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate');
        this.lifecycles.push('UNSAFE_componentWillUpdate')
    }

    UNSAFE_componentWillMount(nextProps) {
      this.lifecycles.push('UNSAFE_componentWillMount')
      // if (this.props.currentRow !== nextProps.currentRow) {
      //   this.setState({
      //     isScrollingDown: nextProps.currentRow > this.props.currentRow
      //   })
      // }
    }

    componentDidMount () {
      this.lifecycles.push('componentDidMount')
    }

    componentWillUnmount(){
      this.lifecycles.push('componentWillUnmount')
    }

    // Update周期

//     16.3：为不安全生命周期引入别名UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps和UNSAFE_componentWillUpdate。 （旧的生命周期名称和新的别名都可以在此版本中使用。）
// 未来的16.x版本：为componentWillMount，componentWillReceiveProps和componentWillUpdate启用弃用警告。 （旧的生命周期名称和新的别名都可以在此版本中使用，但旧名称会记录DEV模式警告。）
// 17.0：删除componentWillMount，componentWillReceiveProps和componentWillUpdate。 （从现在开始，只有新的“UNSAFE_”生命周期名称将起作用。）


    //用于取代componentWillReceiveProps, 注意这个和unsafe生命周期互斥，都存在则都不生效
    // static方法中无法获取this
    // static getDerivedStateFromProps(nextProps, prevState) {
    //   if (nextProps.currentRow !== prevState.lastRow) {
    //     return {
    //       isScrollingDown: nextProps.currentRow > prevState.lastRow,
    //       lastRow: nextProps.currentRow
    //     }
    //   }
    // }

    // getSnapshotBeforeUpdate() {

    // }

    //function
    handleClick(event){
      this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div>
                生命周期查看控制台
                <button onClick={this.handleClick}>add</button>
                {this.state.count}
                {this.lifecycles.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        )
    }
}

//http://web.jobbole.com/94406/

export default lifecycle;