import React from "react";
import HeaderTodo from "./partials/Header";
import FooterTodo from "./partials/Footer";
import {Row, Col, Layout} from 'antd';
import './common.css';
const { Content } = Layout;

class LayoutTodo extends React.PureComponent{
    render() {
        return(
            <>
                <Layout>
                    <HeaderTodo/>
                        <Content>
                            <Row>
                                <Col span={12} offset={6}>
                                    {this.props.children}
                                </Col>
                            </Row>
                        </Content>
                        <FooterTodo/>
                </Layout>
            </>
        ) 
        
    }
}
export default LayoutTodo;