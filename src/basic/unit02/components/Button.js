import React from "react";
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
    render() {
        // return ve ma jsx
        return(
            <React.Fragment>
            <button 
                type={this.props.type} 
                name={this.props.children}
                onClick={()=> this.props.click()}
            >
                {this.props.children}
                </button>
            </React.Fragment>
        )
    }
}
ButtonComponent.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

export default ButtonComponent;