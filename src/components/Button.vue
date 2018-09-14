<template>
    <div class='button-vue' :class='type' @click="$emit('click')">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "click me"
    },
    type: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss'>
.button-vue {
  width: 100%;
  height: 100%;
  background: #f7f8fc;
  color: #6b7897;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &.checked {
    background: rgb(72, 128, 255);
    color: #fff;
  }
  cursor: pointer;
}
</style>
