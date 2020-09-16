<template>
<v-app>
    <v-app-bar
        app
        color="primary"
        dark
        elevate-on-scroll
      > 
      <v-layout>
        <v-flex col-sm-5 col-md-4 col-lg-4 col-xl-4 col-12 mb-3 >
          <v-img src="https://pr.nca.by/img/nca.6a52f026.svg" @click="$router.push('/pages')"  aspect-ratio="4" width="210px" style="margin-top:10px"></v-img>
        </v-flex>
      </v-layout>
      <v-layout  >
        <v-spacer></v-spacer>
      </v-layout>
        <v-toolbar-title>Статистика</v-toolbar-title>
      </v-app-bar>

      <br>
      <br>
      <br>
      <div>
        <h1 align="center">Мониторинг работ по восполнению</h1>
        <h4 align="center">Данные предоставлены по состоянию на {{ datanow }} </h4>
      </div>
      
      <v-layout mt-5 mb-5 >
        <v-col cols="12" sm="12">
        <v-row :justify="justify">
        <v-tabs
          fixed-tabs
          background-color="transparent"
          color="primary"
        >
          <v-tab
          class="font-weight-bold"
          @click="function(){vvedennie(); $refs.chart.load();  $refs.chart1.load();}">
            Введенные
          </v-tab>
          <v-tab
          class="font-weight-bold"
          @click="function(){sdelki();  $refs.chart.load(); $refs.chart1.load();}">
            Сделки
          </v-tab>
        </v-tabs>
        </v-row>
        </v-col>
      </v-layout>

      <v-layout mt-5 style="margin-bottom: -80px" >
      <v-col cols="12" sm="6" >
        <v-card >
          <h3 align="center">Данные по стране</h3>
          <v-row :justify="justify">
            <v-col cols="12" sm="5" >
              <v-text-field
               v-model="obrabotano"
               solo
               readonly
               style="margin: 15px; margin-top: 60px"
             ></v-text-field>
             <v-text-field
               v-model="connections" 
               solo
               readonly
               style="margin: 15px"
             ></v-text-field>
             <v-text-field
               v-model="users"
               solo
               readonly
               style="margin: 15px"
             ></v-text-field>
             <v-text-field
               value="Среднее время визита: "
               solo
               readonly
               style="margin: 15px"
             ></v-text-field>
            </v-col>
            <v-col cols="12" sm="7" centered>
              <v-card  style="margin-right:10px; margin-top:15px" >
                <chart ref="chart" :A = this.AllVospoln :B = this.AllNeVospoln :C = this.AllPust />
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col style="padding-left: 0px" cols="12" sm="6">
          <v-card  style="margin-right:10px; padding: 10px;" >
            <h3 align="center">Данные по филиалам</h3>
            <v-row :justify="justify" v-model="toggle_exclusive">
              <v-btn 
                :value="1" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark color="primary" 
                outlined 
                x-small
                @click="function(){$refs.chart2.load(1, allowed, 'Филлиалы: Бреста', 100, A1, B1, C1); $refs.chart3.load(allowed, 1, '1', 100, 'Брестский филиал '); $refs.chart5.Br('1')}"
              >Брестский</v-btn>
              <v-btn 
                :value="2" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary" 
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(2, allowed, 'Филлиалы: Витебска', 200, A2, B2, C2); $refs.chart3.load(allowed, 2, '2', 200, 'Витебский филиал '); $refs.chart5.Vit('2')}"
              >Витебский</v-btn>
              <v-btn 
                :value="3" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary" 
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(3, allowed, 'Филлиалы: Гомеля', 300, A3, B3, C3); $refs.chart3.load(allowed, 3, '3', 300, 'Гомельский филиал '); $refs.chart5.Gom('3')}"
              >Гомельский</v-btn>
              <v-btn 
                :value="4"
                centered
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary" 
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(4, allowed, 'Филлиалы: Гродно', 400, A4, B4, C4); $refs.chart3.load(allowed, 4, '4', 400, 'Гродненский филиал '); $refs.chart5.Grod('4')}"
              >Гродненский</v-btn>
              <v-btn 
                :value="6" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary"
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(5, allowed, 'Филлиалы: г.Минска', 500, A5, B5, C5); $refs.chart3.load(allowed, 5, '5', 500, 'Минский городской филиал '); $refs.chart5.Gminsk('5')}"
              >г.Минск</v-btn>
              <v-btn 
                :value="5" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary"
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(6, allowed, 'Филлиалы: Минской обл.', 600, A6, B6, C6); $refs.chart3.load(allowed, 6, '6', 600, 'Минский облостной филиал '); $refs.chart5.Minsk('6')}"
              >Минский</v-btn>
              <v-btn 
                :value="7" 
                centered 
                width="150px" 
                style="margin:5px" 
                dark 
                color="primary" 
                outlined 
                x-small 
                @click="function(){$refs.chart2.load(7, allowed, 'Филлиалы: Могилёва', 700, A7, B7, C7); $refs.chart3.load(allowed, 7, '7', 700, 'Могилёвский филиал '); $refs.chart5.Mog('7')}"
              >Могилевский</v-btn>
            </v-row>
            
            <chart2 ref="chart2"/>
          </v-card> 

      </v-col>
    </v-layout>
    
    <v-layout  mb-5 style="margin-top: 80px">
      <v-col style="padding-left: 0px" cols="12" sm="6">
        <v-card   style="margin-left:10px; padding: 20px; " >
          <h4 align="center">Активность</h4>
          <v-row :justify="justify">
            <v-btn @click="function(){$refs.chart4.load()}"  centered width="150px" style="margin:5px" dark color="primary" outlined small>По дням</v-btn>
            <v-btn @click="function(){$refs.chart4.load_weeks()}" centered width="150px" style="margin:5px" dark color="primary" outlined small>По неделям</v-btn>
          </v-row>
          <chart4 ref="chart4"/>
        </v-card>
      </v-col>
      <v-col style="padding-left: 0px" cols="12" sm="6">

        <v-card style="margin-left:10px; padding: 20px; " >
          <h4 align="center">Активность по филиалу</h4>
          <v-row :justify="justify">
            <v-btn @click="function(){$refs.chart5.load()}"  centered width="150px" style="margin:5px" dark color="primary" outlined small>По дням</v-btn>
            <v-btn @click="function(){$refs.chart5.load_weeks()}" centered width="150px" style="margin:5px" dark color="primary" outlined small>По неделям</v-btn>
          </v-row>
          <chart5 ref="chart5"/>
       </v-card>
      </v-col>
    </v-layout>

    <v-layout mt-5 mb-5>
      <v-col style="padding-left: 0px" cols="12" sm="6">
        
      <v-card   style="margin-left:10px; padding: 20px; "  >
        <h4 align="center">Детализация по областям</h4>
        <div>
          <chart1 ref="chart1"

            :A1 = this.A1 :B1 = this.B1 :C1 = this.C1

            :A2 = this.A2 :B2 = this.B2 :C2 = this.C2

            :A3 = this.A3 :B3 = this.B3 :C3 = this.C3

            :A4 = this.A4 :B4 = this.B4 :C4 = this.C4

            :A5 = this.A5 :B5 = this.B5 :C5 = this.C5

            :A6 = this.A6 :B6 = this.B6 :C6 = this.C6

            :A7 = this.A7 :B7 = this.B7 :C7 = this.C7
   
          ></chart1>
        </div>
      </v-card>
      </v-col>
      <v-col style="padding-left: 0px" cols="12" sm="6">
        <v-card   style="margin-left:10px; padding: 20px"  >
              <h4 align="center">Детализация по филиалу</h4>

          <chart3 ref="chart3">

          </chart3>

      
        </v-card>
      </v-col>
    </v-layout>

</v-app>
</template>

<script>
import axios from "axios";
import chart from "@/components/Bar";
import chart1 from "@/components/OblostiDetal";
import chart2 from "@/components/Pie";
import chart3 from "@/components/FilialDetal";
import chart4 from "@/components/line_chart";
import chart5 from "@/components/line_chart_fill";
  export default {
    data(){
      return{ 
        auth_geader: {},
        allowed: 0,
        nomers: '1',
        dates: [],
        menu: false,
        toggle_exclusive: 4,
        users: "",
        connections: "",
        obrabotano: "Обработано: ",

        AllVospoln: '',
        AllNeVospoln: '',
        AllPust: '',

        A1: '',
        B1: '',
        C1: '',

        A2: '',
        B2: '',
        C2: '',

        A3: '',
        B3: '',
        C3: '',

        A4: '',
        B4: '',
        C4: '',

        A5: '',
        B5: '',
        C5: '',

        A6: '',
        B6: '',
        C6: '',

        A7: '',
        B7: '',
        C7: '',

        A1_2: '',
        B1_2: '',
        C1_2: '',

        A2_2: '',
        B2_2: '',
        C2_2: '',

        A3_2: '',
        B3_2: '',
        C3_2: '',

        A4_2: '',
        B4_2: '',
        C4_2: '',

        A5_2: '',
        B5_2: '',
        C5_2: '',

        A6_2: '',
        B6_2: '',
        C6_2: '',

        A7_2: '',
        B7_2: '',
        C7_2: '',

        // Брестская
        AllVospolnJMBr: '',
        AllPustStatJMBr: '',
        AllNeVospolnStatJMBr: '',

        AllVospolnODBr: '',
        AllPustStatODBr: '',
        AllNeVospolnStatODBr: '',

        AllVospolnPSBr: '',
        AllPustStatPSBr: '',
        AllNeVospolnStatPSBr: '',

        AllVospolnODIPBr: '',
        AllPustStatODIPBr: '',
        AllNeVospolnStatODIPBr: '',

        AllVospolnPSIPBr: '',
        AllPustStatPSIPBr: '',
        AllNeVospolnStatPSIPBr: '',

        AllVospolnODKSBr: '',
        AllPustStatODKSBr: '',
        AllNeVospolnStatODKSBr: '',

        AllVospolnPSKSBr: '',
        AllPustStatPSKSBr: '',
        AllNeVospolnStatPSKSBr: '',

        // Витебская
        AllVospolnJMVit: '',
        AllPustStatJMVit: '',
        AllNeVospolnStatJMVit: '',

        AllVospolnODVit: '',
        AllPustStatODVit: '',
        AllNeVospolnStatODVit: '',

        AllVospolnPSVit: '',
        AllPustStatPSVit: '',
        AllNeVospolnStatPSVit: '',

        AllVospolnODIPVit: '',
        AllPustStatODIPVit: '',
        AllNeVospolnStatODIPVit: '',

        AllVospolnPSIPVit: '',
        AllPustStatPSIPVit: '',
        AllNeVospolnStatPSIPVit: '',

        AllVospolnODKSVit: '',
        AllPustStatODKSVit: '',
        AllNeVospolnStatODKSVit: '',

        AllVospolnPSKSVit: '',
        AllPustStatPSKSVit: '',
        AllNeVospolnStatPSKSVit: '',

        // Гомельская
        AllVospolnJMGom: '',
        AllPustStatJMGom: '',
        AllNeVospolnStatJMGom: '',

        AllVospolnODGom: '',
        AllPustStatODGom: '',
        AllNeVospolnStatODGom: '',

        AllVospolnPSGom: '',
        AllPustStatPSGom: '',
        AllNeVospolnStatPSGom: '',

        AllVospolnODIPGom: '',
        AllPustStatODIPGom: '',
        AllNeVospolnStatODIPGom: '',

        AllVospolnPSIPGom: '',
        AllPustStatPSIPGom: '',
        AllNeVospolnStatPSIPGom: '',

        AllVospolnODKSGom: '',
        AllPustStatODKSGom: '',
        AllNeVospolnStatODKSGom: '',

        AllVospolnPSKSGom: '',
        AllPustStatPSKSGom: '',
        AllNeVospolnStatPSKSGom: '',

        // Гродненская
        AllVospolnJMGrod: '',
        AllPustStatJMGrod: '',
        AllNeVospolnStatJMGrod: '',

        AllVospolnODGrod: '',
        AllPustStatODGrod: '',
        AllNeVospolnStatODGrod: '',

        AllVospolnPSGrod: '',
        AllPustStatPSGrod: '',
        AllNeVospolnStatPSGrod: '',

        AllVospolnODIPGrod: '',
        AllPustStatODIPGrod: '',
        AllNeVospolnStatODIPGrod: '',

        AllVospolnPSIPGrod: '',
        AllPustStatPSIPGrod: '',
        AllNeVospolnStatPSIPGrod: '',

        AllVospolnODKSGrod: '',
        AllPustStatODKSGrod: '',
        AllNeVospolnStatODKSGrod: '',

        AllVospolnPSKSGrod: '',
        AllPustStatPSKSGrod: '',
        AllNeVospolnStatPSKSGrod: '',

        // Минская
        AllVospolnJMMin: '',
        AllPustStatJMMin: '',
        AllNeVospolnStatJMMin: '',

        AllVospolnODMin: '',
        AllPustStatODMin: '',
        AllNeVospolnStatODMin: '',

        AllVospolnPSMin: '',
        AllPustStatPSMin: '',
        AllNeVospolnStatPSMin: '',

        AllVospolnODIPMin: '',
        AllPustStatODIPMin: '',
        AllNeVospolnStatODIPMin: '',

        AllVospolnPSIPMin: '',
        AllPustStatPSIPMin: '',
        AllNeVospolnStatPSIPMin: '',

        AllVospolnODKSMin: '',
        AllPustStatODKSMin: '',
        AllNeVospolnStatODKSMin: '',

        AllVospolnPSKSMin: '',
        AllPustStatPSKSMin: '',
        AllNeVospolnStatPSKSMin: '',

        // Могилевская
        AllVospolnJMMog: '',
        AllPustStatJMMog: '',
        AllNeVospolnStatJMMog: '',

        AllVospolnODMog: '',
        AllPustStatODMog: '',
        AllNeVospolnStatODMog: '',

        AllVospolnPSMog: '',
        AllPustStatPSMog: '',
        AllNeVospolnStatPSMog: '',

        AllVospolnODIPMog: '',
        AllPustStatODIPMog: '',
        AllNeVospolnStatODIPMog: '',

        AllVospolnPSIPMog: '',
        AllPustStatPSIPMog: '',
        AllNeVospolnStatPSIPMog: '',

        AllVospolnODKSMog: '',
        AllPustStatODKSMog: '',
        AllNeVospolnStatODKSMog: '',

        AllVospolnPSKSMog: '',
        AllPustStatPSKSMog: '',
        AllNeVospolnStatPSKSMog: '',

        // г.Минск
        AllVospolnJMGmin: '',
        AllPustStatJMGmin: '',
        AllNeVospolnStatJMGmin: '',

        AllVospolnODGmin: '',
        AllPustStatODGmin: '',
        AllNeVospolnStatODGmin: '',

        AllVospolnPSGmin: '',
        AllPustStatPSGmin: '',
        AllNeVospolnStatPSGmin: '',

        AllVospolnODIPGmin: '',
        AllPustStatODIPGmin: '',
        AllNeVospolnStatODIPGmin: '',

        AllVospolnPSIPGmin: '',
        AllPustStatPSIPGmin: '',
        AllNeVospolnStatPSIPGmin: '',

        AllVospolnODKSGmin: '',
        AllPustStatODKSGmin: '',
        AllNeVospolnStatODKSGmin: '',

        AllVospolnPSKSGmin: '',
        AllPustStatPSKSGmin: '',
        AllNeVospolnStatPSKSGmin: '',

        justify: 'center',

        countVospolnStatJM: '',
        countPustStatJM: '',
        countNeVospolnStatJM: '',

        countVospolnStatOD: '',
        countPustStatOD: '',
        countNeVospolnStatOD: '',

        countVospolnStatPS: '',
        countPustStatPS: '',
        countNeVospolnStatPS: '',

        countVospolnStatODIP: '',
        countPustStatODIP: '',
        countNeVospolnStatODIP: '',

        countVospolnStatODKS: '',
        countPustStatODKS: '',
        countNeVospolnStatODKS: '',

        countVospolnStatPSIP: '',
        countPustStatPSIP: '',
        countNeVospolnStatPSIP: '',

        countVospolnStatPSKS: '',
        countPustStatPSKS: '',
        countNeVospolnStatPSKS: '',

        Afilial: '',
        Bfilial: '',
        Cfilial: '',
        
        datanow: new Date().toISOString().substr(0, 10).split("-").reverse().join(".")
      } 
    },
    watch: {
      dates (val) {
        if (val.length > 2) {
          this.$nextTick(() => this.dates.pop())
        }
      }
    },
    components: {
      chart,
      chart1,
      chart2,
      chart3,
      chart4,
      chart5
    },
    methods: {
    vvedennie(){
      this.allowed = 1;
      axios
        .post("/ObjJM",{headers: this.auth_geader})
        .then(res => {
          this.obJM = res.data.rows;
          for (let index = 0; index < this.obJM.length; index++) {
            if (this.obJM[index].status == 'Восполнен') this.countVospolnStatJM = this.obJM[index].jm
            if (this.obJM[index].status == '') this.countPustStatJM = this.obJM[index].jm;
            if (this.obJM[index].status == 'Отказ от восполнения') this.countNeVospolnStatJM = this.obJM[index].jm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjOD", {headers: this.auth_geader})
        .then(res => {
          this.obOD = res.data.rows;
          for (let index = 0; index < this.obOD.length; index++) {
            if (this.obOD[index].status == 'Восполнен') this.countVospolnStatOD = this.obOD[index].od
            if (this.obOD[index].status == '') this.countPustStatOD = this.obOD[index].od
            if (this.obOD[index].status == 'Отказ от восполнения')this.countNeVospolnStatOD = this.obOD[index].od
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPS", {headers: this.auth_geader})
        .then(res => {
          this.obPS = res.data.rows;
          for (let index = 0; index < this.obPS.length; index++) {
            if (this.obPS[index].status == 'Восполнен') this.countVospolnStatPS = this.obPS[index].ps
            if (this.obPS[index].status == '') this.countPustStatPS = this.obPS[index].ps
            if (this.obPS[index].status == 'Отказ от восполнения') this.countNeVospolnStatPS = this.obPS[index].ps
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      
      axios
        .post("/ObjJMFil" , { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 1 , headers: this.auth_geader}) // ЖМ Брест
        .then(res => {
          this.obJMBr = res.data.rows;
          for (let index = 0; index < this.obJMBr.length; index++) {
            if (this.obJMBr[index].status == 'Восполнен') this.AllVospolnJMBr = this.obJMBr[index].jmm
            if (this.obJMBr[index].status == '') this.AllPustStatJMBr = this.obJMBr[index].jmm
            if (this.obJMBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMBr = this.obJMBr[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 1 , headers: this.auth_geader}) 
        .then(res => {
          this.obODBr = res.data.rows;
          for (let index = 0; index < this.obODBr.length; index++) {
            if (this.obODBr[index].status == 'Восполнен') this.AllVospolnODBr = this.obODBr[index].odd
            if (this.obODBr[index].status == '') this.AllPustStatODBr = this.obODBr[index].odd
            if (this.obODBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODBr = this.obODBr[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 1 , headers: this.auth_geader}) 
        .then(res => {
          this.obPSBr = res.data.rows;
          for (let index = 0; index < this.obPSBr.length; index++) {
            if (this.obPSBr[index].status == 'Восполнен') this.AllVospolnPSBr = this.obPSBr[index].pss
            if (this.obPSBr[index].status == '') this.AllPustStatPSBr = this.obPSBr[index].pss
            if (this.obPSBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSBr = this.obPSBr[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 2 , headers: this.auth_geader}) // ЖМ Витебск
        .then(res => {
          this.obJMVit = res.data.rows;
          for (let index = 0; index < this.obJMVit.length; index++) {
            if (this.obJMVit[index].status == 'Восполнен') this.AllVospolnJMVit = this.obJMVit[index].jmm
            if (this.obJMVit[index].status == '') this.AllPustStatJMVit = this.obJMVit[index].jmm
            if (this.obJMVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMVit = this.obJMVit[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 2 , headers: this.auth_geader}) //  ОД Витебск
        .then(res => {
          this.obODVit = res.data.rows;
          for (let index = 0; index < this.obODVit.length; index++) {
            if (this.obODVit[index].status == 'Восполнен') this.AllVospolnODVit = this.obODVit[index].odd
            if (this.obODVit[index].status == '') this.AllPustStatODVit = this.obODVit[index].odd
            if (this.obODVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODVit = this.obODVit[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 2 , headers: this.auth_geader}) // ПС Витебск
        .then(res => {
          this.obPSVit = res.data.rows;
          for (let index = 0; index < this.obPSVit.length; index++) {
            if (this.obPSVit[index].status == 'Восполнен') this.AllVospolnPSVit = this.obPSVit[index].pss
            if (this.obPSVit[index].status == '') this.AllPustStatPSVit = this.obPSVit[index].pss
            if (this.obPSVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSVit = this.obPSVit[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 3 , headers: this.auth_geader}) // ЖМ Гомель
        .then(res => {
          this.obJMGom = res.data.rows;
          for (let index = 0; index < this.obJMGom.length; index++) {
            if (this.obJMGom[index].status == 'Восполнен') this.AllVospolnJMGom = this.obJMGom[index].jmm
            if (this.obJMGom[index].status == '') this.AllPustStatJMGom = this.obJMGom[index].jmm
            if (this.obJMGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMGom = this.obJMGom[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 3 , headers: this.auth_geader}) //  ОД Гомель
        .then(res => {
          this.obODGom = res.data.rows;
          for (let index = 0; index < this.obODGom.length; index++) {
            if (this.obODGom[index].status == 'Восполнен') this.AllVospolnODGom = this.obODGom[index].odd
            if (this.obODGom[index].status == '') this.AllPustStatODGom = this.obODGom[index].odd
            if (this.obODGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODGom = this.obODGom[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      
      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 3 , headers: this.auth_geader}) // ПС Гомель
        .then(res => {
          this.obPSGom = res.data.rows;
          for (let index = 0; index < this.obPSGom.length; index++) {
            if (this.obPSGom[index].status == 'Восполнен') this.AllVospolnPSGom = this.obPSGom[index].pss
            if (this.obPSGom[index].status == '') this.AllPustStatPSGom = this.obPSGom[index].pss
            if (this.obPSGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSGom = this.obPSGom[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 4 , headers: this.auth_geader}) // ЖМ Гродно
        .then(res => {
          this.obJMGrod = res.data.rows;
          for (let index = 0; index < this.obJMGrod.length; index++) {
            if (this.obJMGrod[index].status == 'Восполнен') this.AllVospolnJMGrod = this.obJMGrod[index].jmm
            if (this.obJMGrod[index].status == '') this.AllPustStatJMGrod = this.obJMGrod[index].jmm
            if (this.obJMGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMGrod = this.obJMGrod[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 4 , headers: this.auth_geader}) //  ОД Гродно
        .then(res => {
          this.obODGrod = res.data.rows;
          for (let index = 0; index < this.obODGrod.length; index++) {
            if (this.obODGrod[index].status == 'Восполнен') this.AllVospolnODGrod = this.obODGrod[index].odd
            if (this.obODGrod[index].status == '') this.AllPustStatODGrod = this.obODGrod[index].odd
            if (this.obODGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODGrod = this.obODGrod[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 4 , headers: this.auth_geader}) // ПС Гродно
        .then(res => {
          this.obPSGrod = res.data.rows;
          for (let index = 0; index < this.obPSGrod.length; index++) {
            if (this.obPSGrod[index].status == 'Восполнен') this.AllVospolnPSGrod = this.obPSGrod[index].pss
            if (this.obPSGrod[index].status == '') this.AllPustStatPSGrod = this.obPSGrod[index].pss
            if (this.obPSGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSGrod = this.obPSGrod[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 5 , headers: this.auth_geader}) // ЖМ Минск
        .then(res => {
          this.obJMMin = res.data.rows;
          for (let index = 0; index < this.obJMMin.length; index++) {
            if (this.obJMMin[index].status == 'Восполнен') this.AllVospolnJMMin = this.obJMMin[index].jmm
            if (this.obJMMin[index].status == '') this.AllPustStatJMMin = this.obJMMin[index].jmm
            if (this.obJMMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMMin = this.obJMMin[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 5 , headers: this.auth_geader}) //  ОД Минск
        .then(res => {
          this.obODMin = res.data.rows;
          for (let index = 0; index < this.obODMin.length; index++) {
            if (this.obODMin[index].status == 'Восполнен') this.AllVospolnODMin = this.obODMin[index].odd
            if (this.obODMin[index].status == '') this.AllPustStatODMin = this.obODMin[index].odd
            if (this.obODMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODMin = this.obODMin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 5 , headers: this.auth_geader}) // ПС Минск
        .then(res => {
          this.obPSMin = res.data.rows;
          for (let index = 0; index < this.obPSMin.length; index++) {
            if (this.obPSMin[index].status == 'Восполнен') this.AllVospolnPSMin = this.obPSMin[index].pss
            if (this.obPSMin[index].status == '') this.AllPustStatPSMin = this.obPSMin[index].pss
            if (this.obPSMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSMin = this.obPSMin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 7 , headers: this.auth_geader}) // ЖМ Могилев
        .then(res => {
          this.obJMMog = res.data.rows;
          for (let index = 0; index < this.obJMMog.length; index++) {
            if (this.obJMMog[index].status == 'Восполнен') this.AllVospolnJMMog = this.obJMMog[index].jmm
            if (this.obJMMog[index].status == '') this.AllPustStatJMMog = this.obJMMog[index].jmm
            if (this.obJMMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMMog = this.obJMMog[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 7 , headers: this.auth_geader }) //  ОД Могилев
        .then(res => {
          this.obODMog = res.data.rows;
          for (let index = 0; index < this.obODMog.length; index++) {
            if (this.obODMog[index].status == 'Восполнен') this.AllVospolnODMog = this.obODMog[index].odd
            if (this.obODMog[index].status == '') this.AllPustStatODMog = this.obODMog[index].odd
            if (this.obODMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODMog = this.obODMog[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 7 , headers: this.auth_geader}) // ПС Могилев
        .then(res => {
          this.obPSMog = res.data.rows;
          for (let index = 0; index < this.obPSMog.length; index++) {
            if (this.obPSMog[index].status == 'Восполнен') this.AllVospolnPSMog = this.obPSMog[index].pss
            if (this.obPSMog[index].status == '') this.AllPustStatPSMog = this.obPSMog[index].pss
            if (this.obPSMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSMog = this.obPSMog[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjJMFil", { name_table: 'sdelka_s_izolir_pomesh_jm', nomer: 6 , headers: this.auth_geader}) // ЖМ г. Минск
        .then(res => {
          this.obJMGmin = res.data.rows;
          for (let index = 0; index < this.obJMGmin.length; index++) {
            if (this.obJMGmin[index].status == 'Восполнен') this.AllVospolnJMGmin = this.obJMGmin[index].jmm
            if (this.obJMGmin[index].status == '') this.AllPustStatJMGmin = this.obJMGmin[index].jmm
            if (this.obJMGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatJMGmin = this.obJMGmin[index].jmm
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'object_vvedeni_v_eksplyataciu_od', nomer: 6 , headers: this.auth_geader}) //  ОД г. Минск
        .then(res => {
          this.obODGmin = res.data.rows;
          for (let index = 0; index < this.obODGmin.length; index++) {
            if (this.obODGmin[index].status == 'Восполнен') this.AllVospolnODGmin = this.obODGmin[index].odd
            if (this.obODGmin[index].status == '') this.AllPustStatODGmin = this.obODGmin[index].odd
            if (this.obODGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODGmin = this.obODGmin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'object_vvedeni_v_eksplyataciu_ps', nomer: 7 , headers: this.auth_geader}) // ПС г. Минск
        .then(res => {
          this.obPSGmin = res.data.rows;
          for (let index = 0; index < this.obPSGmin.length; index++) {
            if (this.obPSGmin[index].status == 'Восполнен') this.AllVospolnPSGmin = this.obPSGmin[index].pss
            if (this.obPSGmin[index].status == '') this.AllPustStatPSGmin = this.obPSGmin[index].pss
            if (this.obPSGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSGmin = this.obPSGmin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

        setTimeout(() => { 
          this.A1 = (+this.AllPustStatJMBr)+(+this.AllPustStatODBr)+(+this.AllPustStatPSBr) + '';
          this.B1 = (+this.AllNeVospolnStatJMBr)+(+this.AllNeVospolnStatODBr)+(+this.AllNeVospolnStatPSBr) + '';
          this.C1 = (+this.AllVospolnJMBr)+(+this.AllVospolnODBr)+(+this.AllVospolnPSBr) + '';

          this.A2 = (+this.AllPustStatJMVit)+(+this.AllPustStatODVit)+(+this.AllPustStatPSVit) + '';
          this.B2 = (+this.AllNeVospolnStatJMVit)+(+this.AllNeVospolnStatODVit)+(+this.AllNeVospolnStatPSVit) + '';
          this.C2 = (+this.AllVospolnJMVit)+(+this.AllVospolnODVit)+(+this.AllVospolnPSVit) + '';

          this.A3 = (+this.AllPustStatJMGom)+(+this.AllPustStatODGom)+(+this.AllPustStatPSGom) + '';
          this.B3 = (+this.AllNeVospolnStatJMGom)+(+this.AllNeVospolnStatODGom)+(+this.AllNeVospolnStatPSGom) + '';
          this.C3 = (+this.AllVospolnJMGom)+(+this.AllVospolnODGom)+(+this.AllVospolnPSGom) + '';

          this.A4 = (+this.AllPustStatJMGrod)+(+this.AllPustStatODGrod)+(+this.AllPustStatPSGrod) + '';
          this.B4 = (+this.AllNeVospolnStatJMGrod)+(+this.AllNeVospolnStatODGrod)+(+this.AllNeVospolnStatPSGrod) + '';
          this.C4 = (+this.AllVospolnJMGrod)+(+this.AllVospolnODGrod)+(+this.AllVospolnPSGrod) + '';

          this.A5 = (+this.AllPustStatJMMin)+(+this.AllPustStatODMin)+(+this.AllPustStatPSMin) + '';
          this.B5 = (+this.AllNeVospolnStatJMMin)+(+this.AllNeVospolnStatODMin)+(+this.AllNeVospolnStatPSMin) + '';
          this.C5 = (+this.AllVospolnJMMin)+(+this.AllVospolnODMin)+(+this.AllVospolnPSMin) + '';

          this.A6 = (+this.AllPustStatJMGmin)+(+this.AllPustStatODGmin)+(+this.AllPustStatPSGmin) + '';
          this.B6 = (+this.AllNeVospolnStatJMGmin)+(+this.AllNeVospolnStatODGmin)+(+this.AllNeVospolnStatPSGmin) + '';
          this.C6 = (+this.AllVospolnJMGmin)+(+this.AllVospolnODGmin)+(+this.AllVospolnPSGmin) + '';

          this.A7 = (+this.AllPustStatJMMog)+(+this.AllPustStatODMog)+(+this.AllPustStatPSMog) + '';
          this.B7 = (+this.AllNeVospolnStatJMMog)+(+this.AllNeVospolnStatODMog)+(+this.AllNeVospolnStatPSMog) + '';
          this.C7 = (+this.AllVospolnJMMog)+(+this.AllVospolnODMog)+(+this.AllVospolnPSMog) + '';
        
        
        this.AllVospoln = ((+this.countVospolnStatJM)+(+this.countVospolnStatOD)+(+this.countVospolnStatPS) + '');
        this.AllNeVospoln = ((+this.countNeVospolnStatJM)+(+this.countNeVospolnStatOD)+(+this.countNeVospolnStatPS) + '');
        this.AllPust = ((+this.countPustStatJM)+(+this.countPustStatOD)+(+this.countPustStatPS) + '');
        this.obrabotano = "Обработано: " + ((+this.AllVospoln)+(+this.AllNeVospoln)) + "(" +Math.abs((((+this.AllVospoln)+(+this.AllNeVospoln))/((+this.AllVospoln)+(+this.AllNeVospoln)+(+this.AllPust)))*100).toFixed(2) + "%) из " + ((+this.AllVospoln)+(+this.AllNeVospoln)+(+this.AllPust))+"(100%)";
       }, 1500)
      },

      sdelki(){
        this.allowed = 2;

      axios
        .post("/ObjODIP",{headers: this.auth_geader})
        .then(res => {
          this.obODip = res.data.rows;
          for (let index = 0; index < this.obODip.length; index++) {
            if (this.obODip[index].status == 'Восполнен') this.countVospolnStatODIP = this.obODip[index].odip
            if (this.obODip[index].status == '') this.countPustStatODIP = this.obODip[index].odip;
            if (this.obODip[index].status == 'Отказ от восполнения') this.countNeVospolnStatODIP = this.obODip[index].odip

          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODKS",{headers: this.auth_geader})
        .then(res => {
          this.obODks = res.data.rows;
          for (let index = 0; index < this.obODks.length; index++) {
            if (this.obODks[index].status == 'Восполнен') this.countVospolnStatODKS = this.obODks[index].odks
            if (this.obODks[index].status == '') this.countPustStatODKS = this.obODks[index].odks
            if (this.obODks[index].status == 'Отказ от восполнения')this.countNeVospolnStatODKS = this.obODks[index].odks
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSIP",{headers: this.auth_geader})
        .then(res => {
          this.obPSip = res.data.rows;
          for (let index = 0; index < this.obPSip.length; index++) {
            if (this.obPSip[index].status == 'Восполнен') this.countVospolnStatPSIP = this.obPSip[index].psip
            if (this.obPSip[index].status == '') this.countPustStatPSIP = this.obPSip[index].psip
            if (this.obPSip[index].status == 'Отказ от восполнения') this.countNeVospolnStatPSIP = this.obPSip[index].psip
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      
      axios
        .post("/ObjPSKS",{headers: this.auth_geader})
        .then(res => {
          this.obPSks = res.data.rows;
          for (let index = 0; index < this.obPSks.length; index++) {
            if (this.obPSks[index].status == 'Восполнен') this.countVospolnStatPSKS = this.obPSks[index].psks
            if (this.obPSks[index].status == '') this.countPustStatPSKS = this.obPSks[index].psks
            if (this.obPSks[index].status == 'Отказ от восполнения') this.countNeVospolnStatPSKS = this.obPSks[index].psks
          }
        })
        .catch(function(error) {
          console.log(error);
        });


      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 1,headers: this.auth_geader}) 
        .then(res => {
          this.obODipBr = res.data.rows;
          for (let index = 0; index < this.obODipBr.length; index++) {
            if (this.obODipBr[index].status == 'Восполнен') this.AllVospolnODIPBr = this.obODipBr[index].odd
            if (this.obODipBr[index].status == '') this.AllPustStatODIPBr = this.obODipBr[index].odd
            if (this.obODipBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPBr = this.obODipBr[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 1 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksBr = res.data.rows;
          for (let index = 0; index < this.obODksBr.length; index++) {
            if (this.obODksBr[index].status == 'Восполнен') this.AllVospolnODKSBr = this.obODksBr[index].odd
            if (this.obODksBr[index].status == '') this.AllPustStatODKSBr = this.obODksBr[index].odd
            if (this.obODksBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSBr = this.obODksBr[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 1 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipBr = res.data.rows;
          for (let index = 0; index < this.obPSipBr.length; index++) {
            if (this.obPSipBr[index].status == 'Восполнен') this.AllVospolnPSIPBr = this.obPSipBr[index].pss
            if (this.obPSipBr[index].status == '') this.AllPustStatPSIPBr = this.obPSipBr[index].pss
            if (this.obPSipBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPBr = this.obPSipBr[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 1 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksBr = res.data.rows;
          for (let index = 0; index < this.obPSksBr.length; index++) {
            if (this.obPSksBr[index].status == 'Восполнен') this.AllVospolnPSKSBr = this.obPSksBr[index].pss
            if (this.obPSksBr[index].status == '') this.AllPustStatPSKSBr = this.obPSksBr[index].pss
            if (this.obPSksBr[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSBr = this.obPSksBr[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

        

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 2 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipVit = res.data.rows;
          for (let index = 0; index < this.obODipVit.length; index++) {
            if (this.obODipVit[index].status == 'Восполнен') this.AllVospolnODIPVit = this.obODipVit[index].odd
            if (this.obODipVit[index].status == '') this.AllPustStatODIPVit = this.obODipVit[index].odd
            if (this.obODipVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPVit = this.obODipVit[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 2 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksVit = res.data.rows;
          for (let index = 0; index < this.obODksVit.length; index++) {
            if (this.obODksVit[index].status == 'Восполнен') this.AllVospolnODKSVit = this.obODksVit[index].odd
            if (this.obODksVit[index].status == '') this.AllPustStatODKSVit = this.obODksVit[index].odd
            if (this.obODksVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSVit = this.obODksVit[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 2 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipVit = res.data.rows;
          for (let index = 0; index < this.obPSipVit.length; index++) {
            if (this.obPSipVit[index].status == 'Восполнен') this.AllVospolnPSIPVit = this.obPSipVit[index].pss
            if (this.obPSipVit[index].status == '') this.AllPustStatPSIPVit = this.obPSipVit[index].pss
            if (this.obPSipVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPVit = this.obPSipVit[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 2 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksVit = res.data.rows;
          for (let index = 0; index < this.obPSksVit.length; index++) {
            if (this.obPSksVit[index].status == 'Восполнен') this.AllVospolnPSKSVit = this.obPSksVit[index].pss
            if (this.obPSksVit[index].status == '') this.AllPustStatPSKSVit = this.obPSksVit[index].pss
            if (this.obPSksVit[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSVit = this.obPSksVit[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 3 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipGom = res.data.rows;
          for (let index = 0; index < this.obODipGom.length; index++) {
            if (this.obODipGom[index].status == 'Восполнен') this.AllVospolnODIPGom = this.obODipGom[index].odd
            if (this.obODipGom[index].status == '') this.AllPustStatODIPGom = this.obODipGom[index].odd
            if (this.obODipGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPGom = this.obODipGom[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 3 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksGom = res.data.rows;
          for (let index = 0; index < this.obODksGom.length; index++) {
            if (this.obODksGom[index].status == 'Восполнен') this.AllVospolnODKSGom = this.obODksGom[index].odd
            if (this.obODksGom[index].status == '') this.AllPustStatODKSGom = this.obODksGom[index].odd
            if (this.obODksGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSGom = this.obODksGom[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 3 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipGom = res.data.rows;
          for (let index = 0; index < this.obPSipGom.length; index++) {
            if (this.obPSipGom[index].status == 'Восполнен') this.AllVospolnPSIPGom = this.obPSipGom[index].pss
            if (this.obPSipGom[index].status == '') this.AllPustStatPSIPGom = this.obPSipGom[index].pss
            if (this.obPSipGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPGom = this.obPSipGom[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 3 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksGom = res.data.rows;
          for (let index = 0; index < this.obPSksGom.length; index++) {
            if (this.obPSksGom[index].status == 'Восполнен') this.AllVospolnPSKSGom = this.obPSksGom[index].pss
            if (this.obPSksGom[index].status == '') this.AllPustStatPSKSGom = this.obPSksGom[index].pss
            if (this.obPSksGom[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSGom = this.obPSksGom[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 4 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipGrod = res.data.rows;
          for (let index = 0; index < this.obODipGrod.length; index++) {
            if (this.obODipGrod[index].status == 'Восполнен') this.AllVospolnODIPGrod = this.obODipGrod[index].odd
            if (this.obODipGrod[index].status == '') this.AllPustStatODIPGrod = this.obODipGrod[index].odd
            if (this.obODipGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPGrod = this.obODipGrod[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 4 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksGrod = res.data.rows;
          for (let index = 0; index < this.obODksGrod.length; index++) {
            if (this.obODksGrod[index].status == 'Восполнен') this.AllVospolnODKSGrod = this.obODksGrod[index].odd
            if (this.obODksGrod[index].status == '') this.AllPustStatODKSGrod = this.obODksGrod[index].odd
            if (this.obODksGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSGrod = this.obODksGrod[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 4 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipGrod = res.data.rows;
          for (let index = 0; index < this.obPSipGrod.length; index++) {
            if (this.obPSipGrod[index].status == 'Восполнен') this.AllVospolnPSIPGrod = this.obPSipGrod[index].pss
            if (this.obPSipGrod[index].status == '') this.AllPustStatPSIPGrod = this.obPSipGrod[index].pss
            if (this.obPSipGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPGrod = this.obPSipGrod[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 4 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksGrod = res.data.rows;
          for (let index = 0; index < this.obPSksGrod.length; index++) {
            if (this.obPSksGrod[index].status == 'Восполнен') this.AllVospolnPSKSGrod = this.obPSksGrod[index].pss
            if (this.obPSksGrod[index].status == '') this.AllPustStatPSKSGrod = this.obPSksGrod[index].pss
            if (this.obPSksGrod[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSGrod = this.obPSksGrod[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 5 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipMin = res.data.rows;
          for (let index = 0; index < this.obODipMin.length; index++) {
            if (this.obODipMin[index].status == 'Восполнен') this.AllVospolnODIPMin = this.obODipMin[index].odd
            if (this.obODipMin[index].status == '') this.AllPustStatODIPMin = this.obODipMin[index].odd
            if (this.obODipMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPMin = this.obODipMin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 5 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksMin = res.data.rows;
          for (let index = 0; index < this.obODksMin.length; index++) {
            if (this.obODksMin[index].status == 'Восполнен') this.AllVospolnODKSMin = this.obODksMin[index].odd
            if (this.obODksMin[index].status == '') this.AllPustStatODKSMin = this.obODksMin[index].odd
            if (this.obODksMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSMin = this.obODksMin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 5 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipMin = res.data.rows;
          for (let index = 0; index < this.obPSipMin.length; index++) {
            if (this.obPSipMin[index].status == 'Восполнен') this.AllVospolnPSIPMin = this.obPSipMin[index].pss
            if (this.obPSipMin[index].status == '') this.AllPustStatPSIPMin = this.obPSipMin[index].pss
            if (this.obPSipMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPMin = this.obPSipMin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 5 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksMin = res.data.rows;
          for (let index = 0; index < this.obPSksMin.length; index++) {
            if (this.obPSksMin[index].status == 'Восполнен') this.AllVospolnPSKSMin = this.obPSksMin[index].pss
            if (this.obPSksMin[index].status == '') this.AllPustStatPSKSMin = this.obPSksMin[index].pss
            if (this.obPSksMin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSMin = this.obPSksMin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

            axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 6 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipGmin = res.data.rows;
          for (let index = 0; index < this.obODipGmin.length; index++) {
            if (this.obODipGmin[index].status == 'Восполнен') this.AllVospolnODIPGmin = this.obODipGmin[index].odd
            if (this.obODipGmin[index].status == '') this.AllPustStatODIPGmin = this.obODipGmin[index].odd
            if (this.obODipGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPGmin = this.obODipGmin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 6 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODksGmin = res.data.rows;
          for (let index = 0; index < this.obODksGmin.length; index++) {
            if (this.obODksGmin[index].status == 'Восполнен') this.AllVospolnODKSGmin = this.obODksGmin[index].odd
            if (this.obODksGmin[index].status == '') this.AllPustStatODKSGmin = this.obODksGmin[index].odd
            if (this.obODksGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSGmin = this.obODksGmin[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 6 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipGmin = res.data.rows;
          for (let index = 0; index < this.obPSipGmin.length; index++) {
            if (this.obPSipGmin[index].status == 'Восполнен') this.AllVospolnPSIPGmin = this.obPSipGmin[index].pss
            if (this.obPSipGmin[index].status == '') this.AllPustStatPSIPGmin = this.obPSipGmin[index].pss
            if (this.obPSipGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPGmin = this.obPSipGmin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 6 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksGmin = res.data.rows;
          for (let index = 0; index < this.obPSksGmin.length; index++) {
            if (this.obPSksGmin[index].status == 'Восполнен') this.AllVospolnPSKSGmin = this.obPSksGmin[index].pss
            if (this.obPSksGmin[index].status == '') this.AllPustStatPSKSGmin = this.obPSksGmin[index].pss
            if (this.obPSksGmin[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSGmin = this.obPSksGmin[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

            axios
        .post("/ObjODFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_od', nomer: 7 ,headers: this.auth_geader}) 
        .then(res => {
          this.obODipMog = res.data.rows;
          for (let index = 0; index < this.obODipMog.length; index++) {
            if (this.obODipMog[index].status == 'Восполнен') this.AllVospolnODIPMog = this.obODipMog[index].odd
            if (this.obODipMog[index].status == '') this.AllPustStatODIPMog = this.obODipMog[index].odd
            if (this.obODipMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODIPMog = this.obODipMog[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjODFil", { name_table: 'sdelka_s_kap_stroeniem_od', nomer: 7,headers: this.auth_geader }) 
        .then(res => {
          this.obODksMog = res.data.rows;
          for (let index = 0; index < this.obODksMog.length; index++) {
            if (this.obODksMog[index].status == 'Восполнен') this.AllVospolnODKSMog = this.obODksMog[index].odd
            if (this.obODksMog[index].status == '') this.AllPustStatODKSMog = this.obODksMog[index].odd
            if (this.obODksMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatODKSMog = this.obODksMog[index].odd
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', nomer: 7 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSipMog = res.data.rows;
          for (let index = 0; index < this.obPSipMog.length; index++) {
            if (this.obPSipMog[index].status == 'Восполнен') this.AllVospolnPSIPMog = this.obPSipMog[index].pss
            if (this.obPSipMog[index].status == '') this.AllPustStatPSIPMog = this.obPSipMog[index].pss
            if (this.obPSipMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSIPMog = this.obPSipMog[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/ObjPSFil", { name_table: 'sdelka_s_kap_stroeniem_ps', nomer: 7 ,headers: this.auth_geader}) 
        .then(res => {
          this.obPSksMog = res.data.rows;
          for (let index = 0; index < this.obPSksMog.length; index++) {
            if (this.obPSksMog[index].status == 'Восполнен') this.AllVospolnPSKSMog = this.obPSksMog[index].pss
            if (this.obPSksMog[index].status == '') this.AllPustStatPSKSMog = this.obPSksMog[index].pss
            if (this.obPSksMog[index].status == 'Отказ от восполнения') this.AllNeVospolnStatPSKSMog = this.obPSksMog[index].pss
          }
        })
        .catch(function(error) {
          console.log(error);
        });

        setTimeout(() => { 
          this.A1 = (+this.AllPustStatODIPBr)+(+this.AllPustStatPSIPBr)+(+this.AllPustStatODKSBr)+(+this.AllPustStatPSKSBr);
          this.B1 = (+this.AllNeVospolnStatODIPBr)+(+this.AllNeVospolnStatPSIPBr)+(+this.AllNeVospolnStatODKSBr)+(+this.AllNeVospolnStatPSKSBr);
          this.C1 = (+this.AllVospolnODIPBr)+(+this.AllVospolnPSIPBr)+(+this.AllVospolnODKSBr)+(+this.AllVospolnPSKSBr);
          this.A1 = (this.A1 + '')
          this.B1 = (this.B1 + '')
          this.C1 = (this.C1 + '')

          this.A2 = (+this.AllPustStatODIPVit)+(+this.AllPustStatPSIPVit)+(+this.AllPustStatODKSVit)+(+this.AllPustStatPSKSVit);
          this.B2 = (+this.AllNeVospolnStatODIPVit)+(+this.AllNeVospolnStatPSIPVit)+(+this.AllNeVospolnStatODKSVit)+(+this.AllNeVospolnStatPSKSVit);
          this.C2 = (+this.AllVospolnODIPVit)+(+this.AllVospolnPSIPVit)+(+this.AllVospolnODKSVit)+(+this.AllVospolnPSKSVit);
          this.A2 = (this.A2 + '')
          this.B2 = (this.B2 + '')
          this.C2 = (this.C2 + '')

          this.A3 = (+this.AllPustStatODIPGom)+(+this.AllPustStatPSIPGom)+(+this.AllPustStatODKSGom)+(+this.AllPustStatPSKSGom);
          this.B3 = (+this.AllNeVospolnStatODIPGom)+(+this.AllNeVospolnStatPSIPGom)+(+this.AllNeVospolnStatODKSGom)+(+this.AllNeVospolnStatPSKSGom);
          this.C3 = (+this.AllVospolnODIPGom)+(+this.AllVospolnPSIPGom)+(+this.AllVospolnODKSGom)+(+this.AllVospolnPSKSGom);
          this.A3 = (this.A3 + '')
          this.B3 = (this.B3 + '')
          this.C3 = (this.C3 + '')

          this.A4 = (+this.AllPustStatODIPGrod)+(+this.AllPustStatPSIPGrod)+(+this.AllPustStatODKSGrod)+(+this.AllPustStatPSKSGrod);
          this.B4 = (+this.AllNeVospolnStatODIPGrod)+(+this.AllNeVospolnStatPSIPGrod)+(+this.AllNeVospolnStatODKSGrod)+(+this.AllNeVospolnStatPSKSGrod);
          this.C4 = (+this.AllVospolnODIPGrod)+(+this.AllVospolnPSIPGrod)+(+this.AllVospolnODKSGrod)+(+this.AllVospolnPSKSGrod);
          this.A4 = (this.A4 + '')
          this.B4 = (this.B4 + '')
          this.C4 = (this.C4 + '')

          this.A5 = (+this.AllPustStatODIPMin)+(+this.AllPustStatPSIPMin)+(+this.AllPustStatODKSMin)+(+this.AllPustStatPSKSMin);
          this.B5 = (+this.AllNeVospolnStatODIPMin)+(+this.AllNeVospolnStatPSIPMin)+(+this.AllNeVospolnStatODKSMin)+(+this.AllNeVospolnStatPSKSMin);
          this.C5 = (+this.AllVospolnODIPMin)+(+this.AllVospolnPSIPMin)+(+this.AllVospolnODKSMin)+(+this.AllVospolnPSKSMin);
          this.A5 = (this.A5 + '')
          this.B5 = (this.B5 + '')
          this.C5 = (this.C5 + '')

          this.A6 = (+this.AllPustStatODIPGmin)+(+this.AllPustStatPSIPGmin)+(+this.AllPustStatODKSGmin)+(+this.AllPustStatPSKSGmin);
          this.B6 = (+this.AllNeVospolnStatODIPGmin)+(+this.AllNeVospolnStatPSIPGmin)+(+this.AllNeVospolnStatODKSGmin)+(+this.AllNeVospolnStatPSKSGmin);
          this.C6 = (+this.AllVospolnODIPGmin)+(+this.AllVospolnPSIPGmin)+(+this.AllVospolnODKSGmin)+(+this.AllVospolnPSKSGmin);
          this.A6 = (this.A6 + '')
          this.B6 = (this.B6 + '')
          this.C6 = (this.C6 + '')

          this.A7 = (+this.AllPustStatODIPMog)+(+this.AllPustStatPSIPMog)+(+this.AllPustStatODKSMog)+(+this.AllPustStatPSKSMog);
          this.B7 = (+this.AllNeVospolnStatODIPMog)+(+this.AllNeVospolnStatPSIPMog)+(+this.AllNeVospolnStatODKSMog)+(+this.AllNeVospolnStatPSKSMog);
          this.C7 = (+this.AllVospolnODIPMog)+(+this.AllVospolnPSIPMog)+(+this.AllVospolnODKSMog)+(+this.AllVospolnPSKSMog);
          this.A7 = (this.A7 + '')
          this.B7 = (this.B7 + '')
          this.C7 = (this.C7 + '')

          this.AllVospoln = 0;
          this.AllNeVospoln = 0;
          this.AllPust = 0;
          this.AllVospoln = ((+this.countVospolnStatODKS)+(+this.countVospolnStatODIP)+(+this.countVospolnStatPSIP)+(+this.countVospolnStatPSKS) + '');
          this.AllNeVospoln = ((+this.countNeVospolnStatODKS)+(+this.countNeVospolnStatODIP)+(+this.countNeVospolnStatPSIP)+(+this.countNeVospolnStatPSKS) + '');
          this.AllPust = ((+this.countPustStatODKS)+(+this.countPustStatODIP)+(+this.countPustStatPSIP)+(+this.countPustStatPSKS) + '');
          this.obrabotano = "Обработано: " + ((+this.AllVospoln)+(+this.AllNeVospoln)) + "(" +Math.abs((((+this.AllVospoln)+
            (+this.AllNeVospoln))/((+this.AllVospoln)+(+this.AllNeVospoln)+(+this.AllPust)))*100).toFixed(2) + "%) из " + ((+this.AllVospoln)+(+this.AllNeVospoln)+(+this.AllPust))+"(100%)";
        }, 1500)
      }
    },
    created(){
    this.auth_geader = {
       Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
    };

    if ((sessionStorage.getItem("nca_role") != 'Администратор') && (sessionStorage.getItem("nca_role") != 'Куратор'))
    {
      this.$router.push('/');
    }

      axios
        .post("/countUsers", {headers: this.auth_geader})
        .then(res => {
          this.users = "Пользователей: " + res.data.rows[0].count;
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("/countconnections", {headers: this.auth_geader})
        .then(res => {

          this.connections = "Количество визитов: " + res.data.rows[0].count;
        })
        .catch(function(error) {
          console.log(error);
        });
        
    }
  }
</script>
