<template>
  <div class="event-list">
    <h4>Event List</h4>

    <tr v-for="event in getEvents" v-if="getEvents.length > 0">
      <td>{{event.key}}</td>
      <td :class="titleClass(event.title)">{{event.title}}</td>
      <td>{{event.subject}}</td>
      <td>{{event.description}}</td>
      <td>{{event.participantNumber}}</td>
    </tr>

    <div v-else>
      <p>Kayıt yok</p>
    </div>
  </div>
</template>

<script>

  import  { mapGetters } from "vuex";

  export default {
    computed : {
      ...mapGetters(["getEvents"]),
    },

    methods : {
      titleClass (title) {
        return {
          'event-title' : title.length > 5,
          'event-title2' : title.length < 5
        }
      }
    }
  }

</script>

<style>

  .event-list {
    padding-bottom: 100px;
  }

  .event-title {
    background-color: red;
  }

  .event-title2 {
    background-color: blue;
  }

</style>
