import React, { useState, useEffect } from 'react';


const Details = () => {

  const [users, setUser] = useState([]);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users/')
    .then(r => r.json())
    .then(users => setUser(users));
  },[]);
  
 
  

  return (
    <div className="py-1">
      <div className="card">
        <div className="card-body shadow">
          <p className="body-text">ID: <h6 className="d-inline">{users.id}</h6></p>
          <p className="body-text">name: <h5 className="d-inline">{users.name}</h5></p>
          <p className="body-text">email: <h6 className="d-inline">{users.email}</h6></p>
          <p className="body-text">username: <h6 className="d-inline">{users.username}</h6></p>
          <p className="body-text">website: <h6 className="d-inline">{users.website}</h6></p>
        </div>
      </div>

    </div>

  )
}

export default Details;