import React from 'react';
import { Row, Col, Input } from 'antd';
import {useDispatch} from 'react-redux';
import {requestSearch} from '../actions/index';

const { Search } = Input;

const SearchWeather = () => {
    const dispatch = useDispatch();
    const searchData = (name) => {
        dispatch(requestSearch(name,'vi'));
    }
    return (
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
                <Search 
                placeholder="name of city" 
                enterButton="Search"
                size="large" 
                loading={false} 
                onSearch={val => searchData(val)}
                />
            </Col>
        </Row>
    )

}

export default SearchWeather;