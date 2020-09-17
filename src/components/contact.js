import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    userName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { userName, email, phoneNumber, subject, message } = this.state;

    // Check For Errors
    if (userName === "") {
      this.setState({ errors: { userName: "Name is required" } });
      return;
    }
    if (phoneNumber === "") {
      this.setState({ errors: { phoneNumber: "Phone Number is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (subject === "") {
      this.setState({ errors: { subject: "Subject is required" } });
      return;
    }
    if (message === "") {
      this.setState({ errors: { message: "Message is required" } });
      return;
    }

    const newMessage = {
      userName,
      phoneNumber,
      email,
      subject,
      message,
    };

    console.log(newMessage);
    axios
      .post("http://localhost:3001/add_message", newMessage)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Clear State
    this.setState({
      userName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      userName,
      subject,
      email,
      phoneNumber,
      message,
      errors,
    } = this.state;

    return (
      <div className="container-sm">
        <h1 className="contact-heading">Contact Us for Help</h1>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send Us Message</h3>
            <form onSubmit={this.onSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="userName"
                    value={userName}
                    onChange={this.onChange}
                    error={errors.userName}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Your Contact Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={this.onChange}
                    error={errors.phoneNumber}
                  />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={this.onChange}
                    error={errors.subject}
                  />
                </div>
              </div>
              <label>Your Message</label>
              <textarea
                rows="5"
                placeholder="What do you want to say"
                name="message"
                value={message}
                onChange={this.onChange}
                error={errors.message}
              />
              <button type="submit" className="btn1">
                Send
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>inaam040@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+92 308 496 6078</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    Nayyab Sector, Khuda Bakhash Colony, Near Nesol
                    Techonlogies,
                    <br />
                    Lahore, Pakistan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
