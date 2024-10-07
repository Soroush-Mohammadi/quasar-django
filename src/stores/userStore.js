import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  let user = ref({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUser = (newUserName, newPassword) =>
    user.value.some(
      (user) => user.name === newUserName && user.password === newPassword
    );

  const loadUser = () => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    user.value = getUser;
  };

  const loginUser = async (userObj) => {
    const url =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/basket/login/";

    try {
      const response = await axios.post(url, userObj);

      // Check if the response contains a success message
      if (response) {
        return response.data;
      }
    } catch (error) {
      // Check if there's a response from the server
      return error.response.data;
    }
  };
  const setUser = async (userObj) => {
    const url =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/basket/register/";

    const { confirmPassword, ...userData } = userObj;
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      // Handle error response
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
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
    user,
    checkUser,
    setUser,
    loginUser,
    loadUser,
  };
});
