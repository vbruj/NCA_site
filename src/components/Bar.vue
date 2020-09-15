<template>
                <div class="container">
                  <div class="row" >
                    <div class="col-sm-12" >
                      <canvas ref="canvas" width="300px" height="390px" ></canvas>
                    </div>
                  </div>
                </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
export default {
    extends: Pie,
    methods:{
      load(){
        setTimeout(() => { 
          var vosp = Math.abs(((+this.A)/((+this.C)+(+this.A)+(+this.B)))*100).toFixed(2);
          var nevosp = Math.abs(((+this.B)/((+this.C)+(+this.A)+(+this.B)))*100).toFixed(2);
          var pust = Math.abs(((+this.C)/((+this.C)+(+this.A)+(+this.B)))*100).toFixed(2);
          this.renderChart(
            {
              labels: [`Восполнен ${vosp}%`, `Отказ от восполнения ${nevosp}%`, `Не обработано ${pust}%`],
              datasets: [
                {
                  backgroundColor: ['#66FF66','#ff3d3d','#303030'],
                  data: [this.A, this.B, this.C]
                }
              ]
            }, 
            {
              responsive: true, 
              maintainAspectRatio: false,
              cutoutPercentage: 45
            },
          )
        }, 2100)
      }
    },
    props: {  
      A: String,
      B: String,
      C: String
    }
}
</script>