import React from 'react'
import Empolyee from '../Employee/Employee'
class User extends React.Component {
    Users=[{id:101, name:"Rahul Gandhi", sal:45000},
    {id:102, name:"Sonia Gandhi", sal:55000} ]
    render( ){
        return <React.Fragment>
            <h2>User Component</h2>
            <hr/>
            <Empolyee  user_Data={this.Users }/>
        </React.Fragment>
    }
}
export default User