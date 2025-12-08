import { useEffect, useState } from "react";

function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component first loads
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

   if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User’s name and Emails</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>{user.name}'s email is {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersFetch;
