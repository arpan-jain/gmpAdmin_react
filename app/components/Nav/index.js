/**
*
* Nav
*
*/

import React from 'react';
import {IndexLink,Link} from 'react-router';

import styles from './styles.css';

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
      <div className={ styles.nav }>
        <ul class="nav navbar-nav">
          <li class={"featuredClass"}>
            <IndexLink to="/" >Login Page</IndexLink>
          </li>
        </ul>
      </div>
      </nav>  
    );
  }
}

export default Nav;
