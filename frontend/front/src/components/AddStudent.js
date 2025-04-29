import React, { useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css'; 

const AddStudent = () => {
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://studentmanagement-7p47.onrender.com/students', student);
    alert("Student added!");
    navigate('/');
  };

  return (
    <div className="add-student-container">
      <h2 className="add-student-title">Add New Student</h2>
      <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;

