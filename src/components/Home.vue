<template>
  <section>
    <app-navigation-white></app-navigation-white>

    <div class="home-page">

      <div class="home-page-title">
        <h1>Etkinlik Takip Sistemi</h1>
        <p>İnsanlarla tanışmak, yeni bir şeyler denemek ve sevdiğiniz şeyi yapmak için bize katılın.</p>
        <router-link
                exact
                active-class="activeC"
                to="/event-list"
                class="btn">
          Etkinlikleri Keşfet
        </router-link>
      </div>


      <div class="home-page-definition">
        <h3>Aradığınız etkinlikler</h3>
        <p>Bu sayfada, <span>en son oluşturulan etkinlikler </span> görüntülenmektedir.</p>
      </div>


      <div class="home-page-list-group">
        <div class="home-page-list-group-item" v-for="event in getEvents.slice(0,4)" v-if="getEvents.length > 0">
          <div class="home-page-list-group-item-title">
            <h3>{{event.title}}</h3>
            <h4><span>Katılımcı Sayısı : </span>{{event.participantNumber}}</h4>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

  import {mapGetters} from "vuex";
  import NavigationWhite from "./shared/NavigationWhite";

  export default {

    components : {
      appNavigationWhite : NavigationWhite
    },

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
    margin-top: -15vh;
    width: 100%;
    height: 80vh;
    background-image:
            linear-gradient(rgba(0, 0, 0, .12), rgba(0, 0, 0, .12)),
            linear-gradient(to right top, rgba(0, 0, 0, .12), rgba(0, 0, 0, .12)),
            url("/src/assets/img/bac1.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 23%;

    &-title {
      width: 100%;
      background-color: transparent;
      height: 80vh;
      padding-top: 0vh;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 45px;
        margin-top: 20px;
        color: white;
        font-weight: 900;
      }

      p {
        font-size: 18px;
        margin-top: 5px;
        font-weight: 300;
        color: #a8c8ce;
      }

      .btn {
        margin-top: 20px;
        font-weight: 600;
        //background-color: #ffbc00;
        background-color: #38c172;
        //background-color: #fff;
        color: #fff;
        padding: 12px 70px;
      }

    }

    &-list-group {
      height: 15vh;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 20px;

      &-item {
        flex-direction: column;
        width: 20%;
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.15);
        border-radius: 8px;


        &-title {
          border-radius: 8px;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          margin: 0;
          color: #333333;
          //border-bottom: 1px solid #747b8640;
          background-color: #fff;
          padding: 5px 10px;

          h3 {
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            width: 100%;
          }

          h4 {
            width: 100%;
            font-size: 12px;
            font-weight: 500;
            color: #7abb7f;

            span {
              color: #7abb7f;
              font-weight: 500;
              text-transform: uppercase;
            }
          }
        }

      }

    }

    &-definition {
      width: 100%;
      max-width: 1350px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 40px;
      justify-content: flex-start;
      height: auto;
      flex-wrap: wrap;
      padding-bottom: 30px;
      padding-left: 40px;
      border-bottom: 1px solid #a5a9b240;
      margin-bottom: 10px;

      h3 {
        width: 100%;
        font-size: 12px;
        text-transform:uppercase;
        color: #a5a9b2;
      }

      p {
        width: 100%;
        margin: 0px;
        font-size: 22px;
        font-weight: 200;

        span {
          color: #a5a9b2;
        }
      }
    }
  }

</style>
