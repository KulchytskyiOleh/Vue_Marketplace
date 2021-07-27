<template>
  <div class="resetPasswordWrapper">
    <Header />
    <main class="resetPasswordForm">
      <div class="resetPasswordFormWrapper">
        <h2 class="formSlogan">Restore Password</h2>
        <div class="emailWrapper">
          <p class="emailSlogan">EMAIL</p>
          <input class="emailInput" type="text" placeholder="Example@gmail.com" />
        </div>
        <button class="resetPasswordFormBtn">Continue</button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'ResetPassword',
  props: {
    msg: String,
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.resetPasswordWrapper {
  margin: 0 auto;
  background-color: #f2f2f2;
  display: grid;
  grid-template-areas: '.' 'headerWrapper' '.' 'resetPasswordForm' '.' 'resetWrapperBottom';
  grid-template-rows: 18.12px 41.88px 120px 273px 554px 73px;
}

.resetPasswordForm {
  grid-area: resetPasswordForm;
  margin: 0 auto;
  padding: 21px 26px 27px 25px;
  width: 425px;
  height: 273px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0px 2px 42px #0000001c;
  border-radius: 7px;
  margin-bottom: 553.2px;
}
.resetPasswordFormWrapper {
  display: grid;
  grid-template-rows: 26px 26px 38px 76px 24px 58px 25px;
  grid-template-columns: 1fr;
  grid-template-areas:
    '.'
    'formSlogan'
    '.'
    'emailWrapper'
    '.'
    'resetPasswordFormBtn'
    '.';
}
.formSlogan {
  grid-area: formSlogan;
}
.emailWrapper {
  grid-area: emailWrapper;
  height: 76px;
  display: grid;
  grid-template-areas:
    'emailSlogan'
    '.'
    'emailInput';
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
  // height: 58px;
  &::placeholder {
    color: rgba(102, 102, 102, 0.4665);
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
