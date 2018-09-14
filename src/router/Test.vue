<template>
  <div>
    <div>This is Home</div>
    <div>{{count}}</div>
    <div>{{loginCount}}</div>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <div>{{status?'good':'bad'}}</div>
    <button @click='changeStatus'>change status</button>
    <div>{{countFive? 'suprise': 'ohh..'}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    loginCount: function() {
      return this.$store.state.login.count;
    },
    ...mapGetters({
      countFive: "HOME_COUNTFIVE"
    }),
    ...mapState({
      count: state => state.home.count,
      status: state => state.home.status
    })
  },
  methods: {
    increment: function() {
      this.$store.commit({
        type: "HOME_INCREMENT",
        payload: 2
      });
    },
    decrement: function() {
      this.$store.commit({
        type: "HOME_DECREMENT",
        payload: 1
      });
    },
    changeStatus: function() {
      this.$store.commit({
        type: "HOME_CHANGESTATUS"
      });
    }
  }
};
</script>

<style>
</style>