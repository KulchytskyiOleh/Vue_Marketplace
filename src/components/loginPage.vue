<template>
  <div class="loginPageWrapper">
    <Header />
    <main class="mainSectionWrapper">
      <form class="loginForm" @submit.prevent="loginSubmit">
        <h2>Login</h2>
        <div class="emailWrapper">
          <label for="email"> EMAIL </label>
          <input type="email" placeholder="Example@gmail.com" v-model="userEmail" required minlength="10" />
        </div>
        <div class="passwordWrapper">
          <label for="password">PASSWORD</label>
          <div class="passwordInputWrapper">
            <input :type="showPassword ? 'text' : 'password'" v-model="userPassword" required minlength="6" />
            <i @click="passwordToggle">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z"
                  fill="black"
                />
              </svg>
            </i>
          </div>
        </div>
        <router-link to="/reset" class="passwordReminder">Don’t remember password?</router-link>
        <button class="loginSubmitBtn" type="submit">Continue</button>
      </form>
      <!-- <button @click="test">test</button> -->
      <div class="noAccountWrapper">
        <p>
          I have no account,
          <router-link to="/register">REGISTER NOW</router-link>
        </p>
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    // registerPage
  },
  data: () => {
    return {
      showPassword: false,
      userEmail: '',
      userPassword: '',
      userLoginData: [],
      successValidation: false,
      successLogIn: false,
      userError: '',
      failedTriesCounter: 1,
    };
  },
  methods: {
    passwordToggle() {
      this.showPassword = !this.showPassword;
    },
    async loginSubmit() {
      this.userValidation();
      if (this.successValidation) {
        if (this.userEmail.length > 1 && this.userPassword.length > 1) {
          axios
            .post('https://agile-everglades-70301.herokuapp.com/api/login', {
              email: this.userEmail,
              password: this.userPassword,
            })
            .then((resp) => {
              if (resp.data) {
                console.log(resp, 'resp');
                this.userEmail = '';
                this.userPassword = '';
                this.$router.push({ path: '/', name: 'Home' });
              }
            })
            .catch((err) => {
              if (err) {
                this.failedTriesCounter++;
              }
              console.log(err.message, 'error');
            });
          console.log(this.successLogIn, 'this.successLogIn');
        }
      }
    },
    userValidation() {
      if (this.userEmail.length < 11 || this.userPassword.length < 6) return this.successValidation, (this.userError = 'to short login or password');
      if (!this.userEmail || !this.userPassword) return this.successValidation;
      if (!this.userEmail) {
        return (this.userError = 'need to fill this field');
      }
      if (!this.userPassword) {
        return (this.userError = 'need to fill this field');
      } else {
        this.successValidation = true;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
// * {
//   margin: 0;
//   padding: 0;
// }
.headerWrapper {
  grid-area: headerWrapper;
}
.loginPageWrapper {
  display: grid;
  margin: 0 auto;
  background-color: #f2f2f2;
  grid-template-areas: 'headerWrapper' '.' 'mainSectionWrapper' '.' 'resetWrapperBottom';
  // grid-template-rows: 41.88px 81px 365px 554px 73px;
}
.mainSectionWrapper {
  display: grid;
  grid-area: mainSectionWrapper;
  margin: 0 auto;
  display: grid;
  width: 425px;
  grid-template-areas: 'loginForm' 'noAccountWrapper';
  // grid-template-rows: 365px 76px;
  gap: 21px;
  margin-bottom: 554px;
}
.loginForm {
  display: grid;
  grid-area: loginForm;
  border-radius: 7px;
  padding: 25px 23px 21px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 42px 0px #0000001c;

  grid-template-areas: 'loginSlogan' 'emailWrapper' 'passwordWrapper' 'passwordReminder' 'loginSubmitBtn';
  & h2 {
    grid-area: loginSlogan;
    font-family: Helvetica;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 0px;
  }
}
.emailWrapper {
  grid-area: emailWrapper;
  width: 377px;
  display: grid;
  grid-template-areas: 'emailLabel' 'emailInput';
  margin-bottom: 15px;
  & label {
    align-self: start;
    justify-self: start;
    grid-area: emailLabel;
    height: 14px;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    margin-bottom: 4px;
  }
  & input {
    grid-area: emailInput;
    padding: 19px 45px 21px 13px;
    border-radius: 5px;
    border: 2px solid #dedee0;
  }
}
.passwordWrapper {
  grid-area: passwordWrapper;
  display: grid;
  margin-bottom: 5px;
  width: 377px;
  grid-template-areas: 'passwordLabel' '.' 'passwordInputWrapper';
  & label {
    grid-area: passwordLabel;
    justify-self: start;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    margin-bottom: 4px;
  }
}
.passwordInputWrapper {
  grid-area: passwordInputWrapper;
  border-radius: 5px;
  height: 58px;
  border: 2px solid #dedee0;
  display: grid;
  grid-template-areas: 'passwordInput showPassword';
  gap: 20px;
  grid-template-columns: 0.9fr 0.1fr;
  & input {
    grid-area: passwordInput;
    padding: 19px 45px 21px 13px;
    border: none;
    outline: none;
  }
  & i {
    grid-area: showPassword;
    align-self: center;
    justify-self: start;
    cursor: pointer;
  }
}
.passwordReminder {
  grid-area: passwordReminder;
  margin-bottom: 16px;
  justify-self: end;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  color: #8c8c8c;
  cursor: pointer;
  text-decoration: none;
}
.loginSubmitBtn {
  grid-area: loginSubmitBtn;
  height: 58px;
  padding: 19px 29px 21px 29px;
  background: #349a89;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  cursor: pointer;
}
.noAccountWrapper {
  background: #ffffff;
  grid-area: noAccountWrapper;
  border-radius: 7px;
  display: grid;
  padding: 30px 92px 30px 92px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;

  & p {
    justify-self: center;
    align-self: center;
  }
  & a {
    text-decoration: none;
    color: #349a89;
    cursor: pointer;
  }
}
</style>
