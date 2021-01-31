import React from 'react';
import './style.module.css';

function UserCard(props) {
  const { name, email, desc } = props;
  return (
    <div className="user-card">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Description:</strong> {desc}
      </div>
      <hr />
    </div>
  );
}

export default UserCard;
