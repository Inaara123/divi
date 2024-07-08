"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const bookAppointment = async () => {
    try {
      const response = await axios.post('http://https://divivifertility.vercel.app/appointments', { name, contact });
      console.log(response.data);
      toast.success('Appointment booked successfully!');
      setName('');
      setContact('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to book appointment.');
    }
  };

  return (
    <div className="mt-[30px]">
      <ToastContainer />
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
