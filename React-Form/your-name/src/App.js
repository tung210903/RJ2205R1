import React, { useState } from "react";
import "./App.css";
import { Formik } from 'formik';
export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [form, setForm] = useState({});
  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleValidate = () => {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    return errors
  }

  const handleSubmit = () => {
    alert("Login in succesfully!!!")
  }

  return (
    <div>
      <h1>Sign up</h1>
      <Formik initialValues={form} validate={handleValidate} onSubmit={handleSubmit}>
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name ? 'custom-input-errors' : ''}`}>
              <label>Name</label>
              <input type="text" name="name" value={form.name || ''} onChange={handleChange} />
              <p className="error">{errors.name}</p>
            </div>
            <div
              className={`custom-input ${errors.email ? "custom-input-error" : ""
                }`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div className={`custom-input ${errors.password ? 'custom-input-errors' : ''}`}>
              <label>Password</label>
              <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
              <p className="error">{errors.password}</p>
            </div>
            <div>
              <label>Message</label>
              <input type="text" />
            </div>
            <button type="submit">Submit</button>

          </form>
        )}
      </Formik>
    </div>
  )
}
