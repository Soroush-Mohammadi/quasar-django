<template>
  <div class="row q-my-xl justify-center">
    <div class="col-4 bg-white q-pa-lg">
      <q-form @submit.prevent="onSubmit" @reset="onReset">
        <q-input
          v-model="userName"
          label="Username"
          :rules="[userNameRule]"
          filled
          required
        />
        <q-input
          v-model="password"
          type="password"
          label="Password"
          :rules="[passwordRule]"
          filled
          required
        />

        <div class="q-pa-md">
          <q-btn class="q-mx-xs" label="Submit" type="submit" color="primary" />
          <q-btn class="q-mx-xs" label="Reset" type="reset" color="warning" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();

    const userName = ref(null);
    const password = ref(null);

    // Username rule
    const userNameRule = (val) => {
      const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
      return (
        regex.test(val) ||
        "Username must be 3-16 characters long, start with a letter, and contain only letters, numbers, or underscores."
      );
    };

    // Password rule
    const passwordRule = (val) => {
      const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      return (
        regex.test(val) ||
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
    };

    // Submit method
    const onSubmit = () => {
      const userNameValid = userNameRule(userName.value) === true;
      const passwordValid = passwordRule(password.value) === true;

      if (!userNameValid) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please enter a valid username",
        });
      } else if (!passwordValid) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please enter a valid password",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    };

    // Reset method
    const onReset = () => {
      userName.value = null;
      password.value = null;
    };

    return {
      userName,
      password,
      passwordRule,
      userNameRule,
      onSubmit,
      onReset,
    };
  },
};
</script>
