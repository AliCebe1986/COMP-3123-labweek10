import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Information Entry Form</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="full-width"
          />

         <br/>
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
            className="full-width"
          />

          
          <div className="form-row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Select Province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="YT">Yukon</option>
            </select>
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-row checkbox-row">
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              Agree to Terms & Conditions
            </label>
          </div>

          
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h3>Entered Information:</h3>
            <p>Email: {submittedData.email}</p>
            <p>Full Name: {submittedData.fullName}</p>
            <p>Address: {submittedData.address}</p>
            <p>Address 2: {submittedData.address2}</p>
            <p>City: {submittedData.city}</p>
            <p>Province: {submittedData.province}</p>
            <p>Postal Code: {submittedData.postalCode}</p>
            <p>Agreed to Terms: {submittedData.agreeTerms ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
