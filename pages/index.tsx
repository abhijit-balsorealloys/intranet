import Head from "next/head";
import { appName } from "app-config";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Home() {
 const [formData, setFormData] = useState({
    empId: '',
    password: '',
  });
  const [error, setError] = useState('');
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { empId, password } = formData;
    if (!empId || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');
    console.log('Logging in with:', formData);
    // Add your login logic here (API call, etc.)
  };
	return (
		<>
			<Head>
				<title>{`Login - ${appName}`}</title>
			</Head>
			<div className="background-container">
            <div className="overlay"></div>
            <div className="top-left-logo">
                <img src="/images/login/balasore_logo-removebg-preview.png" alt="BAL Logo" />
            </div>
            <div className="top-right-logo">
            <img src="images/login/bal_logo-removebg-preview 1.png" alt="BAL Logo" />
            </div>
           <div className="login-container">
           <div className="container">
            <div className="row">
            <div className="col-sm-6">
            <div className="welcome-text">
            Welcome to BAL Connect
            </div>
            <div className="blue-line mt-2 mb-4"></div>
            </div>
            <div className="col-sm-6 sec-login">
            <h6 className="login-title">Login</h6>
        <form onSubmit={handleSubmit}>
            <div className="form-text">
              <label>Employee Id</label>
               <input type="text"  name="empId" value={formData.empId} onChange={handleChange}
                required className="form-control" />
            </div>
            <div className="form-text">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}
                required className="form-control" />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="FormControl" name="login">Login</button>
        </form>
            </div>
            </div>
          </div>
        </div>
       </div>        
		</>
	);
}
