import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const Compo = () => {
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
      <Popup
        trigger={
          <button className="b">
            Pay After Placement
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <Wrapper>
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="form-container">
                <div className="img">
                  <img src="logos/papimg.png" alt="" />
                  <button className="button">
                    Pay After Placement Registration Form{" "}
                  </button>
                </div>
                <div className="content">
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="college">College</label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formValues.college}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="degree">Degree</label>
                      <select
                        id="degree"
                        name="degree"
                        value={formValues.degree}
                        onChange={handleChange}
                      >
                        <option value=""></option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="B.A">B.A</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="branch">Branch</label>
                      <select
                        id="branch"
                        name="branch"
                        value={formValues.branch}
                        onChange={handleChange}
                      >
                        <option value=""></option>
                        <option value="Computer Science">
                          Computer Science
                        </option>
                        <option value="Electrical Engineering">
                          Electrical Engineering
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearOfPassing">Year of Passing</label>
                      <input
                        type="text"
                        id="yearOfPassing"
                        name="yearOfPassing"
                        value={formValues.yearOfPassing}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fieldOfStudy">Field of Study</label>
                      <select
                        id="fieldOfStudy"
                        name="fieldOfStudy"
                        value={formValues.fieldOfStudy}
                        onChange={handleChange}
                      >
                        <option value=""></option>
                        <option value="Engineering">Engineering</option>
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="actions">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </div>
            </div>
          </Wrapper>
        )}
      </Popup>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 80%;
  font-size: 1.2;
  .b {
    cursor: pointer;
    margin-top: 1rem;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    background-color: #15f2ac;    
    color: #fff;
    border: none;
    border-radius: 10px;
  } 
  .b:hover {
    cursor: pointer;
    transform: translateX(-10px);
    background-color: #75ebd2;
  }
`;

const Wrapper = styled.div`

  .modal {
    font-size: 12px;
    width: ;
  }
  .header {
    width: 10%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .content {
    width: 100%;
    padding: 10px 5px;
  }
  .actions {
    width: 80%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .actions span{
    display: hidden;
    color: white;
  }
.close {
    cursor: pointer;
    position: absolute;
    padding: 2px 5px;
    width:1rem;
    left:67%;
    top: 1%;
    font-size: 3rem;
    color: #f5fcf7;
    border: none;
    z-index: 1; /* Ensure close button is above scrollbar */
   background-clip:text;     
}

  .form-container {
    /* background-image: url("/logos/papimg.png"); */
    position: relative;
    width: 40%;
    margin: 1rem auto;
    padding:0 2rem;
    max-height: 80vh;
  }
   .img {
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
  .img img {
    width: 100%;
    height: 80px;
  }
  .img button{
    position: absolute;
    top: 50%;
    left:10%;
  }
  .button {
    border: none;
    background-clip: text;
    color: #eaf1ea;
    font-size: 1.2rem;
  }

  .form-group {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;

  }

  input {
    border: none;
   background-color: #e2fff1;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    width: 97.2%;
  }

  select {
    width: 100%;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    background-color: #e2fff1;
    border: none;
  }

  .form-container .btn {
    position: absolute;
    margin-top: 1rem;
    left: 40%;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    background-color: #15f2ac;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  

  .form-container .btn:hover {
    background-color: #75ebd2;
    transform: translateY(-10px);
  }
`;

export default Compo;
