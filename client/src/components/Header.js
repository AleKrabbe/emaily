import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return <h2>Header</h2>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Header);
