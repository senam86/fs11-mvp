import React, { useState } from 'react';
// import './App.css';

//start with defining state
export default function Userprofile() {
  const [users, setUsers] = useState([]);
  

const addUser = (firstname, lastname, username, email, currentlocation) => {
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstname, lastname, username, email, currentlocation }),
  })
    .catch((error) => {
      console.log("Error");
    });
};



function handleSubmit(event) {
  event.preventDefault();
  let firstname = event.target.firstname.value;
  let lastname = event.target.lastname.value;
  let username = event.target.username.value;
  let email = event.target.email.value;
  let currentlocation = event.target.currentlocation.value;
  addUser(firstname, lastname, username, email, currentlocation);
}

return (
  <div className='Users'>
  <h1 className='title'>Create your profile</h1>
  <form onSubmit={handleSubmit} align='center'>
    <div>
      <input type='text' name='firstname' placeholder='firstname'/>
      </div>
    <br/>
      <div>
        <input type='text' name='lastname' placeholder='lastname'/>
      </div>
    <br/>
      <div>
        <input type='text' name='username' placeholder='username'/>
      </div>
    <br/>
      <div>
        <input type='text' name='email' placeholder='email'/>
      </div>
    <br/>
      <div>
        <input type='text' name='currentlocation' placeholder='currentlocation'/>
      </div>
    <br/>
      <label>
        <input className='submit' type='submit' value='submit'/>
      </label>
  </form>
</div>
);
};
