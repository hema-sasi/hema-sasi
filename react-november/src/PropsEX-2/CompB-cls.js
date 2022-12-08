import React from "react";
class CompB extends React.Component {
    render( ){
        return <div>
            <h3>Component B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>wish Message:{this.props.one}</h2>
            <h2>emploee name:{this.props.emp_Name}</h2>
            <h2>salary:{ this.props.e_sal}</h2>
        </div>
    }
}
export default CompB