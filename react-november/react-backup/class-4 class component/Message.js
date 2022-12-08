 n import React, { Component } from "react";

class Message extends React.Component{
    Message="good morning"
    ename="Rahul Gandhi"
    emp={Id:101,Name:"rahul",Salary:45000}
    render ( ){
        return <div>
            <h2>Message Component</h2>
            <hr />
            <h3>Employee Name: {this.ename}</h3>
            <h3>Wish Message: {this.Message}</h3>
            <hr/>
            <h3>Employee Id{this.emp.Id},and Salary{this.emp.Salary}</h3>
        </div>
    }
}
export default Message
