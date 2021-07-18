import React, { Component } from 'react'
import './form_styles.css'
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            hideName: true,
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    subjecthandler = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            hideName: false,
            showName: true,
        })
        
        
    }
    render() {
        return (
            <div>
            {this.state.hideName &&
                <form onSubmit={this.handleSubmit} className="form-div">
                    <h2>User Registration</h2>
                    <div className="name-div">
                        <label>First Name </label> 
                        <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." />
                    </div>
                    <div className="name-div">
                        <label>Last Name </label>
                        <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." />
                    </div>
                    <div className="email-div">
                        <label>Email </label>
                        <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /></div>
                    <div  className="select-div">
                        <label>Course </label>
                        <select onChange={this.subjecthandler} value={this.state.subject}>
                            <option defaultValue>Select Course</option>
                            <option value="ISE">ISE</option>
                            <option value="IST">IST</option>
                            <option value="COM">COM</option>
                            <option value="CCE">CCE</option>
                            <option value="CSE">CSE</option>
                    </select><br /></div>
                    <input type="submit" value="Submit" />
                </form>
                }
                {this.state.showName && 
                <div className="display-form">
                    <p>First Name:  {this.state.firstName}</p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Course: {this.state.subject}</p>
                </div>
                }
            </div>
            
        )
    }
}

export default Form