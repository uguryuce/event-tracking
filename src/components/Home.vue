<template>
  <section>
    <app-navigation-white></app-navigation-white>

    <div style="display: block; height: 165vh;">
      <div class="home-page">

        <div class="home-page-title">
          <h1 style="text-transform: capitalize">Etkinlik Takip Sistemi</h1>
          <p>İnsanlarla tanışmak, yeni bir şeyler denemek ve sevdiğiniz şeyi yapmak için bize katılın.</p>
          <router-link
                  exact
                  active-class="activeC"
                  to="/event-list"
                  class="btn">
            Etkinlikleri Keşfet
          </router-link>
        </div>


        <div class="home-page-sm-title">
          <h1>Etkinliklere Gözat</h1>
        </div>


        <div class="home-page-definition">
          <p>Bu sayfada, <span>en son oluşturulan etkinlikler </span> görüntülenmektedir.</p>
        </div>


        <div class="home-page-list">
          <div class="event-list-item" v-for="event in getEvents.slice(0,4)" v-if="getEvents.length > 0">

            <div class="event-list-item-content">


              <div class="event-list-item-content-fix event-list-item-content-id">
                <h3 class="event-list-item-content-id-label"></h3>
                {{event.key}}
              </div>

              <div class="event-list-item-content-fix event-list-item-content-title">
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

        </div>



      </div>
    </div>

    <div class="home-page-footer">

      <div class="home-page-footer-buttons">
        <button>Etkinlikleri Göster</button>
        <button>Etkinlik Oluştur</button>
      </div>

      <div class="home-page-footer-text">
        <p>Toplam Oluşturulan Etkinlik Sayısı : <span>{{getEvents.length}}</span></p>
        <p>Bu sayfada gösterilen etkinliklerin sayısı : <span>4</span></p>
      </div>

    </div>

  </section>
</template>

<script>

  import {mapGetters} from "vuex";
  import NavigationWhite from "./shared/NavigationWhite";
  import Footer from "./shared/Footer";
  import EventDetails from "./event/EventDetails";

  export default {

    components : {
      EventDetails,
      appNavigationWhite : NavigationWhite,
      appFooter : Footer
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

  $margin-l : 40px;
  $padding-l : 40px;


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

    &-sm-title {
      width: 85%;
      margin: auto;
      display: flex;
      height: auto;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 0;

      h1 {
        font-size: 24px;
      }
    }

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
        font-size: 50px;
        margin-top: 20px;
        color: white;
        font-weight: 800;
        letter-spacing: 1px;
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
      width: 85%;
      max-width: 1350px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      justify-content: flex-start;
      height: auto;
      flex-wrap: wrap;
      padding-bottom: 30px;
      border-bottom: 1px solid #a5a9b240;
      margin-bottom: 10px;

      h3 {
        width: 100%;
        margin-left: 0;
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

    .home-page-list{
      width: 100%;
      height: auto;
      padding-bottom: 100px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: start;
      justify-content: center;

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
          width: 40%;
          max-width: 1350px;
          border-radius: 8px;
          background-color: #f4f7fa;
          flex-wrap: wrap;
          padding-bottom: 20px;
          padding-top: 20px;
          padding-right: 20px;
          align-items: center;

          &:nth-child(even) {

            margin-left: 2.5%;
          }

          &:nth-child(odd){
            margin-right: 2.5%;
          }

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
            height:120px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: linear-gradient(90deg, rgba(155,80,235,1) 0%, rgba(119,109,235,1) 51%, rgba(93,131,235,1) 100%);
            border-radius: 8px;
            color: white;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.0);

            padding-left: 20px;
            padding-right: 20px;


            h3 {
              align-items: center;
              font-weight: 700;
              font-size: 12px;
              text-transform: capitalize;
              line-height: 1.8;
              justify-content: center;
              text-align: center;
              letter-spacing: 1px;
              color: #33333399;
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
    }



  }

  .home-page-footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    height: 37.5vh;
    padding-bottom: 10px;
    justify-content: space-between;
    background-color: #1b1e21;

    &-buttons {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 50px;
      justify-content: center;
      align-items: flex-start;
      padding-top: 70px;

      button {
        width: 30%;
        height: 50px;
        border: none;
        border-radius: 4px;

        &:first-child{
          margin-right: 10px;
          background-color: #ffbc00;
          color: white;
          font-weight: 600;
        }

        &:last-child{
          margin-left: 10px;
          background-color: #fff;
          color: #333333;
          font-weight: 600;
        }
      }
    }

    &-text {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #a5a9b2;
      padding-top: 20px;
      margin-bottom: 50px;

      p {
        color: #a5a9b2;
        width: 50%;

        &:first-child{
          text-align: left;
        }

        &:last-child{
          text-align: right;
        }

        span {
          font-weight: 600;
        }
      }
    }


  }

</style>
