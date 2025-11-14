import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserRow from "../UserRow";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    address: "",
    phone: "",
    email: "",
    education: "",
    languages: "",
    experience: "",
    linkedin: "",
    github: "",
    resume: null,
    additional:""
  });

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedList = users.map((user) =>
        user.id === editId ? { ...formData, id: editId } : user
      );
      setUsers(updatedList);
      setEditId(null);
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }

    setFormData({
      username: "",
      fullname: "",
      address: "",
      phone: "",
      email: "",
      education: "",
      languages: "",
      experience: "",
      linkedin: "",
      github: "",
      resume: null,
      additional:""
    });
  };

  const onEdit = (id) => {
    const selectedUser = users.find((user) => user.id === id);
    if (!selectedUser) return;

      setFormData({
        username: "",
        fullname: "",
        address: "",
        phone: "",
        email: "",
        education: "",
        languages: "",
        experience: "",
        linkedin: "",
        github: "",
        resume: null,
        additional: "", 
      });

    setEditId(id);
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold">Registration Form</h2>

      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Address"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="form-control"
            placeholder="Educational Background"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="form-control"
            placeholder="Preferred Coding Languages"
            required
          />
        </div>

        <div className="col-md-6">
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="form-select"
            required
            style={{
                 backgroundColor: formData.experience ? "#cde5fa" : "white",
                 padding: "10px",
              }}
          >
            <option value="" placeholder="Select Experience">Select Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="form-control"
            placeholder="LinkedIn (optional)"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="form-control"
            placeholder="GitHub (optional)"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Upload Resume:</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Additional</label>
          <input
            type="text"
            name="additional"
            value={formData.additional}
            onChange={handleChange}
            className="form-control"
            placeholder="Additional"
            required
          />
        </div>

        <div className="col-12 text-center mt-3">
          <button type="submit" className="btn btn-primary px-4">
            {editId ? "Update User" : "Register"}
          </button>
        </div>
      </form>

      {users.length > 0 && (
        <div className="table-responsive mt-5">
          <table className="table table-bordered table-striped text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Username</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Education</th>
                <th>Languages</th>
                <th>Resume</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
