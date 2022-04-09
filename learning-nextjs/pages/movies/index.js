import React from "react";
import {Row, Col, Input} from 'antd';

const {Search} = Input;

const SearchMovie = () => {
    return (
    <>
        <Row>
            <Col span={12} offset={6}>
            <Search placeholder="input search text" enterButton />
            </Col>
        </Row>

        <Row style={{marginTop: '20px'}}>
            <Col span={20} offset={2}>
            </Col>
        </Row>
    </>    

        

    )
}
export default React.memo(SearchMovie);