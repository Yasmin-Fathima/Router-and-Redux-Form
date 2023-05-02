import React from 'react';
import {connect} from 'react-redux';
import Title from './title';

const FormDetails=(props)=>{
    return(
        <div>
            <Title title='Form Details'/>
            <ol>
                <li>Name: {props.Name}</li>
                <li>DOB: {props.dob}</li>
                <li>Email: {props.Email}</li>
                <li>Country: {props.Country}</li>
                <li>PhoneNumber: {props.PhoneNumber}</li>
            </ol>
        </div>
    )
}
function mapStateToProps(state){
    return {
        Name:state.name,
        dob:state.dob,
        Email:state.email,
        Country:state.country,
        PhoneNumber:state.phoneNumber
    }
}

export default connect(mapStateToProps)(FormDetails);