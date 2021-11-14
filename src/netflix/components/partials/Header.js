import React from "react";
import { Menu, Layout } from 'antd';
import {NavLink, useLocation } from 'react-router-dom';

const { Header} = Layout;

const HeaderMovies = () =>  {
    const {pathname} = useLocation(); //HOOK cua react router dom
    return (
        <Header>
            <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                    <Menu.Item key='/popular-movies'>
                    <NavLink to="/popular-movies">Popular movies</NavLink>
                    </Menu.Item>
                    <Menu.Item key='/upcoming-movies'>
                    <NavLink to="/upcoming-movies">Upcoming movies</NavLink>
                    </Menu.Item>
                    <Menu.Item key='/search-movies'>
                    <NavLink to="/search-movies">Search movies</NavLink>
                    </Menu.Item>
                    <Menu.Item key='/favorite-movies'>
                    <NavLink to="/favorite-movies">Favorite movies</NavLink>

                    </Menu.Item>
                </Menu>
        </Header>
    )
}
export default React.memo(HeaderMovies);