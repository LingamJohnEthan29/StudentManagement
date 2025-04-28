import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css'; // 👈 Importing the CSS

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('https://studentmanagement-7p47.onrender.com/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`https://studentmanagement-7p47.onrender.com/students/${id}`);
      fetchStudents();
    }
  };

  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Student List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Year</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.studentId}</td>
              <td>{s.firstName} {s.lastName}</td>
              <td>{s.email}</td>
              <td>{s.enrollmentYear}</td>
              <td>
                <Link className="edit-link" to={`/edit/${s._id}`}>Edit</Link> |{' '}
                <button className="delete-button" onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
