import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const PopUp = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    branch: "",
    yearOfPassing: "",
    fieldOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <Container>
      <PopupButton
        type="button"
        className="button"
        onClick={() => setOpen((o) => !o)}
      >
        Open Popup
      </PopupButton>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        className="pop"
      >
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <Wrapper>
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="college">College:</label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formValues.college}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Degree:</label>
                  <select
                    id="degree"
                    name="degree"
                    value={formValues.degree}
                    onChange={handleChange}
                  >
                    <option value="">Select Degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.A">B.A</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="branch">Branch:</label>
                  <select
                    id="branch"
                    name="branch"
                    value={formValues.branch}
                    onChange={handleChange}
                  >
                    <option value="">Select Branch</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="yearOfPassing">Year of Passing:</label>
                  <input
                    type="text"
                    id="yearOfPassing"
                    name="yearOfPassing"
                    value={formValues.yearOfPassing}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fieldOfStudy">Field of Study:</label>
                  <select
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={formValues.fieldOfStudy}
                    onChange={handleChange}
                  >
                    <option value="">Select Field of Study</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </Wrapper>
        </div>
      </Popup>
    </Container>
  );
};

const Container = styled.div`
  /* height: 130vh; */
  .pop{
    width: 100rem;
  }
  .modal{
    width:100%;
  }
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 500px;
  .form-container {
    width: 100%;
    margin: 0 auto;
  }
  .form{
    width: 100%;
  }

  .form-group {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="text"],
  input[type="email"],
  select {
    width: 100%;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default PopUp;
