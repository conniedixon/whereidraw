/** @format */

import React, { Component } from "react";

class Contact extends Component {
  state = {
    sent: false,
  };

  toggleSent = () => {
    this.setState({ sent: true });
  };

  render() {
    if (this.state.sent)
      return (
        <>
          <h3>Get in Touch</h3>
          <p>Thanks for your message, I'll be in touch soon!</p>
        </>
      );
    return (
      <>
        <h3>Get in Touch</h3>
        <p>Let's chat! Email whereidraw@gmail.com or fill in the form below.</p>
        <form>
          <input type='text' id='name' placeholder='Name' />
          <br />
          <input type='text' id='email' placeholder='Email' />
          <br />
          <textarea id='message' placeholder='Type your message here...' />
          <br />
          <button type='submit' onClick={this.toggleSent}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Contact;
