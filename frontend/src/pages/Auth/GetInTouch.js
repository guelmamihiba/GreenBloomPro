import React, { useState } from "react";
import { axiosInstance } from "../../api"; 
import "./GetInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [file, setFile] = useState(null); // State to handle the file
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    if (file) {
      formDataToSend.append("file", file); // Attach the file
    }

    try {
      const response = await axiosInstance.post("/contact/upload", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
      console.log("Form submitted successfully:", response.data);

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>GET IN TOUCH</h2>
      <p><strong>Give us a Ring</strong><br />+216 27 330 575</p>
      <p><strong>Reminder:</strong><br />"Just like plants thrive with care and attention, we’re here to nurture your ideas and needs. Let’s grow something beautiful together." 🌱<br/></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Please Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Please Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>MESSAGE</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please Write your message"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>ATTACH FILE (Optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*, .pdf, .doc, .docx" // Optional: Restrict file types
          />
        </div>
        <button type="submit">SEND</button>
      </form>

      <p className="captcha-info">
        "Don’t hesitate to reach out—we’re just a call or message away!" 🌸
      </p>

      {message && <p>{message}</p>}
    </div>
  );
};

export default GetInTouch;
