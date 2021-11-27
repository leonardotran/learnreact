import React, {useState} from "react";
import moment from 'moment';
import LayoutMovies from '../../components/layout/index';
import {Row, Col, DatePicker, Skeleton} from 'antd';
import { apiMovie } from "../../services/movie";
import { helper } from "../../helpers/common";
import ListMovie from "../../components/list-movies/ListMovie";
import PaginationMovie from "../../components/list-movies/pagination"
import { List } from "rc-field-form";

const { RangePicker } = DatePicker;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }


const UpcomingMovies = () => {
    const [loadingComing, setLoadingComing] = useState(false);
    const [fDate, setFromDate] = useState('');
    const [tDate, setToDate] = useState('')
    const [page, setPage] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [upcomingData, setUpcomingData] = useState([]);


    const getTimeDate = async (date, p=1, startDate = null, endDate = null) => {
        let fromDate;
        let toDate;
        if(date != null){
            fromDate = moment(date[0]).format('YYYY-MM-DD');
            toDate   = moment(date[1]).format('YYYY-MM-DD');
        } else {
            fromDate = startDate;
            toDate = endDate;
        }
        // console.log(moment(date[0]).format('YYYY-MM-DD'));
        

        if(fromDate !== fDate && toDate !== tDate){
            await setFromDate(fromDate);
            await setToDate(toDate);
        }    

        if(fromDate !== '' && toDate !== '') {
            await setLoadingComing(true); //call du lieu
            const dataMovies = await apiMovie.getUpcomingMovies(fromDate, toDate, p);
            // console.log(dataMovies);
            if(!helper.isEmptyObject(dataMovies)) {
                if(dataMovies.hasOwnProperty('results')) {
                    await setUpcomingData(dataMovies['results']);
                }
                if(dataMovies.hasOwnProperty('total_pages')) {
                    // kiem tra co trong object co key hay ko? 
                    await setTotalPage(dataMovies['total_pages'])
                }
                if(dataMovies.hasOwnProperty('total_results')) {
                    // kiem tra co trong object co key hay ko? 
                    await setTotalItem(dataMovies['total_results'])
                }
            }
            await setLoadingComing(false); //lay xong du lieu thi set ve false 
        }
    }

    const changePageMovie = (p) => {
        if(p>=1 && p<= totalPage) {
            getTimeDate(null, p, fDate, tDate);
            setPage(p);

        }
    }
    return (
        <LayoutMovies>
            <Row>
                <Col span={12} offset={6}>
                    <h1>This is upcoming movies page!</h1>
                    <RangePicker disabledDate={disabledDate} 
                        onChange={val=> getTimeDate(val)}
                    />
                </Col>
            </Row>
            {loadingComing ? <Skeleton active /> : <ListMovie movies={upcomingData}/>}
            <ListMovie movies={upcomingData}/>
            {
                upcomingData.length > 0
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
export default React.memo(UpcomingMovies);