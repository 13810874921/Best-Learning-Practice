import React, { Component } from 'react';

export default class RegExpComponent extends Component {
  render() {
		return (
			<div>
        <h2><a href='https://c.runoob.com/front-end/854' target='_blank'>点击跳转在线工具</a></h2>
				<ol>
          <li>修饰符</li>
          <ol type='A'>
            <li>i 执行对大小写不敏感的匹配。</li>
            <li>g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。</li>
            <li>m 执行多行匹配。</li>
          </ol>
          <li>[]方括号</li>
          <p>方括号用于查找某个范围内的字符</p>
          <p>[abc]查找所有在放括号内的字符</p>
          <p>[^abc]查找不在放括号内的字符</p>
          <li>元字符</li>
          <p>. 查找单个字符，除了换行和行结束符。</p>
          <p>\w&emsp; 查找单词字符。[a-zA-Z]</p>
          <p>\W&emsp; 查找非单词字符。[^a-zA-Z]</p>
          <p>\d&emsp; 查找数字。[0-9]</p>
          <p>\D&emsp; 查找非数字。[^0-9]</p>
          <p>\s&emsp; 查找空白字符。</p>
          <p>\S&emsp; 查找非空白字符。</p>
          <p>\b&emsp; 匹配单词边界。</p>
          <p>\B&emsp; 匹配非单词边界。</p>
          <p>\n&emsp; 查找换行符。</p>
          <p>\f&emsp; 查找换页符。</p>
          <p>\r&emsp; 查找回车符。</p>
          <p>\t&emsp; 查找制表符。</p>
          <p>\v&emsp; 查找垂直制表符。</p>
          <li>运算符</li>
          <p>\ 转义符 </p>
          <p>| 或</p>
          <li>量词</li>
          <p>n+&emsp; 匹配任何包含至少一个 n 的字符串。</p>
          <p>n*&emsp; 匹配任何包含零个或多个 n 的字符串。</p>
          <p>n?&emsp; 匹配任何包含零个或一个 n 的字符串。</p>
          <p>n{`{X}`}&emsp; 匹配包含 X 个 n 的序列的字符串。</p>
          <p>n{`{X,Y}`}&emsp;	匹配包含 X 至 Y 个 n 的序列的字符串。</p>
          <p>n{`{X,}`}&emsp; 匹配包含至少 X 个 n 的序列的字符串。</p>
          <p>n$&emsp; 匹配任何结尾为 n 的字符串。</p>
          <p>^n&emsp; 匹配任何开头为 n 的字符串。</p>
          <p>?=n&emsp; 匹配任何其后紧接指定字符串 n 的字符串。</p>
          <p>?!n&emsp; 匹配任何其后没有紧接指定字符串 n 的字符串。</p>
					<li>RegExp 对象属性</li>
          <p>global RegExp 对象是否具有标志 g。</p>
          <p>ignoreCase RegExp 对象是否具有标志 i。</p>
          <p>lastIndex 一个整数，标示开始下一次匹配的字符位置。</p>
          <p>multiline RegExp 对象是否具有标志 m。</p>
          <p>source 正则表达式的源文本。</p>
					<li>RegExp 对象方法</li>
          <p>compile 编译正则表达式</p>
          <pre>
          {`
          var str = "I am a man,You are a woman."
          var patt = /man/g;
          var str2 = str.replace(patt,'person');
          console.log(str2);//I am a person,You are a woperson.
          patt = /(wo)?man/g;
          patt.compile(patt);//通过compile()方法改变正则表达式
          var str3 = str.replace(patt,'person');
          console.log(str3);//I am a person,You are a person.
          `}
          </pre>
          <p>exec 检索字符串中指定的值。返回找到的值，并确定其位置。</p>
          <pre style={{whiteSpace:"pre-wrap"}}>
          {`
          var str = "Hello World!";
          var patt = new RegExp("world","i");
          var patt1 = /world/i
          console.log(patt.exec(str)) //["World", index: 6, input: "Hello World!", groups: undefined]
          console.log(patt1.exec(str)) //["World", index: 6, input: "Hello World!", groups: undefined]
          `}
          </pre>
          <li>test 检索字符串中指定的值。返回 true 或 false。</li>
          <pre>
          {`
          var str = 'hello';
          var patt = /he/g;
          console.log(patt.test(str));//ture
          `}
          </pre>
          <li>{`用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符`}</li>
				</ol>
        <p style={{borderBottom:"1px solid"}} />
        <div>
          <p>支持正则表达式的 String 对象的方法</p>
          <ol type='I'>
            <li>search 对大小写敏感</li>
            <pre>
            {`
            var str = 'hello WORLD';
            str.search(/world/); //-1
            `}
            </pre>
            <li>match 返回的是字符串</li>
            <pre>
            {`
            var str = 'hello world';
            console.log(str.match(/\w+/g));// ["hello", "world"]
            `}
            </pre>
            <li>replace</li>
            <pre>
            {`
            var str = 'hello world';
            console.log(str.replace(/world/,'boy'));// hello boy
            `}
            </pre>
            <li>split</li>
            <pre>
            {`
            var str = 'hello world';
            console.log(str.split(/\s/));// ["hello", "world"]
            console.log(str.split(/ll+\s/));// ["he", "o world"]
            `}
            </pre>
          </ol>
        </div>
        <p style={{borderBottom:"1px solid"}} />
        <div>
          <p>匹配千分位逗号</p>
          <pre>
            {`
            var num = 789123456.7890123
            var newnum = num.toString().split('.')
            newnum[0]=newnum[0].replace(/\B(?=(\d{3})+(?!\d))/g,',')
            newnum.join('.')
            `}
          </pre>
          <pre>
          {`
          \b	匹配一个单词边界，也就是指单词和空格间的位置。例如，“er\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”。
          \B	匹配非单词边界。“er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”
          `}
          </pre>
        </div>
			</div>
		);
	}
}
