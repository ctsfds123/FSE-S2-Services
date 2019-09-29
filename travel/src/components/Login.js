import React, {Component } from 'react'
import Signup from './Signup';
import Forgot from './Forgot';
import Company from './Company';
import {Button, Form, FormGroup,  Label, Input} from 'reactstrap';
import './login.css';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Login extends Component{
    state = {
        loggedIn: false
    }
    loginHandle = () => {
        this.setState({loggedIn: true})    
         //RestCall(user).then( () => {this.setState({loggedIn: true})    })
    }
    render(){        
        if (this.state.loggedIn === true) {
            this.props.history.push('/Company')
          }  
        return(
                    
            <Form className="login-form">
                <h1>
                    <span>Travel App</span>
                </h1>
                <h2> Welcome User </h2>
                <FormGroup>
                    <Label>UserName</Label>
                    <Input placeholder="name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password </Label>
                    <Input type='password' placeholder="password"></Input>
                </FormGroup>
                <Button className='btn-lg' onClick={this.loginHandle.bind(this)}>Login</Button>

                <div>
                    <a href='/signup'>Sign Up</a>
                    <span className='p-2'>|</span>
                    <a href='/Forgot'>Forgot Password</a>
                </div>
                
            </Form>
        );        
    }
}

export default Login