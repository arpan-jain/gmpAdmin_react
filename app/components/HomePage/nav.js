import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  render() {

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class={"navbar-collapse "} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={"featuredClass"}>
                <IndexLink to="/" >Login Page</IndexLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
