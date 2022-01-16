import React from 'react';
import LayoutShopping from '../../components/layout';
import {Row, Col} from 'antd';

const CartPage = () => {
    return (
        <LayoutShopping
            lv1="Shopping"
            lv2="Cart"
            lv3="List"
        >
            <Row>
                <Col span={24}>
                    <h5>This is cart page</h5>
                </Col>
            </Row>
        </LayoutShopping>
    )
}

export default React.memo(CartPage);