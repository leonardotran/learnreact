import React from "react";
import { Input } from 'antd';


const { Search } = Input;



class AddTodo extends React.PureComponent {
    render() {
        return (
            <>
                <Search
                    placeholder="name work ..."
                    allowClear
                    enterButton="Add +"
                    size="small"
                    const onSearch = {value => this.props.add(value)}
                    value={this.props.name}
                    onChange ={this.props.change}
                    />


            </>
        )
    }
}

export default AddTodo;