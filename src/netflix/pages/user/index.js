import React from "react";
import LayoutMovies from '../../components/layout/index';
import {Row, Col} from 'antd';
// import { useParams } from "react-router";
import {helper} from '../../helpers/common';


const InfoUser = () => {
    const infoUser = helper.decryptionTokenStorage();
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                {helper.isEmptyObject(infoUser) ? (

                    <h1>User Not Found !</h1>

                ) : (
                    <>
                        <p>username: {infoUser['username']}</p>
                        <p>email: {infoUser['email']}</p>
                        <p>phone: {infoUser['phone']}</p>
                        <p>address: {infoUser['address']}</p>
                    </>

                )};
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(InfoUser);