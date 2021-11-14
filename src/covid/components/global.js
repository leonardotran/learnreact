import React from "react";
import {Row, Col, Card} from 'antd';
import NumberFormat from 'react-number-format';


const GlobalCovid = (props) => {
    return (
        <>
            <Row style={{margin: '200px 0px'}}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}>
                        Thong tin dich Covid tren toan the gioi
                        <Row>
                            <Col span={8}></Col>
                                <Card 
                                    title="So ca nhiem" bordered={true} >
                                        <p>Ca nhiem moi:  
                                        <NumberFormat value={props.global.NewConfirmed} displayType={'text'} thousandSeparator={true}/>
                                        </p>
                                        <p>Tong so ca nhiem: 
                                        <NumberFormat value={props.global.TotalConfirmed} displayType={'text'} thousandSeparator={true} />
                                        </p>
                                </Card>
                            <Col span={8}></Col>
                                    <Card 
                                        title="So ca tu vong" bordered={true} >
                                            <p>Moi tu vong: {props.global.NewDeaths}</p>
                                            <p>Tong so ca tu vong: {props.global.TotalDeaths}</p>
                                    </Card>
                            <Col span={8}></Col>
                                    <Card 
                                        title="So ca khoi benh" bordered={true} >
                                            <p>Moi khoi benh: {props.global.NewRecovered}</p>
                                            <p>Tong so ca khoi benh: {props.global.TotalRecovered}</p>
                                    </Card>
                        </Row>
                    </h2>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(GlobalCovid);