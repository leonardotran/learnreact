import React from "react";  
import ButtonComponent from "./Button";
import PropTypes from 'prop-types';

class DecrementButton extends React.Component {
    // Class component

    // Hien thi noi dung - giao dien
    render() {
        return (
            <React.Fragment>
            {/*Co nhieu cac components thi phai duoc wraps trong Fragments */}
            { /* props: de duoc truyen tu cac component khac truyen sang */}
                <ButtonComponent 
                type="button"
                name="decrement"
                click={this.props.click}
                >
                -
                </ButtonComponent >
            </React.Fragment> // Advanced guide, fracments
        )
    }

}


DecrementButton.propTypes = {
    click: PropTypes.func.isRequired
}
export default DecrementButton;