<template>
  <div class="home">
    <h1>{{ message }}</h1>
    Name
    <input type="text" v-model="newPlaceParams.name" />
    Address
    <input type="text" v-model="newPlaceParams.address" />
    <button v-on:click="createPlace()">Add Place</button>
    <div v-for="place in places" :key="place.id">
      {{ place }}
      <button v-on:click="showPlace(place)">More Info</button>
    </div>
    <dialog id="place-details">
      <form method="dialog">
        <h1>Place Info:</h1>
        <p>
          Name:
          <input type="text" v-model="currentPlace.name" />
        </p>
        <p>
          Address:
          <input type="text" v-model="currentPlace.address" />
        </p>
        <p>
          English:
          <input type="text" v-model="currentPlace.english" />
        </p>
        <button v-on:click="updatePlace(currentPlace)">Update Place</button>
        <button v-on:click="destroyPlace(currentPlace)">Delete</button>
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      places: [],
      newPlaceParams: {},
      currentPlace: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/places").then((response) => {
      this.places = response.data;
    });
  },
  methods: {
    createPlace: function () {
      axios
        .post("http://localhost:3000/places", this.newPlaceParams)
        .then((response) => {
          console.log(response.data);
          this.products.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
  showPlace: function (place) {
    console.log(place);
    this.currentPlace = place;
    document.querySelector("#place-details").showModal();
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
