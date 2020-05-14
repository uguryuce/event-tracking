<template>
  <nav class="navigation">
    <div class="navigation-logo pl-5">
      <router-link
        exact
        active-class="activeC"
        to="/"
        class="navigation-link-list-item">
        <h3 class="text-white" href="">Event Hab</h3>
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
        <a href="">Event List</a>
      </router-link>

        <router-link
          exact
          active-class="activeC"
          to="/create-event"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Create Event</a>
        </router-link>

        <router-link
          exact
          active-class="activeC"
          to="/event-details"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Event View</a>
        </router-link>

        <router-link
          exact
          active-class="activeC"
          to="/profile"
          tag="li"
          class="navigation-link-list-item">
          <a href="">Profile</a>
        </router-link>

      </ul>
    </div>
  </nav>

</template>

<script>

</script>

<style lang="scss">

  .activeC {
    a {
      color: white;
    }
  }

  .navigation {
    width: 100%;
    height: 6vh;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: black;
    color: white;

    &-logo {
      justify-content: flex-start;
      align-items: center;
      width: 20%;
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
          width: 12.5%;
          align-items: center;
        }
      }
    }
  }



</style>
