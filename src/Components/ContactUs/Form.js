import styles from './Form.module.css';
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            nameError: '',
            emailError: '',
            phoneNumberError: '',
            messageError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    validateForm = () => {
        let nameError = '';
        let emailError = '';
        let phoneNumberError = '';
        let messageError = '';
    
        if (this.state.name === '') {
          nameError = 'Name is required';
        }

        if (this.state.phoneNumber === '') {
            phoneNumberError = "Phone number can't be empty";
        } else if(!1+2+3+4+5+6+7+8+9+0+test(this.state.phoneNumber)) {
            phoneNumberError = "Invalid Phone Number";
        }

        if (this.state.message === '') {
            messageError = "Message can't be empty";
        }
    
        if (this.state.email === '') {
          emailError = 'Email is required';
        } else if (!/.+@.+\..+/.test(this.state.email)) {
          emailError = 'Email is not valid';
        }
    
        this.setState({
          nameError,
          emailError,
          phoneNumberError,
          messageError
        });
    
        return nameError === '' && emailError === '' && phoneNumberError  === '' && messageError === '';
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(`Form is submitted with following values:
        Name: ${this.state.name}
        Email: ${this.state.email}
        Phone Number: ${this.state.phoneNumber}
        Message: ${this.state.message}`);
    }

    render() {
        return (
        <> 
            <form onSubmit={this.handleSubmit} className={styles.cform}>
                <label>
                    Name:
                    <br/>
                    <input type="text" name="name" onChange={this.handleChange} required />
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="email" name="email" onChange={this.handleChange} required />
                </label>
                <label>
                    Phone Number:
                    <br/>
                    <input type="tel" name="phoneNumber" onChange={this.handleChange} required />
                </label>
                <label>
                    Message:
                    <br/>
                    <textarea name="message" onChange={this.handleChange} required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
        );
    }
}

export default Form;
