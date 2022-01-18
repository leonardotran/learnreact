import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'; //hooks react redux
import LayoutShopping from '../../components/layout';
import {getDataProducts} from './reducers/actions';
import { getStateLoading, getStateListProduct } from './reselects/home';
import {Row, Col, Skeleton} from 'antd';
import { createStructuredSelector } from 'reselect';
import ListProducts from './components/list'

const HomePage = () => {
    const dispatch = useDispatch();
    const {loading, products} = useSelector(createStructuredSelector({
        loading: getStateLoading,
        products: getStateListProduct
    }));

    useEffect(() => {
        dispatch(getDataProducts());
    }, [dispatch]);

    if(loading) {
        return (
            <LayoutShopping
                lv1="Shopping"
                lv2="Home"
                lv3="List productions"
            >  
                <Skeleton active/>
            </LayoutShopping>
        )
    }

    return (
        <LayoutShopping
            lv1="Shopping"
            lv2="Home"
            lv3="List productions"
        >
            <Row>
                <Col span={24}>
                    <ListProducts data={products}/>
                </Col>
            </Row>
        </LayoutShopping>
    )
}

export default React.memo(HomePage);