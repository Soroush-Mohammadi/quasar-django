<template>
  <q-page class="checkout-page q-px-xl q-py-lg">
    <div class="row">
      <!-- Left Side: Billing Details, Shipping Method, Payment Method, and Order Review -->
      <div class="col-8">
        <q-card>
          <q-card-section>
            <q-stepper v-model="step" vertical>
              <!-- Billing Details Step -->
              <q-step
                title="Billing Details"
                :done="step > 1"
                name="billing-details"
                class="q-mb-lg"
              >
                <q-form>
                  <div class="row">
                    <q-input
                      outlined
                      label="First Name"
                      class="col-6 q-mb-md"
                    />
                    <q-input outlined label="Last Name" class="col-6 q-mb-md" />
                  </div>
                  <div class="row">
                    <q-input
                      outlined
                      label="Email Address"
                      type="email"
                      class="col-6 q-mb-md"
                    />
                    <q-input
                      outlined
                      label="Phone Number"
                      type="tel"
                      class="col-6 q-mb-md"
                    />
                  </div>
                  <q-input outlined label="Address" class="q-mb-md" />
                  <q-select
                    label="Country"
                    :options="countries"
                    class="q-mb-md"
                  />
                  <div class="row">
                    <q-input outlined label="Town/City" class="col-4 q-mb-md" />
                    <q-input
                      outlined
                      label="State/Country"
                      class="col-4 q-mb-md"
                    />
                    <q-input
                      outlined
                      label="ZIP/Postal Code"
                      class="col-4 q-mb-md"
                    />
                  </div>
                  <q-checkbox
                    v-model="shipToDifferentAddress"
                    label="Ship to a different address?"
                    class="q-mb-md"
                  />
                  <q-input
                    outlined
                    type="textarea"
                    label="Order Notes"
                    class="q-mb-md"
                  />
                </q-form>
              </q-step>

              <!-- Shipping Method Step -->
              <q-step
                title="Shipping Method"
                :done="step > 2"
                name="shipping-method"
                class="q-mb-lg"
              >
                <q-radio
                  v-model="shippingMethod"
                  val="expedited"
                  label="Expedited (1-2 Business Days)"
                />
                <q-radio
                  v-model="shippingMethod"
                  val="standard"
                  label="Standard Free (5-7 Business Days)"
                />
              </q-step>

              <!-- Payment Method Step -->
              <q-step
                title="Payment Method"
                :done="step > 3"
                name="payment-method"
                class="q-mb-lg"
              >
                <q-radio
                  v-model="paymentMethod"
                  val="credit_card"
                  label="Credit Card (via Stripe)"
                />
                <q-radio
                  v-model="paymentMethod"
                  val="paypal"
                  label="Pay with PayPal"
                />
              </q-step>

              <!-- Order Review Step -->
              <q-step
                title="Order Review"
                :done="step > 4"
                name="order-review"
                class="q-mb-lg"
              >
                <q-checkbox
                  v-model="orderIsGift"
                  label="This Order is a Gift"
                />
                <q-btn
                  label="Place Order"
                  color="primary"
                  class="q-mt-lg"
                  @click="placeOrder"
                />
              </q-step>
            </q-stepper>
          </q-card-section>
        </q-card>
      </div>

      <!-- Right Side: Order Summary -->
      <div class="col-4">
        <q-card class="q-mb-lg">
          <q-card-section>
            <h6>Order Summary (4)</h6>
            <div v-for="item in cart" :key="item.id" class="row q-mb-md">
              <div class="col-8">{{ item.name }} ({{ item.size }})</div>
              <div class="col-4">{{ item.price }}</div>
            </div>
            <q-input outlined label="Promo Code" class="q-mb-md">
              <template v-slot:append>
                <q-btn label="APPLY" />
              </template>
            </q-input>
            <div class="row q-mt-lg">
              <div class="col-6">Subtotal (4 items)</div>
              <div class="col-6 text-right">{{ subtotal }}</div>
            </div>
            <div class="row">
              <div class="col-6">Tax</div>
              <div class="col-6 text-right">{{ tax }}</div>
            </div>
            <div class="row">
              <div class="col-6">Shipping</div>
              <div class="col-6 text-right">{{ shipping }}</div>
            </div>
            <div class="row">
              <div class="col-6 font-bold">Order Total</div>
              <div class="col-6 font-bold text-right">{{ orderTotal }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCartStore } from "../stores/cartStore";

const step = ref(1);
const shipToDifferentAddress = ref(false);
const shippingMethod = ref("standard");
const paymentMethod = ref("credit_card");
const orderIsGift = ref(false);
const cartItems = ref([
  { id: 1, name: "BLANKET CAPE", size: "L", price: "£600" },
  { id: 2, name: "BLANKET CAPE", size: "M", price: "£2000" },
]);

const subtotal = "£2600";
const tax = "£80";
const shipping = "£0";
const orderTotal = "£2680";
const countries = ref(["United Kingdom (UK)", "United States (US)", "Canada"]);

// importing CartStore

const store = useCartStore();
const { cart } = store;

// check cart

watch(cart, (val) => console.log(val), { immediate: true });

const placeOrder = () => {
  console.log("Order placed!");
};
</script>

<style scoped>
.checkout-page {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
