import { useState } from "react";
import "./App.css";
import cbg from "./Img/cbg.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      name: name,
      email: email,
      message: message,
    };

    console.log("Submitted ");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log("XHRONLOAD");
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        alert("email sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong!");
      }
    };
  };
  return (
    <div>
      <div className="Title">
        <img src={cbg} alt="bgimg" />
      </div>
      <div className="text-on-contact">
        <div className="head-lg" style={{ fontSize: "40px" }}>
          Let's Get In Touch!
        </div>
        <p style={{ color: "gray", fontSize: "15px" }}>
          {" "}
          Feel free to drop me a message below
        </p>

        <div className="whitebox">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <p> Your Name:</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email">
              <p> Your Email:</p>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="message">
              <p> Your Message:</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ height: "5rem" }}
              />
            </div>
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
            <div id="status" class="success">
              Success
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
