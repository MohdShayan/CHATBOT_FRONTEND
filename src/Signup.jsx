import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "https://chatbot-backend-livid-eight.vercel.app/api/user/signup",
        formData,
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src="/hero.webm" />
      <div className="absolute inset-0 bg-black/80 z-10" />

      <div className="relative z-20 w-full max-w-md bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign-Up & Join <span className="text-transparent bg-gradient-to-r from-yellow-200 to-green-400 bg-clip-text">GeekBot</span>
        </h2>

        {error && <div className="text-red-400 text-sm mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" />
          <Input label="Password" name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Create a password" />

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-br from-yellow-400 to-green-500 text-black font-semibold rounded-lg hover:from-green-500 hover:to-teal-600 transition duration-150"
          >
           Sign Up!
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-white mb-1">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-lime-300"
      required
    />
  </div>
);

export default Signup;
