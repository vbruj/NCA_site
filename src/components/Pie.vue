<template>
          <v-row :justify="justify">        
            <v-col cols="12" sm="5">


              <v-text-field
               v-model="this.fill"
               solo
               readonly
               style="margin-left: 15px"
             ></v-text-field>
              <v-text-field
               v-model="obrabotano"
               solo
               readonly
               style="margin-left: 15px;"
             ></v-text-field>
             <v-text-field
               v-model="connections"
               solo
               readonly
               style="margin-left: 15px"
             ></v-text-field>
             <v-text-field
               v-model="countusers"
               solo
               readonly
               style="margin-left: 15px"
             ></v-text-field>
             <v-text-field
               v-model="countFilial"
               solo
               readonly
               style="margin-left: 15px"
             ></v-text-field>
             <v-text-field
               value="Среднее время визита: "
               solo
               readonly
               style="margin-left: 15px"
             ></v-text-field>
            </v-col>
            <v-col cols="12" sm="7" centered>
              <v-card  style="margin-right:10px; margin-top: 5px" >
                <div class="container">
                  <div class="row" >
                    <div class="col-sm-12" >
                      <canvas ref="canvas" width="300px" height="390px" ></canvas>
                    </div>
                  </div>
                </div>
              </v-card>  
            </v-col>
                <div v-if="sendError" >
                  <v-alert type="error" right>Вы не выбрали источник или в данном филиале нет объектов!</v-alert>
                </div>
          </v-row>
</template>

<script>
import axios from "axios";
import { Pie } from 'vue-chartjs'
export default {
    extends: Pie,
    data(){
      return{
        auth_geader: {},
        obrabotano: 'Обработано: ',
        countusers: 'Количество человек: ', 
        countFilial: 'Количество филиалов: ',
        connections: 'Количество визитов: ',
        justify: 'center',
        array1: [],
        array2: [],
        array3: [],
        array4: [],
        fill: 'Филиалы:',
        sendError: false,
        Filliali: []
      }
    },
    created(){
      this.auth_geader = {
        Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
      };
    },
    methods:{
      load(nomer, num, name_fill, num2, A, B, C){
   
        if (this.A1 != ''){

          this.array1 = [];
          this.array2 = [];
          this.array3 = [];
          this.array4 = [];
          this.sendError = false;
          this.fill = name_fill;

          setTimeout(() => { 
          axios
          .post("countuser", { nomer: nomer ,headers: this.auth_geader})
          .then(res => {
            this.countusers = res.data.rows[0].count;
            this.countusers = "Пользователей: " + this.countusers;
          })
          .catch(function(error) {
            console.log(error);
          });
        
        if(num == 1){
          axios
          .post("countFilial", 
          {
            name_table: 'sdelka_s_izolir_pomesh_jm',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            this.array1 = [];
            for (let index = 0; index < i; index++) {
              if (res.data.rows[index].nomer_tor%10 == 0)
                this.array1.push(res.data.rows[index].nomer_tor)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

          axios
          .post("countFilial", 
          { 
            name_table: 'object_vvedeni_v_eksplyataciu_od',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            this.array2 = [];
            for (let index = 0; index < i; index++) {
              if ((res.data.rows[index].nomer_tor%10 == 0) )
                this.array2.push(res.data.rows[index].nomer_tor)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

          setTimeout(() => { 
          axios
          .post("countFilial", 
          { 
            name_table: 'object_vvedeni_v_eksplyataciu_ps',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            for (let index = 0; index < i; index++) {
              if (res.data.rows[index].nomer_tor%10 == 0)
                this.array3.push(res.data.rows[index].nomer_tor)
            }
            this.array2 = this.array1.concat(this.array2)
            this.array3 = this.array2.concat(this.array3)
            this.Filliali = Array.from(new Set(this.array3))
            this.countFilial = "Количество филиалов: " + this.Filliali.length;

          })
          .catch(function(error) {
            console.log(error);
          });
          }, 700);
        }
        if( num == 2){
          axios
          .post("countFilial", 
          {
            name_table: 'sdelka_s_izolirovannim_pomejeniem_od',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            this.array1 = [];
            for (let index = 0; index < i; index++) {
              if (res.data.rows[index].nomer_tor%10 == 0)
                this.array1.push(res.data.rows[index].nomer_tor)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

          axios
          .post("countFilial", 
          { 
            name_table: 'sdelka_s_izolirovannim_pomejeniem_ps',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            
            this.array2 = [];
            for (let index = 0; index < i; index++) {

              if ((res.data.rows[index].nomer_tor%10 == 0) )
                this.array2.push(res.data.rows[index].nomer_tor)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

          axios
          .post("countFilial", 
          { 
            name_table: 'sdelka_s_kap_stroeniem_od',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            
            this.array3 = [];
            for (let index = 0; index < i; index++) {

              if ((res.data.rows[index].nomer_tor%10 == 0) )
                this.array3.push(res.data.rows[index].nomer_tor)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

          setTimeout(() => { 
          axios
          .post("countFilial", 
          { 
            name_table: 'sdelka_s_kap_stroeniem_ps',
            nomer: num2 ,
            headers: this.auth_geader
          })
          .then(res => {
            var i = 0;
            for (var key in res.data.rows){
              i = i+1;
            }
            for (let index = 0; index < i; index++) {
              if (res.data.rows[index].nomer_tor%10 == 0)
                this.array4.push(res.data.rows[index].nomer_tor)
            }
            this.array2 = this.array1.concat(this.array2)
            this.array3 = this.array2.concat(this.array3)
            this.array4 = this.array3.concat(this.array4)
            this.Filliali = Array.from(new Set(this.array4))
            this.countFilial = "Количество филиалов: " + this.Filliali.length;

          })
          .catch(function(error) {
            console.log(error);
          });
          }, 700);
        }

          axios
            .post("/countconnectionsfill", {nomer: nomer+'',headers: this.auth_geader})
            .then(res => {
              this.connections = "Количество визитов: " + res.data.rows[0].count;
            })
            .catch(function(error) {
              console.log(error);
            });
        
        var vosp = Math.abs(((+C)/((+A)+(+C)+(+B)))*100).toFixed(2);
        var nevosp = Math.abs(((+B)/((+A)+(+C)+(+B)))*100).toFixed(2);
        var pust = Math.abs(((+A)/((+A)+(+C)+(+B)))*100).toFixed(2);
        this.obrabotano = "Обработано: " + ((+B)+(+C)) + "(" + Math.abs((((+C)+(+B))/((+C)+(+B)+(+A)))*100).toFixed(2) + "%) из " + ((+C)+(+A)+(+B)) + "(100%)";
        this.renderChart(
          {
            labels: [`Восполнен ${vosp}%`, `Отказ от восполнения ${nevosp}%`, `Не обработано ${pust}%`],
            datasets: [
              {
                backgroundColor: ['#66FF66','#ff3d3d','#303030'],
                data: [(+C), (+B), (+A)]
              }
            ]
          }, 
          {
            responsive: true, 
            maintainAspectRatio: false,
            cutoutPercentage: 45
          },
        )}, 500)
        }
        else {
          this.sendError = true;
          setTimeout(() => (this.sendError = false), 5000);
        }    
      },
    }
}
</script>