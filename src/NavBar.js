//  /src/Navbar.js
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AADService from './AADService';

export default class NavBar extends Component {
    constructor(props) {
        super(props);       
        this.state = {
            authenticated: null
        };
        this.AzureADService = new AADService();
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        this.isAuthenticated();
    }

    isAuthenticated() {
        this.setState({
            authenticated: this.AzureADService.loggedIn()
        });
    }

    login(){
        this.AzureADService.login();
    }

    logout(){
        this.AzureADService.logout();
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Azure AD Demo</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        {this.state.authenticated === false && <NavItem onClick={this.login}>Login</NavItem>}
                        {this.state.authenticated === true && <NavItem onClick={this.logout}>Logout</NavItem>}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}