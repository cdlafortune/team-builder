import React, {useState} from 'react';
import ReactDOM from "react-dom";

export default function Form(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value});
        console.log(member);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({name:"", email:"", role:""});
    };
    

    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input 
                onChange={changeHandler}
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                value={member.name}
            />
            <br/>

            <label htmlFor="email">Email </label>
            <input 
                onChange={changeHandler}
                id="email"
                type="text"
                name="email"
                placeholder="jsmith@example.com"
                value={member.email}
            />
            <br/>
            
            <label htmlFor="role">Role </label>
            <input 
                onChange={changeHandler}
                id="role"
                type="text"
                name="role"
                placeholder="Front End Developer"
                value={member.role}
            />
            <br/>

            <button type="submit">Submit</button>

        </form>


    );

    


}