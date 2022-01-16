import React from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

const BreadcrumbShopping = (props) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{props.lv1}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.lv2}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.lv3}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

BreadcrumbShopping.propTypes = {
    lv1: PropTypes.string.isRequired,
    lv2: PropTypes.string.isRequired,
    lv3: PropTypes.string.isRequired
}

export default React.memo(BreadcrumbShopping);