import React from "react";

class Result extends React.PureComponent {
    render() {
        return (
            <h1>{this.props.result}</h1>
        )
    }
}

export default Result;