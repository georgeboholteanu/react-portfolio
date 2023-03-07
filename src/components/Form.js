import React, { useState } from 'react'

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {    
    const { name, value } = event.target;
    setFormState({...formState, [name]: value});
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-8 mt-10">
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                  <input value={formState.name} onChange={handleInputChange} type="text" id="name" name='name' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Please enter your name" />
              </div>
              <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input value={formState.email} onChange={handleInputChange} type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" />
              </div>

              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input value={formState.subject} onChange={handleInputChange} type="text" id="subject" name='subject' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="How we can I help" />
              </div>
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea value={formState.message} onChange={handleInputChange} id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." ></textarea>
              </div>

              <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send message
              </button>
          </form>
    </div>
  );
};

export default Form;
