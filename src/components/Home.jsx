import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
       .then(r => r.json())
       .then(users => setUser(users));
     },[]);
     
    

    return (
        <section className="py-1">
            <div className="card">
                <div className="card-body shadow">
                    <ul className="list-group">
                        {users.map(user => (

                            <p key={user.id} className="shadow">
                                <li className="list-group-item body-text"> <Link className="btn btn-success font-weight-bolder" to={`${user.id}/details`}>View Details:{user.id}</Link></li>
                                <li className="list-group-item body-text">{user.name}</li>
                                <li className="list-group-item body-text">{user.username}</li>
                                <li className="list-group-item body-text">{user.email}</li>
                            </p>

                        ))}
                    </ul>

                </div>
            </div>
        </section>

    )

}

export default Home;