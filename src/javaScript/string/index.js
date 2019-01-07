import React, { Component } from 'react'
/*
 * 字符串的声明
 */

//声明一个字符串，可以有两种方式：
const string0 = new String('apple,banana,pair');
const string1 = 'apple,banana,pair';

//区别如下
// console.log(typeof string1); // "string"
// console.log(typeof string0); // "object"
// console.log(string0 == string1);  // true
// console.log(string0 === string1); // false
// console.log(string0.charAt === string1.charAt); // true

//new String 的应用场景
//1、扩展某个特定字符串的能力, 而不污染整个String对象， 比如增加个添加后缀的方法，而字面量声明的字符串做不到
string0.addSuffix = function(suffix){
    return this.concat("." + suffix);
}


/*
 * 字符串相关的方法
 */
const string = 'apple,banana,pair';
//String类方法
String.fromCharCode()
String.fromCodePoint()
// String.raw()

/*
 *  String实例方法
 */
//查询
string.indexOf("b") // => 6, 如果存在，返回找到的第一个字符的index,如不存在返回-1.
string.lastIndexOf("a") // => 14, 如果存在，返回找到的倒数第一个字符的index,如不存在返回-1.
string.search("b") // => 6, 如果存在，返回找到的第一个字符的index,如不存在返回-1.，同indexOf
string.search(/apple/g) // => 0, 如果存在，返回匹配到的第一个字符的index,如不存在返回-1.
string.includes("ab", 0) //false 判断字符串中是否包含指定子串, 第二个参数为起始index
string.startsWith("apple", 0) // => true 是否以apple开头, 第二个参数为起始index
string.endsWith("pair", 0) // => true 是否以pair结尾, 第二个参数为前n个字符
string.match("ab") //false 判断字符串中是否包含指定子串
string.match(/ban/) //false 判断字符串中是否包含指定子串
// string.matchAll(/ban/) //false 判断字符串中是否包含指定子串

//二进制
string.charCodeAt() // => 97 获取第一个字符的 unicode 十进制编码, 上限为55357
"😊".codePointAt()  // => 128522 获取第一个字符的 unicode 十进制编码, 没有上限

//切割
//正常情况下substring 和 slice等效，substr目前已经从标准中移除
const start = 2;
const end = 4;
const length = 4
string.substr(start, length) //如果length为0或负则返回""，永远从左往右数, 如果不传length,则length为无穷大
"abcdef".substr(-3, 2)       // => de 从倒数第三个开始从左往右数2个。

string.slice(start, end)     // 如果end < start,则返回""，负数为倒数第n个
"abcdef".slice(-5,-3)        // => bc 从倒数第5个到倒数第3个之前
"abcdef".slice(5, 3)         // => ""

string.substring(start, end) //如果end < start,则交换位置，负数视为0
"abcdef".substring(-5,-3)     // => "" //直接认为是0, 0
"abcdef".substring(5, 3)     // => "de" //直接认为是3, 5

//替换
string.replace(/a/g, '');
string.replace(/a/, '');
string.replace('a', '');   //只能替换第一个



//转换为数组
string.split(",") // => ["apple", "banana", "pair"]
string.split() //=> ["apple,banana,pair"]
string.split("") //=> ["a", "p", "p" ......]

//修改与添加
string.concat("aaaaa")  // =>"apple,banana,pairaaaaa", 相当于 string + "aaaaa"
string.repeat(3)           // 重复三遍，不接收负数

'34567'.padStart(10, '0') // => "0000034567" 在原字符串之前补足10个
'34567'.padEnd(10, '0')   // => "3456700000" 在原字符串之后补足10个

"  you  ".trim()        // =>"you", 去除全部空格
"  you  ".trimStart()   // =>"you  ", 去除左边空格
"  you  ".trimLeft()    // =>"you  ", 同上，是trimStart的别名
"  you  ".trimEnd()     // =>"  you", 去除右边空格
"  you  ".trimRight()   // =>"  you", 同上，是trimEnd的别名


//大小写转换
"ABCde".toUpperCase()
"ABCde".toLowerCase()
"ABCde".toLocaleUpperCase() //The locale 根据浏览器语言设置，不同语种大小写可能存在问题.
"ABCde".toLocaleLowerCase()


/*
 *  String实例的浏览器方法，多数只在浏览器环境有用，在标准中已不推荐使用，
 *  实际开发中很少用的到，仅作了解
 */
string.anchor("name");    //创建锚点 "<a name="name">apple,banana,pair</a>"
string.italics();         //创建斜体 "<i>apple,banana,pair</i>"
string.big();             //创建大字符 "<big>apple,banana,pair</big>"
string.small();           //创建小字符 "<small>apple,banana,pair</small>"
string.bold();            //创建加粗字符 "<bold>apple,banana,pair</bold>"
string.fontcolor("#333")  //创建带颜色的文字 "<font color="#333">apple,banana,pair</font>"
string.fontsize(16)       //创建不同大小文字 "<font size="16">apple,banana,pair</font>"
string.link("https://www.baidu.com") //创建链接 "<a href="https://www.baidu.com">apple,banana,pair</a>"
string.blink()             //创建字符闪动（不建议使用） "<blink>apple,banana,pair</blink>"
string.sup()
string.fixed()
string.strike()           //在字符上添加删除线 "<strike>apple,banana,pair</strike>"
string.localeCompare("abc") //使用浏览器native端对字符串排序进行比较 返回1 说明string排序在"abc"之后，返回-1，说明在abc之前。



export default class StringComponent extends Component {
  name='zhangsan'
  render() {
    return (
      <div>
        <h2>String类方法</h2>
        <p>String.fromCharCode(97): {String.fromCharCode(97)}</p>
        <p>String.fromCodePoint(128522): {String.fromCodePoint(128522)}</p>
        <p>String.raw(): {}</p>

        <h2>String实例方法</h2>
        <h3>查询</h3>


        <h3>二进制</h3>


        <h3>切割</h3>



        <h3>转换为数组</h3>


        <h3>修改与添加</h3>


        <h3>大小写转换</h3>
        <p>"ABCde".toUpperCase()：{"ABCde".toUpperCase()}</p>
        <p>"ABCde".toLowerCase()：{"ABCde".toLowerCase()}</p>
        <p>"ABCde".toLocaleUpperCase() ：{"ABCde".toLocaleUpperCase()}</p>
        <p>"ABCde".toLocaleLowerCase()：{"ABCde".toLocaleLowerCase()}</p>

        <h3>浏览器方法</h3>
        <i>String实例的浏览器方法，多数只在浏览器环境有用，在标准中已不推荐使用，实际开发中很少用的到，仅作了解</i>
        <p dangerouslySetInnerHTML={{__html: 'string.anchor("name")：' + string.anchor("name")}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.italics():' +  string.italics()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.big()：' + string.big()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.small()：' + string.small()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.bold("name")：' + string.bold()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.fontcolor("red")：' + string.fontcolor("red")}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.fontsize(12)：' + string.fontsize(12)}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.link("name")：' + string.link("https://www.baidu.com")}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.blink()：' + string.blink()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.sup()：' + string.sup()}}></p>
        <p dangerouslySetInnerHTML={{__html: 'string.strike()：' + string.strike()}}></p>
      </div>
    )
  }
}
