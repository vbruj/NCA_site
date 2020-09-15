<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <canvas ref="canvas" width="300px" height="300px" ></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
    extends: HorizontalBar,
    methods: {
      load(){
        setTimeout(() => { 

        this.renderChart({
          labels: ['Брестская: обработать ' + ((+this.B1)+(+this.C1)) + "(" + Math.abs((((+this.B1)+(+this.C1))/((+this.C1)+(+this.A1)+(+this.B1)))*100).toFixed(2) + "%) из " + ((+this.A1)+(+this.B1)+(+this.C1)) + "(100%)", 
                   'Витебская: обработать ' + ((+this.B2)+(+this.C2)) + "(" + Math.abs((((+this.B2)+(+this.C2))/((+this.C2)+(+this.A2)+(+this.B2)))*100).toFixed(2) + "%) из " + ((+this.A2)+(+this.B2)+(+this.C2)) + "(100%)", 
                   'Гомельская: обработать ' + ((+this.B3)+(+this.C3)) + "(" + Math.abs((((+this.B3)+(+this.C3))/((+this.C3)+(+this.A3)+(+this.B3)))*100).toFixed(2) + "%) из " + ((+this.A3)+(+this.B3)+(+this.C3)) + "(100%)", 
                   'Гродненская: обработать ' + ((+this.B4)+(+this.C4)) + "(" + Math.abs((((+this.B4)+(+this.C4))/((+this.C4)+(+this.A4)+(+this.B4)))*100).toFixed(2) + "%) из " + ((+this.A4)+(+this.B4)+(+this.C4)) + "(100%)", 
                   'г.Минск: обработать ' + ((+this.B5)+(+this.C5)) + "(" + Math.abs((((+this.B5)+(+this.C5))/((+this.C5)+(+this.A5)+(+this.B5)))*100).toFixed(2) + "%) из " + ((+this.A5)+(+this.B5)+(+this.C5)) + "(100%)",
                   'Минская: обработать ' + ((+this.B6)+(+this.C6)) + "(" + Math.abs((((+this.B6)+(+this.C6))/((+this.C6)+(+this.A6)+(+this.B6)))*100).toFixed(2) + "%) из " + ((+this.A6)+(+this.B6)+(+this.C6)) + "(100%)",
                   'Могилевская: обработать '  + ((+this.B7)+(+this.C7)) + "(" + Math.abs((((+this.B7)+(+this.C7))/((+this.C7)+(+this.A7)+(+this.B7)))*100).toFixed(2) + "%) из " + ((+this.A7)+(+this.B7)+(+this.C7)) + "(100%)"  
          ],
          datasets: [
            {
              label: 'Не обработано',
              backgroundColor: '#303030',
              data: [Math.abs(((+this.A1)/((+this.C1)+(+this.A1)+(+this.B1)))*100).toFixed(2),
                     Math.abs(((+this.A2)/((+this.C2)+(+this.A2)+(+this.B2)))*100).toFixed(2), 
                     Math.abs(((+this.A3)/((+this.C3)+(+this.A3)+(+this.B3)))*100).toFixed(2), 
                     Math.abs(((+this.A4)/((+this.C4)+(+this.A4)+(+this.B4)))*100).toFixed(2),  
                     Math.abs(((+this.A5)/((+this.C5)+(+this.A5)+(+this.B5)))*100).toFixed(2),  
                     Math.abs(((+this.A6)/((+this.C6)+(+this.A6)+(+this.B6)))*100).toFixed(2),
                     Math.abs(((+this.A7)/((+this.C7)+(+this.A7)+(+this.B7)))*100).toFixed(2)      
              ]
            },
            {
              label: 'Отказ от восполнения',
              backgroundColor: '#ff3d3d',
              data: [Math.abs(((+this.B1)/((+this.C1)+(+this.A1)+(+this.B1)))*100).toFixed(2),
                     Math.abs(((+this.B2)/((+this.C2)+(+this.A2)+(+this.B2)))*100).toFixed(2), 
                     Math.abs(((+this.B3)/((+this.C3)+(+this.A3)+(+this.B3)))*100).toFixed(2), 
                     Math.abs(((+this.B4)/((+this.C4)+(+this.A4)+(+this.B4)))*100).toFixed(2),  
                     Math.abs(((+this.B5)/((+this.C5)+(+this.A5)+(+this.B5)))*100).toFixed(2), 
                     Math.abs(((+this.B6)/((+this.C6)+(+this.A6)+(+this.B6)))*100).toFixed(2), 
                     Math.abs(((+this.B7)/((+this.C7)+(+this.A7)+(+this.B7)))*100).toFixed(2)
              ]
            },
            {
              label: 'Восполнен',
              backgroundColor: '#87ff8f',
              data: [Math.abs(((+this.C1)/((+this.C1)+(+this.A1)+(+this.B1)))*100).toFixed(2),
                     Math.abs(((+this.C2)/((+this.C2)+(+this.A2)+(+this.B2)))*100).toFixed(2), 
                     Math.abs(((+this.C3)/((+this.C3)+(+this.A3)+(+this.B3)))*100).toFixed(2), 
                     Math.abs(((+this.C4)/((+this.C4)+(+this.A4)+(+this.B4)))*100).toFixed(2),  
                     Math.abs(((+this.C5)/((+this.C5)+(+this.A5)+(+this.B5)))*100).toFixed(2),  
                     Math.abs(((+this.C6)/((+this.C6)+(+this.A6)+(+this.B6)))*100).toFixed(2),
                     Math.abs(((+this.C7)/((+this.C7)+(+this.A7)+(+this.B7)))*100).toFixed(2)    
              ]
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
      }, 2000)
      }
    },
    mounted () {
      //this.load();
    },
    props: {  
        A1: String,
        B1: String,
        C1: String,

        A2: String,
        B2: String,
        C2: String,

        A3: String,
        B3: String,
        C3: String,

        A4: String,
        B4: String,
        C4: String,

        A5: String,
        B5: String,
        C5: String,

        A6: String,
        B6: String,
        C6: String,

        A7: String,
        B7: String,
        C7: String
    }
}
</script>