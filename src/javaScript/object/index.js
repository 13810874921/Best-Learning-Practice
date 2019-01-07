//概念

//JavaScript 中的所有事物都是对象：字符串、数字、数组、日期，等等。
//在 JavaScript 中，对象是拥有属性和方法的数据。
import React,{Component} from 'react'
export default class ObjectComponent extends Component{
    render(){
        //定义对象
        const person = {name:'zhangsan',college:'QingHua'};
        let man = {age:28,sex:'male'}
        //合并两个对象
        let someone = {...man,...person,hearColor:'yellow'}

        //assign
        let target={a:1}
        let obj2={b:2}
        let obj3={c:3}
        Object.assign(target,obj2,obj3)
        let target1={d:'dd'}

        var arrObj=[
            {0:{'name':'张'}},
            {1:{'name':'19'}},
            {2:{'name':'male'}}
        ]//maybe 返回的数据是这样的，我靠，好流弊啊，不按常理返回。我就遇到过。那我们就前端处理一下返回的数据吧
        // var list=[
        //     {'name':'王'},
        //     {'name':'李'},
        //     {'name':'赵'}
        // ] // 对，正常应该是这样的结构
        // var data=
        //     {'name':'王','age':'18','city':'BeiJing','list':list,'timestamp':12371823}   // 对，正常应该是这样的结构 

        let o2 = []
        //转换1：通过for...in转换,循环对象的属性
        for (let item of arrObj){
            // console.log(item) //{0:{'name':'张'}}
            for(let value in item){
                o2.push(item[value])
            }
        }
        let o1=[];
        //转换1：通过forEach转换，循环无限次数，并返回数组的值
        for(let item of arrObj){
            // console.log(Object.values(item)) //[{0:{'name':'张'}}]
            Object.values(item).forEach(value=>{
                o1.push(value)
            })
        }
        return(
            <div>
                {o1.map((item,index)=>
                    <p key={index}>{item.name}</p>
                )}
                <br/>
                {o2.map((item,index)=>
                    <p key={index}>{item.name}</p>
                )}
                
                {/* 基础概念 */}
                {/* (...)拓展运算符 */}
                <p>(...)拓展运算符合并对象</p>
                <p>自定义的对象必须放在拓展运算符的后面，否则因为对象名相同而被覆盖</p>
                <p>{JSON.stringify(someone)}</p>
                <p></p>
                {/* assign */}
                <p>assign</p>
                <p>用于将源对象的所有可枚举属性复制到目标对象中</p>
                <p>此时target属性：{JSON.stringify(target)}</p>
                <p>{JSON.stringify(Object.assign(target1,{m:1,n:2,p:3},{x:'-10',y:'10'}))}</p>
                <p>数组的处理</p>
                <p>{JSON.stringify(Object.assign([2,3],[6]))}</p>
                <p>会将数组处理成对象，所以先将 [2,3] 转为 {`{0:2,1:3}`} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0。</p>
                <p></p>
                {/* is ===严格相等 */}
                <p>Object.is()用来比较两个值是否严格相等</p>
                <p>new Object==new Object //{JSON.stringify(new Object===new Object)}</p>
                <p>[1]===[1] //{JSON.stringify([1]===[1])}</p>
                <p>+0与-0：{JSON.stringify(Object.is(+0,-0))}</p>
                <p>{JSON.stringify(Object.is('a1','a1'))}</p>
                {/* entries()获取对象键值对 */}
                <p>{JSON.stringify(Object.entries(target))}</p>
                {/* ES8：entries()通过Map后的get取值 */}
                <p>{JSON.stringify((new Map(Object.entries(target))).get('a'))}</p>
            </div>
        )
    }
}