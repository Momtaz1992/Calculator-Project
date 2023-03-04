import React,{useState, useEffect} from 'react';
const FirstExercise = () => {
       const [data,setData] = useState([]);
       useEffect(() => {
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setData(json));
       },[]);
       return ( 
              <div>
                     <h1>First Exercise</h1>
                     <h2>User List</h2>
                     <ul>
                            {data.map(user => (
                                   <li key={user.id}>{user.name}</li>
                            ))}
                     </ul>

              </div>
       );
}

export default FirstExercise;