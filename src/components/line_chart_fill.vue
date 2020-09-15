<template>
    <div class="container">
        <v-row :justify="justify">
            <v-col cols="12" sm="5">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="dates"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-combobox
                    v-model="dates"
                    multiple
                    chips
                    small-chips
                    label="Выберите периуд отображения"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-combobox>
                </template>
                <v-date-picker range locale="ru" :first-day-of-week="1" v-model="dates" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            
          </v-row>
            <v-row :justify="justify">
                <div v-if="sendError" >
                    <v-alert type="error" right>{{ message }}</v-alert>
                </div>
            </v-row>
        <div class="row">
            <div class="col-sm-12">
                <canvas ref="canvas" width="300px" height="300px" ></canvas>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data(){
      return{
          sendError: false,
          dates: [],
          justify: 'center',
          BDLogDays: [],
          BDLogWeeks: [],
          Date_line: [],
          Weeks_line: [],
          Count_Activ: [],
          Count_Activ_week: [],
          menu: '',
          auth_geader: {},
          message: '',
          nomer: ''
      }
  },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    created(){
        this.auth_geader = {
            Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
        };
    },
  methods: {
      Br(nomers){
          this.nomer = nomers;
      },
      Vit(nomers){
          this.nomer = nomers;
      },
      Gom(nomers){
          this.nomer = nomers;
      },
      Grod(nomers){
          this.nomer = nomers;
      },
      Gminsk(nomers){
          this.nomer = nomers;
      },
      Minsk(nomers){
          this.nomer = nomers;
      },
      Mog(nomers){
          this.nomer = nomers;
      },
      load(){
          let date1 = '';
          let date2 = '';
        if( this.dates != '' && this.nomer !='' ){
            this.sendError = false;
            if ( this.dates[0]<this.dates[1] ) {
                date1 = this.dates[0];
                date2 = this.dates[1];
            }
            else{
                date1 = this.dates[1];
                date2 = this.dates[0];
            }
            this.BDLogDays = [];
            this.Date_line = [];
            this.Count_Activ = [];
            
            let day = '';
            let mounth = '';
            let yers = '';
            let date = '';



            if(date1 != undefined){
     
                axios
                .post("/activfill", { date1: date1, date2: date2, nomer: this.nomer,headers: this.auth_geader })
                .then(res => {
                    this.BDLogDays = res.data;
                    for (let index = 0; index < this.BDLogDays.length; index++) {
                        day = new Date(this.BDLogDays[index].date).getDate();
                        if (day<10)
                            day = "0" + day;
                        mounth = new Date(this.BDLogDays[index].date).getMonth()+1;
                        if (mounth<10)
                            mounth = "0" + mounth;
                        yers = new Date(this.BDLogDays[index].date).getFullYear();
                        date = day + "." + mounth + "." + yers;
                        this.Date_line.push(date)
                        this.Count_Activ.push(this.BDLogDays[index].count_in_day)
                    }
                })
                .catch(function(error) {
                console.log(error);
                });
                setTimeout(() => { 
                this.renderChart({
                    labels: this.Date_line,
                    datasets: [
                        {
                            label: 'Авторизация на сайт по дням',
                            backgroundColor: '#1976d2',
                            data: this.Count_Activ
                        }
                    ]
                },
                {
                    responsive: true, 
                    maintainAspectRatio: false
                })
            },800);
          
        }
        else {          
            this.message = "Выберите ещё 1 дату";
            this.sendError = true;
            setTimeout(() => (this.sendError = false), 5000);
        }
      } 
      else {
        this.message = "Не выбран временной периуд или область";
        this.sendError = true;
        setTimeout(() => (this.sendError = false), 5000);
      }
      },
      load_weeks(){

        let date1 = '';
        let date2 = '';

        if( this.dates != '' ){
            if ( this.dates[0]<this.dates[1] ) {
                date1 = this.dates[0];
                date2 = this.dates[1];
            }
            else{
                date1 = this.dates[1];
                date2 = this.dates[0];
            }

            this.BDLogWeeks = [];
            this.Weeks_line = [];
            this.Count_Activ_week= [];

            if(date1 != undefined){
            axios
                .post("/activ_weeksfill", { date1: date1, date2: date2, nomer: this.nomer, headers: this.auth_geader })
                .then(res => {
                    this.BDLogWeeks = res.data;
                    for (let index = 0; index < this.BDLogWeeks.length; index++) {
                        this.Weeks_line.push(this.BDLogWeeks[index].weeks)
                        this.Count_Activ_week.push(this.BDLogWeeks[index].count_connect_in_weeks)
                    }
                })
                .catch(function(error) {
                console.log(error);
                });

            setTimeout(() => { 
                for (let index = 0;  index < this.Weeks_line.length; index++) {
                    this.Weeks_line[index] = "Неделя №" + (+index+1);
                }
                this.renderChart({
                    labels: this.Weeks_line,
                    datasets: [
                        {
                            label: 'Авторизация на сайт по неделям',
                            backgroundColor: '#1976d2',
                            data: this.Count_Activ_week
                        }
                    ]
                },
                {
                    responsive: true, 
                    maintainAspectRatio: false
                })
            },800);
        } 
                else {          
            this.message = "Выберите ещё 1 дату";
            this.sendError = true;
            setTimeout(() => (this.sendError = false), 5000);
        }
        } 
        else {
            this.message = "Выберите периуд времени";
            this.sendError = true;
            setTimeout(() => (this.sendError = false), 5000);
        }
      }
  },
  mounted () {
              let date1 = '';
          let date2 = '';
        if( this.dates != '' ){
            this.sendError = false;
            if ( this.dates[0]<this.dates[1] ) {
                date1 = this.dates[0];
                date2 = this.dates[1];
            }
            else{
                date1 = this.dates[1];
                date2 = this.dates[0];
            }
            this.BDLogDays = [];
            this.Date_line = [];
            this.Count_Activ = [];
            
            let day = '';
            let mounth = '';
            let yers = '';
            let date = '';

            if(date1 != undefined){
                axios
                .post("/activ", { date1: date1, date2: date2,headers: this.auth_geader})
                .then(res => {
                    this.BDLogDays = res.data;
                    for (let index = 0; index < this.BDLogDays.length; index++) {
                        day = new Date(this.BDLogDays[index].date).getDate();
                        if (day<10)
                            day = "0" + day;
                        mounth = new Date(this.BDLogDays[index].date).getMonth()+1;
                        if (mounth<10)
                            mounth = "0" + mounth;
                        yers = new Date(this.BDLogDays[index].date).getFullYear();
                        date = day + "." + mounth + "." + yers;
                        this.Date_line.push(date)
                        this.Count_Activ.push(this.BDLogDays[index].count_in_day)
                    }
                })
                .catch(function(error) {
                console.log(error);
                });
                setTimeout(() => { 
                this.renderChart({
                    labels: this.Date_line,
                    datasets: [
                        {
                            label: 'Авторизация на сайт по дням',
                            backgroundColor: '#1976d2',
                            data: this.Count_Activ
                        }
                    ]
                },
                {
                    responsive: true, 
                    maintainAspectRatio: false
                })
            },800);
        }
        else {          
            this.message = "Выберите ещё 1 дату";
            this.sendError = true;
            setTimeout(() => (this.sendError = false), 5000);
        }
      } 
      else {
       
      }
       
  }
}
</script>