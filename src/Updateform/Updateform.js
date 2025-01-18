import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you use Axios for API calls
import { useNavigate, useParams } from "react-router-dom";

const Updateform = () => {
    const { rollNo } = useParams();
  const [student, setStudent] = useState({
  
    name: "",
    mobile: "",
    stand: "",
    gender: "",
  });
  console.log(student)

  // const FetchStudentData = async () => {
  //   try {
  //     console.log(rollNo)
  //     const response = await axios.get(`http://localhost:3000/user/getuser/${rollNo}`);
  //     setStudent(response.data);
  //   } catch (err) {
      
  // };
  // }
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
      
    });
  };

 const navigate = useNavigate();
 const handleCancel = () => {
  navigate('/');
}

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    try {
      // Replace with your API endpoint
      console.log(student.rollNo)
      console.log(student.name)
      const response = await axios.put(`http://localhost:3000/user/updateuser/${student.rollNo}`, {
        name: student.name,
        mobile: student.mobile,
        stand: student.stand,
        gender: student.gender,
      });

      alert("Student updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }

    navigate("/")
  };

  return (
    // <div>
    //   <h2>Update Student</h2>
    //   <form onSubmit={handleSubmit}>
    //   <div>
    //       <label>Roll Number (ID):</label>
    //       <input
    //         type="text"
    //         name="rollNo"
    //         value={student.rollNo}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={student.name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Mobile:</label>
    //       <input
    //         type="text"
    //         name="mobile"
    //         value={student.mobile}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Class:</label>
    //       <input
    //         type="text"
    //         name="stand"
    //         value={student.stand}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Gender:</label>
    //       <select
    //         name="gender"
    //         value={student.gender}
    //         onChange={handleChange}
    //       >
    //         <option value="">Select Gender</option>
    //         <option value="Male">Male</option>
    //         <option value="Female">Female</option>
    //         <option value="Other">Other</option>
    //       </select>
    //     </div>
    //     <button type="submit">Update Student</button>
    //   </form>
    // </div>
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
            value={student.rollNo}
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
            value={student.name}
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
            value={student.mobile}
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
            value={student.stand}
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
                checked={student.gender === "Male"}
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
                checked={student.gender === "Female"}
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
                checked={student.gender === "Other"}
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
    
  );
};

export default Updateform;
