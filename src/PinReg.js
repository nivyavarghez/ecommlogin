import React from 'react';
import './PinReg.css';
function PinReg() {
  return (
    <div>
      <h1>Pinterest</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <button type="submit">Register</button>

    </div>
  );
}

export default PinReg;
