import React, { useState, useEffect } from "react";
import {Row, Col, Skeleton} from 'antd';
import ListMovies from './components/lists';
import { apiMovies } from "./services/api";
import {helper} from './helpers/common';
import PaginationMovie from './components/pagination';


const AppMovies = () => {
    const [loading, setLoading] = useState(true);   //Khi vao web la call luon API
    const [movies, setDataMovies] = useState({});
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        // tuong duong nhu componentDidMount
        const getData = async () => {
            await setLoading(true);
            const data = await apiMovies.getDataMovies(page);
            if(!helper.isEmptyObject(data)) {
                if(data.hasOwnProperty('results')) {
                    setDataMovies(data['results']);
                }
                if(data.hasOwnProperty('total_results')) {
                    setTotalResults(data['total_results'])
                }
                if(data.hasOwnProperty('total_pages')) {
                    setTotalResults(data['total_pages'])
                }
            }
            await setLoading(false);

        }
        getData();
    }, [page]);

    const changePage = (p) => {
        if (p>=1 && p<= totalPage){
            // cap nhat lai state page
            setPage(p)
        }
    }
    return (
        <>
            <Row>
                <Col span={24}>
                    <h1 style={{textAlign: 'center'}}>Thong tin cac bo phim</h1>
                    {loading ? 
                    (<Skeleton active />) 
                    : (
                        <>
                        <ListMovies movies={movies}/>
                        <PaginationMovie 
                        totalItems={totalResults}
                        current={page}  
                        changePage={changePage}
                        />
                        </>
                    )}
                </Col>
            </Row>
        </>

    )
}

export default React.memo(AppMovies);