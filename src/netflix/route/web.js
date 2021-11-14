import React, {lazy, Suspense} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import { Skeleton } from "antd";

const PopularPage = lazy(() => import('../pages/populars/index')) ;
const UpcomingPage = lazy(() => import('../pages/upcoming/index')) ;
const SearchPage = lazy(() => import('../pages/search/index')) ;
const FavoritePage = lazy(() => import('../pages/favorites/index')) ;
const DetailPage = lazy(() => import('../pages/detail/index')) ;

const RouteMovies =  () => {
    return (
        <Router>
        <Suspense fallback={<Skeleton active/>}>
            <Switch>
                <Route path="/" exact>
                    <PopularPage/>
                </Route>
                <Route path="/popular-movies" exact>
                    <PopularPage/>
                </Route>
                <Route path="/upcoming-movies" exact>
                    <UpcomingPage/>
                </Route>
                <Route path="/search-movies" exact>
                    <SearchPage/>
                </Route>
                <Route path="/favorite-movies" exact>
                    <FavoritePage/>
                </Route>
                <Route path="/detail/:slug~:id">
                    <DetailPage/>
                </Route>
            </Switch>
            </Suspense>
        </Router>
    )
}

export default React.memo(RouteMovies);