



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar  from 'react-bootstrap/Navbar';





export class Footer extends React.Component {

    render() {
        return (
            <>
                <Navbar className='footerstyle' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home"> @copy created by Murad Alshorman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  
                </Navbar>
            </>
        )
    }
}

export default Footer
