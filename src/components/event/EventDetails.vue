<template>
  <div>
    <h4>Event Details</h4>

    <div class="list-group">
      <select class="mt-3 container" v-model="selectedEvent" @change="eventSelected">

        <option selected disabled> Lütfen bir ürün seçin</option>

        <option
          :disabled="event.participantNumber == 0"
          :value="event.key"
          v-for="event in getEvents">{{event.title}}</option>
      </select>
    </div>

    <h1 v-if="event !== null">{{event.subject}}</h1>

  </div>
</template>

<script>

  import { mapGetters } from "vuex";

  export default {
    data () {
      return {
        selectedEvent : null,
        event : null
      }
    },
    computed : {
      ...mapGetters(["getEvents"])
    },
    methods : {
      eventSelected () {
        this.event = this.$store.getters.getEvent(this.selectedEvent)[0];
      }
    }
  }

</script>

<style>

</style>
