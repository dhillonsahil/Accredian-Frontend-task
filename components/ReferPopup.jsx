"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { z } from "zod";

const referSchema = z.object({
  referrerName: z.string().min(1, "Referrer Name is required"),
  referrerEmail: z.string().email("Invalid email address"),
  referrerPhone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
  refereeName: z.string().min(1, "Referee Name is required"),
  refereeEmail: z.string().email("Invalid email address"),
  refereePhone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
});

const ReferPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = referSchema.safeParse(formData);
    if (result.success) {
      // Handle successful form submission
      console.log(process.env.NEXT_PUBLIC_API_HOST);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/referral`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success(
          "Thank you for your referral! We will get back to you shortly."
        );
        setFormData({
          referrerName: "",
          referrerEmail: "",
          referrerPhone: "",
          refereeName: "",
          refereeEmail: "",
          refereePhone: "",
        });
      } else {
        toast.error(data.message);
      }

      onClose();
    } else {
      const newErrors = {};
      result.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed mx-2 lg:mx-auto inset-0 flex items-center justify-center bg-opacity-0 bg-black lg:bg-opacity-50">
      <Toaster />
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name</label>
            <input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.referrerName && (
              <p className="text-red-500">{errors.referrerName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.referrerEmail && (
              <p className="text-red-500">{errors.referrerEmail}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Phone</label>
            <input
              type="tel"
              name="referrerPhone"
              value={formData.referrerPhone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.referrerPhone && (
              <p className="text-red-500">{errors.referrerPhone}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.refereeName && (
              <p className="text-red-500">{errors.refereeName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.refereeEmail && (
              <p className="text-red-500">{errors.refereeEmail}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Phone</label>
            <input
              type="tel"
              name="refereePhone"
              value={formData.refereePhone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            {errors.refereePhone && (
              <p className="text-red-500">{errors.refereePhone}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferPopup;
