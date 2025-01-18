import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Updateform from "../Updateform/Updateform";

function Tablebody() {
    // State to hold student data
   
  
    // Sample student data (can be fetched from an API in real-world apps)
    // const studentData = [
    //   { rollNo: 101, name: "Shruti", mobile: "1234567890", class: "10th Grade", gender: "Female" },
    //   { rollNo: 102, name: "Samruddhi", mobile: "9876543210", class: "10th Grade", gender: "Female" },
    //   { rollNo: 103, name: "Ayush", mobile: "5556667777", class: "11th Grade", gender: "Male" },
    //   { rollNo: 104, name: "Keshav", mobile: "5556667777", class: "11th Grade", gender: "Male" },
    //   { rollNo: 105, name: "Aman", mobile: "5556667777", class: "12th Grade", gender: "Male" },
    //   { rollNo: 106, name: "Ayushi", mobile: "5556667777", class: "9th Grade", gender: "Female" },
    //   { rollNo: 107, name: "Mayur", mobile: "5556667777", class: "12th Grade", gender: "Male" },
    //   { rollNo: 108, name: "Raj", mobile: "5556667777", class: "10th Grade", gender: "Male" },
    //   { rollNo: 109, name: "Anjira", mobile: "5556667777", class: "11th Grade", gender: "Female" },
    //   { rollNo: 110, name: "Shraddha", mobile: "5556667777", class: "12th Grade", gender: "Female" },
    // ];
  
    const [students, setStudents] = useState([]);

    // Populate student data on component mount
    useEffect(()=>{
      axios
        .get('http://localhost:3000/user/getallusers', {
          
    })
        .then(function(response){
            setStudents(response.data)
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })

  },[])
  const navigate = useNavigate();
  const handleEdit = (id) => {
    
    navigate(`/updateform/${id}`);
    
   // let [catid, setCatId] = useState(0);
  //  setCatId(id);
   
   
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('This is delete cat id-', id)
        let query = `http://localhost:3000/user/deleteuser/${id}`;
        axios
          .delete(query,{
             
          })
          .then(function(response){
              
              console.log(response)
              Swal.fire(
                'Deleted!',
                'Your category has been deleted.',
                'success'
              );
          })
          .catch(function(error){
              console.log(error)
              Swal.fire(
                'Went Wrong!',
                'Some thing went wrong to delete category.',
                'warning'
              );
          })
      }
    });

    navigate("/")
  };
    return (
      
          <tbody>
            {students.map((student) => (
              <tr key={student.rollno}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.rollNo}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.mobile}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.stand}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.gender}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px",width:"10%" }} >
                <Stack direction="row" spacing={2}>
            { <Button
              startIcon={<EditIcon />}
              onClick={() => handleEdit(student.rollNo)}
            >
            </Button> }
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(student.rollNo)}
            >
            </Button>
        </Stack>
                </td>
              </tr>
            ))}
             
          </tbody>
       
     
    );
  }

  export default Tablebody;