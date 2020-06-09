<template>
  <div class="create-event">



    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>



    <div class="create-event-title">
      <h1>Etkinlik Oluştur</h1>
    </div>



    <div class="create-event-description">
      <div class="create-event-description-block">

        <div class="create-event-description-block-item">
          <i class="fa fa-twitter"></i>
          <h3>Lorem ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ipsum omnis tempora?</p>
        </div>

        <div class="create-event-description-block-item">
          <i class="fa fa-twitter"></i>
          <h3>Lorem ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet, adipisicing elit. Distinctio ipsum omnis tempora?</p>
        </div>

        <div class="create-event-description-block-item">
          <i class="fa fa-twitter"></i>
          <h3>Lorem ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur  elit. adipisicing elit Distinctio ipsum omnis tempora?</p>
        </div>

      </div>
    </div>



    <div class="create-event-form">

      <div class="create-event-form-title">
        <h1>Etkinlik Bilgileri</h1>
      </div>

      <div class="create-event-form-item">
        <label>Etkinlik Adı</label>
        <input v-model="event.title" type="text" placeholder="Etkinlik adı girin">
      </div>

      <div class="create-event-form-item">
        <label>Etkinlik Konusu</label>
        <input v-model="event.subject" type="text" placeholder="Etkinlik konusu girin">
      </div>

      <div class="create-event-form-item">
        <label>Açıklama</label>
        <input v-model="event.description" type="text" placeholder="Açıklama girin">
      </div>

      <div class="create-event-form-item">
        <label>Katılımcı sayısı</label>
        <input v-model="event.participantNumber" type="number" placeholder="Katılımcı sayısı girin">
      </div>

      <div class="create-event-form-item create-event-form-button">
        <button class="" :disabled="createEnable" @click="createEvent">Kaydet</button>
      </div>

    </div>



  </div>
</template>










<script>

  export default {

    data () {
      return {
        event : {
          title : "",
          subject : "",
          description : "",
          participantNumber : null
        },
        createButtonClicked : false
      }
    },



    methods : {
      createEvent () {
        this.createButtonClicked = true;
        this.$store.dispatch("createEvent", this.event)
      }
    },



    computed : {
      createEnable() {
        if(this.event.title.length > 0 && this.event.subject.length > 0 && this.event.description.length > 0 && this.event.participantNumber !== null){
          return false;
        }
        else {
          return true;
        }
      },



      isLoading(){
        if(this.createButtonClicked){
          return {
            display : "block"
          }
        }
        else {
          return {
            display: "none"
          }
        }
      }
    },



    beforeRouteLeave(to, from, next){
      if((this.event.title.length > 0 || this.event.subject.length > 0 || this.event.description.length > 0 || this.event.participantNumber !== null) && !this.createButtonClicked) {

        if (confirm("Kaydedilmemiş değişiklikler var. Yine de çıkmak istiyor musunuz?")) {
          next();
        }
        else {
          next(false);
        }

      }

      else {
        next();
      }

    }
  }

</script>










<style lang="scss">


  .create-event {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;

    &-title {
      display: flex;
      width: 100%;
      height: 40vh;
      background-color: transparent;
      justify-content: center;
      background-image: url("/src/assets/img/bac3.jpeg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      align-items: center;
      margin-bottom: 0px;

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





    &-description {
      display: flex;
      width: 35%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      padding-right: 20px;
      height: 70vh;
      flex-wrap: wrap;
      background-color: #f4f6f9;
      margin-bottom: 50px;
      padding-top: 40px;

      &-block {
        width: 72.5%;
        height: 70vh;
        padding-top: 15px;
        padding-right: 50px;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        &-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          height:15vh;
          position: relative;

          h3 {
            font-size: 18px;
            font-weight: 600;
          }

          p {
            color: #747b86;
          }

          i {
            position: absolute;
            top: 0px;
            left: -40px;
            font-size: 26px;
            color: #f6be41;
          }
        }

      }

    }





    &-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 65%;
      height: 70vh;
      padding-top: 20px;
      margin-bottom: 50px;

      &-title {
        display: flex;
        width: 90%;
        text-align: left;
        justify-content: flex-start;
        margin-top: 35px;
        margin-bottom: 35px;

        h1 {
          font-size: 26px;
          font-weight: 600;
        }
      }

      &-item {
        width: 80%;
        margin-right: 10%;
        margin-bottom: 15px;

        label {
          display: block;
          color: #9fa4af;
        }
        input {
          width: 100%;
          padding: 10px 10px;
          background-color: #f4f6f9;
          border: 1px solid #dbe1e695;
          border-radius: 4px;

          &::placeholder {
            color: #9fa4af;
            font-weight: 200;
          }
        }


      }

      &-button {
        display: flex;
        justify-content: flex-end;

        button {
          background-color: #64be79;

          color: white;
          border: none;
          padding: 7px 15px;
          border-radius: 4px;
        }
      }
    }
  }

</style>
