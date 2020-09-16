<template>
  <v-app>
    <v-content>
      <v-container class="container fill-height container--fluid">
        <v-card
          align="center"
          style="width:472px; margin-left:auto!important;margin-right:auto!important;"
        >
          <v-toolbar style="height:64px;  background-color: #25408f;">
            <v-toolbar-title class="white--text">Авторизация</v-toolbar-title>
          </v-toolbar>
          <v-alert color="error" :value="error" icon="mdi-close">Не правильный логин или пароль!</v-alert>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row no-gutters>
                  <v-flex col col-12>
                    <v-text-field
                      label="Логин"
                      :rules="[rules.required]"
                      hide-details="auto"
                      v-model="login"
                      name="login"
                    ></v-text-field>
                  </v-flex>
                  <v-flex col col-12>
                    <v-text-field
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required]"
                      :type="show1 ? 'text' : 'password'"
                      label="Пароль"
                      value
                      v-model="password"
                      name="password"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                  <v-flex col-sm-3 col-md-3 col-lg-3 col-12 mt-5>
                    <v-btn @click.prevent="doLogin()" color="indigo" style="float:left;" dark>Войти</v-btn>
                  </v-flex>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
    <router-view />
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show1: false,
      password: "",
      login: "",
      error: false,
      rules: {
        required: value => !!value || "Поле обязательно для заполнения!"
      }
    };
  },
  created() {
    sessionStorage.clear();
  },
  methods: {
    doLogin: function() {
      axios
        .post("/login", { login: this.login, password: this.password }) 
        .then(res => {
          sessionStorage.setItem("inf",JSON.stringify(res.data));
          sessionStorage.setItem("nomer_tor", (JSON.parse(sessionStorage.getItem('inf'))).tor);
          sessionStorage.setItem("nca_user_token",(JSON.parse(sessionStorage.getItem('inf'))).accessToken);
          sessionStorage.setItem("nca_role",(JSON.parse(sessionStorage.getItem('inf'))).nca_role);
          this.$router.push("/pages");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>