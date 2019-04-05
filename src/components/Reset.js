import React, { Component } from 'react';

class Reset extends Component {
  
  onResetDeafult=()=>{
    this.props.onSetDeafult(true);
  }
  render() {
    return (
      
        <button type="button" className="btn btn-primary" onClick={this.onResetDeafult}>Reset</button>
      
    );
  }
}

export default Reset;
