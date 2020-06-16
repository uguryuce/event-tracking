<template>

  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>


    </transition>
    <!-- <app-footer></app-footer> -->
  </div>

</template>



<script>

  import Navigation from "./components/shared/Navigation";
  import Footer from "./components/shared/Footer";


  export default {
    components : {
      appNavigation : Navigation,
      appFooter : Footer
    },

    created() {
      this.$store.dispatch("getEventTable");
      this.$store.dispatch("initApp");
    }
  }

</script>



<style>

  body {
    font-family: 'Montserrat', sans-serif;
  }

  .fade-enter {
      opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .4s ease-out;
    opacity: 1;
  }

  .fade-leave {}

  .fade-leave-active {
    transition: opacity .4s ease-out;
    opacity: 0;
  }

</style>
