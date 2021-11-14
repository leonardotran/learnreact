import React from "react";

class ChildComponent extends React.Component {
    componentWillUnmount() {
        //Khi component nay ko con ton tai thi se chay
        console.log("componentWillUnmount ChildComponent is running");
        console.log("*******************")
    }
    render() {
        return (
            <h1>This is child component</h1>
        )
    }
}

export default ChildComponent;