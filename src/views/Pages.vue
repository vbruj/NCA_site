<template>
  <v-app>
      <v-app-bar
        app
        color="primary"
        dark
        elevate-on-scroll
      > 
      <v-layout  >
        <v-flex col-sm-5 col-md-4 col-lg-3 col-xl-4 col-12 >
        <v-img src="https://pr.nca.by/img/nca.6a52f026.svg"  aspect-ratio="4" width="210px" ></v-img>
        </v-flex>
      </v-layout>
      <v-layout  >
        <v-spacer></v-spacer>
      </v-layout>
        <v-toolbar-title>Земельный кадастр</v-toolbar-title>
      </v-app-bar>
    <v-content>
      <v-container class="container" >
        <v-layout row >
          <v-flex col-sm-3 col-md-2 col-lg-1 mr-6>
            <v-btn color="primary" @click="$router.push('/');"  dark>Выйти</v-btn>
          </v-flex>
          <v-flex col-sm-6 col-md-4 col-lg-2 style="margin-right:-25px">
            <v-btn
              :disabled = disabled2
              id="Admin_menu"  
              color="primary"
              @click="$router.push('/statistik')"
              dark
            >Статистика</v-btn>
          </v-flex>
          <v-flex col-sm-6 col-md-4 col-lg-3 >
            <v-btn
              :disabled = disabled
              id="Admin_menu"  
              color="red"
              @click="$router.push('/admin_menu')"
              dark
            >Меню админинистратора</v-btn>
          </v-flex>
        </v-layout>
        <br />
          <v-flex>
            <v-card col12>
              <v-tabs grow v-model="tab" background-color="primary" dark >
                <v-tab :key="1">Жилая многоквартирная зона</v-tab>
                <v-tab v-on:click="LOD()" :key="2">Общественно-деловая зона</v-tab>
                <v-tab v-on:click="LPS()" :key="3">Производственная зона</v-tab>        
              </v-tabs>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Поиск"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-tabs-items v-model="tab">
                <v-tab-item :key="1">
                  <v-card flat>
                    <v-card-text>
                      <v-data-table
                        :items-per-page="10"
                        @click:row="loadPage('Object_vvedeni_v_eksplyataciu_JM', $event)"
                        :headers="headers"
                        :items="areasJM['Name_Page']"
                        class="elevation-24"
                        :search="search"
                      ></v-data-table>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="2">
                  <v-card flat>
                    <v-card-text>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Объекты" value="objecti" ></v-radio>
                        <v-radio label="Сделки ИП" value="sdelki"></v-radio>   
                        <v-radio label="Сделки КС" value="sdelki2"></v-radio>   
                      </v-radio-group>
                    </v-card-text>
                    <v-card flat v-if="row === 'objecti'">
                      <v-card-text>
                        <v-data-table
                          :items-per-page="10"
                          @click:row="loadPage('Object_vvedeni_v_eksplyataciu_OD', $event)"
                          :headers="headers2"
                          :items="areasOD['Name_Page']"
                          class="elevation-24"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                    <v-card flat v-if="row === 'sdelki'">
                      <v-card-text>
                        <v-data-table
                          :items-per-page="10"
                          @click:row="loadPage('Sdelka_s_izolirovannim_pomejeniem_OD', $event)"
                          :items="areasODIP['Name_Page']"
                          :headers="headers2_2"
                          class="elevation-24"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>  
                    <v-card flat v-if="row === 'sdelki2'">
                      <v-card-text>
                        <v-data-table
                          :items-per-page="10"
                          @click:row="loadPage('Sdelka_s_kap_stroeniem_OD', $event)"
                          :items="areasODKS['Name_Page']"
                          :headers="headers2_3"
                          class="elevation-24"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card> 
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="3">
                  <v-card flat>
                    <v-card-text>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Объекты" value="objecti"></v-radio>
                        <v-radio label="Сделки ИП" value="sdelki"></v-radio>
                        <v-radio label="Сделки КС" value="sdelki2"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-card flat v-if="row === 'objecti'">
                       <v-card-text>
                        <v-data-table
                          @click:row="loadPage('Object_vvedeni_v_eksplyataciu_PS', $event)"
                          :headers="headers3"
                          :items-per-page="10"
                          :items="areasPS['Name_Page']"
                          class="elevation-24"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                    <v-card flat v-if="row === 'sdelki'">
                      <v-card-text>
                        <v-data-table    
                          @click:row="loadPage('Sdelka_s_izolirovannim_pomejeniem_PS', $event)"
                          :headers="headers3_2"
                          :items-per-page="10"
                          :items="areasPSIP['Name_Page']"
                          class="elevation-24"
                          :search="search"
                          
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                    <v-card flat v-if="row === 'sdelki2'">
                      <v-card-text>
                        <v-data-table    
                          @click:row="loadPage('Sdelka_s_kap_stroeniem_PS', $event)"
                          :headers="headers3_3"
                          :items-per-page="10"
                          :items="areasPSKS['Name_Page']"
                          class="elevation-24"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-flex>
      </v-container>
    </v-content>

    <v-footer
    color="primary "
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        href="https://goo.gl/rV8Jpb"
        color="white"
        text
        rounded
        class="my-2"
      ><strong>Онлайн-чат</strong>
      </v-btn>
      <v-btn
        href="https://goo.gl/PcaMnC"
        color="white"
        text
        rounded
        class="my-2"
      >
        <strong>Форма обратной связи</strong>
      </v-btn>
            <v-btn
        href="email:2881035@nca.by"
        color="white"
        text
        rounded
        class="my-2"
      >
       <strong>E-mail</strong>
        
      </v-btn>
      <v-menu offset-y rounded="b-xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          text
          class="my-2"
          v-on="on"
          v-bind="attrs"
        >
          <strong>Контактныe номера</strong>
        </v-btn>
      </template>
        <v-list>
          <v-list-item
            href="tel:+375172881035"
          >
          <v-list-item-title>+375-17-288-10-35</v-list-item-title>
          </v-list-item>
          <v-list-item
            href="tel:+375292206663"
          >
            <v-list-item-title>+375-29-220-66-63</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-col
        class="primary  py-4 text-center white--text"
        cols="12"
      >
      <v-layout justify-center >       
        <v-flex col-sm-4 col-md-3 col-lg-2 col-xl-1 col-12>
          <v-img  src="https://pr.nca.by/img/nca.6a52f026.svg"  aspect-ratio="5"   contain></v-img>
        </v-flex>
      </v-layout>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
//http://localhost:3333/sql
import axios from "axios";
export default {
  data() {
    return {
      auth_geader: {},
      disabled: true,
      disabled2: true,
      search: "",
      tab: null,
      length: "",
      headers: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Адрес", value: "address" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers2: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kadastr_nomer_zy" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers2_2: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Инвентарный номер ИП", value: "inv_num_ip" },
        { text: "Адрес", value: "address" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers2_3: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kadastr_nomer_zy" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers3: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kadastr_nomer_zy" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers3_2: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Инвентарный номер ИП", value: "inv_num_ip" },
        { text: "Адрес", value: "address" },
        { text: "Статус восполнения", value: "status" }
      ],
      headers3_3: [
        { text: "Инвентарный номер", value: "inv_num" },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kadastr_nomer_zy" },
        { text: "Статус восполнения", value: "status" }
      ],
      users: [],
      areasJM: [],
      areasOD: [],
      areasODIP: [],
      areasODKS: [],
      areasPS: [],
      areasPSIP: [],
      areasPSKS: [],
      row: "objecti",
      load: false,
      load2: false
    };
  },
  created: function() {
    this.auth_geader = {
      Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
    };

    this.loadJM();
    this.initialize();
    this.checkAdmin();
    sessionStorage.removeItem('X');
    sessionStorage.removeItem('Y');
    sessionStorage.removeItem('inv');
    sessionStorage.removeItem('inv_ip');
  },
  
  methods: {
    LOD(){
      if (!this.load) {
        this.loadOD();
        this.load = true;
      }
    },
    LPS(){
      if (!this.load2) {
        this.loadPS();
        this.load2 = true;
      }
    },
    loadJM(){
      var self = this;
      
        axios
          .post("/areas", {
            name_table: 'sdelka_s_izolir_pomesh_jm',
            name_page: 'Object_vvedeni_v_eksplyataciu_JM',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
          })
          .then(res => {
            this.areasJM = res.data;
          })
          .catch(function(error) {
            self.$router.push('/');
          });
    },

    loadOD(){
        axios
        .post("/areas", {
            name_table: 'object_vvedeni_v_eksplyataciu_od',
            name_page: 'Object_vvedeni_v_eksplyataciu_OD',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasOD = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
        .post("/areas", {
            name_table: 'sdelka_s_izolirovannim_pomejeniem_od',
            name_page: 'Sdelka_s_izolirovannim_pomejeniem_OD',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasODIP = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
        .post("/areas", {
            name_table: 'sdelka_s_kap_stroeniem_od',
            name_page: 'Sdelka_s_kap_stroeniem_OD',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasODKS = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });

    },
    loadPS(){
      // if (sessionStorage.getItem("auth_key") && sessionStorage.getItem("nomer_tor")) {
        axios
        .post("/areas", {
            name_table: 'object_vvedeni_v_eksplyataciu_ps',
            name_page: 'Object_vvedeni_v_eksplyataciu_PS',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasPS = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
        .post("/areas", {
            name_table: 'sdelka_s_izolirovannim_pomejeniem_ps',
            name_page: 'Sdelka_s_izolirovannim_pomejeniem_PS',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasPSIP = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
        .post("/areas", {
            name_table: 'sdelka_s_kap_stroeniem_ps',
            name_page: 'sdelka_s_izolirovannim_pomejeniem_ps',
            nomer_tor: sessionStorage.getItem("nomer_tor"),
            headers: this.auth_geader
        })
        .then(res => {
          this.areasPSKS = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
    initialize() {    
      setTimeout(() => { 
      axios
        .post("users", {headers: this.auth_geader})
        .then(res => {
          this.users = res.data;   
        })
        .catch(function(error) {
          console.log(error);
        });
      }, 500);
    },
    checkAdmin(){
      setTimeout(() => { 
      for (let i = 0; i <= this.users.length; i++){
        if (this.users[i].nomer_tor == sessionStorage.getItem("nomer_tor")){ 
          
          if(this.users[i].role == 'Администратор'){
            this.disabled = false; 
            this.disabled2 = false;  
            break;  
          }
          if(this.users[i].role == 'Куратор'){
            this.disabled2 = false;
            break;  
          }
        }
      }
      }, 1900);
    },
    loadPage: function(page, value) {
      var num = value["inv_num"];
      sessionStorage.setItem("inv", num);
      var num_ip = value["inv_num_ip"];
      sessionStorage.setItem("inv_ip", num_ip);
      var cord_x = value["cord_x"];
      sessionStorage.setItem("X", cord_x);
      var cord_y = value["cord_y"];
      sessionStorage.setItem("Y", cord_y);
      this.$router.push({ name: page });
    }
  }
};
</script>

<style>
.v-footer {
  text-align: start;
}

.footer-list li a {
  color: #fff;
  padding-top: 8px;
  display: inline-block;
  font-size: 14px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  text-decoration: none;
}

li{
  list-style-type: none;
}
</style>