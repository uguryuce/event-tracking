<template>
  <div class="create-event mt-5">

    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <h4>Create Event</h4>
    <div>
      <label>Etkinlik Adı</label>
      <input v-model="event.title" type="text" placeholder="Etkinlik adı girin">
    </div>

    <div>
      <label>Etkinlik Konusu</label>
      <input v-model="event.subject" type="text" placeholder="Etkinlik konusu girin">
    </div>

    <div>
      <label>Açıklama</label>
      <input v-model="event.description" type="text" placeholder="Açıklama girin">
    </div>

    <div>
      <label>Katılımcı sayısı</label>
      <input v-model="event.participantNumber" type="number" placeholder="Katılımcı sayısı girin">
    </div>

    <button class="btn btn-primary" :disabled="createEnable" @click="createEvent">Kaydet</button>


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

<style>

</style>
