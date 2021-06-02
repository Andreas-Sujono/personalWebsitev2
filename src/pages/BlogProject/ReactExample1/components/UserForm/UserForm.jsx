import React, { useState } from 'react';
import './style.module.css';

function UserForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setDesc('');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent from refreshing the screen
    props.handleAddUser({
      name,
      email,
      desc,
    });
    resetForm();
    setMessage('User is added');
    setTimeout(() => setMessage(''), 3000); // remove the message after 3s
  };

  return (
    <div className="blog-reactExample1-user-form" key={props.key}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descInput" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="descInput"
            rows="3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-dark">Add</button>

        {message && (
          <div className="alert alert-success mt-3" role="alert">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default UserForm;
