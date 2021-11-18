<template>
  <div class="places-edit">
    <form v-on:submit.prevent="editPlace()">
      <h1>Edit a Place</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentPlaceParams.name" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="currentPlaceParams.address" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="deletePlace()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentPlaceParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`http://localhost:3000/places/${this.$route.params.id}`).then((response) => {
      console.log("Place Info:", response.data);
      this.currentPlaceParams = response.data;
    });
  },
  methods: {
    editPlace: function () {
      axios
        .patch("http://localhost:3000/places", this.currentPlaceParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/places/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    deletePlace: function () {
      axios.delete(`http://localhost:3000/places/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/places");
      });
    },
  },
};
</script>
