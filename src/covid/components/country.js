import React from 'react';

import {Row, Col} from 'antd';

import {Table} from 'antd';

import NumberFormat from 'react-number-format';


const columns = [
    {
        title: 'Quoc Gia',
        dataIndex: 'Country',
        key: 'Country'
    },
    {
        title: 'Ma Quoc Gia',
        dataIndex: 'CountryCode',
        key: 'CountryCode'
    },
    {
        title: 'So ca moi',
        dataIndex: 'NewConfirmed',
        key: 'NewConfirmed'
    },
    {
        title: 'Tong ca nhiem',
        dataIndex: 'TotalConfirmed',
        key: 'TotalConfirmed',
        render: confirmed => <NumberFormat value={confirmed} displayType={"text"} thousandSeparator={true}/>
    },
    {
        title: 'Moi tu vong',
        dataIndex: 'NewDeaths',
        key: 'NewDeaths'
    },
    {
        title: 'Tong ca tu vong',
        dataIndex: 'TotalDeaths',
        key: 'TotalDeaths'
    },
    {
        title: 'Moi hoi phuc',
        dataIndex: 'NewRecovered',
        key: 'NewRecovered'
    },
    {
        title: 'Tong ca khoi benh',
        dataIndex: 'TotalRecovered',
        key: 'TotalRecovered'
    },
];


const CountriesCovid = (props) => {
    return (
        <>
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <h2 style={{textAlign: 'center'}}>
                    Thong tin dich covid cac nuoc tren the gioi
                    </h2>
                    <Table columns={columns} dataSource={props.countries} rowKey="ID"/>
                </Col>
            </Row>

        </>
    )
}
export default React.memo(CountriesCovid);