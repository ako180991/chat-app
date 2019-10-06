import React from 'react';
import Contact from './Contact'

const person = [
    {
        name: 'Celia Holt',
        avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
        status : true
    },

    {
        name: 'Peter Martin',
        avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
        status : false
    },

    {
        name: 'Alma Lawson',
        avatar:'https://randomuser.me/api/portraits/women/25.jpg',
        status : true
    },

    {

        name: 'Marlene Davidson',
        avatar:'https://randomuser.me/api/portraits/women/54.jpg',
        status : true
    },

    {
        name: 'Dwight Garcia',
        avatar:'https://randomuser.me/api/portraits/men/13.jpg',
        status : false
    }

]

const ContactList = () => (
    <div>
      {person.map(item => (
    <Contact name={item.name} avatar={item.avatar} status={item.status} />
  )      )}
    </div>
  );

  export default ContactList;