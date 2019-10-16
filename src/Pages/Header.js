import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import UrlCall from './../ContextApi/UrlCall'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
    let apiCall = UrlCall();
    //rated; popularity; favorites; recommendations; watchlist
    let makeApiCall = (e) => {
        // apiCall.getCustomCall(menu);
        switch (e.target.text) {
            case "Popular": {
                apiCall.getCustomCall('popularity');
                break;
            }
            case "Trending": {
                apiCall.getCustomCall('recommendations');
                break;
            }
            case "Newest": {
                apiCall.getCustomCall('watchlist');
                break;
            }
            case "Highest Rated": {
                apiCall.getCustomCall('rated');
                break;
            }
            default: {
                apiCall.getCustomCall('popular');
            }
        }
    }
    return (
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">SERIEX</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link disabled href="/home"><b>SERIEX</b></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={makeApiCall} eventKey="link-1">
                            <Link to="/">Popular</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={makeApiCall} eventKey="link-1">
                            <Link to="/">Trending</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={makeApiCall} eventKey="link-1">
                            <Link to="/">Newest</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={makeApiCall} eventKey="link-1">
                            <Link to="/">Highest Rated</Link>
                        </Nav.Link>
                    </Nav.Item>


                    <NavDropdown title="Filter" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.9">TV Series</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Genre</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Rating</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default Header;