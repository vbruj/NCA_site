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
          <v-img src="https://pr.nca.by/img/nca.6a52f026.svg" @click="$router.push('/pages')"  aspect-ratio="4" width="210px" ></v-img>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-spacer></v-spacer>
      </v-layout>
      <v-toolbar-title > ОБЪЕКТ, ВВЕДЕННЫЙ В ЭКСПЛУАТАЦИЮ</v-toolbar-title>
    </v-app-bar>

    <br>
    <br>

      <v-container pa-2>
        <v-layout row wrap align-baseline justify-space-around>
            <v-flex col-sm-5 col-md-5 col-lg-5 col-12>
              <v-select
                :items="status"
                label="Укажите статус восполнения"
                background-color="white"
                single-line
                outlined
                v-model="data2['status']"
                ref="status"
                :rules="[() => !!data2['status'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
          </v-flex>
          <v-flex col-sm-5 col-md-5 col-lg-5 col-12>
            <v-text-field
              placeholder="Заполните в случае отказа от восполнения"
              :clearable="clearable"
              background-color="white"
              single-line
              outlined
              @change="check_space('status2')"
              v-model="data2['status2']"
              ref="status2"
              :rules="[() => !!data2['status2'] || 'Это поле обязательно к заполнению']"
              :error-messages="errorMessages"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>


    <v-container >
      <v-container pa-2>
               <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">ОБЩИЕ СВЕДЕНИЯ</span>
                  </v-card-title>

        <v-card outlined style="padding: 15px 15px 15px 15px ;">
          <v-container pa-2>
            <v-layout row wrap>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      label="Инвентарный номер:"
                      disabled
                      placeholder=" "
                      value
                      v-model="data['inv_num']"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                     <v-textarea
                      id="adress"
                      label="Адрес:"
                      v-model="data['address']"
                      disabled
                      placeholder=" "
                      auto-grow
                      row-height="15"
                      :clearable="clearable" 
                      rows="1"
                    ></v-textarea>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-card outlined style=" height:450px">
                  <div id="map" style="width: 100%; height: 448px"></div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        <v-divider></v-divider>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Назначение:</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
                    <v-textarea
                      v-model="data['naznachenie']"
                      id="naznachenie"
                      disabled
                      outlined
                      placeholder=" "
                      auto-grow
                      row-height="15"
                      rows="1"
                    ></v-textarea>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-input></v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Наименование:</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-textarea
                v-model="data['naimenovanie']" 
                disabled  
                outlined
                placeholder=" "
                auto-grow
                row-height="15"
                rows="1"
              ></v-textarea>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                @change="check_space('naimenovanie2')"
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                outlined
                placeholder="  "
                value
                v-model="data2['naimenovanie2']"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <span>Дата составления техпаспорта: <span style="color: red; font-size: 125%" v-bind="attrs" v-on="on">*</span> </span>
               </template>
            <span>Это поле обязательно к заполнению</span>
            </v-tooltip>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <Calendar 
                outlined_field="true" 
                label_prop="Дата составления техпаспорта" 
                @changeDate = 'changeDate'
                :data = this.newData3
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-card-title
          class="headline blue darken-2 lighten-1"
          dark
          primary-title
        >
        <span class="white--text">ОБЩИЕ ХАРАКТЕРИСТИКИ</span>
        </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;" >
          <v-layout row wrap align-baseline>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Год постройки</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined disabled v-model="data['god_postr']"></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select
                :items="yers"
                v-model="data2['god_postr2']"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value v-model="data['obsh_ploshad']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['obsh_ploshad2']"
                @keyup="check_simvol(data2['obsh_ploshad2'], 'obsh_ploshad2')"
                @change="check_simvol(data2['obsh_ploshad2'], 'obsh_ploshad2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить в случае несоответствия"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Количество этажей</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined disabled v-model="data['kol_etazh']"></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select
                :items="colvo_etazh"
                v-model="data2['kol_etazh2']"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Объем, куб.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['objem']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['objem2']"
                @keyup="check_simvol(data2['objem2'], 'objem2')"
                @change="check_simvol(data2['objem2'], 'objem2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="objem2"
                :rules="[() => !!data2['objem2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Количество квартир</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['kol_kvartir']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['kol_kvartir2']"
                @keyup="check_simvol(data2['kol_kvartir2'], 'kol_kvartir2')"
                @change="check_simvol(data2['kol_kvartir2'], 'kol_kvartir2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="kol_kvartir2"
                :rules="[() => !!data2['kol_kvartir2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span  >Общая площадь жилых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['obzh_ploshad_zhilih_pomesh']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model=" data2['obzh_ploshad_zhilih_pomesh2']"
                @keyup="check_simvol(data2['obzh_ploshad_zhilih_pomesh2'], 'obzh_ploshad_zhilih_pomesh2')"
                @change="check_simvol(data2['obzh_ploshad_zhilih_pomesh2'], 'obzh_ploshad_zhilih_pomesh2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="obzh_ploshad_zhilih_pomesh2"
                :rules="[() => !!data2['obzh_ploshad_zhilih_pomesh2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Площадь земельного участка, га</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['ploshad_zemel']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['ploshad_zemel2']"
                @keyup="check_simvol(data2['ploshad_zemel2'], 'ploshad_zemel2')"
                @change="check_simvol(data2['ploshad_zemel2'], 'ploshad_zemel2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="ploshad_zemel2"
                :rules="[() => !!data2['ploshad_zemel2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь нежилых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['obzh_ploshad_nezhilih_pomesh']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['obzh_ploshad_nezhilih_pomesh2']"
                @keyup="check_simvol(data2['obzh_ploshad_nezhilih_pomesh2'], 'obzh_ploshad_nezhilih_pomesh2')"
                @change="check_simvol(data2['obzh_ploshad_nezhilih_pomesh2'], 'obzh_ploshad_nezhilih_pomesh2')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="obzh_ploshad_nezhilih_pomesh2"
                :rules="[() => !!data2['obzh_ploshad_nezhilih_pomesh2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap fill-height align-baseline>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Площадь застройки, кв.м</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined disabled v-model="data['ploshad_zastr']"></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field
                v-model="data2['ploshad_zastr2']"
                @keyup="check_simvol(data2['ploshad_zastr2'], 'ploshad_zastr2')"
                @change="check_simvol(data2['ploshad_zastr2'], 'ploshad_zastr2')"
                outlined
                :clearable="clearable"
                label="Заполнить"
                ref="ploshad_zastr2"
                :rules="[() => !!data2['ploshad_zastr2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                placeholder=" "
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12;"  style=" padding-top: 0;">
              <v-tooltip right >
                <template v-slot:activator="{ on, attrs }">
                  <span>Дата обследования при технической инвентаризации <span style="color: red; font-size: 125%" v-bind="attrs" v-on="on">*</span> </span>
                </template>
                <span>Это поле обязательно к заполнению</span>
              </v-tooltip>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <Calendar
                outlined_field="true"
                label_prop="Дата обследования"
                @changeDate = 'changeDate'
                :data = this.newData2
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-card-title
          class="headline blue darken-2 lighten-1"
          dark
          primary-title
        >
        <span class="white--text">ПЛОЩАДНЫЕ ХАРАКТЕРИСТИКИ</span>
        </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px;">
          <v-layout row wrap align-center>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12"></v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Количество квартир</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Общая площадь жилых помещений (квартир), кв.м</span>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>1-комнатных</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['one_room']"
                @keyup="check_simvol(data2['one_room'], 'one_room')"
                @change="check_simvol(data2['one_room'], 'one_room')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="one_room"
                :rules="[() => !!data2['one_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['one_room_obsh_ploshad']"
                @keyup="check_simvol(data2['one_room_obsh_ploshad'], 'one_room_obsh_ploshad')"
                @change="check_simvol(data2['one_room_obsh_ploshad'], 'one_room_obsh_ploshad')"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="one_room_obsh_ploshad"
                :rules="[() => !!data2['one_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>2-комнатных</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['two_room']"
                @keyup="check_simvol(data2['two_room'], 'two_room')"
                @change="check_simvol(data2['two_room'], 'two_room')"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="two_room"
                :rules="[() => !!data2['two_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['two_room_obsh_ploshad']"
                @keyup="check_simvol(data2['two_room_obsh_ploshad'], 'two_room_obsh_ploshad')"
                @change="check_simvol(data2['two_room_obsh_ploshad'], 'two_room_obsh_ploshad')"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="two_room_obsh_ploshad"
                :rules="[() => !!data2['two_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>3-комнатных</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['three_room']"
                @keyup="check_simvol(data2['three_room'], 'three_room')"
                @change="check_simvol(data2['three_room'], 'three_room')"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="three_room"
                :rules="[() => !!data2['three_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['three_room_obsh_ploshad']"
                @keyup="check_simvol(data2['three_room_obsh_ploshad'], 'three_room_obsh_ploshad')"
                @change="check_simvol(data2['three_room_obsh_ploshad'], 'three_room_obsh_ploshad')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="three_room_obsh_ploshad"
                :rules="[() => !!data2['three_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>4-комнатных</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['four_room']"
                @keyup="check_simvol(data2['four_room'], 'four_room')"
                @change="check_simvol(data2['four_room'], 'four_room')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="four_room"
                :rules="[() => !!data2['four_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['four_room_obsh_ploshad']"
                @keyup="check_simvol(data2['four_room_obsh_ploshad'], 'four_room_obsh_ploshad')"
                @change="check_simvol(data2['four_room_obsh_ploshad'], 'four_room_obsh_ploshad')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="four_room_obsh_ploshad"
                :rules="[() => !!data2['four_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>5-комнатных</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['five_room']"
                @keyup="check_simvol(data2['five_room'], 'five_room')"
                @change="check_simvol(data2['five_room'], 'five_room')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="five_room"
                :rules="[() => !!data2['five_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['five_room_obsh_ploshad']"
                @keyup="check_simvol(data2['five_room_obsh_ploshad'], 'five_room_obsh_ploshad')"
                @change="check_simvol(data2['five_room_obsh_ploshad'], 'five_room_obsh_ploshad')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="five_room_obsh_ploshad"
                :rules="[() => !!data2['five_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Более 5 комнат</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['bolshe_five_room']"
                @keyup="check_simvol(data2['bolshe_five_room'], 'bolshe_five_room')"
                @change="check_simvol(data2['bolshe_five_room'], 'bolshe_five_room')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="bolshe_five_room"
                :rules="[() => !!data2['bolshe_five_room'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                v-model="data2['bolshe_five_room_obsh_ploshad']"
                @keyup="check_simvol(data2['bolshe_five_room_obsh_ploshad'], 'bolshe_five_room_obsh_ploshad')"
                @change="check_simvol(data2['bolshe_five_room_obsh_ploshad'], 'bolshe_five_room_obsh_ploshad')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="bolshe_five_room_obsh_ploshad"
                :rules="[() => !!data2['bolshe_five_room_obsh_ploshad'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12" ml-3 mb-3>
            <h2>Общая площадь:</h2>
          </v-flex>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Административных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['admin_pomesh']"
                @keyup="check_simvol(data2['admin_pomesh'], 'admin_pomesh')"
                @change="check_simvol(data2['admin_pomesh'], 'admin_pomesh')"
                placeholder=" "
                outlined
                :clearable="clearable"
                label="Заполнить"
                ref="admin_pomesh"
                :rules="[() => !!data2['admin_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Торговых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['torg_pomesh']"
                @keyup="check_simvol(data2['torg_pomesh'], 'torg_pomesh')"
                @change="check_simvol(data2['torg_pomesh'], 'torg_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="torg_pomesh"
                :rules="[() => !!data2['torg_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Коммунально-бытовых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['commynal_pomesh']"
                @keyup="check_simvol(data2['commynal_pomesh'], 'commynal_pomesh')"
                @change="check_simvol(data2['commynal_pomesh'], 'commynal_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="commynal_pomesh"
                :rules="[() => !!data2['commynal_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Производственных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['proizv_pomesh']"
                @keyup="check_simvol(data2['proizv_pomesh'], 'proizv_pomesh')"
                @change="check_simvol(data2['proizv_pomesh'], 'proizv_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="proizv_pomesh"
                :rules="[() => !!data2['proizv_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Складских помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['sklad_pomesh']"
                @keyup="check_simvol(data2['sklad_pomesh'], 'sklad_pomesh')"
                @change="check_simvol(data2['sklad_pomesh'], 'sklad_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="sklad_pomesh"
                :rules="[() => !!data2['sklad_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений транспортного назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['transport_pomesh']"
                @keyup="check_simvol(data2['transport_pomesh'], 'transport_pomesh')"
                @change="check_simvol(data2['transport_pomesh'], 'transport_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="transport_pomesh"
                :rules="[() => !!data2['transport_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-start>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательных помещений (лестничные клетки, коридоры, тамбуры, колясочные, щитовые и тп.), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['vspomogatel_pomesh']"
                @keyup="check_simvol(data2['vspomogatel_pomesh'], 'vspomogatel_pomesh')"
                @change="check_simvol(data2['vspomogatel_pomesh'], 'vspomogatel_pomesh')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="vspomogatel_pomesh"
                :rules="[() => !!data2['vspomogatel_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Иных помещений (помещения, не вошедшие в вышеуказанные категории), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                v-model="data2['drygih_pomesh']" 
                @keyup="check_simvol(data2['drygih_pomesh'], 'drygih_pomesh')"
                @change="check_simvol(data2['drygih_pomesh'], 'drygih_pomesh')"
                outlined 
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="drygih_pomesh"
                :rules="[() => !!data2['drygih_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                label="Доп. помещения(заполнить)"
                outlined
                @change="check_space('dopolnitelnoe_pomeschenie')"
                :clearable="clearable"
                placeholder=" "
                v-model="data2['dopolnitelnoe_pomeschenie']"
                ref="dopolnitelnoe_pomeschenie"
                :rules="[() => !!data2['dopolnitelnoe_pomeschenie'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['ploschad_dopolnitelnih_pomeschenii']"
                @keyup="check_simvol(data2['ploschad_dopolnitelnih_pomeschenii'], 'ploschad_dopolnitelnih_pomeschenii')"
                @change="check_simvol(data2['ploschad_dopolnitelnih_pomeschenii'], 'ploschad_dopolnitelnih_pomeschenii')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="ploschad_dopolnitelnih_pomeschenii"
                :rules="[() => !!data2['ploschad_dopolnitelnih_pomeschenii'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-card-title
          class="headline blue darken-2 lighten-1"
          dark
          primary-title
        >
        <span class="white--text">КОНСТРУКТИВНЫЕ ХАРАКТЕРИСТИКИ</span>
        </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал стен</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                v-model="data2['mat_sten']"
                :clearable="clearable"
                :items="material_sten"
                outlined    
                placeholder=" "
                label="Заполнить"
                ref="mat_sten"
                :rules="[() => !!data2['mat_sten'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал перекрытий</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                v-model="data2['mat_perekr']"
                :clearable="clearable"
                :items="Material_karkasa"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="mat_perekr"
                :rules="[() => !!data2['mat_perekr'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал кровли</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                v-model="data2['mat_krovli']"
                :clearable="clearable"
                :items="krovl_mat"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="mat_krovli"
                :rules="[() => !!data2['mat_krovli'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал фундаментов</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                v-model="data2['mat_fund']"
                :clearable="clearable"
                :items="found_mat"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="mat_fund"
                :rules="[() => !!data2['mat_fund'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вид конструкции</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                v-model="data2['vid_konstr']"
                :items="konstrukcia_zdania"
                outlined     
                placeholder=" "
                label="Заполнить"
                :clearable="clearable"
                ref="vid_konstr"
                :rules="[() => !!data2['vid_konstr'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-card-title
          class="headline blue darken-2 lighten-1"
          dark
          primary-title>
        <span class="white--text">ИНЖЕНЕРНОЕ, САНИТАРНО-ТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ</span>
        </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Электроснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['elektroznab']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['elektroznab2']"
                :items="items"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="elektroznab2"
                :rules="[() => !!data2['elektroznab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Отопление</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['otoplenie']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['otoplenie2']"
                :items="items"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="otoplenie2"
                :rules="[() => !!data2['otoplenie2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Холодное водоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['holod_vodosnab']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['holod_vodosnab2']"
                :items="items"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="holod_vodosnab2"
                :rules="[() => !!data2['holod_vodosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Горячее водоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['goryach_vodosnab']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['goryach_vodosnab2']"
                :items="items"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="goryach_vodosnab2"
                :rules="[() => !!data2['goryach_vodosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Водоотведение/канализация</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['canalis']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['canalis2']"
                :items="items"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить"
                ref="canalis2"
                :rules="[() => !!data2['canalis2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Газоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['gasosnab']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                v-model="data2['gasosnab2']"
                :items="items"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="gasosnab2"
                :rules="[() => !!data2['gasosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
          <v-card-title
          class="headline blue darken-2 lighten-1"
          dark
           primary-title>
          <span class="white--text">ДАННЫЕ АКТА ВВОДА В ЭКСПЛУАТАЦИЮ</span>
          </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline="">
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <span>Дата акта <span style="color: red; font-size: 125%" v-bind="attrs" v-on="on">*</span> </span>
               </template>
            <span>Это поле обязательно к заполнению</span>
          </v-tooltip>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <Calendar
                outlined_field="true"
                label_prop="Дата составления акта"
                :data = this.newData
                @changeDate = 'changeDate'
              />
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <span>Тип документа, из которого внесена стоимость</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select
                v-model="data2['tip_doc']"
                :clearable="clearable"
                :items="Tip_Docyment"
                outlined
                placeholder=" "
                label="Заполнить"
                ref="tip_doc"
                :rules="[() => !!data2['tip_doc'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость по ПСД</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['stoimost_po_psd']"
                @keyup="check_simvol(data2['stoimost_po_psd'], 'stoimost_po_psd')"
                @change="check_simvol(data2['stoimost_po_psd'], 'stoimost_po_psd')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="stoimost_po_psd"
                :rules="[() => !!data2['stoimost_po_psd'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <span>Уровень цен ПСД</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select
                :clearable="clearable"
                :items="Lvl_cen"
                outlined
                v-model="data2['selected']"
                v-on:change="calendarik"
                placeholder=" "
                label="Заполнить"
                ref="selected"
                :rules="[() => !!data2['selected'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex
              style="display:none;"
              class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12"
              id="date"
            >
              <Calendar 
                disabled 
                outlined_field="true" 
                :data = this.dataaaa
              />
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость основных фондов</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                v-model="data2['stoimost_osn_fond']"
                @keyup="check_simvol(data2['stoimost_osn_fond'], 'stoimost_osn_fond')"
                @change="check_simvol(data2['stoimost_osn_fond'], 'stoimost_osn_fond')"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить"
                ref="stoimost_osn_fond"
                :rules="[() => !!data2['stoimost_osn_fond'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-3 co
            l-md-3 col-lg-3 col-xl-3 col-12">
              <span>Уровень цен основных фондов</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select
                :clearable="clearable"
                :items="Lvl_cen"
                outlined
                v-model="data2['selected2']"
                v-on:change="calendarik"
                placeholder=" "
                                label="Заполнить"
                ref="selected2"
                :rules="[() => !!data2['selected2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex
              style="display:none;"
              class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12"
              id="date2"
            >
              <Calendar outlined_field="true"  :data = this.dataaaa />
            </v-flex>
          </v-layout>

          <br />

          <p style="font-size: 200%;">Примечания</p>
              <v-textarea
                auto-grow
                outlined
                row-height="15"
                placeholder=" "
                :clearable="clearable" 
                @change="check_space('primechaniya')"
                rows="1"
                label="В случае, если вы знакомы с объектом, укажите свое экспертное
                мнение о нем (требует ремонта/устарел/не используется/др.)"
                v-model="data2['primechaniya']"
              ></v-textarea>
        </v-card>
      </v-container>
    </v-container>

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

             <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <br />
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <h2>Выберите файл для отправки</h2>
                          <br />                          
                          <v-file-input 
                          outlined 
                          id="dd"
                          type="file"
                          accept="image/*"
                          label="Выберите фаил" 
                          counter 
                          Show-Size  
                          v-model="imageData"
                        ></v-file-input>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click.native="close" dark>Закрыть</v-btn>
                    <v-btn color="blue darken-1"  @click="onUpload" dark>Сохранить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

    <div v-if="sendSuccess">
      <v-alert
        type="success"
        style="position:fixed;bottom: 0px;left: 50px; "
      >Форма успешна сохранена в БД!</v-alert>
    </div>
    <div v-if="sendError">
      <v-alert type="error" style="position:fixed;bottom: 0px;left: 50px; ">Ошибка!</v-alert>
    </div>
    <div v-if="sendErrorSave">
      <v-alert type="error" style="position:fixed;bottom: 0px; left: 50px; ">Заполните все обязательные поля и поля с датой</v-alert>
    </div>
    
    <v-speed-dial
      v-model="fab"
      class="mr-4 mb-2"
      :top="top"
      bottom
      right
      fixed
      :left="left"
      direction="left"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn color="red" v-model="fab" bottom right dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-layout mt-1 class="fixed-buttons">
        <v-btn style="width:138px;" dark medium rounded elevation-7 color="red" @click="cleare">
          Очистить
          <v-icon dark right>mdi-cancel</v-icon>
        </v-btn>

        <v-btn id="fileButton" style="width:138px;" dark medium rounded elevation-7 color="orange" @click="loadFile">
          Файл
          <v-icon dark right>mdi-file</v-icon>
        </v-btn>
        <v-btn
          dark
          medium
          style="width:138px;"
          rounded
          elevation-7
          color="indigo"
          @click="save_data"
          >
          Отправить
          <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-layout>
    </v-speed-dial>
  </v-app>
</template>

<script>
import Calendar from "@/components/Calendar";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import firebase from 'firebase';
const axios = require("axios");
const settings = {
  apiKey: "61021a89-08bf-4f80-99fe-b1b10322b18c",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1"
};

export default {
  data(){
    return{
      auth_geader: {},
    }
  },
  name: 'Upload',
  computed: {
    form () {
      return {
        status: this.data2['status'],
        status2: this.data2['status2'],
        objem2: this.data2['objem2'],
        kol_kvartir2: this.data2['kol_kvartir2'],
        obzh_ploshad_zhilih_pomesh2: this.data2['obzh_ploshad_zhilih_pomesh2'],
        obzh_ploshad_nezhilih_pomesh2: this.data2['obzh_ploshad_nezhilih_pomesh2'],
        ploshad_zastr2: this.data2['ploshad_zastr2'],
        one_room: this.data2['one_room'],
        one_room_obsh_ploshad: this.data2['one_room_obsh_ploshad'],
        two_room: this.data2['two_room'],
        two_room_obsh_ploshad: this.data2['two_room_obsh_ploshad'],
        three_room: this.data2['three_room'],
        three_room_obsh_ploshad: this.data2['three_room_obsh_ploshad'],
        four_room: this.data2['four_room'],
        four_room_obsh_ploshad: this.data2['four_room_obsh_ploshad'],
        five_room: this.data2['five_room'],
        five_room_obsh_ploshad: this.data2['five_room_obsh_ploshad'],
        bolshe_five_room: this.data2['bolshe_five_room'],
        bolshe_five_room_obsh_ploshad: this.data2['bolshe_five_room_obsh_ploshad'],
        admin_pomesh: this.data2['admin_pomesh'],
        torg_pomesh: this.data2['torg_pomesh'],
        commynal_pomesh: this.data2['commynal_pomesh'],
        proizv_pomesh: this.data2['proizv_pomesh'],
        ploshad_zemel2: this.data2['ploshad_zemel2'],
        sklad_pomesh: this.data2['sklad_pomesh'],
        transport_pomesh: this.data2['transport_pomesh'],
        vspomogatel_pomesh: this.data2['vspomogatel_pomesh'],
        drygih_pomesh: this.data2['drygih_pomesh'],
        dopolnitelnoe_pomeschenie: this.data2['dopolnitelnoe_pomeschenie'],
        ploschad_dopolnitelnih_pomeschenii: this.data2['ploschad_dopolnitelnih_pomeschenii'],
        mat_sten: this.data2['mat_sten'],
        mat_perekr: this.data2['mat_perekr'],
        mat_krovli: this.data2['mat_krovli'],
        mat_fund: this.data2['mat_fund'],
        vid_konstr: this.data2['vid_konstr'],
        elektroznab2: this.data2['elektroznab2'],
        otoplenie2: this.data2['otoplenie2'],
        holod_vodosnab2: this.data2['holod_vodosnab2'],
        goryach_vodosnab2: this.data2['goryach_vodosnab2'],
        canalis2: this.data2['canalis2'],
        gasosnab2: this.data2['gasosnab2'],
        tip_doc: this.data2['tip_doc'],
        stoimost_po_psd: this.data2['stoimost_po_psd'],
        stoimost_osn_fond: this.data2['stoimost_osn_fond'],
        selected: this.data2['selected'],
        selected2: this.data2['selected2']
      }
    },
  },
  mounted() {
    this.$nextTick(function() {
      setTimeout(() => {
        ymaps.ready(function() {
          var myMap,myPlacemark, myGeocoder;
          var X = sessionStorage.getItem("X");
          var Y = sessionStorage.getItem("Y");
          var Xcentr = "";
          var Ycentr = "";
          var zoom = 14;
          var adress = document.getElementById("adress").value;
          var naznachenie = document.getElementById("naznachenie").value;
          if ( (X == '' && Y == '') || (X == 'null' && Y == 'null') || (X == null && Y == null) || (X == undefined && Y == undefined) || (X == '0' && Y == '0')) {           
            Xcentr = "53.902512";
            Ycentr = "27.561481";
            zoom = 6;
            X = "";
            Y = "";
          }else {
            Xcentr = X;
            Ycentr = Y;
            zoom = 17;
          }
          // Создание метки 
              myMap = new ymaps.Map('map', {
                  center: [Xcentr, Ycentr],
                  zoom: zoom,
                  controls: [
                    "typeSelector", // Переключатель слоев карты
                    "fullscreenControl" // Полноэкранный режим
                  ]
              }, {
                  searchControlProvider: 'yandex#search'
              });
              myPlacemark = new ymaps.Placemark([X, Y],
              {
                iconContent: "Объект",
                balloonContent: naznachenie + ", " + adress
              },{
                preset: "islands#blueStretchyIcon" ,// islands#blueHomeIcon
                draggable: true
              }
              );
              myMap.geoObjects.add(myPlacemark);
              myMap.events.add('click', function (e) {
              var coords = e.get('coords');        
              // Если метка уже создана – просто передвигаем ее.
              if (myPlacemark) {
                  myPlacemark.geometry.setCoordinates(coords);
                  sessionStorage.setItem("X",coords[0])
                  sessionStorage.setItem("Y",coords[1])
              }
              // Если нет – создаем.
              else {   
                  myPlacemark = createPlacemark(coords);
                  myMap.geoObjects.add(myPlacemark);   
                  sessionStorage.setItem("X",coords[0])
                  sessionStorage.setItem("Y",coords[1])
                  // Слушаем событие окончания перетаскивания на метке.
              }
          });
          function createPlacemark(coords) {
              return new ymaps.Placemark(coords, {
                  iconCaption: adress
              }, {
                  preset: 'islands#violetDotIconWithCaption',
                  draggable: true
              });
          }
          	myPlacemark.events.add('dragend', function(e){
              var cord = e.get('target').geometry.getCoordinates();    
              sessionStorage.setItem("Y", cord[1]);
              sessionStorage.setItem("X", cord[0]);
            });
        });
      }, 1300);
    });
  },
  components: {
    Calendar,
    yandexMap,
    ymapMarker
  },
  created() {
    this.auth_geader = {
      Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
    };

    this.get_inf();
  },
  methods: {
    save_data(){
      this.formHasErrors = false
      let i = 0;
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) {
            
            i+=1;
            this.formHasErrors = true
        }
        this.$refs[f].validate(true)
      })
      if (((i==0) && (this.data2['date_sost_tehpas'] != '') && (this.data2['data_obsled'] != '') && (this.data2['data_akta'] != ''))){  
          this.data2["cord_x"] = sessionStorage.getItem("X"),
          this.data2["cord_y"] = sessionStorage.getItem("Y"),
          axios
            .post(
              "https://82.202.204.7:3333/api/areas/save/Object_vvedeni_v_eksplyataciu_JM",
              this.data2
            )
            .then(res => {
              this.sendSuccess = true;
              setTimeout(() => (this.sendSuccess = false), 5000);
            })
            .catch(error => {
              this.sendError = true;
              setTimeout(() => (this.sendError = false), 5000);
              console.log(error);
            });
      }
      else {
        
        this.sendErrorSave = true;
        setTimeout(() => (this.sendErrorSave = false), 4000);
      }
    },
    changeDate(data) {
      var data22 = data.data.split('-').reverse().join("."); 
      this.data2['data_akta'] = data.name == "Дата составления акта" ? data22 : this.data2['data_akta'];
      this.data2['data_obsled'] = data.name == "Дата обследования" ? data22 : this.data2['data_obsled'];
      this.data2['date_sost_tehpas'] = data.name == "Дата составления техпаспорта" ? data22 : this.data2['date_sost_tehpas'];
    },
    close() {
      this.dialog = false;
      this.imageData = null;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    loadFile(){
      this.dialog = true;
    },
    onUpload(){
      if (this.imageData == null) alert("фаил не выбран")
      else{
        var file = this.imageData;
        var reader = new FileReader()
        reader.onloadend = function (evt) {
          var blob = new Blob([evt.target.result], { type: "image/jpeg" }); 
          var storageUrl = (sessionStorage.getItem("inv").replace(/\//g, "-")) +'/';
          var name = file.name;
          var storageRef = firebase.storage().ref(storageUrl + name); 
          var uploadTask = storageRef.put(blob);
        }
        reader.onerror = function (e) {
          console.log("Failed file read: " + e.toString());
        };
        reader.readAsArrayBuffer(file);
        this.dialog = false;
      }
    },
    check_space(name_polya){
      this.data2[name_polya] = this.data2[name_polya] != null ? this.data2[name_polya].trim() : this.data2[name_polya];
    },
    check_simvol(text, name_polya) {
      this.data2[name_polya] = this.data2[name_polya] != null ? this.data2[name_polya].replace(/[^0-9]/g, "") : this.data2[name_polya];
    },
    calendarik: function() {
      document.getElementById("date").style.display = this.data2["selected"] == "Текущий" ? "block" : "none";
      document.getElementById("date2").style.display = this.data2["selected2"] == "Текущий" ? "block" : "none";
    },
    get_inf: async function() {
      var nomer = sessionStorage.getItem("inv");
      var self = this;
      const BD = await axios.get("https://82.202.204.7:3333/JM");
      for (let i = 0; i <= BD.data.length; i++) {
        try{
          if (nomer == BD.data[i].inv_num) {
            self.newData = BD.data[i].data_akta;      
            self.newData2 = BD.data[i].data_obsled; 
            self.newData3 = BD.data[i].date_sost_tehpas;
            self.dataaaa = self.dataaaa.split('-').reverse().join(".");
            self.data["cord_x"] = BD.data[i].cord_x;
            self.data["cord_y"] = BD.data[i].cord_y;
            self.data2["cord_x"] = BD.data[i].cord_x;
            self.data2["cord_y"] = BD.data[i].cord_y;
            self.data2["status"] = BD.data[i].status == null ? "" : BD.data[i].status;
            self.data["address"] = BD.data[i].address;
            self.data["naznachenie"] = BD.data[i].naznachenie;
            self.data["naimenovanie"] = BD.data[i].naimenovanie;
            self.data["god_postr"] = BD.data[i].god_postr;
            self.data["obsh_ploshad"] = BD.data[i].obsh_ploshad;
            self.data["kol_etazh"] = BD.data[i].kol_etazh;
            self.data["obzh_ploshad_zhilih_pomesh"] = BD.data[i].obzh_ploshad_zhilih_pomesh;
            self.data["ploshad_zemel"] = BD.data[i].ploshad_zemel;
            self.data["obzh_ploshad_nezhilih_pomesh"] = BD.data[i].obzh_ploshad_nezhilih_pomesh;
            self.data["ploshad_zastr"] = BD.data[i].ploshad_zastr;
            self.data["kol_kvartir"] = BD.data[i].kol_kvartir;
            self.data["objem"] = BD.data[i].objem;
            self.data["elektroznab"] = BD.data[i].elektroznab;
            self.data["otoplenie"] = BD.data[i].otoplenie;
            self.data["holod_vodosnab"] = BD.data[i].holod_vodosnab;
            self.data["goryach_vodosnab"] = BD.data[i].goryach_vodosnab;
            self.data["canalis"] = BD.data[i].canalis;
            self.data["gasosnab"] = BD.data[i].gasosnab;
            self.data2["status2"] = BD.data[i].status2 == null ? "" : BD.data[i].status2;
            self.data2["data_akta"] = BD.data[i].data_akta;
            self.data2["data_obsled"] = BD.data[i].data_obsled; 
            self.data2["date_sost_tehpas"] = BD.data[i].date_sost_tehpas;
            self.data2["naimenovanie2"] = BD.data[i].naimenovanie2;
            self.data2["god_postr2"] = BD.data[i].god_postr2;
            self.data2["obsh_ploshad2"] = BD.data[i].obsh_ploshad2;
            self.data2["kol_etazh2"] = BD.data[i].kol_etazh2;
            self.data2["objem2"] = BD.data[i].objem2 == null ? '' : BD.data[i].objem2;
            self.data2["kol_kvartir2"] = BD.data[i].kol_kvartir2 == null ? '' : BD.data[i].kol_kvartir2;
            self.data2["obzh_ploshad_zhilih_pomesh2"] = BD.data[i].obzh_ploshad_zhilih_pomesh2 == null ? '' : BD.data[i].obzh_ploshad_zhilih_pomesh2;
            self.data2["ploshad_zemel2"] = BD.data[i].ploshad_zemel2;
            self.data2["obzh_ploshad_nezhilih_pomesh2"] = BD.data[i].obzh_ploshad_nezhilih_pomesh2 == null ? '' : BD.data[i].obzh_ploshad_nezhilih_pomesh2;
            self.data2["ploshad_zastr2"] = BD.data[i].ploshad_zastr2 == null ? '' : BD.data[i].ploshad_zastr2;
            self.data2["one_room"] = BD.data[i].one_room == null ? '' : BD.data[i].one_room;
            self.data2["two_room"] = BD.data[i].two_room == null ? '' : BD.data[i].two_room;
            self.data2["three_room"] = BD.data[i].three_room == null ? '' : BD.data[i].three_room;
            self.data2["four_room"] = BD.data[i].four_room == null ? '' : BD.data[i].four_room;
            self.data2["five_room"] = BD.data[i].five_room == null ? '' : BD.data[i].five_room;
            self.data2["bolshe_five_room"] = BD.data[i].bolshe_five_room == null ? '' : BD.data[i].bolshe_five_room;
            self.data2["one_room_obsh_ploshad"] = BD.data[i].one_room_obsh_ploshad == null ? '' : BD.data[i].one_room_obsh_ploshad;
            self.data2["two_room_obsh_ploshad"] = BD.data[i].two_room_obsh_ploshad == null ? '' : BD.data[i].two_room_obsh_ploshad;
            self.data2["three_room_obsh_ploshad"] = BD.data[i].three_room_obsh_ploshad == null ? '' : BD.data[i].three_room_obsh_ploshad;
            self.data2["four_room_obsh_ploshad"] = BD.data[i].four_room_obsh_ploshad == null ? '' : BD.data[i].four_room_obsh_ploshad;
            self.data2["five_room_obsh_ploshad"] = BD.data[i].five_room_obsh_ploshad == null ? '' : BD.data[i].five_room_obsh_ploshad;
            self.data2["bolshe_five_room_obsh_ploshad"] = BD.data[i].bolshe_five_room_obsh_ploshad == null ? '' : BD.data[i].bolshe_five_room_obsh_ploshad;
            self.data2["admin_pomesh"] = BD.data[i].admin_pomesh == null ? '' : BD.data[i].admin_pomesh;
            self.data2["torg_pomesh"] = BD.data[i].torg_pomesh == null ? '' : BD.data[i].torg_pomesh;
            self.data2["commynal_pomesh"] = BD.data[i].commynal_pomesh == null ? '' : BD.data[i].commynal_pomesh;
            self.data2["proizv_pomesh"] = BD.data[i].proizv_pomesh == null ? '' : BD.data[i].proizv_pomesh;
            self.data2["sklad_pomesh"] = BD.data[i].sklad_pomesh == null ? '' : BD.data[i].sklad_pomesh;
            self.data2["transport_pomesh"] = BD.data[i].transport_pomesh == null ? '' : BD.data[i].transport_pomesh;
            self.data2["vspomogatel_pomesh"] = BD.data[i].vspomogatel_pomesh == null ? '' : BD.data[i].vspomogatel_pomesh;
            self.data2["drygih_pomesh"] = BD.data[i].drygih_pomesh == null ? '' : BD.data[i].drygih_pomesh;
            self.data2["dopolnitelnoe_pomeschenie"] = BD.data[i].dopolnitelnoe_pomeschenie == null ? '' : BD.data[i].dopolnitelnoe_pomeschenie;
            self.data2["ploschad_dopolnitelnih_pomeschenii"] = BD.data[i].ploschad_dopolnitelnih_pomeschenii == null ? '' : BD.data[i].ploschad_dopolnitelnih_pomeschenii;
            self.data2["mat_sten"] = BD.data[i].mat_sten == null ? '' : BD.data[i].mat_sten;
            self.data2["mat_perekr"] = BD.data[i].mat_perekr == null ? '' : BD.data[i].mat_perekr;
            self.data2["mat_krovli"] = BD.data[i].mat_krovli == null ? '' : BD.data[i].mat_krovli;
            self.data2["mat_fund"] = BD.data[i].mat_fund == null ? '' : BD.data[i].mat_fund;
            self.data2["vid_konstr"] = BD.data[i].vid_konstr == null ? '' : BD.data[i].vid_konstr;
            self.data2["elektroznab2"] = BD.data[i].elektroznab2 == null ? '' : BD.data[i].elektroznab2
            self.data2["otoplenie2"] = BD.data[i].otoplenie2 == null ? '' : BD.data[i].otoplenie2;
            self.data2["holod_vodosnab2"] = BD.data[i].holod_vodosnab2 == null ? '' : BD.data[i].holod_vodosnab2;
            self.data2["goryach_vodosnab2"] = BD.data[i].goryach_vodosnab2 == null ? '' : BD.data[i].goryach_vodosnab2;
            self.data2["canalis2"] = BD.data[i].canalis2 == null ? '' : BD.data[i].canalis2;
            self.data2["gasosnab2"] = BD.data[i].gasosnab2 == null ? '' : BD.data[i].gasosnab2;
            self.data2["tip_doc"] = BD.data[i].tip_doc == null ? '' : BD.data[i].tip_doc;
            self.data2["stoimost_po_psd"] = BD.data[i].stoimost_po_psd == null ? '' : BD.data[i].stoimost_po_psd;
            self.data2["stoimost_osn_fond"] = BD.data[i].stoimost_osn_fond == null ? '' : BD.data[i].stoimost_osn_fond;
            self.data2["selected"] = BD.data[i].selected == null ? '' : BD.data[i].selected;
            self.data2["selected2"] = BD.data[i].selected2 == null ? '' : BD.data[i].selected2;
            self.data2["primechaniya"] = BD.data[i].primechaniya;
            document.getElementById("date").style.display = this.data2["selected"] == "Текущий" ? "block" : "none";
            document.getElementById("date2").style.display = this.data2["selected2"] == "Текущий" ? "block" : "none";
          }
        }
        catch{}
      }
    },
    sendForm: function() {
      this.save_data();
    },
    cleare: function() {
      this.data2["status2"] = "";
      this.data2["naimenovanie2"] = "";
      this.data2["obsh_ploshad2"] = "";
      this.data2["god_postr2"] = "";
      this.data2["kol_etazh2"] = "";
      this.data2["objem2"] = "";
      this.data2["kol_kvartir2"] = "";
      this.data2["obzh_ploshad_zhilih_pomesh2"] = "";
      this.data2["obzh_ploshad_nezhilih_pomesh2"] = "";
      this.data2["ploshad_zemel2"] = "";
      this.data2["ploshad_zastr2"] = "";
      this.data2["data_obsled"] = "";
      this.data2["one_room"] = "";
      this.data2["two_room"] = "";
      this.data2["three_room"] = "";
      this.data2["four_room"] = "";
      this.data2["five_room"] = "";
      this.data2["bolshe_five_room"] = "";
      this.data2["one_room_obsh_ploshad"] = "";
      this.data2["two_room_obsh_ploshad"] = "";
      this.data2["three_room_obsh_ploshad"] = "";
      this.data2["four_room_obsh_ploshad"] = "";
      this.data2["five_room_obsh_ploshad"] = "";
      this.data2["bolshe_five_room_obsh_ploshad"] = "";
      this.data2["admin_pomesh"] = "";
      this.data2["torg_pomesh"] = "";
      this.data2["commynal_pomesh"] = "";
      this.data2["proizv_pomesh"] = "";
      this.data2["sklad_pomesh"] = "";
      this.data2["transport_pomesh"] = "";
      this.data2["vspomogatel_pomesh"] = "";
      this.data2["drygih_pomesh"] = "";
      this.data2["dopolnitelnoe_pomeschenie"] = "";
      this.data2["ploschad_dopolnitelnih_pomeschenii"] = "";
      this.data2["mat_sten"] = "";
      this.data2["mat_perekr"] = "";
      this.data2["mat_krovli"] = "";
      this.data2["mat_fund"] = "";
      this.data2["vid_konstr"] = "";
      this.data2["elektroznab2"] = "";
      this.data2["otoplenie2"] = "";
      this.data2["holod_vodosnab2"] = "";
      this.data2["goryach_vodosnab2"] = "";
      this.data2["canalis2"] = "";
      this.data2["gasosnab2"] = "";
      this.data2["tip_doc"] = "";
      this.data2["stoimost_po_psd"] = "";
      this.data2["stoimost_osn_fond"] = "";
      this.data2["primechaniya"] = "";
      this.data2["selected"] = "";
      this.data2["selected2"] = "";
      document.getElementById("date").style.display = this.data2["selected"] == "Текущий" ? "block" : "none";
      document.getElementById("date2").style.display = this.data2["selected2"] == "Текущий" ? "block" : "none";
    }
  },
  data: () => ({
    errorMessages: '',
    formHasErrors: false,
    data: {
      id: null,
      address: null,
      naznachenie: null,
      naimenovanie: null,
      god_postr: null,
      obsh_ploshad: null,
      kol_etazh: null,
      objem: null,
      kol_kvartir: null,
      obzh_ploshad_zhilih_pomesh: null,
      ploshad_zemel: null,
      obzh_ploshad_nezhilih_pomesh: null,
      ploshad_zastr: null,
      elektroznab: null,
      otoplenie: null,
      holod_vodosnab: null,
      goryach_vodosnab: null,
      canalis: null,
      gasosnab: null,
      cord_x: null,
      cord_y: null,
      user_id: sessionStorage.getItem("user_id"),
      inv_num: sessionStorage.getItem("inv")
    },
    data2: {
      status: '',
      status2: '',
      naimenovanie2: '',
      date_sost_tehpas: '',
      god_postr2: null,
      obsh_ploshad2: null,
      kol_etazh2: null,
      objem2: '',
      data_akta: '',
      kol_kvartir2: '',
      obzh_ploshad_zhilih_pomesh2: '',
      ploshad_zemel2: '',
      obzh_ploshad_nezhilih_pomesh2: '',
      ploshad_zastr2: '',
      data_obsled: '',
      one_room: '',
      two_room: '',
      three_room: '',
      four_room: '',
      five_room: '',
      bolshe_five_room: '',
      one_room_obsh_ploshad: '',
      two_room_obsh_ploshad: '',
      three_room_obsh_ploshad: '',
      four_room_obsh_ploshad: '',
      five_room_obsh_ploshad: '',
      bolshe_five_room_obsh_ploshad: '',
      admin_pomesh: '',
      torg_pomesh: '',
      commynal_pomesh: '',
      proizv_pomesh: '',
      sklad_pomesh: '',
      transport_pomesh: '',
      vspomogatel_pomesh: '',
      drygih_pomesh: '',
      dopolnitelnoe_pomeschenie: '',
      ploschad_dopolnitelnih_pomeschenii: '',
      mat_sten: '',
      mat_perekr: '',
      mat_krovli: '',
      mat_fund: '',
      vid_konstr: '',
      elektroznab2: '',
      otoplenie2: '',
      holod_vodosnab2: '',
      goryach_vodosnab2: '',
      canalis2: '',
      gasosnab2: '',
      tip_doc: '',
      stoimost_po_psd: '',
      stoimost_osn_fond: '',
      selected: '',
      selected2: '',
      primechaniya: null,
      cord_x: null,
      cord_y: null,
      user_id: sessionStorage.getItem("user_id"),
      inv_num: sessionStorage.getItem("inv")
    },
    imageData: null,
    i: 0,
    dialog: false,
    dataaaa: new Date().toISOString().substr(0, 10),
    newData: "",
    newData2: "",
    newData3: "",
    selectedDate: "",
    sendSuccess: false,
    sendError: false,
    sendErrorSave: false,
    fab: false,
    hover: false,
    top: false,
    left: false,
    transition: "slide-y-reverse-transition",
    clearable: true,
    items: ["Да", "Нет", "Нет данных"],
    Tip_Docyment: [
      "Акт ввода в эксплуатацию",
      "Сметная документация",
      "Справка",
      "Технический паспорт",
      "Другое",
      "Нет данных"
    ],
    konstrukcia_zdania: ["Каркасная", "Бескаркасная", "Иное", "Нет данных"],
    material_sten: [
      "Кирпич",
      "Блоки легкобетонные (газосиликатные, керамзитобетонные)",
      "Железобетон монолитный, в том числе с заполнением блоками, кирпичом",
      "Сборный железобетон (панели, блок-комнаты)",
      "Иное (металл, панели гофрированные, смешанный)",
      "Нет данных"
    ],
    Lvl_cen: ["Текущий", "1984", "1991", "2006", "Нет данных"],
    status: ["Восполнен", "Отказ от восполнения"],
    Material_karkasa: [
      "Металлоконструкции",
      "Железобетон (сборный или монолитный)",
      "Дерево",
      "Иное",
      "Нет данных"
    ],
    krovl_mat: [
      "Профнастил, металлочерепица, металл листовой, сэндвич-панели",
      "Рулонные материалы",
      "Шифер",
      "Иное",
      "Нет данных"
    ],
    found_mat: [
      "Каменный (бутовый, кирпичный, бутобетонный)",
      "Бетонный (бетонный, монолитный, железобетонный, бетонные стаканы, свайный и тп.)",
      "Иное",
      "Нет данных"
    ],
    yers: [
      "Нет данных",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2004",
      "2003",
      "2002",
      "2001",
      "2000",
      "1999",
      "1998",
      "1997",
      "1996",
      "1995",
      "1994",
      "1993",
      "1992",
      "1991",
      "1990",
      "1989",
      "1988",
      "1987",
      "1986",
      "1985",
      "1984",
      "1983",
      "1982",
      "1981",
      "1980",
      "1979",
      "1978",
      "1977",
      "1976",
      "1975",
      "1974",
      "1973",
      "1972",
      "1971",
      "1970",
      "1969",
      "1968",
      "1967",
      "1966",
      "1965",
      "1964",
      "1963",
      "1962",
      "1961",
      "1960",
      "1959",
      "1958",
      "1957",
      "1956",
      "1955",
      "1954",
      "1953",
      "1952",
      "1951",
      "1950",
      "1949",
      "1948",
      "1947",
      "1946",
      "1945",
      "1944",
      "1943",
      "1942",
      "1941",
      "1940",
      "1939",
      "1938",
      "1937",
      "1936",
      "1935",
      "1934",
      "1933",
      "1932",
      "1931",
      "1930",
      "1929",
      "1928",
      "1927",
      "1926",
      "1925",
      "1924",
      "1923",
      "1922",
      "1921",
      "1920",
      "1919",
      "1918",
      "1917",
      "1916",
      "1915",
      "1914",
      "1913",
      "1912",
      "1911",
      "1910",
      "1909",
      "1908",
      "1907",
      "1906",
      "1905",
      "1904",
      "1903",
      "1902",
      "1901",
      "1900",
      "1899",
      "1898",
      "1897",
      "1896",
      "1895",
      "1894",
      "1893",
      "1892",
      "1891",
      "1890",
      "1889",
      "1888",
      "1887",
      "1886",
      "1885",
      "1884",
      "1883",
      "1882",
      "1881",
      "1880",
      "1879",
      "1878",
      "1877",
      "1876",
      "1875",
      "1874",
      "1873",
      "1872",
      "1871",
      "1870",
      "1869",
      "1868",
      "1867",
      "1866",
      "1865",
      "1864",
      "1863",
      "1862",
      "1861",
      "1860",
      "1859",
      "1858",
      "1857",
      "1856",
      "1855",
      "1854",
      "1853",
      "1852",
      "1851",
      "1850"
    ],
    colvo_etazh: [
      "Нет данных",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40"
    ]
  })
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .fixed-buttons {
    display: inline-block !important;
    margin-bottom: 80px !important;
  }
}

.layout {
  text-align: right;
}
h3 {
  text-align: start;
}
.flex {
  padding-bottom: 0px;
}
@media screen and (min-width: 960px) {
  .container {
    max-width: 1800px;
  }
  .v-img{
    display: none;
  }
}

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
  font-weight: bold
}
a {
  text-decoration: none !important;
  outline: none !important;
  padding-top: 0px !important;
}
ul {
  list-style-type: none;
}
header {
  height: 150px;

  transform: translateY(0px);
}

</style>