/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    try {
      async function getUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if (!response.ok) {
          throw new Error('There was an error')
        }

        const data = await response.json();

        setUser(data);
        setIsLoading(false)

      }
      getUser();

    } catch (e) {

      setIsLoading(false)
      setError(e)

    }

  }, [userId])


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
