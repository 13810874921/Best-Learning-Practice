import React, {Component} from 'react';
import { Card, Modal} from 'antd';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs/prism.js';
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);


export default class DemoShow extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
          visible: true,
        });
        setTimeout(() => {
            Prism.highlightAll();
        }, 100)
    }

    handleOk = (e) => {
        this.setState({
          visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
          visible: false,
        });
    }

    render() {
        const { effect, code, doc }  = this.props
        return (
            <React.Fragment>
                <div style={{display: 'flex', flex: '1', height: '100%'}}>
                    <Card title="运行效果" style={{width: '100%'}} bodyStyle={{overflow: 'auto', height: '85%'}}>
                        { effect }
                    </Card>
                </div>
                <div style={{width: '900px', height: '100%'}}>
                    <Card 
                    title={<b>源代码 {doc ? <span className="pull-right" onClick={this.showModal}>文档</span> : null}</b>}
                        style={{height: '100%'}}
                        bodyStyle={{overflow: 'auto', height: '85%'}}>
                        <SyntaxHighlighter language='jsx' style={prism}>{code}</SyntaxHighlighter>
                    </Card>
                </div>
                {
                    doc ?
                    <Modal
                        title={null}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        width={1000}
                        style={{top: '20px'}}
                        >
                        <ReactMarkdown source={doc} />
                    </Modal> : null
                }
            </React.Fragment>
        );
    }

}


