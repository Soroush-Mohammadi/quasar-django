<template>
  <q-page class="q-pa-md">
    <div class="row justify-center" style="width: 100vw">
      <div class="col-xs-12 col-sm-8 col-md-4">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Register</div>
          </q-card-section>

          <q-form
            @submit="registerUser"
            @reset="resetForm"
            ref="registrationForm"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.username"
              label="Username"
              :rules="[(val) => !!val || 'Username is required']"
              required
            />

            <q-input
              filled
              v-model="form.email"
              label="Email"
              type="email"
              :rules="[
                (val) => !!val || 'Email is required',
                (val) => isValidEmail(val) || 'Invalid email',
              ]"
              required
            />

            <q-input
              filled
              v-model="form.password"
              label="Password"
              type="password"
              :rules="[
                (val) => !!val || 'Password is required',
                (val) =>
                  val.length >= 6 || 'Password must be at least 6 characters',
              ]"
              required
            />

            <q-input
              filled
              v-model="form.confirmPassword"
              label="Confirm Password"
              type="password"
              :rules="[
                (val) => val === form.password || 'Passwords do not match',
              ]"
              required
            />

            <q-card-actions align="right">
              <q-btn label="Register" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="secondary" flat />
            </q-card-actions>
            <q-card-section
              v-if="message.message"
              class="text-teal-6 text-bold bg-teal-1"
            >
              {{ message.message }}
            </q-card-section>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const userStore = useUserStore();
const { setUser } = userStore;
const { users } = storeToRefs(userStore);
const message = ref("");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const registrationForm = ref(null);
const router = useRouter();

const registerUser = async () => {
  // Perform user registration logic (e.g., send data to the backend)
  // console.log("User registered:", form.value);
  message.value = await userStore.setUser(form.value);
  router.push("/login");
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
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
