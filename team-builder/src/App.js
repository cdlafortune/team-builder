import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MemberCard from './MemberCard';
import Form from './Form';

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

  return (
    <Router className="app">
      <h1>My Team</h1>
      <Form addMember={addMember}/>
      <MemberCard members={team} />
    </Router>
  );
}

export default App;
