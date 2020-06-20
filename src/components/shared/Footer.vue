<template>
  <div class="footer">

    <div class="footer-buttons">
      <button>Etkinlikleri Göster</button>
      <button>Etkinlik Oluştur</button>
    </div>

    <div class="footer-text">
      <p>Toplam Oluşturulan Etkinlik Sayısı : <span>{{getEvents.length}}</span></p>
      <p>Bu sayfada gösterilen etkinliklerin sayısı : <span>4</span></p>
    </div>

  </div>
</template>

<script>

  import {mapGetters} from "vuex";

  export default {

    computed: {
      ...mapGetters(["getEvents"])
    }
  }

</script>

<style lang="scss">

  .footer {
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
