<template>
    <div class='input-vue' :class="status">
      <input :type="type" v-model="value" @change="$emit('send-value', value)" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
  name: "input-vue",
  props: {
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    status: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" >
.input-vue {
  height: 44px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  &.error {
    border: 1px solid red;
  }
  input {
    font-size: 14px;
    height: 100%;
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 4px;
    padding: 0 10px;
  }
}
</style>
