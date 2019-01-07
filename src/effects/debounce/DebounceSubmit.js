import debounce from 'lodash-es/debounce';
import React , {Component} from 'react';

export default class DebounceSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '测试'
        }
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.input3 = React.createRef();
        this.input4 = React.createRef();
        this.input5 = React.createRef();
        this.input6 = React.createRef();
        this.debounceSubmit = debounce(this.submit2, 1000, {leading: true}) //每次使用的都是同一个debounce函数返回值
        this.debounceSubmit2 = debounce(() => this.input6.current.value = new Date().getTime(), 1000, {leading: true}) //每次使用的都是同一个debounce函数返回值
        // this.clickSubmit1 = debounce(this.click1, 1000, {leading: true})
        this.clickSubmit2 = debounce(this.click2, 1000, {leading: true})
    }

    submit1 = (e) => {
        //e.preventDefault()生效，但是debounce不生效
        e.preventDefault();
        debounce(() => this.input1.current.value = new Date().getTime(), 1000, {leading: true})()

    }

    submit2 = (e) => {
        //因为延迟导致e.preventDefault()不生效，页面每次刷新
        e.preventDefault();
        this.input2.current.value = new Date().getTime()
    }
    //原因：延迟执行了submit2
    //

    //e.preventDefault()生效， debounce不生效，因为每次函数中都是一个新的debounce
    submit3 = () => {
        return (e) => {
            e.preventDefault();
            debounce(() => this.input5.current.value = new Date().getTime(), 1000, {leading: true})();
        }

    }
    //e.preventDefault() 和 debounce 都生效
    submit4 = () => {
        //debunce生效
        return (e) => {
            e.preventDefault();
            this.debounceSubmit2();
            this.setState({
                title: new Date().getTime()
            })
        }

    }

    click1 = (e) => {
        //debounce生效,不需要preventDefault
        // this.input3.current.value = new Date().getTime()
        debounce(() => this.input3.current.value = new Date().getTime(), 1000, {leading: true})()
    }

    click2 = (e) => {
        //debounce生效,不需要preventDefault
        this.input4.current.value = new Date().getTime()
        this.setState({
            title: new Date().getTime()
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <h4>{this.state.title}</h4>
                <form onSubmit={this.submit1}>
                    <input ref={this.input1} type="text" name="name" />
                    <input type="submit" value="提交1" />
                </form>

                <form onSubmit={this.debounceSubmit}>
                    <input ref={this.input2} type="text" name="name" />
                    <input type="submit" value="提交2" />
                </form>

                <form onSubmit={this.submit3()}>
                    <input ref={this.input5} type="text" name="name" />
                    <input type="submit" value="提交3" />
                </form>

                <form onSubmit={this.submit4()}>
                    <input ref={this.input6} type="text" name="name" />
                    <input type="submit" value="提交4" />
                </form>

                <div>
                    <input ref={this.input3} type="text" name="name" />
                    <input type="submit" value="点击1" onClick={this.click1}/>
                </div>

                <div>
                    <input ref={this.input4} type="text" name="name" />
                    <input type="submit" value="点击2" onClick={this.clickSubmit2}/>
                </div>

            </div>
        )
    }
}