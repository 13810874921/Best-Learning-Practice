import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div style={{ width: '100%', overflow: 'auto' }}>
				<ol>
					<h3>javaScript</h3>
					<li>
						<span style={{ color: 'red', fontWeight: 900 }}>for</span>用于循环有限次数的对象
					</li>
					<p>{`for(var i=0;i<10;i++){}`}</p>
					<li>
						<span style={{ color: 'red', fontWeight: 900 }}>forEach</span>用于循环无限制次数的对象,数组每个元素都执行一次回调函数。
					</li>
					<p>forEach()</p>
					<li>
						<span style={{ color: 'red', fontWeight: 900 }}>for...in</span>用于循环对象的属性
					</li>
					<p>{`var person={name:'老王',age:'65'}`}</p>
					<p>{`for(var x in person){}`}</p>
					<li>
						<span style={{ color: 'red', fontWeight: 900 }}>while()</span>通过条件为真时进行循环
					</li>
					<pre>{`
                    var i=0;
                    while(i<10){
                        i++;
                        if(i===4)continue;//排除本次循环
                        if(i===7)break;//打断循环
                        console.log(i)
                    }`}</pre>
					<p style={{ borderBottom: '1px dashed #ddd' }} />
					<h4>小结：for与for...in区别在于：for在数组的值未定义会展示undefined;for...in在数组的值未定义会不展示</h4>
					<pre>
						{`
                    var arr1 = new Array();
                    arr1[3] = 3;
                    arr1[6] = 6;
                    arr1[9] = 9
                    for(var i in arr1){
                        console.log(i) //3,6,9
                    }
                    console.log(arr1.length) //10
                    for(var i=0;i<4;i++){
                        console.log(arr1[i])//undefined,undefined,undefined,3
                    }
                    `}
					</pre>
				</ol>
				<p style={{ borderBottom: '1px solid' }} />
				<ol>
					<h3>ES6</h3>
					<p>
						<span style={{ color: 'red', fontWeight: 900 }}>for...of</span>以替代 for...in 和 forEach()
						，并支持新的迭代协议<br />for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
					</p>
					<li>Arrays（数组）</li>
					<pre>
						{`
                    const iterable = ['big','middle','small'];
                    for(const item of iterable){
                        console.log(item) // big,middle,small
                    }
                    `}
					</pre>
					<li>Maps（映射）</li>
					<pre>
						{`
                    const iterable = new Map([["name","老王"],["address","隔壁"]])
                    for (const [key,value] of iterable){
                        console.log(\`Key:\${key},Value:\${value}\`)
                    }
                    console.log(iterable.get('name')) // 老王
                    `}
					</pre>
					<li>Sets（集合）</li>
					<pre>
						{`
                    const iterable = new Set(["name","老王","name","隔壁","老王"])
                    for (const item of iterable){
                        console.log(item)//name,老王,隔壁
                    }
                    `}
					</pre>
					<li>Strings（字符串）</li>
                    <pre>
                    {`
                    const text = 'node';
                    for(const item of text){
                        console.log(item) // n,o,d,e
                    }
                    `}
                    </pre>
                    <p style={{ borderBottom: '1px dashed #ddd' }} />
                    <h4>小结：普通对象不可以使用for...of,否则会出现错误提示为：TypeError: obj[Symbol.iterator] is not a function</h4>
                    <pre>
                    {`
                    const obj = {0:'老王',1:'19',length:2}
                    const iterable = Array.from(obj)
                    for (const item of iterable) {
                        console.log(item);//老王,19
                    }
                    `}
                    </pre>
				</ol>
				<p />
			</div>
		);
	}
}
