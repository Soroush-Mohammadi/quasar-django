<template>
  <div class="row q-my-xl justify-center">
    <div class="col-xs-8 col-md-4 bg-white q-pa-lg">
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
      <div v-if="message.message">
        <span class="text-teal-6">{{ message.message }}</span
        ><br />
      </div>
      <div v-else-if="message.error">
        <span class="text-red text-bold q-my-md"> {{ message.error }}</span>
        <br />
        <RouterLink
          style="text-decoration: none"
          class="text-blue text-bold"
          to="/register"
        >
          <q-btn color="blue"> Register </q-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();

    const userName = ref(null);
    const password = ref(null);

    const store = useUserStore();
    const { user } = storeToRefs(store);
    const { checkUser, loginUser } = store;
    const router = useRouter();

    const message = ref("");
    const error = ref("");

    const userAuth = ref(false);

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
      return val.length >= 6 || "Password must be more than 6 characters long.";
    };

    // Submit method
    const onSubmit = async () => {
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

      message.value = await loginUser({
        username: userName.value,
        password: password.value,
      });

      if (await message.value.message) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: userName.value,
            password: password.value,
          })
        );

        router.push("/checkout");
        console.log("user send to local storage");
      }
    };

    // Reset method
    const onReset = () => {
      userName.value = null;
      password.value = null;
      userAuth.value = false;
      message.value = "";
    };

    return {
      userName,
      password,
      passwordRule,
      userNameRule,
      onSubmit,
      onReset,
      user,
      checkUser,
      userAuth,
      loginUser,
      message,
      router,
      error,
    };
  },
};
</script>
