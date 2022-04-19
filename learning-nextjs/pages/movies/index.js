import React, {useState} from "react";
import {Row, Col, Input, Skeleton, Card, Pagination} from 'antd';
import {useDispatch, useSelector, } from 'react-redux';
import { createStructuredSelector } from "reselect";
import {
    getLoadingStateMovie,
    getDataStateMovie,
    getTotalPageStateMovie,
    getTotalResultStateMovie
} from '../../redux/reselects/movies'


import { searchMovieByKeyword } from "../../redux/actions/movies";



const {Search} = Input;
const {Meta} = Card;

const SearchMovie = () => {
    const [page, setPage] = useState(1);
    const [keyword, setKeyWord] = useState("");
    const {isLoading, dataMovies, totalPage, totalItems} = useSelector(createStructuredSelector({
        isLoading: getLoadingStateMovie,
        dataMovies: getDataStateMovie,
        totalPage: getTotalPageStateMovie,
        totalItems: getTotalResultStateMovie
    }));
    const dispatch = useDispatch();
    const searchData = (name) => {
        if(name !== '') {
            setKeyWord (name);
            setPage(1);
            dispatch(searchMovieByKeyword(name, page));

        }
    }

    const changePage = p => {
        if( p >= 1 && p <= totalPage && keyword !== ''){
            setPage(p);
            dispatch(searchMovieByKeyword(keyword, p));
        }
    }
    

    return (
    <>
        <Row style={{marinTop: '20px'}}>
            <Col span={12} offset={6}>
            <Search 
                placeholder="input search text"
                enterButton 
                onSearch={val => searchData(val)}
                allowClear

                />
            </Col>
        </Row>
        {(dataMovies !== null)? (
            <Row style={{marginTop: '20px'}}>
                <Col span={20} offset={2}>
                    <Row>
                        {dataMovies.map((item, index) => (
                            <Col key={index} span={6} style={{marginBottom: '10px'}}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                                    >
                                        <Meta title={item.title} />
                                    </Card>
                                </Col>
                    ))}
                        </Row>
                        <Row>
                            <Col>
                                <Pagination 
                                current={page}
                                total={totalItems}
                                pageSize={20}
                                showSizeChanger={false}
                                onChange={p=> changePage(p)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>


        ) : (
        <Row style={{marginTop: '20px'}}>
            <Col span={20} offset={2}>
                <p style={{textAlign: 'center'}}> Cannot find your movie! </p> 
            </Col>
        </Row>

        )}
        
    </>    

    
    )
}
export default React.memo(SearchMovie);