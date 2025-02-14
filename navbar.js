import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Nav, Form, FormControl} from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';
import Switch from 'react-switch';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <Navbar variant="dark" expand="lg" className="my-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Enter keyword .." className="mr-sm-2" />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                        <Nav.Link href="/world">World</Nav.Link>
                        <Nav.Link href="/politics">Politics</Nav.Link>
                        <Nav.Link href="/business">Business</Nav.Link>
                        <Nav.Link href="/technology">Technology</Nav.Link>
                        <Nav.Link href="/sports">Sports</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand><FaRegBookmark data-tip="Bookmark"/></Navbar.Brand>
                        <ReactTooltip place="bottom" effect="solid"/>
                        <Navbar.Brand>NYTimes</Navbar.Brand>
                        <Navbar.Brand>
                            <Switch 
                                onChange={this.handleChange} 
                                checked={this.state.checked} 
                                onColor={'#008ef6'}
                                offColor={'#d8dadc'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                            />
                        </Navbar.Brand>
                        <Navbar.Brand>Guardian</Navbar.Brand>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
}

export default MyNavbar;