import React, {Component} from 'react'

class Form extends Component {
  state = {
    name: '',
    email: "",
    subject: "",
    message: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;

    if (value.length > 3) {
      return;
    }

    // Updating the input's state
    this.setState({
      [name]: event.target.value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // if (!this.state.name || !this.state.email || !this.state.subject || !this.state.message) {
    //   alert(`Please fill out all innput tags!`);
    //   return;
    // } else {
    //   alert(`Thanks, ${this.state.name}! I will get back to you soon!`);
    // }
    console.log(this.state.name);

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
  }

  render() {
    return (
      <div>
        <form action="#" className="space-y-8 mt-10">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input value={this.state.name} onChange={this.handleInputChange} type="text" id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Please enter your name" />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input value={this.state.email} onChange={this.handleInputChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input value={this.state.subject} onChange={this.handleInputChange} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="How we can I help" />
                </div>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea value={this.state.message} onChange={this.handleInputChange} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." ></textarea>
                </div>

                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={this.handleFormSubmit}>
                  Send message
                </button>
            </form>
      </div>
    )
  }
}

export default Form
