<template>
  <div class="footer">
    <h4>Footer</h4>
    <p> Create Event : {{getEventTable.create}} || Score : {{getEventTable.score}}</p>
  </div>
</template>

<script>

  import {mapGetters} from "vuex";

  export default {
    computed : mapGetters (["getEventTable"])
  }

</script>

<style>

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    background-color: darkgray;
  }

</style>
