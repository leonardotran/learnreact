import React from "react";
import HeaderMovies from '../partials/Header';
import FooterMovies from '../partials/Footer';
import { Layout } from 'antd';
import '../../styles/layout.css'

const { Content } = Layout;

const LayoutMovies = (props) => {
    return (
        <Layout className="layout"> 
            <HeaderMovies/>
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">{props.children}</div>
            </Content>
            <FooterMovies/>
        </Layout>
    )
}

export default React.memo(LayoutMovies);