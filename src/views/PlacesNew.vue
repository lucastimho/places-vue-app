<template>
  <div class="places-new">
    <form v-on:submit.prevent="createPlace()">
      <h1>Create a Place</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newPlaceParams.name" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="newPlaceParams.address" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      places: [],
      newPlaceParams: {},
      errors: [],
    };
  },
  methods: {
    createPlace: function () {
      axios
        .post("http://localhost:3000/places", this.newPlaceParams)
        .then((response) => {
          console.log(response.data);
          this.places.push(response.data);
          this.$router.push("/places");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
