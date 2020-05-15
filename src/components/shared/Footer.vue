<template>
  <div class="footer">
    <p> Create Event : {{getEventTable.create}} || Score : {{getEventTable.score}}</p>
  </div>
</template>

<script>

  import {mapGetters} from "vuex";

  export default {
    computed : mapGetters (["getEventTable"])
  }

</script>

<style lang="scss">

  .footer {
    position: absolute;
    top: 6vh;
    left: 0;
    padding-left: 5%;
    width: 100%;
    height: 4vh;
    background-color: rgba(0,0,0,0.8);
    color: gray;
    display: flex;
    align-items: center;

    p {
      margin: 0px;

    }
  }

</style>
