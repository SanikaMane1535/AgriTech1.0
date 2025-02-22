import React, { useState } from "react";

const NewTechnology = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    technologyName: "",
    description: "",
    phoneNumber: "",
    email: "",
    imageUrl: ""
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTech = {
      name: formData.technologyName,
      description: formData.description,
      imageUrl: formData.imageUrl || "https://via.placeholder.com/150"
    };
    onSubmit(newTech);
    alert("Your technology submission is under review.");
    setFormData({
      name: "",
      city: "",
      technologyName: "",
      description: "",
      phoneNumber: "",
      email: "",
      imageUrl: ""
    });
    setImagePreview(null);
    onClose(); // Close modal after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imageUrl: reader.result
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">Submit New Technology</h3>
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border px-3 py-2 w-full rounded-md"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border px-3 py-2 w-full rounded-md"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="technologyName"
            placeholder="Technology Name"
            className="border px-3 py-2 w-full rounded-md"
            value={formData.technologyName}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="border px-3 py-2 w-full rounded-md h-24"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="border px-3 py-2 w-full rounded-md"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border px-3 py-2 w-full rounded-md"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            className="border px-3 py-2 w-full rounded-md"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md mt-3" />
          )}
          <div className="flex justify-between">
            <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTechnology;
