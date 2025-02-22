import { useState } from "react";
import "./ProfileForm.css"; // Optional: Add CSS for styling

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Profile Data:", formData);
      alert("Profile saved successfully!");
    }
  };

  return (
    <div className="profile-form-container">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div>
          <label>Email (Optional):</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;