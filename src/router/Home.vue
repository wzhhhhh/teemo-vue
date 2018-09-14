<template>
  <Wrapper>
    <div slot='slide' class='wrapper-slide'>
      <div class='slide-title'>用户管理</div>
      <div class='slide-sub-title'>按类型查看</div>
      <div class="btn-list">
        <div class="btn"  v-for="(item, index) in userTypes" :key='index'>
          <Button :type="item.checked? 'checked':''" :text="item.text" @click="pickUserType(item.type)"/>
        </div>
      </div>
    </div>
    <div slot='content' class='wrapper-content'>
      <div class="content-title">全部用户</div>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

export default {
  data: function() {
    return {
      userTypes: [
        {
          text: "全部用户",
          checked: true,
          type: "all"
        },
        {
          text: "试用用户",
          checked: false,
          type: "trial"
        },
        {
          text: "付费用户",
          checked: false,
          type: "paid"
        },
        {
          text: "内部用户",
          checked: false,
          type: "internal"
        },
        {
          text: "停用用户",
          checked: false,
          type: "blocked"
        }
      ]
    };
  },
  components: { Wrapper, Button },
  methods: {
    pickUserType: function(type) {
      this.userTypes.forEach(item => {
        if (item.type === type) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    }
  }
};
</script>

<style lang='scss'>
.wrapper-slide {
  .btn-list {
    .btn {
      margin-bottom: 12px;
      height: 32px;
    }
  }
}
</style>

