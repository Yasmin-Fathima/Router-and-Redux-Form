const details={
    name:'',
    dob:'',
    email:'',
    country:'',
    phoneNumber:''
};

const addReducer=(state=details,action) =>{
    switch(action.type){
        case 'AddInfo':
            console.log(action.data)
            return{
                ...state,
                name: action.data.name,
                dob: action.data.dob,
                email: action.data.email,
                country: action.data.country,
                phoneNumber: action.data.phoneNumber
           }
            default:
                return state
    } 
}

export default addReducer;