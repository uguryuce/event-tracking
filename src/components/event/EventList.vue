<template>
  <div class="event-list">



    <div class="event-list-title">
      <h1>Etkinliklere Gözat</h1>
    </div>



    <div class="event-list-item" v-for="event in getEvents" v-if="getEvents.length > 0">

      <div class="event-list-item-fix event-list-item-id">
        <h3 class="event-list-item-id-label"></h3>
        {{event.key}}
      </div>

      <div class="event-list-item-fix event-list-item-title" :class="titleClass(event.title)">
        <h3 class="event-list-item-title-label"></h3>
        {{event.title}}
      </div>

      <div class="event-list-item-fix event-list-item-subject">
        <h3 class="event-list-item-subject-label"></h3>
        {{event.subject}}
      </div>

      <div class="event-list-item-fix event-list-item-description">
        <h3 class="event-list-item-description-label"></h3>
        {{event.description}}
      </div>

      <div class="event-list-item-fix event-list-item-number">
        <h3 class="event-list-item-number-label"></h3>
        {{event.participantNumber}}
      </div>

    </div>



    <div v-else>
      <p>Kayıt yok</p>
    </div>



  </div>
</template>











<script>

  import  { mapGetters } from "vuex";

  export default {

    computed : {
      ...mapGetters(["getEvents"])
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










<style lang="scss">

  $margin-l : 40px;
  $padding-l : 40px;

  .event-title {
    background-color: transparent;
  }

  .event-title2 {
    background-color: transparent;
  }

  .event-list {
    height: auto;
    padding-bottom: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;

    &-item {
      display: flex;
      width: 90%;
      border-radius: 8px;
      height: auto;
      background-color: #f4f7fa;
      margin-top: 10px;
      margin-bottom: 10px;
      flex-wrap: wrap;
      padding-top: 20px;
      padding-bottom: 20px;

      &-fix {
        padding-left: $padding-l;
        display: flex;
        width: 100%;
      }

      &-id {
        display: none;
      }

      &-title {
        font-size: 18px;
        font-weight: 700;
        color: #1b1e21;
        padding-bottom: 5px;
      }

      &-subject {
        font-weight: 300;

      }
    }



    &-title {
      display: flex;
      width: 100%;
      height: 45vh;
      background-color: transparent;
      justify-content: center;
      background-image: url("/src/assets/img/bac11.jpeg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      align-items: center;
      margin-bottom: 20px;


      h1 {
        font-size: 50px;
        text-transform: capitalize;
        font-weight: 900;
        letter-spacing: 1px;
        color: #cdcdcd;

        span {
          display: none;
          padding-bottom: 10px;
          border-bottom: 2px solid black;
        }
      }
    }
  }

</style>
