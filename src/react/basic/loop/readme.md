

### Lists and Keys
要点：需要加入key


### 规范用法
用于循环列表

``` js
export default class loopComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:['1','2','3']
        }
    }
  render() {
    return (
      <div>
        循环演示<br/>
        {/* 循环使用map，注意新版本中需要加入key，否则显示正常，控制台报错 */}
        {this.state.arr.map((name)=>{
            return (
                <p key={name}>我是数组循环：{name}</p>
            )
        })}
      </div>
    )
  }
}



```