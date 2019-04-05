import React, { Component } from 'react';


class SizeSetting extends Component {
    
    
    changeSize(value){
      //  console.log(value);
      this.props.onChangeSize(value);
    }
    
    render() {


        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"> Size: {this.props.fontSize} px </h3>
                    
                   
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-default" onClick={()=>this.changeSize(-2)} >Giam  </button>&nbsp;
                    <button type="button" className="btn btn-default" onClick={()=>this.changeSize(2)}>Tang  </button>
                </div>
            </div>

        );
    }
}

export default SizeSetting;
