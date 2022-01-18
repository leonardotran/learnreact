import React from "react";
import {Row, Col, Card, Button} from 'antd';
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { addToCard } from "../reducers/actions";
const { Meta } = Card;

const ListProducts = (props) => {
    const dispatch = useDispatch();
    const addCart = (id) => {
        dispatch(addToCard(id));
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
                        cover={<img alt={item.name} src={item.image}/>}
                    >
                        <Meta title={item.name} />
                        <div>
                            <p>Price: {item.price}</p>            
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