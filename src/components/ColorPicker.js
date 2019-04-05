import React, { Component } from 'react';


class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state={
            colors:['red','green','blue','#ccc']
        };
    }
showColor(color){
   // console.log(this.props.color);
    return{
        background:color  
    };
}
setActiveColor(color){
   // console.log(color);
   this.props.onReceiveColor(color);
}
    render() {
        // Duyet constructor de lay ra cac color
        var elmColors=this.state.colors.map((get_color,index) => {
             
            // return <span key={index} style={{background:color}} >ABC</span>
             return <span 
             key={index} style={this.showColor(get_color)} 
             className={this.props.color===get_color?'active':''}
             onClick={()=>this.setActiveColor(get_color)}

             >奉ずる</span>  // Goi ham hien thi background color

        });
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                    {elmColors}
                     
                        <hr />
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default ColorPicker;
