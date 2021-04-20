import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
      <div id={this.props.band.id}>
        <li id={this.props.band.id}>{this.props.band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
