import React from "react";
import SearchWeather from "../components/search";
import ResultWeather from "../components/results";
import {Row, Col} from "antd";

const Weather = () => {
    return (
        <>
            <Row style={{margin: '30px 0px'}}>
                <Col span={12} offset={6}>
                    <SearchWeather/>
                    <ResultWeather/>
                </Col>
            </Row>
        </>
    )
}

export default Weather;