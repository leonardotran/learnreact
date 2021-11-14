import React from "react";
import LayoutCovid from './components/layout';
import GlobalCovid from './components/global';
import CountriesCovid from './components/country';
import {api} from './services/covid';
import { helper } from "./helpers/common";
import { Skeleton } from 'antd';

export default class AppCorona extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            global: {},
            countries: []
        }
    }

    async  componentDidMount() {
        const data = await api.getDataVirusCorona();
        if(!helper.isEmptyObject(data)) {
            //cap nhat state
            const globalVirus = data.Global;
            const countriesVirus = data.Countries;

            await this.setState({
                ...this.state,
                ...{ global: globalVirus, countries: countriesVirus }
            });
        }
    }

    render() {
        
        if(helper.isEmptyObject(this.state.global) || this.state.countries.length <0) {
            return (
                <LayoutCovid>
                    <Skeleton active />
                </LayoutCovid>
            )
        }
        return (
            <>
                <LayoutCovid>
                    <GlobalCovid global={this.state.global} />
                    <CountriesCovid countries={this.state.countries} />
                </LayoutCovid>
            </>
        )
    }
}