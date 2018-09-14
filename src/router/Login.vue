<template>
    <div class="page-login">
        <div class="login-box">
            <div class="login-header">welcome to back</div>
            <div class='login-input-box'>
                <Input v-on:send-value='getEamil' placeholder="Pleade enter an username" type='text'/>
            </div>
            <div class='login-input-box'>    
                <Input v-on:send-value='getPassword' placeholder="Pleade enter a password" type='password'/>
            </div>
            <div class="login-btn-box">
                <Button text='Login' type='checked' v-on:click='login'/>
            </div>
        </div>
    </div>
    
</template>

<script>
import Input from "../components/Input";
import Button from "../components/Button";
import User from "../lib/User";

export default {
  components: { Input, Button },
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    getEamil: function(username) {
      this.username = username;
    },
    getPassword: function(password) {
      this.password = password;
    },
    login: function() {
      let { username, password } = this;
      User.login(username, password, () => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang='scss'>
.page-login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    width: 320px;
    height: 500px;
    .login-header {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: #354052;
    }
    .login-input-box {
      margin-top: 20px;
    }
    .login-btn-box {
      margin-top: 30px;
      height: 44px;
    }
  }
}
</style>
