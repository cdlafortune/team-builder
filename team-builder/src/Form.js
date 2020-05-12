import React, {useState} from 'react';
import ReactDOM from "react-dom";

export default function Form(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    

    return (
        <form className="form" onSubmit={props.submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                onChange={props.changeHandler}
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                value={member.name}
            />

            <label htmlFor="email">Email</label>
            <input 
                onChange={props.changeHandler}
                id="email"
                type="text"
                name="email"
                placeholder="jsmith@example.com"
                value={member.email}
            />
            
            <label htmlFor="role">Role</label>
            <input 
                onChange={props.changeHandler}
                id="role"
                type="text"
                name="role"
                placeholder="Front End Developer"
                value={member.role}
            />

            <button type="submit">Submit</button>

        </form>


    );

    


}