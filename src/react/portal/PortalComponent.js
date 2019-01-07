import React from 'react';
import ReactDOM from 'react-dom';

//需要在html模板中增加modal插入的div,<div id="modal-root"></div>, 当然也可以直接用body
const modalRoot = document.getElementById('modal-root');

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    //ReactDOM.createPortal API 创建传送门，把modal的子元素传过去，渲染在
    return ReactDOM.createPortal(
      this.props.children,  //第一个参数可以是任意组件/文字等内容
      this.el,              //第二个参数是原生元素
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          打开控制台可以看到，第一个ModalView按钮在 modalRoot 里，而不在Parent里, 但是点击按钮可以触发绑定
          在父元素div上的事件。
        </p>
        <ModalPortal>
          <ModalView style={{position: 'fixed', top: '300px', left: '300px'}} text="from Portal"/>
        </ModalPortal>

        <ModalView style={{position: 'fixed', top: '350px', left: '300px'}} text="normal"/>
      </div>
    );
  }
}

function ModalView(props={text: 'click'}) {
  //点击事件会冒泡到父组件上，效果和直接在父组件中render效果一样
  return (
    <div className="modal" style={props.style}>
      <button>{props.text}</button>
    </div>
  );
}

export default Parent;