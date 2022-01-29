import React from 'react';
import LayoutShopping from '../../components/layout';
import {Row, Col, Image, InputNumber, Button} from 'antd';
import { getDataCart, getTotalMoney, } from './reselects/cart';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { removeItemCartById, changeQuantity } from './reducers/actions';


const CartPage = () => {
    const {carts, money} = useSelector(createStructuredSelector({
        carts: getDataCart,
        money: getTotalMoney
    }));
    const dispatch = useDispatch();

    const removeItem = id => {
        dispatch(removeItemCartById(id));
    }

    const changeQuantityItem = (qty,id) => {
        dispatch(changeQuantity(qty,id))
    }

    if(carts.length === 0) {
        return (
            <LayoutShopping
            lv1="Shopping"
            lv2="Cart"
            lv3="List"
            >
            <Row style={{marginBottom: '10px', borderBottom: '1px solid #ccc'}}>
                <Col span={24}>
                    <h3>Gio hang chua co san pham nao!</h3>
                </Col>   
            </Row>
            </LayoutShopping>
        )
    }

    return (
        <LayoutShopping
            lv1="Shopping"
            lv2="Cart"
            lv3="List"
        >
            {carts.map((item,index) => (
                <Row style={{marginBottom: '10px', borderBottom: '1px solid #ccc'}}>
                <Col span={24}>
                    <Row>
                        <Col span={4}>
                            <Image
                                src={item.image}
                            />
                        </Col>
                        <Col span={20} style={{paddingLeft: '20px'}}>
                            <h2>{item.name}</h2>
                            <p>Price: <NumberFormat 
                            value={item.price} 
                            displayType={'text'}
                            thousandSeparator={true}
                            /> 
                            </p>
                            <InputNumber min={1} max={10} defaultValue={item.qty}/>
                            <p>Money: <NumberFormat
                                value={item.price*item.qty}
                                displayType={'text'}
                                thousandSeparator={true}
                                />
                            </p>    
                            <p style={{marginTop: '10px'}}>
                            <InputNumber 
                                min={1} 
                                max={10} 
                                defaultValue={item.qty} 
                                onChange={value => changeQuantityItem(value, item.id)}
                            />
                                <Button 
                                    style={{marginLeft:'10px'}} 
                                    type="primary" 
                                    danger
                                    onClick={() => removeItem(item.id)}
                                >Remove
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            ))};
            <Row>
                <Col span={24}>
                    <p style={{float: 'right'}}> Total Money: {money}</p>
                </Col>
            </Row>
            
        </LayoutShopping>
    )
}

export default React.memo(CartPage);