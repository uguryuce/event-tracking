<template>
  <nav class="navigation">

    <div class="navigation-logo">
      <router-link
        exact
        active-class="activeC"
        to="/"
        class="navigation-link-list-item">
        <h3>Eventhab</h3>
      </router-link>
    </div>

    <div class="navigation-link">
      <ul class="navigation-link-list">

        <router-link
        exact
        active-class="activeC"
        to="/event-list"
        tag="li"
        class="navigation-link-list-item">
        <a href="">Etkinlik Listesi</a>
      </router-link>

        <router-link
          exact
          active-class="activeC"
          to="/create-event"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Etkinlik Oluştur</a>
        </router-link>

        <router-link
          exact
          active-class="activeC"
          to="/event-details"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Etkinlik Detay</a>
        </router-link>

        <!-- <router-link
          exact
          active-class="activeC"
          to="/profile"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Profile</a>
        </router-link> -->

      </ul>
    </div>
  </nav>

</template>

<script>

</script>

<style lang="scss" scoped>



  .navigation {

    margin: auto;
    width: 100%;
    padding-left: calc(5%);
    height: 10vh;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: transparent;
    color: black;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);

    &-logo {
      justify-content: flex-start;
      align-items: center;
      width: 20%;

      h3 {
        color: #333333;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        padding-left: 40px;
        margin: 0px;
      }

    }

    &-link {
      width: 80%;
      height: 6vh;
      justify-content: flex-end;
      align-items: center;

      &-list {
        justify-content: flex-end;
        flex-wrap: nowrap;
        height: 6vh;
        display: flex;
        width: auto;
        align-items: center;


        &-item {
          justify-content: center;
          text-decoration: none;
          list-style: none;
          width: 15%;
          align-items: center;

          a {
            text-decoration: none;
            color: #333333!important;
          }
        }
      }
    }
  }

  .activeC {
    a {
      color: white!important;
      background-color: #64be79;
      border-radius: 4px;
      padding: 14px 7px;
      text-decoration: none!important;
    }
  }



</style>
