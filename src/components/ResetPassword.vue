<template>
  <div class="resetPasswordWrapper">
    <Header />
    <form class="resetPasswordForm" @submit.prevent="resetPassword">
      <div class="resetPasswordFormWrapper">
        <h2 class="formSlogan">Restore Password</h2>
        <div class="emailWrapper">
          <p class="emailSlogan">EMAIL</p>
          <input class="emailInput" type="text" v-model="userEmail" placeholder="Example@gmail.com" required minlength="8" />
        </div>
        <button class="resetPasswordFormBtn" type="submit">Continue</button>
      </div>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name: 'ResetPassword',
  props: {
    msg: String,
  },
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      userEmail: '',
      success: false,
      errorText: '',
    };
  },
  methods: {
    resetPassword() {
      this.passwordCheck();
      if (this.success) {
        console.log('test')
        this.$store.dispatch('restorePas/restorePassword',this.userEmail)
        // axios
        //   .post('https://agile-everglades-70301.herokuapp.com/api/restoreEmail', {
        //     email: `${this.userEmail}`,
        //   })
        //   .then((resp) => console.log('resp data', resp.data))
        //   .catch((err) => console.log(err, 'err'));
        this.userEmail = '';
      }
    },
    // test
    passwordCheck() {
      if (!this.userEmail) return this.success;
      if (this.userEmail.length < 6) return this.success;
      if (!this.userEmail.includes('@')) return this.success, console.log('email need to contains @ symbol');
      if (this.userEmail.includes('@')) return (this.success = true);
    },
  },
};
</script>

<style scoped lang="scss">
.resetPasswordWrapper {
  margin: 0 auto;
  background-color: #f2f2f2;
  display: grid;
  grid-template-areas: 'headerWrapper' 'resetPasswordForm' 'resetWrapperBottom';
}

.resetPasswordForm {
  grid-area: resetPasswordForm;
  margin: 0 auto;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0px 2px 42px #0000001c;
  margin-bottom: 553.2px;
  padding: 21px 26px 27px 25px;
}
.resetPasswordFormWrapper {
  display: grid;
  width: 377px;
  grid-template-areas: 'formSlogan' 'emailWrapper' 'resetPasswordFormBtn';
}
.formSlogan {
  grid-area: formSlogan;
}
.emailWrapper {
  grid-area: emailWrapper;
  height: 76px;
  display: grid;
  margin-bottom: 24px;
  grid-template-areas: 'emailSlogan' 'emailInput';
}
.emailSlogan {
  grid-area: emailSlogan;
  height: 14px;
  font-size: 12px;
  justify-self: start;
  margin-bottom: 4px;
}
.emailInput {
  border-radius: 5px;
  grid-area: emailInput;
  background: #f9fafb;
  border: 1px solid #dedee0;
  &::placeholder {
    color: #66666677;
  }
  &[type='text'] {
    padding: 19px 45px 21px 13px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.4px;
  }
}
.resetPasswordFormBtn {
  grid-area: resetPasswordFormBtn;
  height: 58px;
  background: #349a89;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  cursor: pointer;
}
</style>
