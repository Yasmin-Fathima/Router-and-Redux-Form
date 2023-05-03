import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { AddData } from '../Redux/action';

class Form extends Component{
    constructor(){
        super();
        this.state={
            nameErr:'',
            dobErr:'',
            countryErr:'',
            emailErr:'',
            phoneNumberErr:'',
            disabled:true
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.ChangeHandler=this.ChangeHandler.bind(this);
    }
    ChangeHandler(event){
        event.preventDefault();
        let name=document.getElementsByName('Name')[0].value;
        let dob=document.getElementsByName('DateOfBirth')[0].value;
        let email=document.getElementsByName('EmailAddress')[0].value;
        let country=document.getElementsByName('Country')[0].value;
        let phoneNumber=document.getElementsByName('PhoneNumber')[0].value;

        //Name validation
        if(event.target.name ==='Name'){
            if(name.length>= 8 && name.length<=25){
                this.setState({nameErr:''});
                const re= /^[a-zA-Z]+([ ]?[a-zA-Z]+)*$/;
                if(!re.test(name)){
                    this.setState({nameErr:'Enter a valid Name'});
                    name='err'
                }
            }
            else if(name.length<8){
                this.setState({nameErr:'Should have minimum 8 characters'});
                name='err'
            }
            else{
                this.setState({nameErr:'Should not exceed 25 characters'});
                name='err'
            }
        }

        //DOB validation
        if(event.target.name ==='DateOfBirth'){
            const date = new Date();
            if(dob.substring(0,4) >= date.getFullYear() && ( dob.substring(5,7) > date.getMonth()+1 || dob.substring(8,) > date.getDate())) {
                this.setState({dobErr: 'Enter a valid Date'});
                dob='err'
            }
            else{
                this.setState({dobErr: ''});
            }
        }       

        //Email validation
        if(event.target.name ==='EmailAddress'){
            const re=/^\w+[0-9]?@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
            if(!re.test(email)){
                this.setState({emailErr:'Enter a valid Email Address'});
                email='err'
            }
            else{
                this.setState({emailErr:''});
            }
        }

         //Country validation
         if(event.target.name ==='Country'){
            if(country === 'Select a country'){
                this.setState({countryErr: 'Select a valid Country'});
            }
            else{
                this.setState({countryErr:''});
            }
        } 

        //Phone Number Validation
        if(event.target.name === 'PhoneNumber'){
            const re=/[0-9]{10}$/
            if(!re.test(phoneNumber)){
                this.setState({phoneNumberErr:'Enter a valid phone number'});
            }
            else{
                this.setState({phoneNumberErr:''});
            }
        }

        //Submit - Enable & disable
        if( (name && dob && email !== 'err') && country !== 'Select a country' && phoneNumber.length === 10){
            this.setState({disabled:false});
        }
        else{
            this.setState({disabled:true});
        }
    }

    handleSubmit(){
        //const name = event.target.elements.Name.value;
        const name=document.getElementsByName('Name')[0].value;
        const dob=document.getElementsByName('DateOfBirth')[0].value;
        let email=document.getElementsByName('EmailAddress')[0].value;
        let country=document.getElementsByName('Country')[0].value;
        let phoneNumber=document.getElementsByName('PhoneNumber')[0].value; 
        const details={
            name,
            dob,
            email,
            country,
            phoneNumber
        }
        this.props.AddData(details);
    }
    
    render(){
        return(
            <form className='Form'>
                <label>
                Name <input type="text" placeholder="Enter your name" name='Name' onChange={this.ChangeHandler} required/>
                    <div className='error'>{this.state.nameErr}</div>
                </label>
                <label>
                DOB <input type='date' placeholder='Enter your DOB' onChange={this.ChangeHandler} name='DateOfBirth'/>
                    <div className='error'>{this.state.dobErr}</div>
                </label>
                <label>
                Email <input type="email" placeholder="Enter your Email address" name='EmailAddress' onChange={this.ChangeHandler} required/>
                    <div className='error'>{this.state.emailErr}</div>
                </label>
                <label>
                Country <select name='Country' onChange={this.ChangeHandler}>
                        <option value="Select a country">Select a country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        </select>
                        <div className='error'>{this.state.countryErr}</div>
                </label>
                <label>
                Phone Number <input type="tel" placeholder="Enter your phone number" name='PhoneNumber' onChange={this.ChangeHandler} required/>
                    <div className='error'>{this.state.phoneNumberErr}</div>
                </label>
                <Link style={{pointerEvents: this.state.disabled ? 'none' : ''}} className='button' to='/Formdetails'>
                    <button disabled={this.state.disabled} onClick={this.handleSubmit}>Submit</button>
                </Link> 
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({AddData},dispatch)
}

export default connect(null,mapDispatchToProps)(Form);