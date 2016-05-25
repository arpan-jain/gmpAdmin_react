/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import { push } from 'react-router-redux';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  //getPage = function (data){alert("Teri maa ka bhosda");push(data);};

  getPage(){
    alert("testing");
  }

  render() {

    return (
      <div>
        <Nav />
        <br/><br/><br/>
        <form>
          UserName:   <input type="text" name="username"/><br/>
          Password:   <input type="password" name="password"/><br/>
          <input type="submit" value="Submit" />
        </form>
        <br/>
        <button type="button" onClick={this.getPage()} value="sadasd">Click Me!</button>
        <br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}
