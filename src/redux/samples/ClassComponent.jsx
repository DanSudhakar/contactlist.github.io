import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "Dantanlaa",
    };
  }
  componentDidMount() {
    this.setState({
      lastName: "Updated",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>CC: {this.state.lastName}</div>
        <div>CC: {this.state.firstName}</div>
      </React.Fragment>
    );
  }
}

export default ClassComponent;
