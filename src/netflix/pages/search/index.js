import React, {useState} from "react";
import LayoutMovies from '../../components/layout/index';
import {Row, Col, Input, Skeleton} from 'antd';
import { apiMovie } from "../../services/movie";
import {helper} from '../../helpers/common'
import ListMovie from "../../components/list-movies/ListMovie";
import PaginationMovie from "../../components/list-movies/pagination"

const {Search} = Input;

const SearchMovies = () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [totalItem, setTotalItem] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    



    const searchDataMovies = async (name, p = 1) => {
        if(name !== '') {
            await setLoadingSearch(true);
            if(name !== keyword){
                await setKeyword(name);
            }
            const data = await apiMovie.searchMovieByName(name, p);
            if(!helper.isEmptyObject(data)) {
                if(data.hasOwnProperty('results')) {
                    // kiem tra co trong object co key hay ko? 
                    await setDataSearch(data['results'])
                }
                if(data.hasOwnProperty('total_pages')) {
                    // kiem tra co trong object co key hay ko? 
                    await setTotalPage(data['total_pages'])
                }
                if(data.hasOwnProperty('total_results')) {
                    // kiem tra co trong object co key hay ko? 
                    await setTotalItem(data['total_results'])
                }
            }
            await setLoadingSearch(false);
        }
    }

    const changePageMovie = (p) => {
        if(p>=1 && p<= totalPage) {
            searchDataMovies(keyword, p)
            setPage(p);

        }
    }
    // console.log(dataSearch);

    return (
        <LayoutMovies>
            <Row>
                <Col span={12} offset={6}>
                <Search
                    placeholder="name of the movie"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={val => searchDataMovies(val)}
                    loading={loadingSearch}
                    />
                </Col>
            </Row>
            {loadingSearch ? <Skeleton active /> : <ListMovie movies={dataSearch}/> }
            <ListMovie movies={dataSearch}/>
            {dataSearch.length > 0
            &&
            <PaginationMovie 
            current={page} 
            totalItems={totalItem}
            changePage={changePageMovie}
            />
            }
        </LayoutMovies>
    )
}
export default React.memo(SearchMovies);