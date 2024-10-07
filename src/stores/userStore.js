import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  let users = ref([
    { name: "soroush", password: "abadan12A", id: 1 },
    { name: "parham", password: "abadan12A", id: 2 },
  ]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUser = (newUserName, newPassword) =>
    user.value.some(
      (user) => user.name === newUserName && user.password === newPassword
    );

  const loginUser = async (user) => {
    const url =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/basket/login/";



    try {
      const response = await axios.post(url, user);
      return response.data;
    } catch (error) {
      // Handle error response
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      alert("Registration failed. Please try again.");
    }
  };

  const setUser = async (user) => {
    const url =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/basket/register/";

    const { confirmPassword, ...userData } = user;
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      // Handle error response
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      alert("Registration failed. Please try again.");
    }
  };

  const resetForm = () => {
    // Reset the form to its initial state
    registrationForm.value.resetValidation();
    form.value = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  };

  return {
    users,
    checkUser,
    setUser,
    loginUser,
  };
});
