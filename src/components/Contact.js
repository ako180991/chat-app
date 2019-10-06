import React from 'react';
import './Contact.css';



function Contact(props) {
    return (
      <div className="Contact">
          <img className="avatar" src={props.avatar} alt={props.name}/>
            

          <div>
            <h4 className = "name">{props.name}</h4>
            <p className="status">{props.status ? 
            
                    <div className='status-online'> 
                    
                    <div className='text'>
                    Online  
                    </div>
                    
                    </div> :


                    <div className='status-offline'>
                        
                    <div className= 'text'>
                    Offline 
                    </div>
                    
                    </div>
                
                } </p>
          </div>
        
    </div>
    );
  }
  
  export default Contact;