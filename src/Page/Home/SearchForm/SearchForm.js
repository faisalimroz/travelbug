import React, { useEffect, useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
    const [travelinfo,setTravelinfo]=useState({
        destination:'',
        date: '',
        transport: 'plane',
    })
    const handleChange = (event) => {
        event.persist();
        setTravelinfo((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('Form Data:',travelinfo)
    }
  return (
    <div className="search-form">
   
      {/* Your form fields */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={travelinfo.destination}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={travelinfo.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="transport">Transport:</label>
          <select
            id="transport"
            name="transport"
            value={travelinfo.transport}
            onChange={handleChange}
          >
            <option value="plane">Plane</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
