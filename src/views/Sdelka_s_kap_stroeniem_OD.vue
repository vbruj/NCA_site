<template >
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
      <v-toolbar-title>СДЕЛКА С ИЗОЛИРОВАННЫМ ПОМЕЩЕНИЕМ</v-toolbar-title>
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
              v-model="data2['status2']"
              @change="check_space('status2')"
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
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field
                      disabled
                      label="Инвентарный номер капитального строения:"
                      placeholder=" "
                      v-model="data['inv_num']"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field 
                      label="Дата сделки:" 
                      disabled 
                      placeholder=" " 
                      v-model="data['data_sdelki']"
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
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      label="ФИО текущего правообладателя / организации:"
                      disabled
                      placeholder=" "
                      v-model="data['name_pravoobl']"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      label="Категория субъекта (правообладателя):"
                      disabled
                      placeholder=" "
                      v-model="data['kateg_pravoobl']"
                    ></v-text-field>
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
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Назначение капитального строения</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-textarea
                       v-model="data['naznachenieks']" 
                      disabled
                      outlined
                      placeholder=" "
                      auto-grow
                      row-height="15"
                      rows="1"
                      id="naznachenie"
                    ></v-textarea>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field 
                outlined 
                  :clearable="clearable"
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
                  @change="check_space('naznachenieks2')"
                  v-model="data2['naznachenieks2']"
                  required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наименование капитального строения</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
                 <v-textarea
                       v-model="data['naimenovanieks']" 
                      disabled
                      outlined
                      placeholder=" "
                      auto-grow
                      row-height="15"
                      rows="1"
                    ></v-textarea>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field 
                outlined 
                  :clearable="clearable"
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
                  v-model="data2['naimenovanieks2']"
                  @change="check_space('naimenovanieks2')"
                  required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Кадастровый номер земельного участка</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field 
                outlined 
                disabled 
                v-model="data['kadastr_nomer_zy']"
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
                  <span class="white--text">ОБЩИЕ ХАРАКТЕРИСТИКИ</span>
                  </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Год постройки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['god_postr']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                                :items="yers"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
                v-model="data2['god_postr2']"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['obsh_ploshad']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['obsh_ploshad2'], 'obsh_ploshad2')"
                @change="check_simvol(data2['obsh_ploshad2'], 'obsh_ploshad2')"
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
                v-model="data2['obsh_ploshad2']"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Год реконструкции</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['god_reconstr']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="yers"
                outlined
                label="Заполнить"
                placeholder=" "
                :clearable="clearable"
                v-model="data2['god_reconstr2']"
                ref="god_reconstr2"
                :rules="[() => !!data2['god_reconstr2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Объем, куб. м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['objem']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['objem2'], 'objem2')"
                @change="check_simvol(data2['objem2'], 'objem2')"
                :clearable="clearable"
                label="Заполнить"
                placeholder=" "
                v-model="data2['objem2']"
                ref="objem2"
                :rules="[() => !!data2['objem2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Количество надземных этажей</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['kol_etazh_nadzem']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="colvo_etazh"
                v-model="data2['kol_etazh_nadzem2']"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Нормируемая (полезная) площадь, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field disabled outlined v-model="data['normiryema_ploshad']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['normiryema_ploshad2'], 'normiryema_ploshad2')"
                @change="check_simvol(data2['normiryema_ploshad2'], 'normiryema_ploshad2')"
                :clearable="clearable"
                label="Заполнить"
                placeholder=" "
                v-model="data2['normiryema_ploshad2']"
                ref="normiryema_ploshad2"
                :rules="[() => !!data2['normiryema_ploshad2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Количество подземных этажей (подвал)</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['kol_etazh_podzem']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="colvo_etazh_podzem"
                outlined
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
                v-model="data2['kol_etazh_podzem2']"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательная площадь, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field disabled outlined v-model="data['vspomogatel_ploshad']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['vspomogatel_ploshad2'], 'vspomogatel_ploshad2')"
                @change="check_simvol(data2['vspomogatel_ploshad2'], 'vspomogatel_ploshad2')"
                :clearable="clearable"
                label="Заполнить"
                placeholder=" "
                v-model="data2['vspomogatel_ploshad2']"
                ref="vspomogatel_ploshad2"
                :rules="[() => !!data2['vspomogatel_ploshad2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Физический износ, %</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['iznos']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['iznos2'], 'iznos2')"
                @change="check_simvol(data2['iznos2'], 'iznos2')"
                :clearable="clearable"
                label="Заполнить"
                placeholder=" "
                v-model="data2['iznos2']"
                ref="iznos2"
                :rules="[() => !!data2['iznos2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Площадь застройки, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['ploshad_zastr']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                @keyup="check_simvol(data2['ploshad_zastr2'], 'ploshad_zastr2')"
                @change="check_simvol(data2['ploshad_zastr2'], 'ploshad_zastr2')"
                :clearable="clearable"
                label="Заполнить"
                placeholder=" "
                v-model="data2['ploshad_zastr2']"
                ref="ploshad_zastr2"
                :rules="[() => !!data2['ploshad_zastr2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap >
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
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
        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12" ml-3 mb-3>
            <h2>Общая площадь:</h2>
          </v-flex>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Торговых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['torg_pomesh']" 
                @keyup="check_simvol(data2['torg_pomesh'], 'torg_pomesh')"
                @change="check_simvol(data2['torg_pomesh'], 'torg_pomesh')"
                placeholder=" "
                label="Заполнить"
                ref="torg_pomesh"
                :rules="[() => !!data2['torg_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Складских помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['sklad_pomesh']" 
                @keyup="check_simvol(data2['sklad_pomesh'], 'sklad_pomesh')"
                @change="check_simvol(data2['sklad_pomesh'], 'sklad_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="sklad_pomesh"
                :rules="[() => !!data2['sklad_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Административных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['admin_pomesh']" 
                @keyup="check_simvol(data2['admin_pomesh'], 'admin_pomesh')"
                @change="check_simvol(data2['admin_pomesh'], 'admin_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="admin_pomesh"
                :rules="[() => !!data2['admin_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Коммунально-бытовых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['commynal_pomesh']" 
                @keyup="check_simvol(data2['commynal_pomesh'], 'commynal_pomesh')"
                @change="check_simvol(data2['commynal_pomesh'], 'commynal_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="commynal_pomesh"
                :rules="[() => !!data2['commynal_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений транспортного назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['transport_pomesh']" 
                @keyup="check_simvol(data2['transport_pomesh'], 'transport_pomesh')"
                @change="check_simvol(data2['transport_pomesh'], 'transport_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="transport_pomesh"
                :rules="[() => !!data2['transport_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Образовательных, воспитательных, научных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['obrazovatelnih_vospitateln_pomesh']"
                @keyup="check_simvol(data2['obrazovatelnih_vospitateln_pomesh'], 'obrazovatelnih_vospitateln_pomesh')"
                @change="check_simvol(data2['obrazovatelnih_vospitateln_pomesh'], 'obrazovatelnih_vospitateln_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="obrazovatelnih_vospitateln_pomesh"
                :rules="[() => !!data2['obrazovatelnih_vospitateln_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений финансового назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['pomesh_finans_naznachenia']" 
                @keyup="check_simvol(data2['pomesh_finans_naznachenia'], 'pomesh_finans_naznachenia')"
                @change="check_simvol(data2['pomesh_finans_naznachenia'], 'pomesh_finans_naznachenia')"
                placeholder="  "
                label="Заполнить"
                ref="pomesh_finans_naznachenia"
                :rules="[() => !!data2['pomesh_finans_naznachenia'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Культурно-просветительских помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['kyltyrno_prosvetit']" 
                @keyup="check_simvol(data2['kyltyrno_prosvetit'], 'kyltyrno_prosvetit')"
                @change="check_simvol(data2['kyltyrno_prosvetit'], 'kyltyrno_prosvetit')"
                placeholder="  "
                label="Заполнить"
                ref="kyltyrno_prosvetit"
                :rules="[() => !!data2['kyltyrno_prosvetit'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Спортивных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['sportivnih_pomesh']" 
                @keyup="check_simvol(data2['sportivnih_pomesh'], 'sportivnih_pomesh')"
                @change="check_simvol(data2['sportivnih_pomesh'], 'sportivnih_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="sportivnih_pomesh"
                :rules="[() => !!data2['sportivnih_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений здравоохранения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['pomesh_zdravohranenia']" 
                @keyup="check_simvol(data2['pomesh_zdravohranenia'], 'pomesh_zdravohranenia')"
                @change="check_simvol(data2['pomesh_zdravohranenia'], 'pomesh_zdravohranenia')"
                placeholder="  "
                label="Заполнить"
                ref="pomesh_zdravohranenia"
                :rules="[() => !!data2['pomesh_zdravohranenia'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений общественного питания, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['pomesh_obchepit']" 
                @keyup="check_simvol(data2['pomesh_obchepit'], 'pomesh_obchepit')"
                @change="check_simvol(data2['pomesh_obchepit'], 'pomesh_obchepit')"
                placeholder="  "
                label="Заполнить"
                ref="pomesh_obchepit"
                :rules="[() => !!data2['pomesh_obchepit'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Производственных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['proizv_pomesh']"
                @keyup="check_simvol(data2['proizv_pomesh'], 'proizv_pomesh')"
                @change="check_simvol(data2['proizv_pomesh'], 'proizv_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="proizv_pomesh"
                :rules="[() => !!data2['proizv_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Подземных этажей (подвала), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['podzem_etaji']" 
                @keyup="check_simvol(data2['podzem_etaji'], 'podzem_etaji')"
                @change="check_simvol(data2['podzem_etaji'], 'podzem_etaji')"
                placeholder="  "
                label="Заполнить"
                ref="podzem_etaji"
                :rules="[() => !!data2['podzem_etaji'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цокольного этажа, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['cokolni_etaj']"
                @keyup="check_simvol(data2['cokolni_etaj'], 'cokolni_etaj')"
                @change="check_simvol(data2['cokolni_etaj'], 'cokolni_etaj')"
                placeholder="  "
                label="Заполнить"
                ref="cokolni_etaj"
                :rules="[() => !!data2['cokolni_etaj'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательных помещений (коридоры, бойлерные, тамбуры и т.д.), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['vspomogatel_pomesh']" 
                @keyup="check_simvol(data2['vspomogatel_pomesh'], 'vspomogatel_pomesh')"
                @change="check_simvol(data2['vspomogatel_pomesh'], 'vspomogatel_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="vspomogatel_pomesh"
                :rules="[() => !!data2['vspomogatel_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Мансардного этажа, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['mansardnogo_etaja']" 
                @keyup="check_simvol(data2['mansardnogo_etaja'], 'mansardnogo_etaja')"
                @change="check_simvol(data2['mansardnogo_etaja'], 'mansardnogo_etaja')"
                placeholder="  "
                label="Заполнить"
                ref="mansardnogo_etaja"
                :rules="[() => !!data2['mansardnogo_etaja'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Иных помещений (помещения, не вошедшие в вышеуказанные категории), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['drygih_pomesh']" 
                @keyup="check_simvol(data2['drygih_pomesh'], 'drygih_pomesh')"
                @change="check_simvol(data2['drygih_pomesh'], 'drygih_pomesh')"
                placeholder="  "
                label="Заполнить"
                ref="drygih_pomesh"
                :rules="[() => !!data2['drygih_pomesh'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined
                label="Доп. помещения:(заполнить)"
                :clearable="clearable"
                v-model="data2['dopolnitelnoe_pomeschenie']"
                placeholder="  "
                @change="check_space('dopolnitelnoe_pomeschenie')"
                ref="dopolnitelnoe_pomeschenie"
                :rules="[() => !!data2['dopolnitelnoe_pomeschenie'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['ploschad_dopolnitelnih_pomeschenii']"
                @keyup="check_simvol(data2['ploschad_dopolnitelnih_pomeschenii'], 'ploschad_dopolnitelnih_pomeschenii')"
                @change="check_simvol(data2['ploschad_dopolnitelnih_pomeschenii'], 'ploschad_dopolnitelnih_pomeschenii')"
                placeholder="  "
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
        <span class="white--text">КОНСТРУКТИВНЫЕ ХАРАКТЕРИСТИКИ КАПИТАЛЬНОГО СТРОЕНИЯ</span>
        </v-card-title>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Конструкция капитального строения</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select 
                :items="konstrukcia_zdania" 
                outlined 
                :clearable="clearable" 
                v-model="data2['konstrykcia_ks']"
                placeholder="  "
                label="Заполнить"
                ref="konstrykcia_ks"
                :rules="[() => !!data2['konstrykcia_ks'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Материал покрытия пола (по преобладающей площади)</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select 
                :items="floor_mat" 
                outlined 
                :clearable="clearable" 
                v-model="data2['mat_pola']"
                placeholder="  "
                label="Заполнить"
                ref="mat_pola"
                :rules="[() => !!data2['mat_pola'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал перекрытий</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select 
                :items="perekr_mat" 
                outlined 
                :clearable="clearable" 
                v-model="data2['mat_perekr']"
                placeholder="  "
                label="Заполнить"
                ref="mat_perekr"
                :rules="[() => !!data2['mat_perekr'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал стен</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                :items="material_sten"
                outlined
                :clearable="clearable" 
                v-model="data2['mat_sten']"
                placeholder="  "
                label="Заполнить"
                ref="mat_sten"
                :rules="[() => !!data2['mat_sten'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Проёмы оконные</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                :items="proem_window"
                outlined
                :clearable="clearable" 
                v-model="data2['okonni_proem']"
                placeholder="  "
                label="Заполнить"
                ref="okonni_proem"
                :rules="[() => !!data2['okonni_proem'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал кровли (по преобладающей площади)</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-combobox 
                outlined 
                :items="krovl_mat" 
                :clearable="clearable" 
                v-model="data2['mat_krovli']"
                placeholder="  "
                label="Заполнить"
                ref="mat_krovli"
                :rules="[() => !!data2['mat_krovli'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-combobox>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Внутренняя отделка капитального строения</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="items"
                outlined
                :clearable="clearable"
                v-on:change="otdelka"
                v-model="data2['vnytr_otdelka_ks']"
                placeholder="  "
                label="Заполнить"
                ref="vnytr_otdelka_ks"
                :rules="[() => !!data2['vnytr_otdelka_ks'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="vnytr_otdelka"
                :disabled="vnyt_otdelka"
                multiple
                outlined
                label="Заполнить, если отделка присутствует"
                placeholder=" "
                v-model="vnytr_otdelka_ks2"
                hide-selected
                small-chips
                deletable-chips
                :clearable="clearable"
                v-on:change='check'
                ref="vnytr_otdelka_ks2"
                :rules="[() => !! this.vnytr_otdelka_ks2]"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наружная отделка капитального строения</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="items"
                outlined
                 :clearable="clearable"
                  v-model="data2['naryj_otdelka_ks']"
                  v-on:change="otdelka"
                  placeholder="  "
                label="Заполнить"
                ref="naryj_otdelka_ks"
                :rules="[() => !!data2['naryj_otdelka_ks'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-combobox
                :disabled="narj_odelka"
                :items="naryj_otdelka"
                multiple
                outlined
                v-model="naryj_otdelka_ks2"
                label="Заполнить, если отделка присутствует"
                placeholder=" "
                hide-selected
                small-chips
                deletable-chips
                :clearable="clearable"
                v-on:change='check'
                ref="naryj_otdelka_ks2"
                :rules="[() => !! this.naryj_otdelka_ks2]"
                :error-messages="errorMessages"
                required
              ></v-combobox>
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
                :items="items"
                outlined
                label="Заполнить"
                ref="elektroznab2"
                :rules="[() => !!data2['elektroznab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                placeholder=" "
                :clearable="clearable"
                v-model="data2['elektroznab2']"
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
                :items="items"
                outlined
                label="Заполнить"
                  ref="otoplenie2"
                  :rules="[() => !!data2['otoplenie2'] || 'Это поле обязательно к заполнению']"
                  :error-messages="errorMessages"
                  required
                  placeholder=" "
                  :clearable="clearable"
                  v-model="data2['otoplenie2']"
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
                :items="items"
                outlined
                                 label="Заполнить"
                ref="holod_vodosnab2"
                :rules="[() => !!data2['holod_vodosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                  placeholder=" "
                  :clearable="clearable"
                  v-model="data2['holod_vodosnab2']"
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
                :items="items"
                outlined
                label="Заполнить"
                ref="goryach_vodosnab2"
                :rules="[() => !!data2['goryach_vodosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                placeholder=" "
                v-model="data2['goryach_vodosnab2']"
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
                :items="items"
                outlined
                label="Заполнить"
                ref="canalis2"
                :rules="[() => !!data2['canalis2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                  placeholder=" "
                  :clearable="clearable"
                  v-model="data2['canalis2']"
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
                :items="items"
                outlined
                label="Заполнить"
                ref="gasosnab2"
                :rules="[() => !!data2['gasosnab2'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
                placeholder=" "
                :clearable="clearable"
                v-model="data2['gasosnab2']"
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
        <span class="white--text">СВЕДЕНИЯ ОБ УСЛОВИЯХ СДЕЛКИ</span>
        </v-card-title>
        
        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цена сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['cena_sdelki']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined 
                :clearable="clearable" 
                v-model="data2['cena_sdelki2']"
                @keyup="check_simvol(data2['cena_sdelki2'], 'cena_sdelki2')"
                @change="check_simvol(data2['cena_sdelki2'], 'cena_sdelki2')"
                placeholder="  "
                label="Заполнить"
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Валюта сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled v-model="data['valuta']"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                outlined 
                :items="valuta"
                :clearable="clearable" 
                v-model="data2['valuta2']"
                @keyup="check_simvol(data2['valuta2'], 'valuta2')"
                @change="check_simvol(data2['valuta2'], 'valuta2')"
                placeholder="  "
                label="Заполнить"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Доля</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined disabled v-model="data['dolya']"></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field 
                outlined 
                @keyup="check_simvol(data2['dolya2'], 'dolya2')"
                @change="check_simvol(data2['dolya2'], 'dolya2')"
                :clearable="clearable" 
                v-model="data2['dolya2']"
                placeholder="  "
                label="Заполнить"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Описание сделки</span>
            </v-flex>
            <v-flex class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-12">
              <v-textarea
                       v-model="data2['opisanie']" 
                      disabled
                      outlined
                      placeholder=" "
                      auto-grow
                      row-height="15"
                      rows="1"
                    ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row wrap fill-height>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Наличие НДС в цене сделки</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="NDS" 
                :clearable="clearable"
                v-model="data2['nds']"
                placeholder="  "
                label="Заполнить"
                ref="nds"
                :rules="[() => !!data2['nds'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12 fill-height>
              <span>Цена сделки включает элементы существующего бизнеса</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['biznes']"
                placeholder="  "
                label="Заполнить"
                ref="biznes"
                :rules="[() => !!data2['biznes'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Продажа с аукциона</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['auctsion']"
                placeholder="  "
                label="Заполнить"
                ref="auctsion"
                :rules="[() => !!data2['auctsion'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap style="vertical-align:top">
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12 self-start>
              <span>Принудительная продажа по решению суда</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['sud']"
                placeholder="  "
                label="Заполнить"
                ref="sud"
                :rules="[() => !!data2['sud'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Приватизация</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['privatiz']"
                placeholder="  "
                label="Заполнить"
                ref="privatiz"
                :rules="[() => !!data2['privatiz'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap fill-height>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Цена включает движимое имущество</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['dvizimoe']"
                placeholder="  "
                label="Заполнить"
                ref="dvizimoe"
                :rules="[() => !!data2['dvizimoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Стоимость включенного в сделку движимого имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['cena_dvizimoe']"
                @keyup="check_simvol(data2['cena_dvizimoe'], 'cena_dvizimoe')"
                @change="check_simvol(data2['cena_dvizimoe'], 'cena_dvizimoe')"
                placeholder="  "
                label="Заполнить"
                ref="cena_dvizimoe"
                :rules="[() => !!data2['cena_dvizimoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Валюта движимого имущества, включенного в сделку</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="valuta" 
                :clearable="clearable"
                v-model="data2['valuta_dvizimoe']"
                placeholder="  "
                label="Заполнить"
                ref="valuta_dvizimoe"
                :rules="[() => !!data2['valuta_dvizimoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Цена включает зачетное имущество (в т.ч. с доплатой)</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['zachetnoe']"
                placeholder="  "
                label="Заполнить"
                ref="zachetnoe"
                :rules="[() => !!data2['zachetnoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Стоимость зачетного имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['cena_zachetnoe']"
                @keyup="check_simvol(data2['cena_zachetnoe'], 'cena_zachetnoe')"
                @change="check_simvol(data2['cena_zachetnoe'], 'cena_zachetnoe')"
                placeholder="  "
                label="Заполнить"
                ref="cena_zachetnoe"
                :rules="[() => !!data2['cena_zachetnoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Валюта, в которой указана стоимость зачетного имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="valuta" 
                :clearable="clearable"
                v-model="data2['valuta_zachetnoe']"
                placeholder="  "
                label="Заполнить"
                ref="valuta_zachetnoe"
                :rules="[() => !!data2['valuta_zachetnoe'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Продажа по договору с рассрочкой</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select 
                outlined 
                :items="items" 
                :clearable="clearable"
                v-model="data2['rassrochka']"
                placeholder="  "
                label="Заполнить"
                ref="rassrochka"
                :rules="[() => !!data2['rassrochka'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Срок рассрочки, мес</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field 
                outlined 
                :clearable="clearable" 
                v-model="data2['srok_rassrochka']"
                @keyup="check_simvol(data2['srok_rassrochka'], 'srok_rassrochka')"
                @change="check_simvol(data2['srok_rassrochka'], 'srok_rassrochka')"
                placeholder="  "
                label="Заполнить"
                ref="srok_rassrochka"
                :rules="[() => !!data2['srok_rassrochka'] || 'Это поле обязательно к заполнению']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout column wrap align-baseline>
            <p style="font-size: 200%;">Примечания</p>
            <v-flex col-sm-12 col-md-12 col-lg-12 col-12 pa-0>
              <v-textarea
                auto-grow
                outlined
                @change="check_space('primechaniya')"
                row-height="15"
                placeholder=" "
                :clearable="clearable" 
                rows="1"
                label="В случае, если вы знакомы с объектом, укажите свое экспертное
                мнение о нем (требует ремонта/устарел/не используется/др.)"
                v-model="data2['primechaniya']"
              ></v-textarea>
            </v-flex>
          </v-layout>
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

          <v-btn style="width:138px;" dark medium rounded elevation-7 color="orange"  @click="loadFile">
            Файл
            <v-icon dark right>mdi-file</v-icon>
          </v-btn>
          <v-btn dark medium style="width:138px;" rounded elevation-7 color="indigo" @click="save_data">
            Отправить
            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-layout>
      </v-speed-dial>


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
                          accept=".xls, .xlsx, .csv"
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
                    <v-btn color="blue darken-1"  @click="onUpload" dark>Прикрепить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
          }else{
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
      }, 1600);
    });
  },
  computed: {
    form () {
      return {
        status: this.data2['status'],	
        status2	: this.data2['status2'],		
        god_reconstr2: this.data2['god_reconstr2'],	
        objem2: this.data2['objem2'],	
        iznos2: this.data2['iznos2'],
        ploshad_zastr2: this.data2['ploshad_zastr2'],
        normiryema_ploshad2: this.data2['normiryema_ploshad2'],	
        vspomogatel_ploshad2: this.data2['vspomogatel_ploshad2'],	
        torg_pomesh	: this.data2['torg_pomesh'],	
        sklad_pomesh	: this.data2['sklad_pomesh'],	
        admin_pomesh	: this.data2['admin_pomesh'],	
        commynal_pomesh	: this.data2['commynal_pomesh'],	
        transport_pomesh	: this.data2['transport_pomesh'],	
        obrazovatelnih_vospitateln_pomesh	: this.data2['obrazovatelnih_vospitateln_pomesh'],	
        pomesh_finans_naznachenia	: this.data2['pomesh_finans_naznachenia'],	
        kyltyrno_prosvetit	: this.data2['kyltyrno_prosvetit'],	
        sportivnih_pomesh	: this.data2['sportivnih_pomesh'],	
        pomesh_zdravohranenia	: this.data2['pomesh_zdravohranenia'],	
        pomesh_obchepit	: this.data2['pomesh_obchepit'],	
        proizv_pomesh	: this.data2['proizv_pomesh'],	
        podzem_etaji	: this.data2['podzem_etaji'],	
        cokolni_etaj	: this.data2['cokolni_etaj'],	
        vspomogatel_pomesh	: this.data2['vspomogatel_pomesh'],	
        mansardnogo_etaja	: this.data2['mansardnogo_etaja'],	
        drygih_pomesh	: this.data2['drygih_pomesh'],	
        dopolnitelnoe_pomeschenie: this.data2['dopolnitelnoe_pomeschenie'],	
        ploschad_dopolnitelnih_pomeschenii: this.data2['ploschad_dopolnitelnih_pomeschenii'],
        konstrykcia_ks	: this.data2['konstrykcia_ks'],	
        mat_perekr	: this.data2['mat_perekr'],	
        mat_sten	: this.data2['mat_sten'],	
        okonni_proem	: this.data2['okonni_proem'],	
        mat_krovli	: this.data2['mat_krovli'],	
        mat_pola: this.data2['mat_pola'],	
        elektroznab2: this.data2['elektroznab2'],	
        otoplenie2: this.data2['otoplenie2'],	
        holod_vodosnab2	: this.data2['holod_vodosnab2'],	
        goryach_vodosnab2: this.data2['goryach_vodosnab2'],	
        canalis2	: this.data2['canalis2'],	
        gasosnab2: this.data2['gasosnab2'],	
        nds	: this.data2['nds'],	
        biznes	: this.data2['biznes'],	
        auctsion	: this.data2['auctsion'],	
        sud	: this.data2['sud'],	
        privatiz	: this.data2['privatiz'],	
        dvizimoe	: this.data2['dvizimoe'],	
        cena_dvizimoe	: this.data2['cena_dvizimoe'],	
        valuta_dvizimoe	: this.data2['valuta_dvizimoe'],	
        zachetnoe	: this.data2['zachetnoe'],	
        cena_zachetnoe	: this.data2['cena_zachetnoe'],	
        valuta_zachetnoe	: this.data2['valuta_zachetnoe'],	
        rassrochka	: this.data2['rassrochka'],	
        srok_rassrochka	: this.data2['srok_rassrochka'],	
      }
    },
    form2() {
      return{
        naryj_otdelka_ks	: this.data2['naryj_otdelka_ks'],	
        naryj_otdelka_ks2	: this.naryj_otdelka_ks2,	
        vnytr_otdelka_ks	: this.data2['vnytr_otdelka_ks'],
        vnytr_otdelka_ks2	: this.vnytr_otdelka_ks2,	
      }
    }
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
    check_space(name_polya){
      this.data2[name_polya] = this.data2[name_polya] != null ? this.data2[name_polya].trim() : this.data2[name_polya];
    },
    check(){
      if (this.vnytr_otdelka_ks2.length == 0){
        this.vnytr_otdelka_ks2 = '';
      }
      if (this.naryj_otdelka_ks2.length == 0){
        this.naryj_otdelka_ks2 = '';
      }
    },
    get_inf: async function() {
      var nomer = sessionStorage.getItem("inv");
      var self = this;
      const BD = await axios.get("https://82.202.204.7:3333/ODKS");
      for (let i = 0; i <= BD.data.length; i++) {
        try{
          if (nomer == BD.data[i].inv_num) {
          self.newData2 = BD.data[i].data_obsled;
          self.dataaaa = self.dataaaa.split('-').reverse().join(".");
          self.data2["status"] = BD.data[i].status == null ? '' : BD.data[i].status;
          self.data2["status2"] = BD.data[i].status2 == null ? '' : BD.data[i].status2;
          self.data["address"] = BD.data[i].address;
          self.data["data_sdelki"] = ((BD.data[i].data_sdelki).split('T')[0]).split('-').reverse().join(".");
          self.data["data_sdelki"] = (+(self.data["data_sdelki"].split('.')[0])+(+1))+"."+(self.data["data_sdelki"].split('.')[1])+"."+(self.data["data_sdelki"].split('.')[2]);
          self.data["name_pravoobl"] = BD.data[i].name_pravoobl;
          self.data["kateg_pravoobl"] = BD.data[i].kateg_pravoobl;
          self.data["naznachenieks"] = BD.data[i].naznachenieks;
          self.data2["naznachenieks2"] = BD.data[i].naznachenieks2== null ? '' : BD.data[i].naznachenieks2;
          self.data["naimenovanieks"] = BD.data[i].naimenovanieks;
          self.data2["naimenovanieks2"] = BD.data[i].naimenovanieks2 == null ? '' : BD.data[i].naimenovanieks2;
          self.data["kadastr_nomer_zy"]= BD.data[i].kadastr_nomer_zy ;
          self.data["god_postr"] = BD.data[i].god_postr;
          self.data2["god_postr2"] = BD.data[i].god_postr2;
          self.data["obsh_ploshad"] = BD.data[i].obsh_ploshad;
          self.data2["obsh_ploshad2"] = BD.data[i].obsh_ploshad2 == null ? '' : BD.data[i].obsh_ploshad2; 
          self.data["god_reconstr"] = BD.data[i].god_reconstr;
          self.data2["god_reconstr2"] = BD.data[i].god_reconstr2;
          self.data["obsh_ploshad"] = BD.data[i].obsh_ploshad;
          self.data2["obsh_ploshad2"] = BD.data[i].obsh_ploshad2 == null ? '' : BD.data[i].obsh_ploshad2; 
          self.data["kol_etazh_nadzem"] = BD.data[i].kol_etazh_nadzem;
          self.data2["kol_etazh_nadzem2"] = BD.data[i].kol_etazh_nadzem2 == null ? '' : BD.data[i].kol_etazh_nadzem2;
          self.data["kol_etazh_podzem"] = BD.data[i].kol_etazh_podzem;
          self.data2["kol_etazh_podzem2"] = BD.data[i].kol_etazh_podzem2 == null ? '' : BD.data[i].kol_etazh_podzem2;
          self.data["objem"] = BD.data[i].objem;
          self.data2["objem2"] = BD.data[i].objem2 == null ? '' : BD.data[i].objem2;
          self.data["iznos"] = BD.data[i].iznos;
          self.data2["iznos2"] = BD.data[i].iznos2 == null ? '' : BD.data[i].iznos2;
          self.data["ploshad_zastr"] = BD.data[i].ploshad_zastr;
          self.data2["ploshad_zastr2"] = BD.data[i].ploshad_zastr2 == null ? '' : BD.data[i].ploshad_zastr2;
          self.data["normiryema_ploshad"] = BD.data[i].normiryema_ploshad;
          self.data2["normiryema_ploshad2"] = BD.data[i].normiryema_ploshad2 == null ? '' : BD.data[i].normiryema_ploshad2;
          self.data2["data_obsled"] = BD.data[i].data_obsled; 
          self.data["vspomogatel_ploshad"] = BD.data[i].vspomogatel_ploshad;
          self.data2["vspomogatel_ploshad2"] = BD.data[i].vspomogatel_ploshad2 == null ? '' : BD.data[i].vspomogatel_ploshad2;
          self.data2["torg_pomesh"] = BD.data[i].torg_pomesh == null ? '' : BD.data[i].torg_pomesh;
          self.data2["sklad_pomesh"] = BD.data[i].sklad_pomesh == null ? '' : BD.data[i].sklad_pomesh;
          self.data2["admin_pomesh"] = BD.data[i].admin_pomesh == null ? '' : BD.data[i].admin_pomesh;
          self.data2["commynal_pomesh"] = BD.data[i].commynal_pomesh == null ? '' : BD.data[i].commynal_pomesh;
          self.data2["transport_pomesh"] = BD.data[i].transport_pomesh == null ? '' : BD.data[i].transport_pomesh;
          self.data2["obrazovatelnih_vospitateln_pomesh"] = BD.data[i].obrazovatelnih_vospitateln_pomesh == null ? '' : BD.data[i].obrazovatelnih_vospitateln_pomesh;
          self.data2["pomesh_finans_naznachenia"] = BD.data[i].pomesh_finans_naznachenia == null ? '' : BD.data[i].pomesh_finans_naznachenia;
          self.data2["kyltyrno_prosvetit"] = BD.data[i].kyltyrno_prosvetit == null ? '' : BD.data[i].kyltyrno_prosvetit;
          self.data2["sportivnih_pomesh"] = BD.data[i].sportivnih_pomesh == null ? '' : BD.data[i].sportivnih_pomesh;
          self.data2["pomesh_zdravohranenia"] = BD.data[i].pomesh_zdravohranenia == null ? '' : BD.data[i].pomesh_zdravohranenia;
          self.data2["pomesh_obchepit"] = BD.data[i].pomesh_obchepit == null ? '' : BD.data[i].pomesh_obchepit;
          self.data2["proizv_pomesh"] = BD.data[i].proizv_pomesh == null ? '' : BD.data[i].proizv_pomesh;
          self.data2["podzem_etaji"] = BD.data[i].podzem_etaji == null ? '' : BD.data[i].podzem_etaji;
          self.data2["cokolni_etaj"] = BD.data[i].cokolni_etaj == null ? '' : BD.data[i].cokolni_etaj;
          self.data2["vspomogatel_pomesh"] = BD.data[i].vspomogatel_pomesh == null ? '' : BD.data[i].vspomogatel_pomesh;
          self.data2["mansardnogo_etaja"] = BD.data[i].mansardnogo_etaja == null ? '' : BD.data[i].mansardnogo_etaja;
          self.data2["drygih_pomesh"] = BD.data[i].drygih_pomesh == null ? '' : BD.data[i].drygih_pomesh;
          self.data2["dopolnitelnoe_pomeschenie"] = BD.data[i].dopolnitelnoe_pomeschenie == null ? '' : BD.data[i].dopolnitelnoe_pomeschenie;
          self.data2['ploschad_dopolnitelnih_pomeschenii'] = BD.data[i].ploschad_dopolnitelnih_pomeschenii == null ? '' : BD.data[i].ploschad_dopolnitelnih_pomeschenii;
          self.data2["konstrykcia_ks"] = BD.data[i].konstrykcia_ks == null ? '' : BD.data[i].konstrykcia_ks;
          self.data2["mat_perekr"] = BD.data[i].mat_perekr == null ? '' : BD.data[i].mat_perekr;
          self.data2["mat_sten"] = BD.data[i].mat_sten == null ? '' : BD.data[i].mat_sten;
          self.data2["okonni_proem"] = BD.data[i].okonni_proem == null ? '' : BD.data[i].okonni_proem;
          self.data2["mat_krovli"] = BD.data[i].mat_krovli == null ? '' : BD.data[i].mat_krovli;
          self.data2["okonni_proem"] = BD.data[i].okonni_proem == null ? '' : BD.data[i].okonni_proem;
          self.data2["vnytr_otdelka_ks"] = BD.data[i].vnytr_otdelka_ks == null ? '' : BD.data[i].vnytr_otdelka_ks;
          self.data2["naryj_otdelka_ks"] = BD.data[i].naryj_otdelka_ks == null ? '' : BD.data[i].naryj_otdelka_ks;
          self.vnytr_otdelka_ks2 = BD.data[i].vnytr_otdelka_ks2;
          self.naryj_otdelka_ks2 = BD.data[i].naryj_otdelka_ks2; 
          self.data2["mat_pola"] = BD.data[i].mat_pola == null ? '' : BD.data[i].mat_pola;
          self.data["elektroznab"] = BD.data[i].elektroznab;
          self.data2["elektroznab2"] = BD.data[i].elektroznab2 == null ? '' : BD.data[i].elektroznab2;
          self.data["otoplenie"] = BD.data[i].otoplenie;
          self.data2["otoplenie2"] = BD.data[i].otoplenie2 == null ? '' : BD.data[i].otoplenie2;
          self.data["holod_vodosnab"] = BD.data[i].holod_vodosnab;
          self.data2["holod_vodosnab2"] = BD.data[i].holod_vodosnab2 == null ? '' : BD.data[i].holod_vodosnab2;
          self.data["goryach_vodosnab"] = BD.data[i].goryach_vodosnab;
          self.data2["goryach_vodosnab2"] = BD.data[i].goryach_vodosnab2 == null ? '' : BD.data[i].goryach_vodosnab2;
          self.data["canalis"] = BD.data[i].canalis;
          self.data2["canalis2"] = BD.data[i].canalis2 == null ? '' : BD.data[i].canalis2;
          self.data["gasosnab"] = BD.data[i].gasosnab;
          self.data2["gasosnab2"] = BD.data[i].gasosnab2 == null ? '' : BD.data[i].gasosnab2;
          self.data["cena_sdelki"] = BD.data[i].cena_sdelki;
          self.data2["cena_sdelki2"] = BD.data[i].cena_sdelki2 == null ? '' : BD.data[i].cena_sdelki2;
          self.data["valuta"] = BD.data[i].valuta;
          self.data2["valuta2"] = BD.data[i].valuta2 == null ? '' : BD.data[i].valuta2;
          self.data["dolya"] = BD.data[i].dolya;
          self.data2["dolya2"] = BD.data[i].dolya2 == null ? '' : BD.data[i].dolya2;
          self.data2["opisanie"] = BD.data[i].opisanie == null ? '' : BD.data[i].opisanie;
          self.data2["nds"] = BD.data[i].nds == null ? '' : BD.data[i].nds;
          self.data2["biznes"] = BD.data[i].biznes == null ? '' : BD.data[i].biznes;
          self.data2["auctsion"] = BD.data[i].auctsion == null ? '' : BD.data[i].auctsion;
          self.data2["sud"] = BD.data[i].sud == null ? '' : BD.data[i].sud;
          self.data2["privatiz"] = BD.data[i].privatiz == null ? '' : BD.data[i].privatiz;
          self.data2["dvizimoe"] = BD.data[i].dvizimoe == null ? '' : BD.data[i].dvizimoe;
          self.data2["cena_dvizimoe"] = BD.data[i].cena_dvizimoe == null ? '' : BD.data[i].cena_dvizimoe;
          self.data2["valuta_dvizimoe"] = BD.data[i].valuta_dvizimoe == null ? '' : BD.data[i].valuta_dvizimoe;
          self.data2["zachetnoe"] = BD.data[i].zachetnoe == null ? '' : BD.data[i].zachetnoe;
          self.data2["cena_zachetnoe"] = BD.data[i].cena_zachetnoe == null ? '' : BD.data[i].cena_zachetnoe;
          self.data2["valuta_zachetnoe"] = BD.data[i].valuta_zachetnoe == null ? '' : BD.data[i].valuta_zachetnoe;
          self.data2["rassrochka"] = BD.data[i].rassrochka == null ? '' : BD.data[i].rassrochka;
          self.data2["srok_rassrochka"] = BD.data[i].srok_rassrochka == null ? '' : BD.data[i].srok_rassrochka;
          self.data2["primechaniya"] = BD.data[i].primechaniya == null ? '' : BD.data[i].primechaniya;
          self.data["cord_x"] = BD.data[i].cord_x;
          self.data["cord_y"] = BD.data[i].cord_y;
          self.data2["cord_x"] = BD.data[i].cord_x;
          self.data2["cord_y"] = BD.data[i].cord_y;
          if (this.data2["vnytr_otdelka_ks"] == "Да") {
            this.vnyt_otdelka = false;
          } else {
            this.vnyt_otdelka = true;
            this.vnytr_otdelka_ks2 = "";
          }
          if (this.data2["naryj_otdelka_ks"] == "Да") {
            this.narj_odelka = false;
          } else {
            this.narj_odelka = true;
            this.naryj_otdelka_ks2 = "";
          }
         }
        }
        catch{}
      }
    },
    changeDate(data) {
      var data22 = data.data.split('-').reverse().join("."); 
      this.data2['data_obsled'] = data.name == "Дата обследования" ? data22 : this.data2['data_obsled'];
    },
    otdelka() {
          if (this.data2["vnytr_otdelka_ks"] == "Да") {
            this.vnyt_otdelka = false;
          } else {
            this.vnyt_otdelka = true;
            this.vnytr_otdelka_ks2 = "";
          }
          if (this.data2["naryj_otdelka_ks"] == "Да") {
            this.narj_odelka = false;
          } else {
            this.narj_odelka = true;
            this.naryj_otdelka_ks2 = "";
          }
    },
    check_simvol(text, name_polya) {
      this.data2[name_polya] = this.data2[name_polya] != null ? this.data2[name_polya].replace(/[^0-9]/g, "") : this.data2[name_polya];
    },
    loadFile(){
      this.dialog = true;
    },
        save_data(){
      this.formHasErrors = false
      let i = 0;
      let i2 = 0;

      Object.keys(this.form2).forEach(f => {
        
      if (!this.form2[f]) {
            i2 += 1;
            this.formHasErrors = true   

            if ((f == "vnytr_otdelka_ks2") && (this.data2["vnytr_otdelka_ks"] != "Да")) {
              i2-=1;
            }

            if ((f == "naryj_otdelka_ks2") && (this.data2["naryj_otdelka_ks"] != "Да")) {
              i2-=1;
            }  
        }
        this.$refs[f].validate(true)
      })

      Object.keys(this.form).forEach(f => {
        
      if (!this.form[f]) {
            i+=1;
            this.formHasErrors = true
        }
        this.$refs[f].validate(true)
      })

      if (((i2<=0) && (i<=0) && (this.data2['data_obsled'] != '') )){  
          this.data2["cord_x"] = sessionStorage.getItem("X"),
          this.data2["cord_y"] = sessionStorage.getItem("Y"),

          this.data2["vnytr_otdelka_ks2"] = "{ " + this.vnytr_otdelka_ks2 + " }"
          this.data2["naryj_otdelka_ks2"] = "{ " + this.naryj_otdelka_ks2 + " }"
          axios
            .post(
              "/areas/save/Sdelka_s_kap_stroeniem_OD",
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
        onUpload(){
      if (this.imageData == null) alert("фаил не выбран")
      else{
        var file = this.imageData;
        var reader = new FileReader()
        reader.onloadend = function (evt) {
        var blob = new Blob([evt.target.result], { type: "image/jpeg"});    
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
    cleare: function() {
        this.data2["status"] = "";
        this.data2["status2"] = "";
        this.data2["naznachenieks2"] = "";
        this.data2["naimenovanieks2"] = "";
        this.data2["god_postr2"] = "";
        this.data2["obsh_ploshad_ip2"] = "";
        this.data2["god_reconstr2"] = "";
        this.data2["obsh_ploshad2"] = "";
        this.data2["kol_etazh_nadzem2"] = "";
        this.data2["kol_etazh_podzem2"] = "";
        this.data2["objem2"] = "";
        this.data2["etaj2"] = "";
        this.data2["iznos2"] = "";
        this.data2["ploshad_zastr2"] = "";
        this.data2["normiryema_ploshad2"] = "";
        this.data2["data_obsled"] = "";
        this.data2["vspomogatel_ploshad2"] = "";
        this.data2["torg_pomesh"] = "";
        this.data2["sklad_pomesh"] = "";
        this.data2["admin_pomesh"] = "";
        this.data2["commynal_pomesh"] = "";
        this.data2["transport_pomesh"] = "";
        this.data2["obrazovatelnih_vospitateln_pomesh"] = "";
        this.data2["pomesh_finans_naznachenia"] = "";
        this.data2["kyltyrno_prosvetit"] = "";
        this.data2["sportivnih_pomesh"] = "";
        this.data2["pomesh_zdravohranenia"] = "";
        this.data2["pomesh_obchepit"] = "";
        this.data2["proizv_pomesh"] = "";
        this.data2["podzem_etaji"] = "";
        this.data2["cokolni_etaj"] = "";
        this.data2["vspomogatel_pomesh"] = "";
        this.data2["mansardnogo_etaja"] = "";
        this.data2["drygih_pomesh"] = "";
        this.data2["dopolnitelnoe_pomeschenie"] = "";
        this.data2["ploschad_dopolnitelnih_pomeschenii"] = "";
        this.data2["konstrykcia_ks"] = "";
        this.data2["mat_perekr"] = "";
        this.data2["mat_sten"] = "";
        this.data2["okonni_proem"] = "";
        this.data2["mat_krovli"] = "";
        this.data2["vnytr_otdelka_ip"] = "";
        this.data2["naryj_otdelka_ks"] = "";
        this.data2["vnytr_otdelka_ks"] = "";
        this.data2["mat_pola"] = "";
        this.data2["elektroznab2"] = "";
        this.data2["otoplenie2"] = "";
        this.data2["holod_vodosnab2"] = "";
        this.data2["goryach_vodosnab2"] = "";
        this.data2["canalis2"] = "";
        this.data2["gasosnab2"] = "";
        this.data2["cena_sdelki2"] = "";
        this.data2["valuta2"] = "";
        this.data2["dolya2"] = "";
        this.data2["opisanie"] = "";
        this.data2["nds"] = "";
        this.data2["biznes"] = "";
        this.data2["auctsion"] = "";
        this.data2["sud"] = "";
        this.data2["privatiz"] = "";
        this.data2["dvizimoe"] = "";
        this.data2["cena_dvizimoe"] = "";
        this.data2["valuta_dvizimoe"] = "";
        this.data2["zachetnoe"] = "";
        this.data2["cena_zachetnoe"] = "";
        this.data2["valuta_zachetnoe"] = "";
        this.data2["rassrochka"] = "";
        this.data2["srok_rassrochka"] = "";
        this.data2["primechaniya"] = "";
        this.etaj2 = "";
          if (this.data2["vnytr_otdelka_ks"] == "Да") {
            this.vnyt_otdelka = false;
          } else {
            this.vnyt_otdelka = true;
            this.vnytr_otdelka_ks2 = "";
          }
          if (this.data2["naryj_otdelka_ks"] == "Да") {
            this.narj_odelka = false;
          } else {
            this.narj_odelka = true;
            this.naryj_otdelka_ks2 = "";
          }
    }
  }, 
  data: () => ({
    clearable: true,
    persistentHint: true,
    vnyt_otdelka: true,
    narj_odelka: true,
    selected: "",
    selected2: "",
    selected3: "",
    selected4: "",
    errorMessages: '',
    formHasErrors: false,
    sendSuccess: false,
    sendError: false,
    sendErrorSave: false,
    dataaaa: new Date().toISOString().substr(0, 10),
    newData2: "",
    fab: false,
    hover: false,
    top: false,
    left: false,
    transition: "slide-y-reverse-transition",
    dialog: false,
    imageData: null,
    vnyt_otdelka: true,
    narj_odelka: true,
    vnytr_otdelka_ks2: null,
    naryj_otdelka_ks2: null,
    data: {
      id: null,
      address: null,
      data_sdelki: null,
      name_pravoobl : null,
      kateg_pravoobl: null,
      naznachenieks: null,
      naimenovanieks: null,
      kadastr_nomer_zy: null,
      god_postr: null, 
      obsh_ploshad : null,
      god_reconstr: null,
      obsh_ploshad: null,
      kol_etazh_nadzem: null,
      kol_etazh_podzem: null,
      objem: null,
      ploshad_zastr: null,
      iznos: null,
      normiryema_ploshad: null,
      vspomogatel_ploshad: null,
      elektroznab: null,
      otoplenie: null,
      holod_vodosnab: null,
      goryach_vodosnab: null,
      canalis: null,
      gasosnab: null,
      cena_sdelki: null,
      valuta: null,
      dolya: null,
      cord_x: null,
      cord_y: null,
      inv_num: sessionStorage.getItem("inv")
    },
    data2: {
        status: '',
        status2: '',
        naimenovanieks2: '',
        naznachenieks2: '',
        god_postr2: '',
        obsh_ploshad2: '',
        god_reconstr2: '',
        obsh_ploshad2: '',
        kol_etazh_nadzem2: '',
        kol_etazh_podzem2: '',
        objem2: '',
        ploshad_zastr2: '',
        iznos2: '',
        normiryema_ploshad2: '',
        data_obsled: '',
        vspomogatel_ploshad2: '',
        torg_pomesh: '',
        sklad_pomesh: '',
        admin_pomesh: '',
        commynal_pomesh: '',
        transport_pomesh: '',
        obrazovatelnih_vospitateln_pomesh: '',
        pomesh_finans_naznachenia: '',
        kyltyrno_prosvetit: '',
        sportivnih_pomesh: '',
        pomesh_zdravohranenia: '',
        pomesh_obchepit: '',
        proizv_pomesh: '',
        podzem_etaji: '',
        cokolni_etaj: '',
        vspomogatel_pomesh: '',
        mansardnogo_etaja: '',
        drygih_pomesh: '',
        dopolnitelnoe_pomeschenie: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        konstrykcia_ks: '',
        mat_perekr: '',
        mat_sten: '',
        okonni_proem: '',
        mat_krovli: '',
        naryj_otdelka_ks: '',
        naryj_otdelka_ks2: '',
        vnytr_otdelka_ks: '',
        vnytr_otdelka_ks2: '',
        mat_pola: '',
        elektroznab2: '',
        otoplenie2: '',
        holod_vodosnab2: '',
        goryach_vodosnab2: '',
        canalis2: '',
        gasosnab2: '',
        cena_sdelki2: '',
        valuta2: '',
        dolya2: '',
        opisanie: '',
        nds: '',
        biznes: '',
        auctsion: '',
        sud: '',
        privatiz: '',
        dvizimoe: '',
        cena_dvizimoe: '',
        valuta_dvizimoe: '',
        zachetnoe: '',
        cena_zachetnoe: '',
        valuta_zachetnoe: '',
        rassrochka: '',
        srok_rassrochka: '',
        primechaniya: '',
        cord_x: '',
        cord_y: '',
        inv_num: sessionStorage.getItem("inv")
    },
    items: ["Да", "Нет", "Нет данных"],
    vnytr_otdelka: [
      "Окраска",
      "Штукатурка",
      "ПВХ панели (сайдинг)",
      "Облицовка плиткой",
      "Оклейка обоями",
      "Дерево",
      "Иное",
      "Нет данных"
    ],

    Tip_Docyment: [
      "Акт ввода в эксплуатацию",
      "Сметная документация",
      "Справка",
      "Другое",
      "Нет данных"
    ],
    naryj_otdelka: [
      "Вентилируемый фасад",
      "Облицовка кирпичом (камнем)",
      "Штукатурка",
      "Штукатурка с утеплением",
      "Окраска",
      "ПВХ панели (сайдинг)",
      "Дерево",
      "Стекло",
      "Иное",
      "Нет данных"
    ],

    proem_window: [
      "Деревянные",
      "ПВХ",
      "Металлические",
      "Другое",
      "Нет",
      "Нет данных"
    ],
    vid_IP: [
      "Общественно-деловая недвижимость",
      "Производственно-складская недвижимость",
      "Нет данных"
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
    ],
    colvo_etazh_podzem: [
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
      "10"
    ],
    etaji: [
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
      "35"
    ],
    floor_mat: [
      "Бетон",
      "Плитка",
      "Дерево",
      "Полимерные материалы",
      "Иное",
      "Нет данных"
    ],
    Lvl_cen: ["1984", "1991", "2006", "Текущий", "Другое", "Нет данных"],
    status: ["Восполнен", "Отказ от восполнения", "Нет данных"],
    konstrukcia_zdania: ["Каркасная", "Бескаркасная", "Иное", "Нет данных"],
    valuta: ["USD", "EUR", "BYR", "BYN", "RUB", "Иное", "Нет данных"],
    expertnoe_mnenie: [
      "Наименование КС",
      "Внутренняя отделка",
      "Наружная отделка",
      "Снабжение (коммуникации)",
      "Общее состояник здания",
      "Нет данных"
    ],
    krovl_mat: [
      "Профнастил, металлочерепица, металл листовой, сэндвич-панели",
      "Рулонные материалы",
      "Шифер",
      "Иное",
      "Нет данных"
    ],
    material_sten: [
      "Дерево (брус, бревна)",
      "Дерево (щитовые конструкции, доски)",
      "Кирпич",
      "Блоки легкобетонные (газосиликатные, керамзитобетонные)",
      "Железобетон монолитный",
      "Сборный железобетон (панели)",
      "Сэндвич-панели",
      "Металл",
      "Иное",
      "Нет данных"
    ],
    Narujn_otdelka_sdania: [
      "Навесной вентилируемый фасад",
      "Облицовка из кирпича и камня",
      "Штукатурка с утеплением, окраска",
      "Штукатурка окраска",
      "ПВХ панели(сайдинг)",
      "Дерево",
      "Стекло",
      "Нет",
      "Нет данных"
    ],
    material_krovli: [
      "Шифер",
      "Рулонные материалы, мастики (битумные, полимерные и др.)",
      "Металлические листы, металлочерепицы",
      "Черепица",
      "Нет данных"
    ],
    sostoyanie_zsania: [
      "Новое, отличное ",
      "Очень хорошее",
      "Хорошее",
      "Удовлетворительное",
      "Условно пригодное",
      "Неудовлетворительное",
      "Непригодное к эксплуатации",
      "Нет данных"
    ],
    NDS: ["Да", "Нет", "Не выделен", "Нет данных"],
    perekr_mat: [
      "Металлоконструкция",
      "Железобетон (сборный или монолитный)",
      "Дерево",
      "Иное",
      "Нет данных"
    ],
    Naznachenie_IP: [
      "Изолированное помещение",
      "Помещение, относящееся к жилищному фонду",
      "Квартира",
      "Секция (ячейка жилая) общежития",
      "Жилая комната",
      "Вспомогательное помещение жилого дома",
      "Специальное жилое помещение",
      "Помещение, не относящееся к жилищному фонду",
      "Производственное помещение",
      "Административное помещение",
      "Торговое помещение",
      "Административно-торговое помещение",
      "Складское помещение",
      "Помещение образовательного, воспитательного и научного назначения",
      "Помещение санитарно-бытового назначения",
      "Помещение здравоохранения",
      "Помещение общественного питания",
      "Помещение коммунального хозяйства",
      "Помещение для оказания ветеринарных услуг",
      "Помещение культурно-просветительного и зрелищного назначения",
      "Помещение физкультурно-оздоровительного и спортивного назначения",
      "Помещение транспортного назначения",
      "Вспомогательное (подсобное) помещение, не относящееся к жилищному фонду",
      "Помещение связи",
      "Помещение для размещения представительств иностранных государств",
      "Помещение финансового назначения",
      "Помещение специализированное для органов государственного управления, обороны, государственной безопасности, внутренних дел",
      "Помещение для ритуально-похоронного обслуживания",
      "Помещение бытового обслуживания населения",
      "Помещение для размещения подразделений по чрезвычайным ситуациям",
      "Помещение гражданской обороны",
      "Помещение для организации азартных игр",
      "Помещение многофункциональное",
      "Машино-место",
      "Помещение неустановленного назначения",
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
    naznachenie_ZU: [
      "Административная недвижимость",
      "Торговая недвижимость (недвижимость розничной торговли)",
      "Недвижимость общественного питания",
      "Недвижимость связи и телекоммуникаций",
      "Недвижимость транспорта",
      "Финансовая недвижимость",
      "Недвижимость бытового обслуживания",
      "Недвижимость здравоохранения",
      "Недвижимость образования",
      "Культурно-просветительская и зрелищная недвижимость",
      "Физкультурно-спортивная недвижимость",
      "Развлекательно-увеселительная и игорная недвижимость",
      "Гостиничная недвижимость и недвижимость для временного проживания и отдыха",
      "Складская недвижимость и недвижимость оптовой торговли",
      "Производственная недвижимость",
      "Сельскохозяйственная недвижимость",
      "Недвижимость энергетики и инженерно-технического обеспечения",
      "Недвижимость иного назначения",
      "Нет данных"
    ],
    UID_adress: [
      "Внесены данные из ЕГРНИ",
      "Внесены данные из ТП",
      "Внесены данные из договора купли-продажи",
      "Требуется проверка/доработка",
      "Сформирован",
      "Нет данных"
    ],
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
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