import React from "react";
import PropTypes from 'prop-types';


class ResultComponent extends React.Component {
    render() {
        return (
            <h1> {this.props.result} </h1>
        )
    }
}

// xu ly props
ResultComponent.propTypes = {
    result: PropTypes.number.isRequired
}
export default ResultComponent;