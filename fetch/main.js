async function getUsers() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(result);

    const data = await result.json();
    console.log(data);

  } catch (error) {

  }
}

getUsers();
