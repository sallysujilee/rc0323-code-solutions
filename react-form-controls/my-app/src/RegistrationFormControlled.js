import React from 'react';
import './RegistrationFormControlled.css'
import { useState } from 'react'

function RegistrationFormControlled() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button>Sign Up</button>
    </form>
  )
}

export default RegistrationFormControlled
