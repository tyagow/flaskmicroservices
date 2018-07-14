import React, { Component } from "react";
import { Link } from "react-router-dom";
class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }
  logoutUser = () => {
    window.localStorage.clear();
    this.setState({ isAuthenticated: false });
  };
  render() {
    return (
      <div>
        <p>
          You are now logged out. Click <Link to="/login">here</Link> to log back in.
        </p>
      </div>
    );
  }
}
export default Logout;
