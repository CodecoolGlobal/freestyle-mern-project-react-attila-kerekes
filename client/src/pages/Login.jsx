import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch('/api/customers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = await login(email, password);
    onSubmit(customer.customerId);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Password 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <button type="submit">Login</button><br/>
      </form>
        <Link to='/register'>Register</Link><br/>
        <Link to='/restaurants/login'>Log in as a Restaurant</Link>
    </div>
  );
};
