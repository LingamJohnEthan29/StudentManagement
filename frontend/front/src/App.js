import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add Student</Link>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
