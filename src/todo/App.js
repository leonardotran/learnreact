import React from "react";
import LayoutTodo from "./components/Layout";
import AddTodo from "./components/Add";
import ListTodo from "./components/List";
import { Row, Col } from "antd";


class AppTodo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            idTodo: 1,
            nameTodo: '', 
            listTodo: []
        }
    }
    changeName = (event) => {
        const val = event.target.value;
        if(val !== '') {
            this.setState({...this.state, nameTodo: val})
        }
    }
    addTodo = (name) => {
        if(name !== '') {
            this.setState({
                ...this.state,  //spread operator
                idTodo: this.state.idTodo + 1,
                nameTodo: '',
                listTodo: [...this.state.listTodo, {
                    id: this.state.idTodo,
                    nameWork: name,
                    done: false
                }]
            })
        }
    }

    deleteTodoItem = (id) => {
        const newTodos = this.state.listTodo.filter(item => item.id !== id);
        this.setState({
            ...this.setState,
            listTodo: newTodos
        })
    }

    finishedTodo = (id) => {
        const todo = this.state.listTodo.map(item => {
            return item.id === id ? {...item, done: !item.done} : item;
        });
        this.setState({
            ...this.setState,
            listTodo: todo
        })
    }

    render() {
        // console.log(this.state.listTodo);
        return(
            <LayoutTodo>
                <Row style={{marginTop: '20px'}}>
                    <Col span={24}>
                        <AddTodo 
                        add={this.addTodo} 
                        name={this.state.nameTodo}
                        change={this.changeName}

                        />
                    </Col>
                </Row>
                <Row style={{marginTop: '20px 0px'}}>
                    <Col span={24}>
                        <ListTodo 
                        data={this.state.listTodo}
                        delete={this.deleteTodoItem}
                        finish={this.finishedTodo}
                        />
                    </Col>
                </Row>
            </LayoutTodo>
        )
    }
}

export default AppTodo;