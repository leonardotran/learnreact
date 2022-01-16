import React from 'react';
import LayoutShopping from '../../components/layout';
import {Row, Col} from 'antd';

const HomePage = () => {
    return (
        <LayoutShopping
            lv1="Shopping"
            lv2="Home"
            lv3="List productions"
        >
            <Row>
                <Col span={24}>
                    <h5>This is home page</h5>
                </Col>
            </Row>
        </LayoutShopping>
    )
}

export default React.memo(HomePage);