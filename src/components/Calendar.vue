<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }" v-if="outlined_field == 'true'">
      <v-text-field
        v-model="computedd"
        readonly
        outlined
        v-on="on"
        :label="label_prop"
      ></v-text-field>
    </template>
    <template v-slot:activator="{ on }" v-else>
      <v-text-field v-model="computedDateFormatted" readonly v-on="on"></v-text-field>
    </template>

    <v-date-picker :first-day-of-week="1" :max="date2"  v-model="date" locale="ru" no-title scrollable @input="menu1 = false">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Отмена</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date); datasave()">Ок</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    menu1: false,
    menu2: false,
    computedd: '',
    errorMessages: '',
    formHasErrors: true
  }),
  computed: {
    form() {
      return{
        computedd: this.computedd
      }
    },
    computedDateFormatted() {
      if (this.data == '') {return this.formatDate(this.date); } 
      else {
        this.computedd=this.data.split('-').reverse().join(".");
        return data;
      }
    }
  },
  created() {
    setTimeout(() => (
      this.computedd = this.data
    ), 4000);
  },
  methods: {
    datasave(){
      this.$emit('changeDate',{
        data: this.date,
        name: this.label_prop
      })
      console.log(typeof(this.date))
      this.computedd=this.date.split('-').reverse().join(".");
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.$emit("selectedDate", `${day}.${month}.${year}`);
      var dat = `${day}.${month}.${year}`;
      return dat;
    },
    parseDate(date) {
      if (!date) return null; 
      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  props: {  
    outlined_field: String,
    label_prop: String,
    data: String
  }
};
</script>