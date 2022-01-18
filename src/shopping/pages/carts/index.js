import React from 'react';
import LayoutShopping from '../../components/layout';
import {Row, Col, Image} from 'antd';
import { InputNumber, Button } from 'antd';


const CartPage = () => {
    return (
        <LayoutShopping
            lv1="Shopping"
            lv2="Cart"
            lv3="List"
        >
            <Row style={{marginBottom: '10px', borderBottom: '1px solid #ccc'}}>
                <Col span={24}>
                    <Row>
                        <Col span={4}>
                            <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </Col>
                        <Col span={20} style={{paddingLeft: '20px'}}>
                            <h2>Samsung Galaxy</h2>
                            <p>Price: 20000</p>
                            <InputNumber min={1} max={10} defaultValue={3}/>
                            <p style={{marginTop: '10px'}}>
                                <Button type="primary">Update</Button>
                                <Button style={{marginLeft:'10px'}} type="primary" danger>Remove</Button>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutShopping>
    )
}

export default React.memo(CartPage);