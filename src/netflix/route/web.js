import React, {lazy, Suspense} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";

import { Skeleton } from "antd";
import {helper} from '../helpers/common';


const PopularPage = lazy(() => import('../pages/populars/index')) ;
const UpcomingPage = lazy(() => import('../pages/upcoming/index')) ;
const SearchPage = lazy(() => import('../pages/search/index')) ;
const FavoritePage = lazy(() => import('../pages/favorites/index'));
const DetailPage = lazy(() => import('../pages/detail/index')) ;
const LoginPage = lazy(() => import('../pages/login/index')) ;
const InfoUser = lazy(() => import('../pages/user/index')) ;

function PrivateRoute({ children, ...rest }) {
    let auth = helper.checkUserIsLogined();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  function UserLogged({ children, ...rest }) {
    let auth = helper.checkUserIsLogined();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            <Redirect
              to={{
                pathname: "/popular-movies",
                state: { from: location }
              }}
            />
            
          ) : (
            children
          )
        }
      />
    );
  }
  


const RouteMovies =  () => {
    return (
        <Router>
        <Suspense fallback={<Skeleton active/>}>
            <Switch>
                <UserLogged path="/" exact>
                    <LoginPage/>
                </UserLogged>
                <PrivateRoute path="/popular-movies" exact>
                    <PopularPage/>
                </PrivateRoute>
                <PrivateRoute path="/upcoming-movies" exact>
                    <UpcomingPage/>
                </PrivateRoute>
                <PrivateRoute path="/search-movies" exact>
                    <SearchPage/>
                </PrivateRoute>
                <PrivateRoute path="/favorite-movies" exact>
                    <FavoritePage/>
                </PrivateRoute>
                <PrivateRoute path="/detail/:slug~:id">
                    <DetailPage/>
                </PrivateRoute>
                <PrivateRoute path="/info-user">
                    <InfoUser/>
                </PrivateRoute>
                <UserLogged path="/login">
                    <LoginPage/>
                </UserLogged>
            </Switch>
            </Suspense>
        </Router>
    )
}

export default React.memo(RouteMovies);