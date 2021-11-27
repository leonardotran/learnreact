import React from "react";
import { Menu, Layout } from 'antd';
import {NavLink, useLocation, useHistory } from 'react-router-dom';
import { helper } from "../../helpers/common";
const { Header} = Layout;

const HeaderMovies = () =>  {
    const history = useHistory();
    const {pathname} = useLocation(); //HOOK cua react router dom
    const username = helper.getUserTokenStorage();
    // const idUser = helper.getIdUserTokenStorage();
    const checkLogin = helper.checkUserIsLogined();
    // console.log(infoUser);
    const logoutMovies = () => {
        helper.removeTokenLocalStorage();
        history.push('/login');
    }
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
                    {!checkLogin ? (
                    <Menu.Item key='/login'>
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                    ) : (
                        <>
                    <Menu.Item key='/info-user'>
                            <NavLink to='/info-user'> Hi: {username}</NavLink>
                            {/* <NavLink to={`/user/${username}/${idUser}`}> Hi: {username}</NavLink> */}
                    </Menu.Item>
                    <Menu.Item key='logout' onClick={() => logoutMovies()}>
                    Logout
                    </Menu.Item>
                    </>
                    )};
                </Menu>
        </Header>
    )
}
export default React.memo(HeaderMovies);