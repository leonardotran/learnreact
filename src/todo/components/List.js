import React from "react";
import { List, Checkbox } from 'antd';
import {DeleteOutlined } from '@ant-design/icons';



class ListTodo extends React.PureComponent {
    render() {
        return (
            <>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                    <List.Item>
                          <Checkbox
                              onChange={() => this.props.finish(item.id)}
                              checked={item.done}
                          />
                        <List.Item.Meta
                            title={
                              item.done? ( 
                              <span style={{color: 'red', textDecoration: 'line-through'}}>
                                {item.nameWork}
                              </span>) : (<span>
                                {item.nameWork}
                              </span>)
                            }
                        />
                        <div>
                          <DeleteOutlined
                              onClick={() => this.props.delete(item.id)}
                          />
                          
                        </div>
                    </List.Item>
                    )}
                />
            </>
        )
    }
}

export default ListTodo;