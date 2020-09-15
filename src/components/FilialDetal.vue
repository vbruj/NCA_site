<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <canvas ref="canvas" width="300px" height="300px" ></canvas>
            </div>
        </div>
                <div v-if="sendError" >
                  <v-alert elevation="2" border="bottom" colored-border type="warning">Вы не выбрали источник!</v-alert>
                </div>
    </div>
</template>

<script>
import axios from "axios";
import { HorizontalBar } from 'vue-chartjs'
export default {
  extends: HorizontalBar,

  methods:{
    load(num, first_num, first_num2, tor_fill, name_fill){

    if ( num != 0 ){
      if ( num == 1){
        this.sendError = false;
        axios
        .post("countStatusFilial", 
        { 
          name_table: 'sdelka_s_izolir_pomesh_jm',
          nomer: first_num ,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("countStatusFilial",        
        { 
          name_table: 'object_vvedeni_v_eksplyataciu_od',
          nomer: first_num,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj2 = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });
  
      axios
        .post("countStatusFilial", 
        { 
          name_table: 'object_vvedeni_v_eksplyataciu_ps',
          nomer: first_num ,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj3 = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
          .post("organizacii_namefill", {
            nomer: first_num2,
            headers: this.auth_geader
          })
          .then(res => {
            this.labels = [];
            this.bd = res.data;
          })
          .catch(function(error) {
            console.log(error);
          });

        setTimeout(() => { 
          for (let index = 0; index < this.countobj.length; index++) {
            
          if (this.countobj[index].nomer_tor == tor_fill){
            if (this.countobj[index].status == "Восполнен"){
              this.A1 = this.countobj[index].count;
              
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B1 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C1 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+10){
            if (this.countobj[index].status == "Восполнен"){
              this.A2 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B2 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C2 = this.countobj[index].count          
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+20){
            if (this.countobj[index].status == "Восполнен"){
              this.A3 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B3 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C3 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+30){
            if (this.countobj[index].status == "Восполнен"){
              this.A4 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B4 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C4 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+40){
            if (this.countobj[index].status == "Восполнен"){
              this.A5 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B5 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C5 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+50){
            if (this.countobj[index].status == "Восполнен"){
              this.A6 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B6 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C6 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+60){
            if (this.countobj[index].status == "Восполнен"){
              this.A7 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B7 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C7 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+70){
            if (this.countobj[index].status == "Восполнен"){
              this.A8 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B8 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C8 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+80){
            if (this.countobj[index].status == "Восполнен"){
              this.A9 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B9 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C9 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+90){
            if (this.countobj[index].status == "Восполнен"){
              this.A10 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B10 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C10 = this.countobj[index].count;
            }
          }

        }
        for (let index1 = 0; index1 < this.countobj2.length; index1++) {
         if (this.countobj2[index1].nomer_tor == tor_fill){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A1_2 += this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B1_2 += this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C1_2 += this.countobj2[index1].count;    
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+10){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A2_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B2_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C2_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+20){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A3_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B3_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C3_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+30){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A4_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B4_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C4_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+40){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A5_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B5_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C5_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+50){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A6_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B6_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C6_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+60){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A7_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B7_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C7_2 = this.countobj2[index1].count;
          }
         }
                  if (this.countobj2[index1].nomer_tor == tor_fill+70){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A8_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B8_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C8_2 = this.countobj2[index1].count;
          }
         }
                  if (this.countobj2[index1].nomer_tor == tor_fill+80){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A9_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B9_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C9_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+90){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A10_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B10_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C10_2 = this.countobj2[index1].count;
          }
         }
        }
        for (let index2 = 0; index2 < this.countobj3.length; index2++) {
         if (this.countobj3[index2].nomer_tor == tor_fill){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A1_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B1_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C1_3 = this.countobj3[index2].count;    
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+10){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A2_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B2_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C2_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+20){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A3_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B3_2 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C3_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+30){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A4_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B4_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C4_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+40){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A5_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B5_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C5_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+50){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A6_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B6_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C6_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+60){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A7_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B7_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C7_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+70){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A8_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B8_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C8_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+80){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A9_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B9_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C9_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+90){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A10_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B10_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C10_3 = this.countobj3[index2].count;
          }
         }
        }

        let nam = ''
        let num = 0;

        if(this.C1 || this.C1_2 || this.C1_3){
          this.A1 = (+this.A1)+(+this.A1_2)+(+this.A1_3);
          this.B1 = (+this.B1)+(+this.B1_2)+(+this.B1_3);
          this.C1 = (+this.C1)+(+this.C1_2)+(+this.C1_3);
          this.data1.push(Math.abs(((+this.C1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          if (this.bd[num].name.split('РУП')[0] == '') { nam = name_fill }
          this.labels.push(nam + ((+this.B1)+(+this.A1)) + "(" + Math.abs((((+this.B1)+(+this.A1))/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2) + "%) из " + ((+this.C1)+(+this.B1)+(+this.A1)) + "(100%)")
          num +=1;
        }

        if(this.C2 || this.C2_2 || this.C2_3){
          this.A2 = (+this.A2)+(+this.A2_2)+(+this.A2_3);
          this.B2 = (+this.B2)+(+this.B2_2)+(+this.B2_3);
          this.C2 = (+this.C2)+(+this.C2_2)+(+this.C2_3);
          this.data1.push(Math.abs(((+this.C2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B2)+(+this.A2)) + "(" + Math.abs((((+this.B2)+(+this.A2))/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2) + "%) из " + ((+this.C2)+(+this.B2)+(+this.A2)) + "(100%)")
          num +=1;
        }

        if(this.C3 || this.C3_2 || this.C3_3){
          this.A3 = (+this.A3)+(+this.A3_2)+(+this.A3_3);
          this.B3 = (+this.B3)+(+this.B3_2)+(+this.B3_3);
          this.C3 = (+this.C3)+(+this.C3_2)+(+this.C3_3);
          this.data1.push(Math.abs(((+this.C3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B3)+(+this.A3)) + "(" + Math.abs((((+this.B3)+(+this.A3))/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2) + "%) из " + ((+this.C3)+(+this.B3)+(+this.A3)) + "(100%)")
          num +=1;
        }

        if(this.C4 || this.C4_2 || this.C4_3){
          this.A4 = (+this.A4)+(+this.A4_2)+(+this.A4_3);
          this.B4 = (+this.B4)+(+this.B4_2)+(+this.B4_3);
          this.C4 = (+this.C4)+(+this.C4_2)+(+this.C4_3);
          this.data1.push(Math.abs(((+this.C4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B4)+(+this.A4)) + "(" + Math.abs((((+this.B4)+(+this.A4))/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2) + "%) из " + ((+this.C4)+(+this.B4)+(+this.A4)) + "(100%)")
          num +=1;
        }

        if(this.C5 || this.C5_2 || this.C5_3){
          this.A5 = (+this.A5)+(+this.A5_2)+(+this.A5_3);
          this.B5 = (+this.B5)+(+this.B5_2)+(+this.B5_3);
          this.C5 = (+this.C5)+(+this.C5_2)+(+this.C5_3);
          this.data1.push(Math.abs(((+this.C5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B5)+(+this.A5)) + "(" + Math.abs((((+this.B5)+(+this.A5))/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2) + "%) из " + ((+this.C5)+(+this.B5)+(+this.A5)) + "(100%)")
          num +=1;
        }
        
        if(this.C6 || this.C6_2 || this.C6_3){
          this.A6 = (+this.A6)+(+this.A6_2)+(+this.A6_3);
          this.B6 = (+this.B6)+(+this.B6_2)+(+this.B6_3);
          this.C6 = (+this.C6)+(+this.C6_2)+(+this.C6_3);
          this.data1.push(Math.abs(((+this.C6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B6)+(+this.A6)) + "(" + Math.abs((((+this.B6)+(+this.A6))/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2) + "%) из " + ((+this.C6)+(+this.B6)+(+this.A6)) + "(100%)")
          num +=1;
        }

        if(this.C7 || this.C7_2 || this.C7_3){  
          this.A7 = (+this.A7)+(+this.A7_2)+(+this.A7_3);
          this.B7 = (+this.B7)+(+this.B7_2)+(+this.B7_3);
          this.C7 = (+this.C7)+(+this.C7_2)+(+this.C7_3);
          this.data1.push(Math.abs(((+this.C7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B7)+(+this.A7)) + "(" + Math.abs((((+this.B7)+(+this.A7))/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2) + "%) из " + ((+this.C7)+(+this.B7)+(+this.A7)) + "(100%)")
          num +=1;
        }

        if(this.C8 || this.C8_2 || this.C8_3){
          this.A8 = (+this.A8)+(+this.A8_2)+(+this.A8_3);
          this.B8 = (+this.B8)+(+this.B8_2)+(+this.B8_3);
          this.C8 = (+this.C8)+(+this.C8_2)+(+this.C8_3);
          this.data1.push(Math.abs(((+this.C8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B8)+(+this.A8)) + "(" + Math.abs((((+this.B8)+(+this.A8))/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2) + "%) из " + ((+this.C8)+(+this.B8)+(+this.A8)) + "(100%)")
          num +=1;
        }

        if(this.C9 || this.C9_2 || this.C9_3){
          this.A9 = (+this.A9)+(+this.A9_2)+(+this.A9_3);
          this.B9 = (+this.B9)+(+this.B9_2)+(+this.B9_3);
          this.C9 = (+this.C9)+(+this.C9_2)+(+this.C9_3);
          this.data1.push(Math.abs(((+this.C9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B9)+(+this.A9)) + "(" + Math.abs((((+this.B9)+(+this.A9))/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2) + "%) из " + ((+this.C9)+(+this.B9)+(+this.A9)) + "(100%)")
          num +=1;
        }

        if(this.C10 || this.C10_2 || this.C10_3){
          this.A10 = (+this.A10)+(+this.A10_2)+(+this.A10_3);
          this.B10 = (+this.B10)+(+this.B10_2)+(+this.B10_3);
          this.C10 = (+this.C10)+(+this.C10_2)+(+this.C10_3);
          this.data1.push(Math.abs(((+this.C10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B10)+(+this.A10)) + "(" + Math.abs((((+this.B10)+(+this.A10))/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2) + "%) из " + ((+this.C10)+(+this.B10)+(+this.A10)) + "(100%)")
        }

        this.paint();
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.labels = [];

      this.A1 = '';
      this.A2 = '';
      this.A3= '';
      this.A4 = '';
      this.A5 = '';
      this.A6 = '';
      this.A7 = '';
      this.A8 = '';
      this.A9 = '';
      this.A10 = '';
      this.A1_2 = '';
      this.A2_2 = '';
      this.A3_2 = '';
      this.A4_2 = '';
      this.A5_2 = '';
      this.A6_2 = '';
      this.A7_2 = '';
      this.A8_2 = '';
      this.A9_2 = '';
      this.A10_2 = '';
      this.A1_3 = '';
      this.A2_3 = '';
      this.A3_3 = '';
      this.A4_3 = '';
      this.A5_3 = '';
      this.A6_3 = '';
      this.A7_3 = '';
      this.A8_3 = '';
      this.A9_3 = '';
      this.A10_3 = '';
      this.B1 = '';
      this.B2 = '';
      this.B3 = '';
      this.B4 = '';
      this.B5 = '';
      this.B6 = '';
      this.B7 = '';
      this.B8 = '';
      this.B9 = '';
      this.B10 = '';
      this.B1_2 = '';
      this.B2_2 = '';
      this.B3_2 = '';
      this.B4_2 = '';
      this.B5_2 = '';
      this.B6_2 = '';
      this.B7_2 = '';
      this.B8_2 = '';
      this.B9_2 = '';
      this.B10_2 = '';
      this.B1_3 = '';
      this.B2_3 = '';
      this.B3_3 = '';
      this.B4_3 = '';
      this.B5_3 = '';
      this.B6_3 = '';
      this.B7_3 = '';
      this.B8_3 = '';
      this.B9_3 = '';
      this.B10_3 = '';
      this.C1 = '';
      this.C2 = '';
      this.C3 = '';
      this.C4 = '';
      this.C5 = '';
      this.C6 = '';
      this.C7 = '';
      this.C8 = '';
      this.C9 = '';
      this.C10 = '';
      this.C1_2 = '';
      this.C2_2 = '';
      this.C3_2 = '';
      this.C4_2 = '';
      this.C5_2 = '';
      this.C6_2 = '';
      this.C7_2 = '';
      this.C8_2 = '';
      this.C9_2 = '';
      this.C10_2 = '';
      this.C1_3 = '';
      this.C2_3 = '';
      this.C3_3 = '';
      this.C4_3 = '';
      this.C5_3 = '';
      this.C6_3 = '';
      this.C7_3 = '';
      this.C8_3 = '';
      this.C9_3 = '';
      this.C10_3 = '';

      }, 1500);
      }

      if ( num == 2) {
        this.sendError = false;
        axios
        .post("countStatusFilial", 
        { 
          name_table: 'sdelka_s_izolirovannim_pomejeniem_od',
          nomer: first_num ,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("countStatusFilial",        
        { 
          name_table: 'sdelka_s_izolirovannim_pomejeniem_ps',
          nomer: first_num,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj2 = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });
  
      axios
        .post("countStatusFilial", 
        { 
          name_table: 'sdelka_s_kap_stroeniem_od',
          nomer: first_num ,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj3 = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
        .post("countStatusFilial", 
        { 
          name_table: 'sdelka_s_kap_stroeniem_ps',
          nomer: first_num ,
          headers: this.auth_geader
        })
        .then(res => {
          this.countobj4 = res.data.rows;
        })
        .catch(function(error) {
          console.log(error);
        });

        axios
          .post("organizacii_namefill", {
            nomer: first_num2,
            headers: this.auth_geader
          })
          .then(res => {
            this.labels = [];
            this.bd = res.data;
          })
          .catch(function(error) {
            console.log(error);
          });

        setTimeout(() => { 
          for (let index = 0; index < this.countobj.length; index++) {
            
          if (this.countobj[index].nomer_tor == tor_fill){
            if (this.countobj[index].status == "Восполнен"){
              this.A1 = this.countobj[index].count;
              
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B1 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C1 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+10){
            if (this.countobj[index].status == "Восполнен"){
              this.A2 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B2 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C2 = this.countobj[index].count          
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+20){
            if (this.countobj[index].status == "Восполнен"){
              this.A3 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B3 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C3 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+30){
            if (this.countobj[index].status == "Восполнен"){
              this.A4 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B4 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C4 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+40){
            if (this.countobj[index].status == "Восполнен"){
              this.A5 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B5 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C5 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+50){
            if (this.countobj[index].status == "Восполнен"){
              this.A6 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B6 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C6 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+60){
            if (this.countobj[index].status == "Восполнен"){
              this.A7 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B7 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C7 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+70){
            if (this.countobj[index].status == "Восполнен"){
              this.A8 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B8 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C8 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+80){
            if (this.countobj[index].status == "Восполнен"){
              this.A9 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B9 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C9 = this.countobj[index].count;
            }
          }

          if (this.countobj[index].nomer_tor == tor_fill+90){
            if (this.countobj[index].status == "Восполнен"){
              this.A10 = this.countobj[index].count;
            } 
            if (this.countobj[index].status == "Отказ от восполнения"){
              this.B10 = this.countobj[index].count;
            }
            if (this.countobj[index].status == ""){
              this.C10 = this.countobj[index].count;
            }
          }

        }
        for (let index1 = 0; index1 < this.countobj2.length; index1++) {
         if (this.countobj2[index1].nomer_tor == tor_fill){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A1_2 += this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B1_2 += this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C1_2 += this.countobj2[index1].count;    
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+10){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A2_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B2_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C2_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+20){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A3_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B3_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C3_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+30){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A4_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B4_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C4_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+40){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A5_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B5_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C5_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+50){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A6_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B6_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C6_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+60){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A7_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B7_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C7_2 = this.countobj2[index1].count;
          }
         }
                  if (this.countobj2[index1].nomer_tor == tor_fill+70){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A8_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B8_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C8_2 = this.countobj2[index1].count;
          }
         }
        if (this.countobj2[index1].nomer_tor == tor_fill+80){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A9_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B9_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C9_2 = this.countobj2[index1].count;
          }
         }
         if (this.countobj2[index1].nomer_tor == tor_fill+90){
          if (this.countobj2[index1].status == "Восполнен"){
            this.A10_2 = this.countobj2[index1].count;
          } 
          if (this.countobj2[index1].status == "Отказ от восполнения"){
            this.B10_2 = this.countobj2[index1].count;
          }
          if (this.countobj2[index1].status == ""){
            this.C10_2 = this.countobj2[index1].count;
          }
         }
        }
        for (let index2 = 0; index2 < this.countobj3.length; index2++) {
         if (this.countobj3[index2].nomer_tor == tor_fill){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A1_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B1_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C1_3 = this.countobj3[index2].count;    
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+10){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A2_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B2_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C2_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+20){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A3_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B3_2 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C3_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+30){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A4_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B4_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C4_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+40){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A5_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B5_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C5_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+50){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A6_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B6_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C6_3 = this.countobj3[index2].count;
          }
         }
         if (this.countobj3[index2].nomer_tor == tor_fill+60){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A7_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B7_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C7_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+70){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A8_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B8_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C8_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+80){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A9_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B9_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C9_3 = this.countobj3[index2].count;
          }
         }
                  if (this.countobj3[index2].nomer_tor == tor_fill+90){
          if (this.countobj3[index2].status == "Восполнен"){
            this.A10_3 = this.countobj3[index2].count;
          } 
          if (this.countobj3[index2].status == "Отказ от восполнения"){
            this.B10_3 = this.countobj3[index2].count;
          }
          if (this.countobj3[index2].status == ""){
            this.C10_3 = this.countobj3[index2].count;
          }
         }
        }
        for (let index3 = 0; index3 < this.countobj3.length; index3++) {
         if (this.countobj4[index3].nomer_tor == tor_fill){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A1_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B1_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C1_4 = this.countobj4[index3].count;    
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+10){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A2_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B2_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C2_4 = this.countobj4[index3].count;
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+20){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A3_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B3_2 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C3_4 = this.countobj4[index3].count;
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+30){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A4_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B4_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C4_4 = this.countobj4[index3].count;
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+40){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A5_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B5_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C5_4 = this.countobj4[index3].count;
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+50){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A6_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B6_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C6_4 = this.countobj4[index3].count;
          }
         }
         if (this.countobj4[index3].nomer_tor == tor_fill+60){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A7_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B7_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C7_4 = this.countobj4[index3].count;
          }
         }
                  if (this.countobj4[index3].nomer_tor == tor_fill+70){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A8_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B8_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C8_4 = this.countobj4[index3].count;
          }
         }
        if (this.countobj4[index3].nomer_tor == tor_fill+80){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A9_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B9_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C9_4 = this.countobj4[index3].count;
          }
         }
                  if (this.countobj4[index3].nomer_tor == tor_fill+90){
          if (this.countobj4[index3].status == "Восполнен"){
            this.A10_4 = this.countobj4[index3].count;
          } 
          if (this.countobj4[index3].status == "Отказ от восполнения"){
            this.B10_4 = this.countobj4[index3].count;
          }
          if (this.countobj4[index3].status == ""){
            this.C10_4 = this.countobj4[index3].count;
          }
         }
        }

        let nam = ''
        let num = 0;

        if(this.C1 || this.C1_2 || this.C1_3 || this.C1_4){
          this.A1 = (+this.A1)+(+this.A1_2)+(+this.A1_3)+(+this.A1_4);
          this.B1 = (+this.B1)+(+this.B1_2)+(+this.B1_3)+(+this.B1_4);
          this.C1 = (+this.C1)+(+this.C1_2)+(+this.C1_3)+(+this.C1_4);
          this.data1.push(Math.abs(((+this.C1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A1)/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2))
          if (this.bd[num].name.split('РУП')[0] == '') { nam = name_fill }
          this.labels.push(nam + ((+this.B1)+(+this.A1)) + "(" + Math.abs((((+this.B1)+(+this.A1))/((+this.A1)+(+this.C1)+(+this.B1)))*100).toFixed(2) + "%) из " + ((+this.C1)+(+this.B1)+(+this.A1)) + "(100%)")
          num +=1;
        }

        if(this.C2 || this.C2_2 || this.C2_3 || this.C2_4){
          this.A2 = (+this.A2)+(+this.A2_2)+(+this.A2_3)+(+this.A2_4);
          this.B2 = (+this.B2)+(+this.B2_2)+(+this.B2_3)+(+this.B2_4);
          this.C2 = (+this.C2)+(+this.C2_2)+(+this.C2_3)+(+this.C2_4);
          this.data1.push(Math.abs(((+this.C2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A2)/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B2)+(+this.A2)) + "(" + Math.abs((((+this.B2)+(+this.A2))/((+this.A2)+(+this.C2)+(+this.B2)))*100).toFixed(2) + "%) из " + ((+this.C2)+(+this.B2)+(+this.A2)) + "(100%)")
          num +=1;
        }

        if(this.C3 || this.C3_2 || this.C3_3 || this.C3_4){
          this.A3 = (+this.A3)+(+this.A3_2)+(+this.A3_3)+(+this.A3_4);
          this.B3 = (+this.B3)+(+this.B3_2)+(+this.B3_3)+(+this.B3_4);
          this.C3 = (+this.C3)+(+this.C3_2)+(+this.C3_3)+(+this.C3_4);
          this.data1.push(Math.abs(((+this.C3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A3)/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B3)+(+this.A3)) + "(" + Math.abs((((+this.B3)+(+this.A3))/((+this.A3)+(+this.C3)+(+this.B3)))*100).toFixed(2) + "%) из " + ((+this.C3)+(+this.B3)+(+this.A3)) + "(100%)")
          num +=1;
        }

        if(this.C4 || this.C4_2 || this.C4_3 || this.C4_4){
          this.A4 = (+this.A4)+(+this.A4_2)+(+this.A4_3)+(+this.A4_4);
          this.B4 = (+this.B4)+(+this.B4_2)+(+this.B4_3)+(+this.B4_4);
          this.C4 = (+this.C4)+(+this.C4_2)+(+this.C4_3)+(+this.C4_4);
          this.data1.push(Math.abs(((+this.C4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A4)/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B4)+(+this.A4)) + "(" + Math.abs((((+this.B4)+(+this.A4))/((+this.A4)+(+this.C4)+(+this.B4)))*100).toFixed(2) + "%) из " + ((+this.C4)+(+this.B4)+(+this.A4)) + "(100%)")
          num +=1;
        }

        if(this.C5 || this.C5_2 || this.C5_3 || this.C5_4){
          this.A5 = (+this.A5)+(+this.A5_2)+(+this.A5_3)+(+this.A5_4);
          this.B5 = (+this.B5)+(+this.B5_2)+(+this.B5_3)+(+this.B5_4);
          this.C5 = (+this.C5)+(+this.C5_2)+(+this.C5_3)+(+this.C5_4);
          this.data1.push(Math.abs(((+this.C5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A5)/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B5)+(+this.A5)) + "(" + Math.abs((((+this.B5)+(+this.A5))/((+this.A5)+(+this.C5)+(+this.B5)))*100).toFixed(2) + "%) из " + ((+this.C5)+(+this.B5)+(+this.A5)) + "(100%)")
          num +=1;
        }
        
        if(this.C6 || this.C6_2 || this.C6_3 || this.C6_4){
          this.A6 = (+this.A6)+(+this.A6_2)+(+this.A6_3)+(+this.A6_4);
          this.B6 = (+this.B6)+(+this.B6_2)+(+this.B6_3)+(+this.B6_4);
          this.C6 = (+this.C6)+(+this.C6_2)+(+this.C6_3)+(+this.C6_4);
          this.data1.push(Math.abs(((+this.C6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A6)/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B6)+(+this.A6)) + "(" + Math.abs((((+this.B6)+(+this.A6))/((+this.A6)+(+this.C6)+(+this.B6)))*100).toFixed(2) + "%) из " + ((+this.C6)+(+this.B6)+(+this.A6)) + "(100%)")
          num +=1;
        }

        if(this.C7 || this.C7_2 || this.C7_3 || this.C7_4){  
          this.A7 = (+this.A7)+(+this.A7_2)+(+this.A7_3)+(+this.A7_4);
          this.B7 = (+this.B7)+(+this.B7_2)+(+this.B7_3)+(+this.B7_4);
          this.C7 = (+this.C7)+(+this.C7_2)+(+this.C7_3)+(+this.C7_4);
          this.data1.push(Math.abs(((+this.C7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A7)/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B7)+(+this.A7)) + "(" + Math.abs((((+this.B7)+(+this.A7))/((+this.A7)+(+this.C7)+(+this.B7)))*100).toFixed(2) + "%) из " + ((+this.C7)+(+this.B7)+(+this.A7)) + "(100%)")
          num +=1;
        }

        if(this.C8 || this.C8_2 || this.C8_3 || this.C8_4){
          this.A8 = (+this.A8)+(+this.A8_2)+(+this.A8_3)+(+this.A8_4);
          this.B8 = (+this.B8)+(+this.B8_2)+(+this.B8_3)+(+this.B8_4);
          this.C8 = (+this.C8)+(+this.C8_2)+(+this.C8_3)+(+this.C8_4);
          this.data1.push(Math.abs(((+this.C8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A8)/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B8)+(+this.A8)) + "(" + Math.abs((((+this.B8)+(+this.A8))/((+this.A8)+(+this.C8)+(+this.B8)))*100).toFixed(2) + "%) из " + ((+this.C8)+(+this.B8)+(+this.A8)) + "(100%)")
          num +=1;
        }

        if(this.C9 || this.C9_2 || this.C9_3 || this.C9_4){
          this.A9 = (+this.A9)+(+this.A9_2)+(+this.A9_3)+(+this.A9_4);
          this.B9 = (+this.B9)+(+this.B9_2)+(+this.B9_3)+(+this.B9_4);
          this.C9 = (+this.C9)+(+this.C9_2)+(+this.C9_3)+(+this.C9_4);
          this.data1.push(Math.abs(((+this.C9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A9)/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B9)+(+this.A9)) + "(" + Math.abs((((+this.B9)+(+this.A9))/((+this.A9)+(+this.C9)+(+this.B9)))*100).toFixed(2) + "%) из " + ((+this.C9)+(+this.B9)+(+this.A9)) + "(100%)")
          num +=1;
        }

        if(this.C10 || this.C10_2 || this.C10_3 || this.C10_4){
          this.A10 = (+this.A10)+(+this.A10_2)+(+this.A10_3)+(+this.A10_4);
          this.B10 = (+this.B10)+(+this.B10_2)+(+this.B10_3)+(+this.B10_4);
          this.C10 = (+this.C10)+(+this.C10_2)+(+this.C10_3)+(+this.C10_4);
          this.data1.push(Math.abs(((+this.C10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          this.data2.push(Math.abs(((+this.B10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          this.data3.push(Math.abs(((+this.A10)/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2))
          if (this.bd[num] == undefined) { nam = 'Без названия ' }
          else {
            nam = (this.bd[num].name.split('РУП')[0]) 
          }
          this.labels.push(nam + ((+this.B10)+(+this.A10)) + "(" + Math.abs((((+this.B10)+(+this.A10))/((+this.A10)+(+this.C10)+(+this.B10)))*100).toFixed(2) + "%) из " + ((+this.C10)+(+this.B10)+(+this.A10)) + "(100%)")
        }

        this.paint();
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.labels = [];

      this.A1 = '';
      this.A2 = '';
      this.A3= '';
      this.A4 = '';
      this.A5 = '';
      this.A6 = '';
      this.A7 = '';
      this.A8 = '';
      this.A9 = '';
      this.A10 = '';
      this.A1_2 = '';
      this.A2_2 = '';
      this.A3_2 = '';
      this.A4_2 = '';
      this.A5_2 = '';
      this.A6_2 = '';
      this.A7_2 = '';
      this.A8_2 = '';
      this.A9_2 = '';
      this.A10_2 = '';
      this.A1_3 = '';
      this.A2_3 = '';
      this.A3_3 = '';
      this.A4_3 = '';
      this.A5_3 = '';
      this.A6_3 = '';
      this.A7_3 = '';
      this.A8_3 = '';
      this.A9_3 = '';
      this.A10_3 = '';
      this.A1_4 = '';
      this.A2_4 = '';
      this.A3_4 = '';
      this.A4_4 = '';
      this.A5_4 = '';
      this.A6_4 = '';
      this.A7_4 = '';
      this.A8_4 = '';
      this.A9_4 = '';
      this.A10_4 = '';
      this.B1 = '';
      this.B2 = '';
      this.B3 = '';
      this.B4 = '';
      this.B5 = '';
      this.B6 = '';
      this.B7 = '';
      this.B8 = '';
      this.B9 = '';
      this.B10 = '';
      this.B1_2 = '';
      this.B2_2 = '';
      this.B3_2 = '';
      this.B4_2 = '';
      this.B5_2 = '';
      this.B6_2 = '';
      this.B7_2 = '';
      this.B8_2 = '';
      this.B9_2 = '';
      this.B10_2 = '';
      this.B1_3 = '';
      this.B2_3 = '';
      this.B3_3 = '';
      this.B4_3 = '';
      this.B5_3 = '';
      this.B6_3 = '';
      this.B7_3 = '';
      this.B8_3 = '';
      this.B9_3 = '';
      this.B10_3 = '';
      this.B1_4 = '';
      this.B2_4 = '';
      this.B3_4 = '';
      this.B4_4 = '';
      this.B5_4 = '';
      this.B6_4 = '';
      this.B7_4 = '';
      this.B8_4 = '';
      this.B9_4 = '';
      this.B10_4 = '';
      this.C1 = '';
      this.C2 = '';
      this.C3 = '';
      this.C4 = '';
      this.C5 = '';
      this.C6 = '';
      this.C7 = '';
      this.C8 = '';
      this.C9 = '';
      this.C10 = '';
      this.C1_2 = '';
      this.C2_2 = '';
      this.C3_2 = '';
      this.C4_2 = '';
      this.C5_2 = '';
      this.C6_2 = '';
      this.C7_2 = '';
      this.C8_2 = '';
      this.C9_2 = '';
      this.C10_2 = '';
      this.C1_3 = '';
      this.C2_3 = '';
      this.C3_3 = '';
      this.C4_3 = '';
      this.C5_3 = '';
      this.C6_3 = '';
      this.C7_3 = '';
      this.C8_3 = '';
      this.C9_3 = '';
      this.C10_3 = '';
      this.C1_4 = '';
      this.C2_4 = '';
      this.C3_4 = '';
      this.C4_4 = '';
      this.C5_4 = '';
      this.C6_4 = '';
      this.C7_4 = '';
      this.C8_4 = '';
      this.C9_4 = '';
      this.C10_4 = '';

      }, 1500);
      }
    }
    else {
      this.sendError = true;
      setTimeout(() => (this.sendError = false), 5000);
    }  
    },
    paint(){
        this.renderChart({
          labels: this.labels ,
          datasets: [
            {
              label: 'Не обработано',
              backgroundColor: '#303030',
              data: this.data1
            },
            {
              label: 'Отказ от восполнения',
              backgroundColor: '#ff3d3d',
              data: this.data2
            },
            {
              label: 'Восполнен',
              backgroundColor: '#87ff8f',
              data: this.data3
            }, 
          ]
        }, 
        {
          responsive: true, 
          maintainAspectRatio: false,
          scales: {
            xAxes: [{   
              stacked: true,
              categoryPercentage: 0.5,
              barPercentage: 1
            }],
            yAxes: [{ 
              stacked: true
            }]
          }
        })
    }
  },
  created(){
    this.auth_geader = {
      Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
    };
  },
  data() {
    return {
      auth_geader: {},
      sendError: false,
      countobj: '',
      countobj2: '',
      countobj3: '',
      countobj4: '',
      data1: [],
      data2: [],
      data3: [],
      labels: [],
      bd: [],
// Жм 

        A1: '',
        B1: '',
        C1: '',

        A1_2: '',
        B1_2: '',
        C1_2: '',

        A1_3: '',
        B1_3: '',
        C1_3: '',

        A1_4: '',
        B1_4: '',
        C1_4: '',

        A2: '',
        B2: '',
        C2: '',

        A2_2: '',
        B2_2: '',
        C2_2: '',

        A2_3: '',
        B2_3: '',
        C2_3: '',

        A2_4: '',
        B2_4: '',
        C2_4: '',

        A3: '',
        B3: '',
        C3: '',

        A3_2: '',
        B3_2: '',
        C3_2: '',

        A3_3: '',
        B3_3: '',
        C3_3: '',

        A3_4: '',
        B3_4: '',
        C3_4: '',

        A4: '',
        B4: '',
        C4: '',

        A4_2: '',
        B4_2: '',
        C4_2: '',

        A4_3: '',
        B4_3: '',
        C4_3: '',

        A4_4: '',
        B4_4: '',
        C4_4: '',

        A5: '',
        B5: '',
        C5: '',

        A5_2: '',
        B5_2: '',
        C5_2: '',

        A5_3: '',
        B5_3: '',
        C5_3: '',

        A5_4: '',
        B5_4: '',
        C5_4: '',

        A6: '',
        B6: '',
        C6: '',

        A6_2: '',
        B6_2: '',
        C6_2: '',

        A6_3: '',
        B6_3: '',
        C6_3: '',

        A6_4: '',
        B6_4: '',
        C6_4: '',

        A7: '',
        B7: '',
        C7: '',

        A7_2: '',
        B7_2: '',
        C7_2: '',

        A7_3: '',
        B7_3: '',
        C7_3: '',

        A7_4: '',
        B7_4: '',
        C7_4: '',

        A8: '',
        B8: '',
        C8: '',

        A8_2: '',
        B8_2: '',
        C8_2: '',

        A8_3: '',
        B8_3: '',
        C8_3: '',

        A8_4: '',
        B8_4: '',
        C8_4: '',

        A9: '',
        B9: '',
        C9: '',

        A9_2: '',
        B9_2: '',
        C9_2: '',

        A9_3: '',
        B9_3: '',
        C9_3: '',

        A9_4: '',
        B9_4: '',
        C9_4: '',

        A10: '',
        B10: '',
        C10: '',

        A10_2: '',
        B10_2: '',
        C10_2: '',

        A10_3: '',
        B10_3: '',
        C10_3: '',

        A10_4: '',
        B10_4: '',
        C10_4: ''
    };
  }
}
</script>