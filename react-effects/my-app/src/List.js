/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();


  useEffect(() => {
    async function getData() {
      try {
        const items = await readItems();
        console.log(items);
        setItems(items);
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        setError(err)
      }
    }
    getData();
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
