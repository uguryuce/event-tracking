<template>
  <div class="home-page">

    <div class="home-page-title">
      <h1>Gerçek dünya sizi çağırıyor</h1>
      <p>İnsanlarla tanışmak, yeni bir şeyler denemek ve sevdiğiniz şeyi yapmak için bize katılın.</p>
      <router-link
              exact
              active-class="activeC"
              to="/event-list"
              class="btn">
        Etkinlikleri Keşfet
      </router-link>
    </div>


    <div class="home-page-list-group">
      <div class="home-page-list-group-item" v-for="event in getEvents.slice(0,4)" v-if="getEvents.length > 0">
        <h3>{{event.title}}</h3>
        <p>{{event.subject}}</p>
      </div>
    </div>

  </div>
</template>

<script>

  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        event: null,
        count : 0
      }
    },
    computed: {
      ...mapGetters(["getEvents"])
    }
  }

</script>

<style lang="scss">

  .home-page {
    margin-top: 0vh;
    width: 100%;
    height: 60vh;
    background-image:
            linear-gradient(to left bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35)),
            url("/src/assets/img/11.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 11%;

    &-title {
      width: 100%;
      background-color: transparent;
      height: 50vh;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 45px;
        color: white;
        font-weight: 900;
      }

      p {
        font-size: 18px;
        margin-top: 5px;
        font-weight: 300;
        color: white;
      }

      .btn {
        margin-top: 15px;
        color: white;
        font-weight: 600;
        //background-color: #ffbc00;
        background-color: #38c172;
        padding: 12px 70px;
      }

    }
  }

</style>
