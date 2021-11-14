import React from "react";
import { Pagination, Row, Col } from 'antd';


const PaginationMovie = (props) => {
    return (
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
                 <Pagination 
                 defaultCurrent={props.current} 
                 total={props.totalItems} 
                 pageSize={20}    
                 showSizeChanger={false}
                 onChange={p=>props.changePage(p)}
                 />
            </Col>
        </Row>
    )
}

export default React.memo(PaginationMovie);