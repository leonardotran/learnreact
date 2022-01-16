import React from 'react';
import {Layout, Menu} from 'antd';
import { NavLink, useLocation} from 'react-router-dom';

const {Header} = Layout;

const HeaderShopping = () => {
    const {pathname} = useLocation();
    return (
        <Header>
        <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/">
                <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="/">
                <NavLink to="/cart">Cart</NavLink>
                </Menu.Item>            
                </Menu>
        </Header>
    )
}

export default React.memo(HeaderShopping);