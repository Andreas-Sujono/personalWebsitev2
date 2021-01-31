import React, { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import './app.module.scss';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // this is will only call once when the component is mounted
    getUserData();
  }, []);

  const getUserData = () => {
    // ES6 to call an API
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log('error: ', err));
  };

  const handleAddUser = (data) => {
    // call API to add the user here, and append the response to 'users' state
    // ....
    const newUsers = [data, ...users];
    setUsers(newUsers);
  };

  return (
    <div className="blog-project-react-example1-App">
      <h1>Add new user</h1>
      <UserForm handleAddUser={handleAddUser} />
      <h2>Current user</h2>
      <ul className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            desc={JSON.stringify(user)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
