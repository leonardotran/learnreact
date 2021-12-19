import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchWeather = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search placeholder="name of city" enterButton="Search"
                size="large" loading={false} />
            </Col>
        </Row>
    )

}

export default SearchWeather;