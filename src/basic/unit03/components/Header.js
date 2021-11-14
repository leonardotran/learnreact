import React from "react";
/*
class HeaderPage extends React.PureComponent {
    render() {
        console.log('HeaderPage Header is running');
        return(
            <h1>Header page</h1>
        )
    }
}
*/
/*CACH 2 de update without re-rendering */
const HeaderPage = () => {
    console.log('HeaderPage Header is running');
    return (
        <h1>Header page</h1>
    )
}


export default React.memo(HeaderPage);