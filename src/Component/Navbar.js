import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import './navbar.css';
import Pvente from '../graph/P_vente';
import logo from '../logo.svg';
import Product from '../graph/Product';
import Category from '../graph/Category';
import Customer from '../graph/Customer';
import Salesman from '../graph/Salesman';
import Warehouse from '../graph/Warehouse';
import Hire from '../graph/Hire';
import Welcome from '../graph/Welcome';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showComponent8: true,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
    this._onButtonClick3 = this._onButtonClick3.bind(this);
    this._onButtonClick4 = this._onButtonClick4.bind(this);
    this._onButtonClick5 = this._onButtonClick5.bind(this);
    this._onButtonClick6 = this._onButtonClick6.bind(this);
    this._onButtonClick7 = this._onButtonClick7.bind(this);
  }

  _onButtonClick(e,{name}) {
    this.setState({
      showComponent: true,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false,
      showComponent6: false,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }
  _onButtonClick2(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: true,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false,
      showComponent6: false,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }

  _onButtonClick3(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: false,
      showComponent3: true,
      showComponent4: false,
      showComponent5: false,
      showComponent6: false,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }

  _onButtonClick4(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: true,
      showComponent5: false,
      showComponent6: false,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }

  _onButtonClick5(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: true,
      showComponent6: false,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }

  _onButtonClick6(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false,
      showComponent6: true,
      showComponent7: false,
      showComponent8: false,
      activeItem: name
    });
  }

  _onButtonClick7(e,{name}) {
    this.setState({
      showComponent:false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false,
      showComponent6: false,
      showComponent7: true,
      showComponent8: false,
      activeItem: name
    });
  }

  

  state = {}
  
  


  render() {
    const { activeItem } = this.state

    return (
      
        <div className='navfull'>
      <Menu vertical>
        
          <img src={logo} className="App-logo" alt="logo" />
        
      
        <Menu.Item>
          <Menu.Header>Productivité / Quantité</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='produits'
              active={activeItem === 'produits'}
              onClick={this._onButtonClick}
            />
            
            <Menu.Item
              name='catégories'
              active={activeItem === 'catégories'}
              onClick={this._onButtonClick2}
            />
          </Menu.Menu>
        </Menu.Item>
        
        <Menu.Item>
          <Menu.Header>Performance</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='ventes'
              active={activeItem === 'ventes'}
              onClick={this._onButtonClick3}
              
            />
            <Menu.Item
              name='top 10 clients'
              active={activeItem === 'top 10 clients'}
              onClick={this._onButtonClick4}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Efficacité</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='top 10 vendeurs'
              active={activeItem === 'top 10 vendeurs'}
              onClick={this._onButtonClick5}
            />
            <Menu.Item
              name="entrepot par Pays"
              active={activeItem === "entrepot par Pays"}
              onClick={this._onButtonClick6}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Gestion d'équipe</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='embauches par mois'
              active={activeItem === 'embauches par mois'}
              onClick={this._onButtonClick7}
            >
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item className="homebutton">
          <a href='./index.js'><Menu.Header><Icon size='big' name='home'/></Menu.Header></a>
        </Menu.Item>
        
        
      </Menu>
      <div className='graph'>
        {this.state.showComponent ?
                  <Product /> :
                  null}
        {this.state.showComponent2 ?
                  <Category /> :
                  null}
        {this.state.showComponent3 ?
                  <Pvente /> :
                  null}
        {this.state.showComponent4 ?
                  <Customer /> :
                  null}
        {this.state.showComponent5 ?
                  <Salesman /> :
                  null}
        {this.state.showComponent6 ?
                  <Warehouse /> :
                  null}
        {this.state.showComponent7 ?
                  <Hire /> :
                  null}
        {this.state.showComponent8 ?
                  <Welcome /> :
                  null}                    
      </div>
      </div>
      
      
    )
  }
}


export default Navbar;
