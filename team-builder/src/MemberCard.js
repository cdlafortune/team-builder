import React, {useState} from 'react';
import ReactDOM from "react-dom";

export default function MemberCard(props) {

    return (
        <div className="members-container">
            {props.members.map(member =>
                <div className="member">
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            )}
        </div>
    );

}