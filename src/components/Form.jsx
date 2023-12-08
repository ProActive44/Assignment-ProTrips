import React from "react";
import "./Form.css";
import { useState } from "react";
import { useEffect } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const [formError, setFormError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formData));
    console.log(formError);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmitted) {
      console.log("Successfully submitted");
    }
  }, [formError]);

  const validation = (values) => {
    let errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!values.firstName) {
      errors.firstName = "First name is required*";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required*";
    }
    if (!values.email) {
      errors.email = "Email is required*";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email*";
    }
    if (!values.number) {
      errors.number = "Phone number is required*";
    } else if (!values.number.match(phoneno)) {
      errors.number = "Please enter a valid phone number";
    }

    return errors;
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        {Object.keys(formError).length === 0 && isSubmitted && (
          <div className="successMsg">
            <input
              type="text"
              readOnly
              value="Registration successful!"
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
          <p>{formError.firstName}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
          <p>{formError.lastName}</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <p>{formError.email}</p>
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone Number"
            name="number"
            onChange={handleChange}
          />
          <p>{formError.number}</p>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
