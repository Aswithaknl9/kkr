import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "Business Type",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center text-white flex items-center py-12 px-4"
        style={{
          backgroundImage:
            `url('https://demo.casethemes.net/finano/wp-content/uploads/2019/01/bg-parallax8.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section - Contact Form */}
          <div className="md:col-span-2 bg-opacity-90 p-6 rounded-lg">
            <form onSubmit={handleSubmit} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#f48c4b] bg-gray-50 text-black"
                    required
                  />
                </div>

                {/* Business Type Dropdown */}
                <div>
                  <label className="block text-white font-medium mb-1">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#f48c4b] bg-gray-50 text-gray-700"
                    required
                  >
                    <option value="Business Type">Business Type</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Corporation">Corporation</option>
                  </select>
                </div>

                {/* Email Field */}
                <div className="mt-4 md:mt-0">
                  <label className="block text-white font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#f48c4b] bg-gray-50 text-black"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4 md:mt-0 flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-[#f48c4b] text-white py-3 rounded-md hover:bg-[#ffd0b2] transition-all duration-300 cursor-pointer"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Section - Call Back Info */}
          <div className="flex flex-col justify-center items-start text-center md:text-left p-6">
            <h3 className="text-[30px] font-semibold mb-2">Request a Call Back</h3>
            <p className="text-white mt-[26px]">
              If you want to discuss your business with our fine consultants, please schedule a meeting through this contact form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
