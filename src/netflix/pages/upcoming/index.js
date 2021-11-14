import React from "react";
import LayoutMovies from '../../components/layout/index';
import {Row, Col} from 'antd';

const UpcomingMovies = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h1>This is upcoming movies page!</h1>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpcomingMovies);