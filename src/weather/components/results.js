import React from "react";
import { useSelector } from "react-redux";
import {Row, Col, Skeleton} from 'antd';
import { getDataMainWeather, getStatusFinishData } from "../reselects/weatherReselect";
import { createStructuredSelector } from 'reselect';
import {helper} from '../helpers/common';


const ResultWeather = () => {
    const {finishStatus, dataWeathers} = useSelector(createStructuredSelector({
        finishStatus: getStatusFinishData,
        dataWeathers: getDataMainWeather
    }));
    if(!finishStatus){
        return (
            <Row>
                <Col span={20} offset={2}>
                    <Skeleton/>
                </Col>
            </Row>
        )
    }
    
    if(helper.isEmptyObject(dataWeathers)) {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <h2>No Data !</h2>
                </Col>
            </Row>
        )
    }


    return (
        <>
        <Row>
            <Col span={20} offset={2}>
                <p>Thong tin thoi tiet : {dataWeathers['name']}</p>
                <p> - Nhiet Do: {dataWeathers['main']['temp']} C </p>
            </Col>
        </Row>
        </>
    )
}

export default React.memo(ResultWeather);