import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset error message on input change
  };

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = 'Email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Le format de l\'email est invalide';
      isValid = false;
    }

    if (!loginData.password) {
      newErrors.password = 'Mot de passe est requis';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate('/Home'); // Redirect to Home page if inputs are valid
      console.log('Login data:', loginData);
    }
  };

  const handleButtonClick = () => {
    validateInputs();
    // No need to add additional logic here, validation will be triggered before submitting the form
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Kanban
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connectez-vous à votre compte
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                <input type="email" name="email" id="email" value={loginData.email} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && 'border-red-500'}`} placeholder="name@company.com" required />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                <input type="password" name="password" id="password" value={loginData.password} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password && 'border-red-500'}`} placeholder="••••••••" required />
                {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                 
               
                </div>
              
              </div>
               <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Connectez
              </button>
             
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous n'avez pas un compte?  <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">S'inscrire</Link> 
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
