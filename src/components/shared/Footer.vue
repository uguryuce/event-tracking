<template>
  <div class="footer">
    <p>{{getEventTable.create}} etkinlik</p>
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
    display: inline-block;

    p {
      display: inline-block;
      transition: all .4s;
      color: #a6a9b1;


      &:hover {
        color: #64be79;
      }
    }
  }

</style>
