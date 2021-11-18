<template>
  <div class="places-show">
    <h3>{{ place.name }}</h3>
    <p>{{ place.address }}</p>
    <router-link v-bind:to="`/places/${place.id}/edit`">Edit this place</router-link>
    |
    <router-link to="/places">Back to all places</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      place: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/places/" + this.$route.params.id).then((response) => {
      this.place = response.data;
    });
  },
};
</script>
