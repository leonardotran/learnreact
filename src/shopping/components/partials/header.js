import React from 'react';
import {Layout, Menu} from 'antd';
import { NavLink, useLocation} from 'react-router-dom';
import { getItemsCart } from './count';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const {Header} = Layout;

const HeaderShopping = () => {
    const {countItems} = useSelector(createStructuredSelector({
        countItems: getItemsCart
    }));
    const {pathname} = useLocation();
    return (
        <Header>
        <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/">
                <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="/cart">
                <NavLink to="/cart">Cart ({countItems})</NavLink>
                </Menu.Item>            
                </Menu>
        </Header>
    )
}

export default React.memo(HeaderShopping);