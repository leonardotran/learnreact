import React from "react";
import HeaderPage from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { Button } from 'antd';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    } 
    changeCount = () => {
        this.setState({count: this.state.count + 1})
    }


    render() {
        return(
            <>
                <HeaderPage/>
                <h1>Counter</h1>
                <Result result={this.state.count} />
                <Button  type="primary" onClick={()=> this.changeCount()}> + </Button>
                <Footer/>
            </>
        )
    }
}


export default App;