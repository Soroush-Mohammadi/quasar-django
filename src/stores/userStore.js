import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  let user = ref({
    userName: "",
    password: "",
  });

  const setUser = (newUserName, newPassword) => {
    user.value.userName = newUserName;
    user.value.password = newPassword;
  };

  return {
    user,
    setUser,
  };
});
