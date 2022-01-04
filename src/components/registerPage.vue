<template>
  <div class="registerPageWrapper">
    <Header />
    <main class="mainContentWrapper">
      <form class="registerFormWrapper" @submit.prevent="registerSubmit">
        <h2>Register</h2>
        <div class="emailWrapper">
          <label for="">EMAIL</label>
          <input type="email" v-model="userEmail" required minlength="11" />
        </div>
        <div class="fullNameWrapper">
          <label for="">FULL NAME</label>
          <input type="text" v-model="userFullName" required minlength="6" />
        </div>
        <div class="passwordWrapper">
          <label for="">PASSWORD</label>
          <div class="passwordInputWrapper">
            <input :type="showPassword ? 'text' : 'password'" v-model="userPassword" required minlength="6" />
            <!-- <input type="password" v-model="userPassword"  /> -->
            <i @click="showPasswordToggle()">
              <!-- <i> -->
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
        <div class="passwordAgainWrapper">
          <label for="">PASSWORD AGAIN</label>
          <div class="passwordInputWrapper">
            <input :type="showPasswordAgain ? 'text' : 'password'" v-model="submitUserPassword" required minlength="6" />
            <!-- <input type="password" v-model="submitUserPassword" @input="passwordCheck" required minlength="6" /> -->
            <i @click="showPasswordToggle('showPasswordAgain')">
              <!-- <i> -->
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
        <button class="registerFormSubmit" type="submit">Register</button>
      </form>
      <section class="hasAccountWrapper">
        <p>
          I already have an account,
          <router-link to="/login"> LOG IN </router-link>
        </p>
        <router-view />
        <template v-if="checkError()">
          <p>{{ errorMessage }}</p>
        </template>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import axios from 'axios';
// import apiService from '@/api/apiService.js';
// const { testGetReq, testPostReq, userRegistration } = apiService;
export default {
  name: 'registerPage',
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      userEmail: '',
      userFullName: '',
      userPassword: '',
      submitUserPassword: '',
      userData: [],
      success: false,
      showPassword: false,
      showPasswordAgain: false,
      error: false,
      errorMessage: '',
    };
  },
  // computed: {
  //   checkError() {
  //     this.error = this.$store.state.userRegister.errorMsg;
  //     if (this.error) {
  //       return this.error;
  //     }
  //   },
  // },
  methods: {
    showPasswordToggle(type = 'showPassword') {
      this[type] = !this[type];
    },
    checkError() {
      this.errorMessage = this.$store.state.userRegister.errorMsg;
      if (Boolean(this.errorMessage)) {
        return this.error;
      } else {
        this.error = true;
        this.errorMessage;
      }
      return this.error
    },
    // testFunc() {
    //   return testGetReq().then((resp) => console.log(resp.data));
    // },
    // testPost() {
    //   return testPostReq(this.userEmail, this.userFullName, this.userPassword).then((response) => {
    //     console.log(response);
    //   });
    // },
    registerSubmit() {
      this.passwordCheck();
      if (this.success) {
        // axios
        //   .post('https://agile-everglades-70301.herokuapp.com/api/register', {
        //     email: `${this.userEmail}`,
        //     name: `${this.userFullName}`,
        //     password: `${this.userPassword}`,
        //   })
        // userRegistration(this.userEmail, this.userFullName, this.userPassword)
        // .then((resp) => console.log('resp data', resp.data))
        // .catch((err) => console.log(err, 'err'));
        // test= {
        //   userEmail:this.userEmail, userFullName:this.userFullName, userPassword:this.userPassword
        // }
        this.$store.dispatch('userRegister/createNewUser', [this.userEmail, this.userFullName, this.userPassword]);
        this.userEmail = '';
        this.userFullName = '';
        this.userPassword = '';
        this.submitUserPassword = '';
      }
    },
    passwordCheck() {
      // if (this.userEmail.length < 11) return this.success;
      // if (this.userFullName.length < 6) return this.success;
      // if (this.userPassword.length < 6) return this.success;
      // if (this.submitUserPassword.length < 6) return this.success;
      if (!this.userEmail || !this.userFullName || !this.userPassword || !this.submitUserPassword) return this.success;
      if (this.userPassword !== this.submitUserPassword) return this.success;
      if (this.userPassword === this.submitUserPassword) return (this.success = true);
    },
  },
};
</script>

<style scoped lang="scss">
.registerPageWrapper {
  display: grid;
  grid-template-areas: 'headerWrapper' 'mainContentWrapper' 'resetWrapperBottom';
  width: 1440px;
  background-color: #f2f2f2;
}
.mainContentWrapper {
  margin: 0 auto;
  width: 425px;
  display: grid;
  grid-template-areas: 'registerFormWrapper' 'hasAccountWrapper';
  margin-bottom: 218.2px;
}
.registerFormWrapper {
  grid-area: registerFormWrapper;
  display: grid;
  box-shadow: 0px 2px 42px 0px #0000001c;
  margin-bottom: 24px;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 25px 24px 32px 24px;
  grid-template-areas: 'registerSlogan' 'emailWrapper' 'fullNameWrapper' 'passwordWrapper' 'passwordAgainWrapper' 'registerFormSubmit';
  & h2 {
    grid-area: registerSlogan;
    font-family: Helvetica;
    font-size: 22px;
    line-height: 25px;
  }
  & input {
    border-radius: 5px;
    padding: 19px 45px 21px 13px;
  }
  & button {
    height: 58px;
    border-radius: 5px;
  }
  & label {
    justify-self: start;
    margin-bottom: 4px;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
  }
}
.emailWrapper {
  grid-area: emailWrapper;
  margin-bottom: 14px;
  display: grid;
  & input {
    border: 1px solid #dedee0;
  }
}
.fullNameWrapper {
  grid-area: fullNameWrapper;
  margin-bottom: 14px;
  display: grid;
  & input {
    border: 1px solid #dedee0;
  }
}

.passwordWrapper {
  grid-area: passwordWrapper;
  margin-bottom: 14px;
  display: grid;
}
.passwordInputWrapper {
  border: 1px solid #dedee0;
  display: grid;
  grid-template-areas: 'passwordInput showPassword';
  gap: 20px;
  grid-template-columns: 0.9fr 0.1fr;
  border-radius: 5px;
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
.passwordAgainWrapper {
  grid-area: passwordAgainWrapper;
  margin-bottom: 32px;
  display: grid;
}
.registerFormSubmit {
  grid-area: registerFormSubmit;
  border: none;
  background: #349a89;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
}

.hasAccountWrapper {
  grid-area: hasAccountWrapper;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 30px 93px 30px 103px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  & a {
    color: #349a89;
    text-decoration: none;
  }
}
</style>
