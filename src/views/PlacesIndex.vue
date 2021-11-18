<template>
  <div class="places-index">
    <div v-for="place in places" :key="place.id">
      {{ place }}
      <button v-on:click="showPlace(place)">More Info</button>
      <dialog id="place-details">
        <form method="dialog">
          <h1>Place Info:</h1>
          <p>Name: {{ currentPlace.name }}</p>
          <p>Address: {{ currentPlace.address }}</p>
          <button><router-link v-bind:to="`/places/${currentPlace.id}/edit`">Edit Place</router-link></button>
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      places: [],
      currentPlace: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/places").then((response) => {
      this.places = response.data;
    });
  },
  methods: {
    showPlace: function (place) {
      console.log(place);
      this.currentPlace = place;
      document.querySelector("#place-details").showModal();
    },
  },
};
</script>
