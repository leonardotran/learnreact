import React from "react";
import {Row, Col, Card, Button, message} from 'antd';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/actions";
import { getErrorMessage } from "../../carts/reselects/cart";
import {createStructuredSelector} from 'reselect';
import NumberFormat from 'react-number-format';
import slugify from "react-slugify";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ListProducts = (props) => {
    const dispatch = useDispatch();
    const {messageAddCart} = useSelector(createStructuredSelector({
        messageAddCart: getErrorMessage
    }));
    const addCart = (id, quantity=1) => {
        dispatch(addToCart(id));
        if(messageAddCart === null) {
            message.success('success', 2);
        }
    }
    
    if(props.data.length < 0){
        return (
            <Row>
                <Col span={24}>
                    <h3>Not Found data</h3>
                </Col>
            </Row>
        )
    }
    return (
        <Row>
            {props.data.map((item,index) => (
                <Col span={8} key={index}>
                    <Card
                        hoverable
                        style={{ width: 300, marginBottom: '10px' }}
                        cover={
                        <img alt={item.name} src={item.image}/>}
                    >
                        <Link to={`detail/${slugify(item.name)}~${item.id}`}>
                        <Meta title={item.name} />
                        </Link>
                        <div>
                            <p>Price: <NumberFormat 
                            value={item.price}
                            displayType={'text'}
                            thousandSeparator={true}
                            /> 
                        </p>            
                            <Button 
                            type="primary"
                            onClick={()=> addCart(item.id)}
                            >Add Cart</Button>                
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

ListProducts.propTypes = {
    data: PropTypes.array.isRequired
}
export default React.memo(ListProducts);