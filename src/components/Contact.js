import React from 'react';
import './Contact.css';




class Contact extends React.Component {

  constructor(props) {
    super(props);
      this.state = { 

      status : props.status
     };
  }

     change = () => {
       this.setState({status : !this.state.status})
     }



  render() {
    return (
      <div className="Contact">
          <img onClick = {this.change} className="avatar" src={this.props.avatar} alt={this.props.name}/>
            <div>
              <h4  className = "name">{this.props.name}</h4>
              <p className="status"> {this.state.status ? 
            
                    <div  className='status-online'> 
                    
                    <div onClick = {this.change} className = 'text'>
                    Online  
                    </div>
                    
                    </div> :


                    <div className='status-offline'>
                        
                    <div onClick = {this.change} className= 'text'>
                    Offline 
                    </div>
                    
                    </div>
                
                } </p>
          </div>
        
    </div>
    );
  }

}
  
  export default Contact;