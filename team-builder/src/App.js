import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MemberCard from './MemberCard';

function App() {
  const  [team, setTeam] = useState([
    {
      name: "Melissa",
      email: "melissa@example.com",
      role: "frontend engineer"
    },
    {
      name: "Daniel",
      email: "daniel@example.com",
      role: "backend engineer"
    },
    {
      name: "Michelle",
      email: "michelle@example.com",
      role: "web designer"
    }
  ]);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email, 
      role: member.role
    };
    setTeam([...team, newMember]);
  };
  
  const changeHandler = e => {
    setMember({...member, [e.target.name]: e.target.value});
    console.log(member);
  };

  const submitForm = e => {
      event.preventDefault();
      props.addMember(member);
      setMember({name:"", email:"", role:""});
  };

  return (
    <Router className="app">
      <h1>My Team</h1>
      <Form changeHandler={changeHandler} submitForm={submitForm} addMember={addMember}/>
      <MemberCard members={team} />
    </Router>
  );
}

export default App;
