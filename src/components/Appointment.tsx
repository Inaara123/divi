"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Appointment = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const bookAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:3001/appointments', { name, contact });
      toast.success('Appointment submitted successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="mt-[30px]">
      <p className="text-dark-pink font-bold font-sans lg:text-[32px]">Book a consultation</p>
      <div className="space-y-4">
        <div>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-[10px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            className="w-full p-2 border border-gray-300 rounded-[10px]"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button
          className="bg-dark-pink text-white font-sans py-2 px-4 rounded-[10px]"
          onClick={bookAppointment}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;