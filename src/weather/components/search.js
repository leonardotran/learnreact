import React from 'react';
import { Row, Col, Input } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {requestSearch} from '../actions/index';
import { getStatusLoadingData } from '../reselects/weatherReselect';
import { createStructuredSelector } from 'reselect';

const { Search } = Input;


const SearchWeather = () => {
    const dispatch = useDispatch();
    const {loadingState} = useSelector(createStructuredSelector({
        loadingState: getStatusLoadingData
    }));
    const searchData = (name ) => {
        dispatch(requestSearch(name,'vi'));
    }
    return (
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
                <Search 
                placeholder="name of city" 
                enterButton="Search"
                size="large" 
                loading={loadingState} 
                onSearch={val => searchData(val)}
                />
            </Col>
        </Row>
    )

}

export default SearchWeather;