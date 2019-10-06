import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Contact
        name ='Mathew Lawrence'
        status = {false}
        avatar ='https://randomuser.me/api/portraits/men/75.jpg'
     />
     <Contact
        name ='Jeanette Nguyen'
        status = {true}
        avatar ='https://randomuser.me/api/portraits/women/96.jpg'
     />
     <Contact
        name ='Brianna Hamilton'
        status = {false}
        avatar ='https://randomuser.me/api/portraits/women/11.jpg'
     />
    </div>
  );
}

export default App;
