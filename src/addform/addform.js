import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const FormPage = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    mobile: '',
    class: '',
    gender: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleCancel = () => {
    navigate('/');
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form Submitted Successfully!');

    // Navigate back to the home page after submission
    navigate('/'); // This will redirect to the home page ("/")

    // Optionally, reset the form data
    try {
        const response = await axios.post('http://localhost:3000/user/adduser', formData);
        setMessage(response.data.message); // Display success message
        console.log('Student added:', response.data.student);
        setFormData({
          
          name: '',
          gender: '',
          rollNo: '',
          mobile: '',
          stand: ''
         
        });
        
      } catch (error) {
        console.error('Error adding student:', error);
        setMessage('Error adding student. Please try again.');
      }
  };

  return (
    <div>
      {/* <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Roll No:
          <input
            type="number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </label>
        <br />
        <label>
          Class:
          <input
            type="text"
            name="stand"
            value={formData.classs}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form> */}

<div className="container mt-5 col-4">
      <h2 className="mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Roll No */}
        <div className="mb-3">
          <label htmlFor="rollNo" className="form-label">
            Roll No
          </label>
          <input
            type="text"
            className="form-control"
            id="rollNo"
            name="rollNo"
            placeholder="Enter Roll No"
            value={formData.rollNo}
            onChange={handleChange}
            required
            
          />
        </div>

        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>

        {/* Class */}
        <div className="mb-3">
          <label htmlFor="class" className="form-label">
            Class
          </label>
           <input
            type="number"
            className="form-control"
            id="mobile"
            name="stand"
            placeholder="Enter Class"
            value={formData.stand}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormPage;
