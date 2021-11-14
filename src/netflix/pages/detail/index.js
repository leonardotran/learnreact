import React, {useState, useEffect} from "react";
import LayoutMovies from '../../components/layout/index';
import {Row, Col} from 'antd';
import { useParams } from "react-router";
import { apiMovie } from "../../services/movie";
import {helper} from '../../helpers/common'

const DetailMovies = () => {
    const {id} = useParams();
    //id: se goi vao api de lay du lieu cua bo phim
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const getData = async () => {
            if(!isNaN(id)){
                await setLoadingDetail(true);
                const data = await apiMovie.getDetailMovieById(id);
                if(!helper.isEmptyObject(data)){
                    await setDetailData(data);
                }
                setLoadingDetail(false);
            }
        }
        getData();
    }, [id]);
    console.log();

    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h1>This is the detial movies page!</h1>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(DetailMovies);