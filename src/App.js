import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import {routeClassify, routes, classNameArr} from './router/index';
import {Menu, Layout} from 'antd';
import 'prismjs/themes/prism.css';
import 'antd/dist/antd.css';

const {Header, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    
    render() {
        return (
            <Layout>
                <Header className="header">
                    <h2 style={{color: '#fff', float: 'left'}}> &emsp;React Demo</h2>
                </Header>
                <Layout>
                    <Sider width={240} style={{background: '#fff', overflow: 'auto'}}>

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{height: '100%', borderRight: 0, overflowY:'auto'}}
                        >
                            {
                                Object.values(routeClassify).map((route, index) => {
                                    return (
                                        <SubMenu key={index} title={classNameArr[index]}>
                                        {
                                            route.map(item => {
                                                return (
                                                    <Menu.Item key={item.path}>
                                                        <Link to={item.path}>{item.path.replace('/', '')}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                        </SubMenu>
                                    )
                                })

                            }
                        </Menu>

                    </Sider>
                    <Layout style={{padding: '24px 24px 0px 24px', height: '100%', display: 'flex', flexDirection: 'row', flex: '0 0 1', overflow: 'hidden'}}>
                            {renderRoutes(routes)}
                    </Layout>
                </Layout>
            </Layout>
        );
    }

}

export default App;
