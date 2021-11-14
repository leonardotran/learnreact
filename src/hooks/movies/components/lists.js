import React from "react";
import {Row,  Col} from 'antd';
import { Card } from 'antd';

const { Meta } = Card;
const ListMovies = (props) => {
    if(props.movies.length <= 0) {
        return (
            <Row style={{margin: '20px 0px'}}>
                <Col span={20} offset={2}>
                    <h3 style={{textAlign: 'center'}}> khong co du lieu bo phim nao ca !</h3>
                </Col>
            </Row>
        )
    }
    return (
        <>
            <Row style={{margin: '20px 0px'}}>
                <Col span={20} offset={2}>
                    <Row>
                    {props.movies.map((item, index) => (
                        <Col span={6} key={index}>
                        <Card
                            hoverable
                            style={{ marginLeft: '5px', marginBottom: '10px'}}
                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                        >
                            <Meta title={item.title}  />
                        </Card>
                        </Col>
                    ))}
                        
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default React.memo(ListMovies);