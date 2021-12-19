import React from "react";
import {Row, Col} from 'antd';

const ResultWeather = () => {
    return (
        <>
        <Row>
            <Col span={20} offset={2}>
                <p>Thong tin thoi tiet cua thanh pho: Ha Noi</p>
            </Col>
        </Row>
        </>
    )
}

export default React.memo(ResultWeather);