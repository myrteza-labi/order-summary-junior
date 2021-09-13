
import React from 'react'; 
import './App.css'; 
import Banner from './Components/Banner'; 
import Header from './Components/Header'; 
import Planbox from './Components/Planbox'; 
import PaymentBtn from './Components/PaymentBtn'; 
import CancelBtn from './Components/CancelBtn'; 

class App extends React.Component {
  render(){
    return(
      <div className='App'>
        <Banner/>
        <Header/>
        <Planbox/>
        <PaymentBtn/>
        <CancelBtn/>
      </div>
    )
  }
}

export default App; 