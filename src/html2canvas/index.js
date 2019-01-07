import React, { Component } from 'react';
import html2canvas from 'html2canvas';
class CanvasContainer extends Component {
	componentDidMount() {
		if (this.container) {
			this.container.appendChild(this.props.canvas);
			// setTimeout(() => {
			// 	this.props.canvas.style.opacity = '1';
			// 	this.props.canvas.style.transform = 'scale(' + this.props.scaled + ')';
			// }, 10);
		}
	}
	render() {
		return (
			<div
				id="imgWrap"
				style={{
					background: 'rgba(0, 0, 0, 0.5)',
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					margin: 'auto',
					zIndex: '99999998',
					width: '100%',
					height: '100%'
				}}
				onClick={() => this.props.onClose()}
			>
				{/* <div
					style={{
						background: 'rgba(0, 0, 0, 0.5)',
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						margin: 'auto',
						zIndex: '99999998',
						width: '100%',
						height: '100%',
						display:'none'
					}}
					ref={(container) => (this.container = container)}
					onClick={() => this.props.onClose()}
				/>	 */}
				<img
					id="canvasImg"
					style={{
						transform: 'scale('+this.props.scaled+')',
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom:0,
						margin: 'auto'
					}}
				/>
			</div>
		);
	}
}
export default class Html2canvasComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { canvas: null };
	}
	render() {
		const { refHtml, scaled } = this.props;
		return (
			// data-html2canvas-ignore 控制不被生成图片的div
			// <div data-html2canvas-ignore>
			<div className="abc">
				{this.state.canvas ? (
					<CanvasContainer
						scaled={scaled}
						canvas={this.state.canvas}
						onClose={() => this.setState({ canvas: null })}
					/>
				) : null}
				<div
					style={{
						padding: '4px 8px',
						margin: '10px',
						border: '2px solid #333',
						color: '#333',
						display: 'inline-block',
						cursor: 'pointer'
					}}
					onClick={() => {
						html2canvas(refHtml.current, {
							allowTaint: true,
							width: refHtml.current.clientWidth * 2,
							height: refHtml.current.clientHeight * 2,
							useCORS: true
						})
							.then(
								(refHtml.current.style.transform = 'scale(2)'),
								(refHtml.current.style.transformOrigin = 'left top 0px')
							)
							.then((canvas) => {
								var context = canvas.getContext('2d');
								// 【重要】关闭抗锯齿
								context.mozImageSmoothingEnabled = false;
								context.webkitImageSmoothingEnabled = false;
								context.msImageSmoothingEnabled = false;
								context.imageSmoothingEnabled = false;

								refHtml.current.style.transform = 'scale(1)';
								this.setState({ canvas });
								canvas.style.position = 'fixed';
								canvas.style.top = '0';
								canvas.style.left = '0';
								canvas.style.bottom = '0';
								canvas.style.right = '0';
								canvas.style.margin = 'auto';
								canvas.style.opacity = '0';
								canvas.style.transform = 'scale(1)';
								canvas.style.zIndex = '99999999';
								canvas.style.transition =
									'transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)';

								//给canvas转图片
								document.getElementById('canvasImg').src = canvas.toDataURL();
							})
							.catch((e) => {
								console.log(e);
							});
					}}
				>
					Button
				</div>
			</div>
		);
	}
}
