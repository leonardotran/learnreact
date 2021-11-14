import React from "react";
import ResultComponent from "./components/ResultComponent";
import IncrementComponent from "./components/Increment";
import DecrementComponent from "./components/Decrement";


class Counter extends React.Component {
    constructor(props) {
        super(props); //su dung lai props san co cua React.Component
        // Khai bao state
        this.state = {
            count: 0 //Khong can khai bao, tu dong nhan gia tri
        }
    }

    incrementCounter = () => {
        // // CACH 1
        // // cap nhat thay doi state
        // this.setState({
        //     count: this.state.count + 1 // khi Merge A voi B chung key, thi A se bi thay the bang B
        // });
        
        
        //CACH 2
        // Ngoac tron quan trong de bao lai {} co nghia la return object chu ko phai ham
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrementCounter = () => {
        this.setState( state => ({
            count: state.count -1
        }));
    }
    render() {
        return (
            <>
                {/*Goi state ra su dung */}
                {/*state thay doi, chu PROPS ko thay doi */}
                {/*thay doi gia tri cua prop ma this.state khac*/}
                {/*// Wrong
                    this.state.comment = 'Hello';
                    Instead, use setState():
                    // Correct
                    this.setState({comment: 'Hello'});*/}
                <ResultComponent result={this.state.count} />
                <IncrementComponent 
                    click={this.incrementCounter} //nhan function dem len
                />
                <DecrementComponent 
                    click={this.decrementCounter} 
                />  
                     
            </>
        )
    }
}

export default Counter;


