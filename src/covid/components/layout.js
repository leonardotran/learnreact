import React from "react";
import HeaderCovid from './partials/header';
import FooterCovid from './partials/footer';
import './layout.css';


import { Layout, } from 'antd';


const { Content } = Layout;

const LayoutCovid = (props) => {
    return (
    
        <>
            <Layout className="layout">
                <HeaderCovid/>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">{props.children}</div>
                </Content>
                <FooterCovid/>
            </Layout>
        </>
    )
}

export default React.memo(LayoutCovid);