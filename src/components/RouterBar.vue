<template>
    <div class='main'>
        <div class='router-bar'>
            <div class="router-bar-logo">
                <img src="../assets/logo.svg" alt="">
            </div>
            <div class="router-bar-list">
                <router-link to='/'>
                  <img src="../assets/router_bar_user.svg" alt="">
                </router-link>
                <router-link to='/detail'>
                  <img src="../assets/router_bar_warning.svg" alt="">
                </router-link>
                <router-link to='/ecosystem'>
                  <img src="../assets/router_bar_analysis.svg" alt="">
                </router-link>
            </div>
            <div class="router-bar-logout" @click="logout">
              <img src="../assets/router_bar_logout.svg" alt="">
            </div>
        </div>
        <div class='main-container'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import User from "../lib/User";

export default {
  methods: {
    logout: function() {
      if (window.confirm("Are you sure to leave?"))
        User.logout(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style lang='scss'>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  .router-bar {
    width: 64px;
    height: 100%;
    background: #3b3f4b;
    display: flex;
    flex-direction: column;
    .router-bar-logo {
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .router-bar-list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      a {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.router-link-exact-active {
          background: #4880ff;
        }
      }
    }
    .router-bar-logout {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .main-container {
    flex-grow: 1;
    height: 100%;
  }
}
</style>
