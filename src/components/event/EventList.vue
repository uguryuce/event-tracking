<template>
  <section>

    <app-navigation></app-navigation>

    <div class="event-list">



      <div class="event-list-title">
        <h1>Etkinliklere Gözat</h1>
      </div>



      <div class="event-list-definition">
        <h3>Aradığınız etkinlikler</h3>
        <p>Bu sayfada, oluşturulan <span>{{getEvents.length}} etkinlik</span> görüntülenmektedir.</p>
      </div>



      <div class="event-list-item" v-for="event in getEvents" v-if="getEvents.length > 0">

        <div class="event-list-item-content">


          <div class="event-list-item-content-fix event-list-item-content-id">
            <h3 class="event-list-item-content-id-label"></h3>
            {{event.key}}
          </div>

          <div class="event-list-item-content-fix event-list-item-content-title" :class="titleClass(event.title)">
            <h3 class="event-list-item-content-title-label"></h3>
            {{event.title}}
          </div>

          <div class="event-list-item-content-fix event-list-item-content-number">
            <h3 class="event-list-item-content-number-label">Kapasite</h3>
            <span>{{event.participantNumber}}</span>
            <h3 class="event-list-item-content-number-label">Tarih  </h3>
            <span>{{event.date.substr(0,10)}}</span>
            <h3 class="event-list-item-content-number-label">Saat  </h3>
            <span>{{event.date.substr(10,event.date.length)}}</span>
          </div>


          <div class="event-list-item-content-fix event-list-item-content-number">
            <h3 class="event-list-item-content-number-label">Lokasyon</h3>
            <span style="color:#a6a9b1; font-size: 22px "><i class="fa fa-location-arrow"></i></span>
            <span>{{event.selectedCity}}</span>
          </div>



        </div>




        <div class="event-list-item-img">
          <h3>{{event.title}}</h3>
        </div>

      </div>



      <div v-else>
        <p>Kayıt yok</p>
      </div>



    </div>

    <app-footer></app-footer>





  </section>
</template>











<script>

  import  { mapGetters } from "vuex";
  import Footer from "../shared/Footer";
  import Navigation from "../shared/Navigation";

  export default {

    components : {
      appFooter : Footer,
      appNavigation : Navigation
    },

    computed : {
      ...mapGetters(["getEvents"])
    },



    methods : {
      titleClass (title) {
        return {
          'event-title' : title.length > 5,
          'event-title2' : title.length < 5
        }
      },


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
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;

    &-item {
      margin-top: 10px;
      margin-bottom: 30px;
      display: flex;
      width: 85%;
      max-width: 1350px;
      border-radius: 8px;
      background-color: #f4f7fa;
      flex-wrap: wrap;
      padding-bottom: 20px;
      padding-top: 20px;
      padding-right: 20px;

      &-content {
        width: 75%;
        height: 150px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

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

        &-number {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          &-label {
            width: auto;
            font-size: 13.5px;
            margin: 0;
            padding: 0;
            text-transform: capitalize;
            color: #a6a9b1;
          }

          span {

            width: auto;
            padding-right: 20px;
            font-size: 13.5px;
            border-radius: 4px;
            margin: 0;
            font-weight: 500;
            text-transform: uppercase;
            color: #333333;

            &:last-child{
              padding-right: 0;
            }
          }

          h3 {
            padding-right: 5px;
          }
        }
      }



      &-img {
        width: 25%;

        height: 150px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, rgba(155,80,235,1) 0%, rgba(119,109,235,1) 51%, rgba(93,131,235,1) 100%);
        border-radius: 8px;
        color: white;


        h3 {
          align-items: center;
          font-weight: 700;
          font-size: 20px;
          line-height: 1.8;
          justify-content: center;
          text-align: center;
          letter-spacing: 1px;
          color: #fff;
        }
      }


    }



    &-title {
      display: flex;
      width: 100%;
      height: 40vh;
      background-color: transparent;
      justify-content: center;
      background-image:linear-gradient(to left top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)),
                        url("/src/assets/img/bac11.jpeg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 67%;
      align-items: center;
      margin-bottom: 20px;


      h1 {
        font-size: 50px;
        text-transform: capitalize;
        font-weight: 900;
        letter-spacing: 1px;
        color: #ffffff;

        span {
          display: none;
          padding-bottom: 10px;
          border-bottom: 2px solid black;
          transition: all .4s;

          &:hover {
            color: #64be79;
          }
        }
      }
    }



    &-definition {
      width: 85%;
      max-width: 1350px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 30px;
      justify-content: flex-start;
      height: auto;
      flex-wrap: wrap;
      padding-bottom: 30px;
      border-bottom: 1px solid #a5a9b240;
      margin-bottom: 30px;

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
