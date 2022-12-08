import React from "react";
class Empolyee extends React.Component{
    render ( ){
        return<React.Fragment>
            <h3>Employee Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>{this.props.user_Data[0].name }</h4>
            <h4>Employee Name:{this.props.user_Data[0].name }</h4>
            <h4>Employee Name:{this.props.user_Data[0].name }</h4>
        </React.Fragment>
    }
}
export default Empolyee