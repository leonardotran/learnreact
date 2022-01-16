import React from "react";
import HeaderShopping from './partials/header';
import BreadcrumbShopping from './partials/breadcrumb';
import FooterShopping from './partials/footer';
import './css/style.css';

import { Layout  } from 'antd';
const { Content } = Layout;

const LayoutShopping = (props) => {
    return (
        <Layout className="layout">
            <HeaderShopping/>
            <Content style ={{ padding: '0 50px'}}>
                <BreadcrumbShopping
                    lv1={props.lv1}
                    lv2={props.lv2}
                    lv3={props.lv3}

                />
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <FooterShopping/>
        </Layout>

    )
}
export default React.memo(LayoutShopping);