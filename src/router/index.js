/*eslint-disable*/
import React from 'react';
import DemoShow from '../DemoShow';

//React基础：基础用法
import Basic from '../react/basic/base/basicComponent.js';
import BasicText from '!raw-loader!../react/basic/base/basicComponent.js';

//React基础：生命周期
import Lifecycle from '../react/basic/lifecycle/lifecycleComponent.js';
import LifecycleText from '!!babel-loader!raw-loader!../react/basic/lifecycle/lifecycleComponent.js';

//React基础：分支与循环
import Loop from '../react/basic/loop/loopComponent.js';
import LoopText from '!raw-loader!../react/basic/loop/loopComponent.js';
import LoopMarkdown from '!raw-loader!../react/basic/loop/readme.md';

//React基础：事件绑定
import Event from '../react/basic/event/EventComponent.js';
import EventText from '!raw-loader!../react/basic/event/EventComponent.js';
import EventMarkdown from '!raw-loader!../react/basic/event/readme.md';

//React基础：函数式组件
import Functional from '../react/basic/functional/functionalComponent.js';
import FunctionalText from '!!babel-loader!raw-loader!../react/basic/functional/functionalComponent.js';

//React进阶：异常捕获
import CatchError from '../react/catchError/catchErrorComponent.js';
import CatchErrorText from '!!babel-loader!raw-loader!../react/catchError/catchErrorComponent.js';
import CatchErrorMarkdown from '!raw-loader!../react/catchError/readme.md';

//React进阶：获取原生node, ref
import Ref from '../react/ref/RefComponent.js';
import RefText from '!raw-loader!../react/ref/RefComponent.js';
import RefMarkdown from '!raw-loader!../react/ref/readme.md';

//React进阶：portal
import Portal from '../react/portal/PortalComponent.js';
import PortalText from '!raw-loader!../react/portal/PortalComponent.js';
import PortalMarkdown from '!raw-loader!../react/portal/readme.md';

//React进阶：异步按需加载，codeSplite, suspect & lazy
import CodeSplite from '../react/codeSplite/codeSpliteComponent.js';
import CodeSpliteText from '!raw-loader!../react/codeSplite/codeSpliteComponent.js';
import CodeSpliteMarkdown from '!raw-loader!../react/codeSplite/readme.md';

//React进阶：避免过多渲染，提升性能，memo 和 shouldComponentUpdate 和 PureComponent
import ShouldUpdate from '../react/shouldComponentUpdate/ShouldUpdateComponent';
import ShouldUpdateText from '!raw-loader!../react/shouldComponentUpdate/ShouldUpdateComponent';
import ShouldUpdateMarkdown from '!raw-loader!../react/shouldComponentUpdate/readme.md';

//React进阶：context
import Context from '../react/context/ContextComponent';
import ContextText from '!raw-loader!../react/context/ContextComponent';
import ContextMarkdown from '!raw-loader!../react/context/readme.md';

//React进阶：HOC与装饰器

//React进阶：hooks

//React进阶：代码规范与最佳实践

/*
 * JavaScript基础提纲
 */

//JS基础：正则表达式
import RegExpComponent from '../javaScript/regExp/index';
import RegExpTextComponent from '!raw-loader!../javaScript/regExp/index';
//JS基础：对象
import ObjectComponent from '../javaScript/object/index';
import ObjectTextComponent from '!raw-loader!../javaScript/object/index';
//JS基础：数组
import ArrayComponent from '../javaScript/array/index';
import ArrayTextComponent from '!raw-loader!../javaScript/array/index';

//JS基础：字符串
import StringComponent from '../javaScript/string/index';
import StringTextComponent from '!raw-loader!../javaScript/string/index';

//JS基础：数字
import NumberComponent from '../javaScript/number/index';
import NumberTextComponent from '!raw-loader!../javaScript/number/index';

//JS基础：函数

//JS概念：Promise
import PromiseComponent from '../javaScript/promise/index';
import PromiseTextComponent from '!raw-loader!../javaScript/promise/index';

//JS概念：async、await
import AsyncComponent from '../javaScript/async/index';
import AsyncTextComponent from '!raw-loader!../javaScript/async/index';

//JS概念：forEach\map\for\for of循环的区别
import LoopComponent from '../javaScript/loop/index';
import LoopTextComponent from '!raw-loader!../javaScript/loop/index';

//JS概念：构造函数与class的区别
import ClassComponent from '../javaScript/class/index';
import ClassTextComponent from '!raw-loader!../javaScript/class/index';

//JS概念：commonJS 与 es module的区别
import CommonJSComponent from '../javaScript/commonJS';
import CommonJSTextComponent from '!raw-loader!../javaScript/commonJS';

import Module from '../javaScript/modules/entry';
import ModuleText from '!raw-loader!../javaScript/modules/entry';

//JS概念：类型系统与类型的判断
import TypeSysComponent from '../javaScript/typeSystem';
import TypeSysTextComponent from '!raw-loader!../javaScript/typeSystem';

//JS概念：Set/Map/forEach/for of区别

//JS概念：普通函数与箭头函数
import FunctionComponent from '../javaScript/function/index';
import FunctionTextComponent from '!raw-loader!../javaScript/function/index';

//JS概念：闭包
import Closure from '../javaScript/closure/index';
import ClosureText from '!raw-loader!../javaScript/closure/index';

//JS概念：var/let/const区别
import ConstComponent from '../javaScript/const/index';
import ConstTextComponent from '!raw-loader!../javaScript/const/index';

//JS概念：事件循环/任务与微任务
import EventLoop from '../javaScript/eventloop'
import EventLoopText from '!raw-loader!../javaScript/eventloop'

//JS概念：bind/call/apply
import BindCallApply from '../javaScript/bindCallApply'
import BindCallApplyText from '!raw-loader!../javaScript/bindCallApply'
//JS概念：迭代器

//JS概念：柯里化

//JS概念与语法：装饰器
import Decorator from '../javaScript/decorator/index';
import DecoratorText from '!raw-loader!../javaScript/decorator/index';
import DecoratorMarkdown from '!raw-loader!../javaScript/decorator/readme.md';

//JS概念与语法：Proxy
import ProxyComponent from '../javaScript/proxy/proxy';
import ProxyTextComponent from '!raw-loader!../javaScript/proxy/proxy';

//浏览器API： cookie操作
import CookieComponent from '../javaScript/cookie';
import CookieTextComponent from '!raw-loader!../javaScript/cookie';

//浏览器API： fetch（比较axios）
import FetchComponent from '../javaScript/fetch';
import FetchTextComponent from '!raw-loader!../javaScript/fetch/text.md';

//Mobx基础：基础用法
import MobxClass from '../mobx/basic/MobxClass';
import MobxClassText from '!raw-loader!../mobx/basic/MobxClass';

//Mobx基础：和React结合
import MobxReact from '../mobx/mobx-react/MobxReact';
import MobxReactText from '!raw-loader!../mobx/mobx-react/MobxReact';

//效果：使用react-dnd进行拖拽

//效果：按钮debounce

//效果：antd table 无限滚动

// import Functional from '../react/basic/functional/functionalComponent.js';
// import catchError from '../react/catchError/catchErrorComponent.js';
import props from '../react/basic/props/propsComponent.js';
import refs from '../react/basic/refs/refsComponent.js';
import setState from '../react/basic/setState/setStateComponent.js';

import codeSplite from '../react/codeSplite/codeSpliteComponent.js';
import Debounce from '../effects/debounce/DebounceSubmit.js';
// import ConstComponent from '../javaScript/const';

//html2canvas
import Html2canvas from '../html2canvas/index';
import Test from '../html2canvas/test';

const reactRoutes = [
	{
		path: '/basic',
		exact: true,
		component: () => <DemoShow effect={<Basic />} code={BasicText} />
	},
	{
		path: '/lifecycle',
		component: () => <DemoShow effect={<Lifecycle />} code={LifecycleText} />
	},
	{
		path: '/event',
		component: () => <DemoShow effect={<Event />} code={EventText} doc={EventMarkdown} />
	},
	{
		path: '/loop',
		component: () => <DemoShow effect={<Loop />} code={LoopText} doc={LoopMarkdown} />
	},
	{
		path: '/props',
		component: props
	},
	{
		path: '/portal',
		component: () => <DemoShow effect={<Portal />} code={PortalText} doc={PortalMarkdown} />
	},
	{
		path: '/ref',
		component: () => <DemoShow effect={<Ref />} code={RefText} doc={RefMarkdown} />
	},
	{
		path: '/setState',
		component: setState
	},
	{
		path: '/functional',
		component: () => <DemoShow effect={<Functional title="测试" content="content" />} code={FunctionalText} /> //传递props的方法
	},
	{
		path: '/context',
		component: () => <DemoShow effect={<Context />} code={ContextText} doc={ContextMarkdown} />
	},
	{
		path: '/catchError',
		component: () => <DemoShow effect={<CatchError />} code={CatchErrorText} doc={CatchErrorMarkdown} />
	},
	{
		path: '/ShouldUpdate',
		component: () => <DemoShow effect={<ShouldUpdate />} code={ShouldUpdateText} doc={ShouldUpdateMarkdown} />
	},
	{
		path: '/codeSplite',
		component: () => <DemoShow effect={<CodeSplite />} code={CodeSpliteText} doc={CodeSpliteMarkdown} />
	}
];

const mobxRoutes = [
	{
		path: '/mobx/basic',
		component: () => <DemoShow effect={<MobxClass />} code={MobxClassText} />
	},
	{
		path: '/mobx/react',
		component: () => <DemoShow effect={<MobxReact />} code={MobxReactText} />
	}
];

const effectRoutes = [
	{
		path: '/effect/debounce',
		component: Debounce
	}
];

const html2canvasRoutes = [
	{
		path: '/html2canvas',
		component: Test
	}
];
const tools = [
	{
		path: '/tools',
		component: ()=><div><a target='_blank' href='https://c.runoob.com/front-end'>菜鸟在线工具</a></div>
	}
];

const jsRoutes = [
	{
		path: '/object',
		component: () => <DemoShow effect={<ObjectComponent />} code={ObjectTextComponent} />
	},
	{
		path: '/class',
		component: () => <DemoShow effect={<ClassComponent />} code={ClassTextComponent} />
	},
	{
		path: '/array',
		component: () => <DemoShow effect={<ArrayComponent />} code={ArrayTextComponent} />
	},
	{
		path: '/string',
		component: () => <DemoShow effect={<StringComponent />} code={StringTextComponent} />
	},
	{
		path: '/number',
		component: () => <DemoShow effect={<NumberComponent />} code={NumberTextComponent} />
	},
	{
		path: '/function',
		component: () => <DemoShow effect={<FunctionComponent />} code={FunctionTextComponent} />
	},
	{
		path: '/promise',
		component: () => <DemoShow effect={<PromiseComponent />} code={PromiseTextComponent} />
	},
	{
		path: '/async',
		component: () => <DemoShow effect={<AsyncComponent />} code={AsyncTextComponent} />
	},
	{
		path: '/fetch',
		component: () => <DemoShow effect={<FetchComponent />} code={FetchTextComponent} />
	},
	{
		path: '/commonJs&ES_module1',
		component: () => <DemoShow effect={<Module />} code={ModuleText} />
	},
	{
		path: '/for',
		component: () => <LoopComponent />
	},
	{
		path: '/typeSys',
		component: () => <DemoShow effect={<TypeSysComponent />} code={TypeSysTextComponent} />
	},
	{
		path: '/closure',
		component: () => <DemoShow effect={<Closure />} code={ClosureText} />
	},
	{
		path: '/const&let&var',
		component: () => <DemoShow effect={<ConstComponent />} code={ConstTextComponent} />
	},
	{
		path: '/cookie',
		component: () => <DemoShow effect={<CookieComponent />} code={CookieTextComponent} />
	},
	{
		path: '/proxy',
		component: () => <DemoShow effect={<ProxyComponent />} code={ProxyTextComponent} />
	},
	{
		path: '/regExp',
		component: () => <DemoShow effect={<RegExpComponent/>} code={RegExpTextComponent} />
	},
	{
		path: '/commonJs&ES_module',
		component: () => <DemoShow effect={<CommonJSComponent />} code={CommonJSTextComponent} />
	},
	{
		path: '/decorator',
		component: () => <DemoShow effect={<Decorator />} code={DecoratorText} doc={DecoratorMarkdown} />
	},
	{
		path: '/bindCallApply',
		component: () => <DemoShow effect={<BindCallApply />} code={BindCallApplyText} />
	},
	{
		path: '/eventLoop',
		component: () => <DemoShow effect={<EventLoop />} code={EventLoopText} />
	}
];

const routes = [ ...reactRoutes, ...jsRoutes, ...mobxRoutes, ...effectRoutes, ...html2canvasRoutes, ...tools ];
const routeClassify = {
	reactRoutes,
	mobxRoutes,
	jsRoutes,
	effectRoutes,
	html2canvasRoutes,
	tools
};
const classNameArr = [ 'React', 'Mobx', 'JavaScript', 'Effect', 'html2canvas', 'tools' ];

export { routes, routeClassify, classNameArr };
