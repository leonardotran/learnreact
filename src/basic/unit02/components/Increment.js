import React from "react";  
import ButtonComponent from "./Button";
import PropTypes from 'prop-types';

class IncrementButton extends React.Component {
    // Class component

    // Hien thi noi dung - giao dien
    render() {
        return (
            <React.Fragment>
                {/*Co nhieu cac components thi phai duoc wraps trong Fragments */}
                { /* props: de duoc truyen tu cac component khac truyen sang */}
                { /* Su dung component trong component */}
                <ButtonComponent
                    type="button"
                    name="increment"
                    click={this.props.click}
                >
                    +
                </ButtonComponent>
                {/* <ButtonComponent /> Khong su dung props children, de trang tri*/ }
            </React.Fragment> // Advanced guide, fracments
        )
    }

}
IncrementButton.propTypes = {
    click: PropTypes.func.isRequired
}
export default IncrementButton;