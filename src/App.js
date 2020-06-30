import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';
class App extends Component{
  constructor (props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurante Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes ={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
