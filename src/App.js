import React,{Component} from 'react';
import Form from './Components/form';
import Title from './Components/title';
import FormDetails from './Components/formdetails';
import './App.css';
import {Routes,Route} from 'react-router-dom';

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<>
        <Title title='Sample Form'/> 
      <Form/>
      </>}/>
      <Route path='/Formdetails' Component={FormDetails}/>
      </Routes>
    </div>
  );
}
}

export default App;
