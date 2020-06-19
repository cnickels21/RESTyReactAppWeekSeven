import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
        <nav>
            <ul classname="nav">
                <li exact path="/"><NavLink exact to="/">Home</NavLink></li>
                <li exact path="/history"><NavLink exact to="/history">History</NavLink></li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
