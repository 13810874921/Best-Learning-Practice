import React, { Component } from 'react';
import Html2canvasComponent from './index';
import { Card } from 'antd';

const { Meta } = Card;
//跨域图片转base64
const toBase64 = (imgUrl) => {
		window.URL = window.URL || window.webkitURL;
		var xhr = new XMLHttpRequest();
		xhr.open('get', imgUrl, true);
		// 至关重要
		xhr.responseType = 'blob';
		xhr.onload = function() {
			if (this.status == 200) {
				//得到一个blob对象
				var blob = this.response;
				// console.log('blob', blob);
				//  至关重要
				let oFileReader = new FileReader();
				oFileReader.onloadend = function(e) {
					// let	base64 = e.target.result;
					// console.log('方式一》》》》》》》》》', base64);
					var img = document.getElementById('img');
					img.src = e.target.result;
				};
				oFileReader.readAsDataURL(blob);
			}
		};
		xhr.send();
	};
//任意demo
class DemoTest extends Component{
	render(){
		const {refs,imageUrl} = this.props;
		return(
			// {/* 下面控制需要展现的东西,使用的时候需要指定ref */}
			<div ref={refs}>
				{/* 先获取远程图片 */}
				{toBase64(imageUrl)}
				<Card style={{ width: 375 }} cover={<img id="img" alt="example" crossOrigin="anonymous" />}>
					<Meta title="Europe&nbsp;Street&nbsp;beat" description="www.instagram.com" />
				</Card>
				<div>123123</div>
				<div>123123</div>
				<div>123123</div>
			</div>
		)
	}
}

export default class Test extends Component {
	constructor(props) {
		super(props);
		this.div = React.createRef();
	}
	render() {
		return (
			<div>
				{/* refHtml是控制展现的区域，scaled是控制canvas的缩放比例 */}
				<Html2canvasComponent refHtml={this.div} scaled={0.6} />
				{/* insert demo */}
				<DemoTest refs={this.div} imageUrl={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}/>
			</div>
		);
	}
}
