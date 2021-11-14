import React from "react";
import ChildComponent from "./child";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props); //Noi khai bao state
        this.state = {
            count: 0,
            show: true
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        // this.decrement = this.decrement.bind(this);
        // this.decrement = this.decrement.bind(this);

        this.removeChild = this.removeChild.bind(this);

        //Phuong thuc se chay dau tien trong lifecycle - chi chay 1 lan duy nhat 
        // trong giai doan mounting
        console.log('constructor ParentComponent is running');
        console.log('*****************');

    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps is running');
        console.log(props, state);
        //Cap nhat lai state tu props truyen vao
        //Kiem tra prop ko bang state
        console.log('*****************');

        console.log('getDerivedStateFromProps updatting is running');
        console.log(props, state);
        //Cap nhat lai state tu props truyen vao
        //Kiem tra prop ko bang state
        console.log('*****************');
        return null; // Bat buoc return
    }
    componentDidMount() {
        //Chay cuoi cung trong giai doan mounting
        //https://reactjs.org/docs/react-component.html#componentdidmount
        console.log('componentDidMount ParentComponent is running');
        //Thong thuong hay call api de do du lieu ra ngoai giao dien o day
        console.log('*****************');


    }
    shouldComponentUpdate(nextProps, nextState){
        //kiem tra co phai render lai giao dien hay ko?
        // if True, cap nhat lai giao dien
        // if False, ko cap nhat
        // mac dinh khi khong khai bao ham nay thi luon luon ngam hieu la render lai giao dien
        console.log('shouldComponentUpdate ParentComponent is running');
        console.log(nextProps,nextState);
        console.log('+++++++++++++++++');
        return true;
        //State thay doi -> giao dien thay doi. Ko co chieu nguoc lai
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //xu ly tinh toan logic
        //tra ket qua ve cho componentDidUpdate
        console.log('getSnapshotBeforeUpdate ParentComponent is running');
        console.log(prevProps, prevState);
        console.log('*****************');
        return 'blue';
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        //Ko cap nhat STATE duoc 
        //Thao tac truc tiep duoc voi DOM/html
        console.log('shouldComponentUpdate ParentComponent is running');
        console.log(prevProps, prevState);
        document.getElementById("title").style.color = snapshot; //Dung js thay doi CSS
        console.log('*****************');

    }


    increment() {
        this.setState({count: this.state.count + 1})
    }
    decrement() {
        this.setState({count: this.state.count - 1})
    }
    removeChild() {
        this.setState({show: !this.state.show});
    }
    render(){
        console.log('render of mounting is running');

        console.log('+++++++++++++++++');

        return (
            <>
            <h1 id="title"> ParentComponent - count {this.state.count}</h1>
            <button onClick={this.increment} type="button"> + </button>
            <button onClick={this.decrement} type="button"> - </button>
            <button onClick={this.increment} type="button"> * </button>
            <button onClick={this.decrement} type="button"> / </button>
            <button onClick={this.removeChild} > Delete ChildComponent </button>
            {this.state.show && <ChildComponent/>}
            </>
        )
    }
}

export default ParentComponent;