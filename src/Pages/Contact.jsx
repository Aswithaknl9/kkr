import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessType: "Business Type",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <>
    <div
      className="relative bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage:
          "url('https://demo.casethemes.net/finano/wp-content/uploads/2019/01/bg-parallax8.jpg')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-black bg-opacity-80 p-8 rounded-lg text-white">
        <h3 className="text-3xl font-bold mb-4">Request a Call Back</h3>
        <p className="mb-6">
          If you want to discuss your business with our fine consultants, please
          schedule a meeting through this contact form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Business Type */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="Business Type">Business Type</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Corporation">Corporation</option>
              </select>
            </div>
          </div>

          {/* Email Address & Contact Number in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
