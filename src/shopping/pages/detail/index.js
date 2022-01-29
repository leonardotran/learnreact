import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {requestGetDataProductById} from './reducers/action.js';
import { createStructuredSelector } from 'reselect';
import * as reselectDetail from './reselects/detail';
import { useParams } from 'react-router-dom';
import LayoutShopping from '../../components/layout';
import {Row, Col, Skeleton, Image, InputNumber, Button } from 'antd';
import {addToCart} from '../../pages/home/reducers/actions';

const DetailProduct = () => {
    const {id, slug} = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const {loading, detail, error} = useSelector(createStructuredSelector({
        loading: reselectDetail.getLoadingStateDetail,
        detail: reselectDetail.getDataDetailState,
        error: reselectDetail.getErrorDetailState
    }));
    useEffect(() => {
        dispatch(requestGetDataProductById(id));
    }, [id]);

    const changeQuantityAddCart = (qty) => {
        setQuantity(qty)
    }
    const addProductToCart = (idParams, qtyParams) => {
        dispatch(addToCart(idParams, qtyParams))
    }

    if(loading) {
        return(
            <LayoutShopping
                    lv1="Shopping"
                    lv2="Detail"
                    lv3="loading"
                >  
                    <Skeleton active/>
            </LayoutShopping>
        )
    }

    if(error !== null && error.hasOwnProperty('code')) {
        if(error['code'] === 404) {
            return (
                <LayoutShopping
                                lv1="Shopping"
                                lv2="Detail"
                                lv3={error.message}
                            >  
                                <p>{error.message} !</p>
                </LayoutShopping>
            )
        }
    }


    return (
        <LayoutShopping
                lv1="Shopping"
                lv2="Detail"
                lv3={slug}
            >  
            <Row>
                <Col span={4}>
                    <Image src={detail.image} />
                </Col>
                <Col span={20} style={{ paddingLeft: '20px'}}>
                    <h2>{detail.name}</h2>
                    <p>{detail.price}</p>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={value => changeQuantityAddCart(value)}
                    />
                    <Button
                        style={{marginLeft:'10px'}}
                        type="primary"
                        onClick={() => addProductToCart(id, quantity)}
                    >Add Cart
                    </Button>
                </Col>
            </Row>
                <p>Chi tiet san pham</p>
        </LayoutShopping>
    )
}

export default React.memo(DetailProduct);