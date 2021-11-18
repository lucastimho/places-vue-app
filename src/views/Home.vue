<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      newPlaceParams: {},
    };
  },
  methods: {
    createPlace: function () {
      axios
        .post("http://localhost:3000/places", this.newPlaceParams)
        .then((response) => {
          console.log(response.data);
          this.places.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
  updatePlace: function (place) {
    axios.patch("http://localhost:3000/places/" + place.id, place).then((response) => {
      console.log(response.data);
    });
  },
  destroyPlace: function (place) {
    axios.delete("http://localhost:3000/places/" + place.id).then((response) => {
      console.log(response.data);
      var index = this.places.indexOf(place);
      this.places.splice(index, 1);
    });
  },
};
</script>
