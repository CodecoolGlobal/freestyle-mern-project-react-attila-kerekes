import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postData = async (email, password) => {
        try {
          const data = {
            email: email,
            password: password,
          };
          const response = await fetch('/api/customers', {
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
      

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Register</h2>
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
                <br />
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
                <button type="submit">Register</button><br/>
            </form>
                <Link to='/'>Log in</Link><br/>
                <Link to='/restaurants/register'>Register your Restaurant</Link>
        </div>
    );
};
