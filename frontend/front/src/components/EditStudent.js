import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStudent.css';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://studentmanagement-7p47.onrender.com/students/${id}`).then(res => setStudent(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://studentmanagement-7p47.onrender.com/students/${id}`, student);
    alert("Student updated!");
    navigate('/');
  };

  return (
    <div className="edit-student-container">
      <h2 className="edit-student-title">Edit Student Details</h2>
      <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditStudent;
