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
        <v-img src="https://pr.nca.by/img/nca.6a52f026.svg" @click="$router.push('/pages')" aspect-ratio="4" width="210px" ></v-img>
        </v-flex>
      </v-layout>
      <v-layout  >
        <v-spacer></v-spacer>
      </v-layout>
        <v-toolbar-title>Меню администратора</v-toolbar-title>
      </v-app-bar>
  <v-card  >  
    <v-content class="gradient" >
      <v-layout wrap class="d-flex justify-center">
        <v-flex class="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-12" >
            <template>
              <v-btn
                width="250"
                color="primary"       
                style="margin-left: 12px;  "
                @click="user"
              >
                Пользователи
              </v-btn>
            </template>
              <v-dialog v-model="dialog2" max-width="40%">
                <v-card>
                  <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">Работа с базой пользователeй</span>
                  </v-card-title>
                  <v-card-text >
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <v-layout justify-center mt-10 row>
                             <v-btn
                                color="primary"
                                style="margin-left: 12px; margin-top: 12px; "
                                dark
                                width="310px"
                                @click="saveFileUser"
                              >Скачать БД с пользователями</v-btn>
                              <v-btn
                                @click="ClUsers"
                                color="primary"
                                style="margin-left: 12px; margin-top: 12px; width: 310px"
                              >Удалить БД c Пользователями</v-btn>
                              </v-layout>
                              <v-layout justify-center mt-10 row >
                              <v-file-input
                              id="inp1"
                              outlined
                              v-model="chosenFile"
                              accept=".xls, .xlsx, .csv"
                              label="Выберите фаил с БД"
                              counter
                              Show-Size
                              ></v-file-input>
                              <v-btn
                                @click="tojsUser"
                                color="primary"
                                style="margin-left: 12px; margin-top: 12px; width: 310px"
                              >Загрузить БД c пользователей</v-btn>
                        </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
        </v-flex>

        <v-flex class="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-12" >
            <template>
              <v-btn
                color="primary"
                width="250"
                style="margin-left: 12px; "
                @click="JM"
              >
                ЖМ
              </v-btn>
            </template>
              <v-dialog v-model="dialog3" max-width="40%">
                <v-card>
                  <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">Работа с базой ЖМ</span>
                  </v-card-title>
                  <v-card-text >
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <v-layout justify-center mt-10 row>
                            <v-btn
                              color="primary"
                              style="margin-left: 12px; margin-top: 12px; width: 310px"
                              @click="saveFileJM"
                            >Скачать БД с ЖМ</v-btn>
                            <v-btn
                              @click="ClJM"
                              color="primary"
                              style="margin-left: 12px; margin-top: 12px; width: 310px"
                            >Удалить БД c ЖМ</v-btn>
                          </v-layout>
                          <v-layout justify-center mt-10 row>
                            <v-file-input
                              outlined
                              v-model="chosenFile1"
                              accept=".xls, .xlsx, .csv"
                              label="Выберите фаил с БД"
                              counter
                              Show-Size
                            ></v-file-input>  
                            <v-btn
                              color="primary"
                              style="margin-left: 12px;margin-top: 12px; width: 310px"
                              @click="tojsJM"
                            >Загрузить БД c ЖМ</v-btn>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
            </v-dialog>
          </v-flex>

          <v-flex class="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-12" >
            <template >
              <v-btn
                color="primary"
                width="250"
                style="margin-left: 12px; "
                @click="OD"       
              >
                ОД
              </v-btn>
            </template>
             <v-dialog v-model="dialog4" max-width="40%">
               <v-card >
                  <v-card-text >
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <v-card style="margin-top:15px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Объекты ОД</span>
                              </v-card-title>
                            <v-layout justify-center row>
                              <v-btn
                                color="primary"
                                style="margin: 10px; "
                                dark
                                width="300px" 
                                @click="saveFileODObj"
                              >Скачать БД с ОД объекты</v-btn>
                              <v-btn
                              @click="ClODObj"
                              color="primary"
                              style="margin: 10px "
                              width= "300px"
                            >Удалить БД c ОД объекты</v-btn>
                            </v-layout>
                            <v-divider></v-divider>
                            <v-layout justify-center row>
                            <v-file-input
                              style="margin-top: 10px "
                              width= "300px"
                              outlined  
                              v-model="chosenFile2"           
                              accept=".xls, .xlsx, .csv"
                              label="Выберите фаил с БД"
                              counter
                              Show-Size
                            ></v-file-input>
                              <v-btn
                                @click="tojsODObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                              >Загрузить БД c ОД объекты</v-btn>
                            </v-layout>
                          </v-card>
                           <v-card style="margin-top:30px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Сделки ОД ИП</span>
                              </v-card-title>
                              <v-layout justify-center row>
                                <v-btn
                                  color="primary"
                                  style="margin: 10px; "
                                  dark
                                  width="300px" 
                                  @click="saveFileODIPObj"
                                >Скачать БД с ОД ИП объекты</v-btn>
                                <v-btn
                                @click="ClODIPObj"
                                color="primary"
                                style="margin: 10px "
                                width= "300px"
                                >Удалить БД c ОД ИП объекты</v-btn>
                              </v-layout>
                              <v-divider></v-divider>
                              <v-layout justify-center row>
                                <v-file-input
                                style="margin-top: 10px "
                                width= "300px"
                                outlined  
                                v-model="chosenFile2_2"           
                                accept=".xls, .xlsx, .csv"
                                label="Выберите фаил с БД"
                                counter
                                Show-Size
                                ></v-file-input>
                                <v-btn
                                @click="tojsODIPObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                                >Загрузить БД c ОД ИП объекты</v-btn>
                            </v-layout>
                          </v-card>

                           <v-card style="margin-top:30px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Сделки ОД КС</span>
                              </v-card-title>
                              <v-layout justify-center row>
                                <v-btn
                                  color="primary"
                                  style="margin: 10px; "
                                  dark
                                  width="300px" 
                                  @click="saveFileODKSObj"
                                >Скачать БД с ОД КС объекты</v-btn>
                                <v-btn
                                @click="ClODKSObj"
                                color="primary"
                                style="margin: 10px "
                                width= "300px"
                                >Удалить БД c ОД КС объекты</v-btn>
                              </v-layout>
                              <v-divider></v-divider>
                              <v-layout justify-center row>
                                <v-file-input
                                style="margin-top: 10px "
                                width= "300px"
                                outlined  
                                v-model="chosenFile2_3"           
                                accept=".xls, .xlsx, .csv"
                                label="Выберите фаил с БД"
                                counter
                                Show-Size
                                ></v-file-input>
                                <v-btn
                                @click="tojsODKSObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                                >Загрузить БД c ОД КС объекты</v-btn>
                            </v-layout>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
        </v-flex>

        <v-flex class="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-12" >
            <template>
              <v-btn
                color="primary"
                width="250"
                style="margin-left: 12px; "    
                @click="PS"       
              >
                ПС
              </v-btn>
            </template>
              <v-dialog v-model="dialog5" max-width="40%">
               <v-card >
                  <v-card-text >
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <v-card style="margin-top:15px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Объекты ПС</span>
                              </v-card-title>
                            <v-layout justify-center row>
                              <v-btn
                                color="primary"
                                style="margin: 10px; "
                                dark
                                width="300px" 
                                @click="saveFilePSObj"
                              >Скачать БД с ПС объекты</v-btn>
                              <v-btn
                              @click="ClPSObj"
                              color="primary"
                              style="margin: 10px "
                              width= "300px"
                            >Удалить БД c ПС объекты</v-btn>
                            </v-layout>
                            <v-divider></v-divider>
                            <v-layout justify-center row>
                            <v-file-input
                              style="margin-top: 10px "
                              width= "300px"
                              outlined  
                              v-model="chosenFile3"           
                              accept=".xls, .xlsx, .csv"
                              label="Выберите фаил с БД"
                              counter
                              Show-Size
                            ></v-file-input>
                              <v-btn
                                @click="tojsPSObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                              >Загрузить БД c ПС объекты</v-btn>
                            </v-layout>
                          </v-card>
                           <v-card style="margin-top:30px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Сделки ПС ИП</span>
                              </v-card-title>
                              <v-layout justify-center row>
                                <v-btn
                                  color="primary"
                                  style="margin: 10px; "
                                  dark
                                  width="300px" 
                                  @click="saveFilePSIPObj"
                                >Скачать БД с ПС ИП объекты</v-btn>
                                <v-btn
                                @click="ClPSIPObj"
                                color="primary"
                                style="margin: 10px "
                                width= "300px"
                                >Удалить БД c ПС ИП объекты</v-btn>
                              </v-layout>
                              <v-divider></v-divider>
                              <v-layout justify-center row>
                                <v-file-input
                                style="margin-top: 10px "
                                width= "300px"
                                outlined  
                                v-model="chosenFile3_2"           
                                accept=".xls, .xlsx, .csv"
                                label="Выберите фаил с БД"
                                counter
                                Show-Size
                                ></v-file-input>
                                <v-btn
                                @click="tojsPSIPObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                                >Загрузить БД c ПС ИП объекты</v-btn>
                            </v-layout>
                          </v-card>

                           <v-card style="margin-top:30px;" >              
                              <v-card-title
                                class="headline blue darken-2 lighten-3"      
                                primary-title
                              >
                              <span class="white--text">Сделки ПС КС</span>
                              </v-card-title>
                              <v-layout justify-center row>
                                <v-btn
                                  color="primary"
                                  style="margin: 10px; "
                                  dark
                                  width="300px" 
                                  @click="saveFilePSKSObj"
                                >Скачать БД с ПС КС объекты</v-btn>
                                <v-btn
                                @click="ClPSKSObj"
                                color="primary"
                                style="margin: 10px "
                                width= "300px"
                                >Удалить БД c ПС КС объекты</v-btn>
                              </v-layout>
                              <v-divider></v-divider>
                              <v-layout justify-center row>
                                <v-file-input
                                style="margin-top: 10px "
                                width= "300px"
                                outlined  
                                v-model="chosenFile3_3"           
                                accept=".xls, .xlsx, .csv"
                                label="Выберите фаил с БД"
                                counter
                                Show-Size
                                ></v-file-input>
                                <v-btn
                                @click="tojsPSKSObj"
                                color="primary"
                                style="margin-top: 20px; margin-left: 10px; margin-right: 10px"
                                width= "300px"
                                >Загрузить БД c ПС КС объекты</v-btn>
                            </v-layout>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
      </v-flex>
    </v-layout>
      
      <v-container class="container container--fluid"> 
        <v-row>
          <v-col col col-12 st>
            <v-card style="width:100%"  class="elevation-10">
              <v-card-title
                class="headline blue darken-2 lighten-1 d-flex justify-space-between"
                dark
                primary-title
              >
                <span class="white--text">Список пользователей</span>
                <div > 
                  <v-icon @click="add()" color="white" >mdi-account-plus</v-icon> 
                </div>
              </v-card-title>

              <v-dialog v-model="dialog" max-width="50%">
                <v-card>
                <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">Информация о пользователе, {{ full_name2 }}</span>
                  </v-card-title>
                  <v-card-text style="margin-bottom: -15px">
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex>
                          <v-row>
                            <v-text-field shaped v-model="login2" label="Логин" outlined></v-text-field>
                          </v-row>
                          <v-row>
                            <v-text-field outlined v-model="password2" label="Пароль"></v-text-field>
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on }">
                                <v-icon
                                  style="margin-bottom: 60px;"
                                  color="red"
                                  dark
                                  v-on="on"
                                >mdi-information</v-icon>
                              </template>
                              <span>Если хотите изменить пароль, просто удалите текст в поле "Пароль" и введите новый.</span>
                            </v-tooltip>
                          </v-row>
                          <v-row>
                            <v-text-field v-model="full_name2" label="ФИО" outlined></v-text-field>
                          </v-row>
                          <v-row>
                            <v-select
                              :items="organizationn"
                              v-model="organization2"
                              label="Организация"
                              :clearable="clearable"
                              solo
                            ></v-select>
                          </v-row>
                          <v-row>
                            <v-text-field v-model="nomer_tor" label="Номер ТОР" outlined ></v-text-field>
                          </v-row>
                          <v-row>
                            <v-text-field v-model="post2" label="Должность" outlined></v-text-field>
                          </v-row>
                          <v-row>
                            <v-text-field v-model="phone2" label="Телефон" outlined></v-text-field>
                          </v-row>
                          <v-row>
                            <v-text-field v-model="email2" label="Электронная почта" outlined></v-text-field>
                          </v-row>    
                          <v-row>
                            <v-select
                              :items="rolee"
                              v-model="role2"
                              label="Выберите роль пользователя"
                              :clearable="clearable"
                              solo
                            ></v-select>
                          </v-row>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click.native="close" dark>Закрыть</v-btn>
                    <v-btn color="blue darken-1" @click="changeInfo()" dark>Сохранить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

                            <v-dialog v-model="dialog6" max-width="50%">
                <v-card>
                <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">Добавление пользователя</span>
                  </v-card-title>
                  <br>
                  <v-card-text style="margin-bottom: -15px">
                    <v-container grid-list-md>
                      <v-layout wrap pl-3 pr-3 >
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Логин"
                            v-model="dataUser['login']"
                            :clearable="clearable"
                            ref="login"
                            :rules="[() => !!dataUser['login'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Пароль"
                            :clearable="clearable"
                            v-model="dataUser['password']"
                            ref="password"
                            :rules="[() => !!dataUser['password'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="ФИО"
                            v-model="dataUser['full_name']"
                            :clearable="clearable"
                            ref="full_name"
                            :rules="[() => !!dataUser['full_name'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-8 col-md-8 col-lg-8 col-12>
                          <v-select
                            :items="BdOrg_name"
                            item-text="name"
                            label="Организация"
                            :clearable="clearable"
                            solo
                            v-model="dataUser['organization']"
                            ref="organization"
                            :rules="[() => !!dataUser['organization'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-select>
                        </v-flex>
                      
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Должность"
                            :clearable="clearable"
                            v-model="dataUser['post']"
                            ref="post"
                            :rules="[() => !!dataUser['post'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            placeholder="375 (00) 000-00-00"
                            v-model="dataUser['phone']"
                            ref="phone" 
                            :rules="[this.rules.required, this.rules.nomer]"
                            :error-messages="errorMessages"
                            :clearable="clearable"
                            required
                          ><v-icon slot="prepend" medium color="blue">mdi-plus</v-icon></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            v-model="dataUser['email']"
                            :rules="[this.rules.required, this.rules.email]"
                            label="Электронная почта"
                            ref="email" 
                            :error-messages="errorMessages"
                            :clearable="clearable"
                            required
                          ></v-text-field>
                        </v-flex>

                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-select
                            :items="rolee"
                            v-model="dataUser['role']"
                            label="Роль пользователя"
                            :clearable="clearable"
                            solo
                            ref="role"
                            :rules="[() => !!dataUser['role'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click.native="close" dark>Закрыть</v-btn>
                    <v-btn @click="addUser" dark color="blue darken-1">Добавить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              
              <v-progress-linear color="red" :indeterminate="indeterminate" ></v-progress-linear>
              <v-card-title style="margin-top: -20px">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Поиск"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :search="search"
                :headers="headers"
                :items-per-page="10"
                :items="BdUsers"
                sort-by="calories"
                style="height:100%"
              >
                <template v-slot:[`item.actions`]="{ item }" > 
                  <v-icon medium class="mr-1" @click="load(item)">mdi-pencil</v-icon>
                  <v-icon medium class="mr-1" @click="choose(item)">mdi-delete</v-icon>  
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


      <v-container class="container container--fluid"> 
        <v-row>
          <v-col col col-12 st>
            <v-card style="width:100%" class="elevation-10">
              <v-card-title
                class="headline blue darken-2 lighten-1 d-flex justify-space-between"
                dark
                primary-title
              >
                <span class="white--text">Список организаций </span>
                <div > 
                  <v-icon @click="add_org()" color="white" >mdi-account-multiple-plus</v-icon> 
                </div>    
              </v-card-title>

              <v-dialog v-model="dialog8" max-width="50%">
                <v-card>
                <v-card-title
                    class="headline blue darken-2 lighten-1"
                    dark
                    primary-title
                  >
                  <span class="white--text">Добавление организацию</span>
                  </v-card-title>
                  <br>
                  <v-card-text style="margin-bottom: -15px">
                    <v-container grid-list-md>
                      <v-layout wrap pl-3 pr-3 >
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Код ТОР"
                            @keyup="nomer_torN"
                            v-model="dataOrg['nomer_tor']"
                            :clearable="clearable"
                            ref="nomer_tor"
                            :rules="[() => !!dataOrg['nomer_tor'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Название организации"
                            :clearable="clearable"
                            v-model="dataOrg['name']"
                            ref="name"
                            :rules="[() => !!dataOrg['name'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                          <v-text-field
                            single-line
                            solo
                            label="Область"
                            v-model="dataOrg['raion']"
                            :clearable="clearable"
                            ref="raion"
                            :rules="[() => !!dataOrg['raion'] || 'Заполните поле.']"
                            :error-messages="errorMessages"
                            required
                          ></v-text-field>
                        </v-flex>

                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click.native="close" dark>Закрыть</v-btn>
                    <v-btn @click="addOrg" dark color="blue darken-1">Добавить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>


              <v-card-title style="margin-top: -20px">
                <v-text-field
                  v-model="search2"
                  append-icon="mdi-magnify"
                  label="Поиск"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :search="search2"
                :items-per-page="10"
                :headers="headers_org"
                :items="BdOrg"
                sort-by="calories"
                
                style="height:100%"
              >
                <template v-slot:[`item.actions`]="{ item }" >
                  <v-icon class="mr-1" style="margin-left:15px;margin-bottom:5px" medium @click="choose_org(item)">mdi-delete</v-icon>  
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <div v-if="sendSuccess">
      <v-alert
        type="success"
        height="55"
        style="position:fixed;bottom: 0px;left: 50px; "
      >Данные пользователя успешно изменены</v-alert>
    </div>
    <div v-if="sendSuccess2">
      <v-alert
        type="warning"
        height="55"
        style="position:fixed;bottom: 0px;left: 50px; "
      >Идёт загрузка подождите...</v-alert>
    </div>
    <div v-if="sendSuccess4">
      <v-alert
        height="55"
        type="success"
        style="position:fixed;bottom: 0px;left: 50px; "
      >Пользователи успещно добавлены.</v-alert>
    </div>
    <div v-if="sendSuccess3">
      <v-alert
        height="55"
        type="success"
        style="position:fixed;bottom: 0px;left: 50px; "
      >Объекты сохранены</v-alert>
    </div>
    <div v-if="sendError">
      <v-alert 
        type="error" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px; ">
        Ошибка!</v-alert>
    </div>
    <div v-if="sendError2">
      <v-alert 
        type="error" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px; ">
        Xlsx фаил не выбран.</v-alert>
    </div>
    <div v-if="sendError3">
      <v-alert 
        type="error" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px; ">
        Фаил не подходит.</v-alert>
    </div>
    <div v-if="sendCleare">
      <v-alert 
        type="success" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px;  ">
        Список очищен.</v-alert>
    </div>
    <div v-if="sendDel">
      <v-alert 
        type="success" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px;  ">
        Пользователь удален.</v-alert>
    </div>
    <div v-if="sendAdd">
      <v-alert 
        type="success" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px;  ">
        Пользователь добавлен.</v-alert>
    </div>    
    <div v-if="sendAdd_org">
      <v-alert 
        type="success" 
        height="55"
        style="position:fixed;bottom: 0px;left: 50px;  ">
        Организация добавлена.</v-alert>
    </div>
    </v-card>      

  <v-row justify="center">
    <v-dialog
      v-model="dialog7"
      max-width="600"
    >
      <v-card>
        <v-card-title >Вы действительно хотите удалить пользователя?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="deleteItem()"
          >
            Да
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="dialog7 = false"
          >
            нет
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  
  <v-row justify="center">
    <v-dialog
      v-model="dialog9"
      max-width="600"
    >
      <v-card>
        <v-card-title >Вы действительно хотите удалить организацию?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="deleteItem_org()"
          >
            Да
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="dialog8 = false"
          >
            нет
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      auth_geader: {},
      disabled: true,
      length: 0,
      errorMessages: '',
      formHasErrors: false,
      search: "",
      search2: "",
      nomer: false,
      emaill: false,
      headers: [
        { text: "ФИО", value: "full_name", align: 'start',},
        { text: "Организация", value: "organization" },
        { text: "Должность", value: "post" },
        { text: "Мобильный номер", value: "phone" },
        { text: "Электронная почта", value: "email" },
        { text: "Роль", value: "role" },
        { text: "Действия", value: "actions", sortable: false }
      ],
      headers_org: [
        { text: "Код ТОР", value: "nomer_tor", align: 'start',},
        { text: "Название", value: "name" },
        { text: "Область", value: "raion" },
        { text: "Действия", value: "actions", sortable: false }
      ],
      rules: {
        required: value => !!value || "Заполните поле.",
        counter: value => value.length <= 20 || "Max 20 characters",
        nomer: value => {
          const pattern_nomer = /[0-9]{3} [(][0-9]{2}[)] [0-9]{3}-[0-9]{2}-[0-9]{2}/;
          if(pattern_nomer.test(value)) this.phone = true
          else this.phone = false
          return pattern_nomer.test(value) || "Несуществующий номер или неверный формат номера."
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(pattern.test(value)) this.emaill = true
          else this.emaill = false
          return pattern.test(value) || "Несуществующий E-mail.";
        }
      },
      chosenFile: null, // <- initialize the v-model prop
      chosenFile1: null,
      chosenFile2: null,
      chosenFile2_2: null,
      chosenFile2_3: null,
      chosenFile3: null,
      chosenFile3_2: null,
      chosenFile3_3: null,
      switch1: true,
      clearable: true,
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      sendError: false,
      sendError2: false,
      sendError3: false,
      sendCleare: false,
      sendSuccess: false,
      sendSuccess2: false,
      sendSuccess3: false,
      sendSuccess4: false,
      sendAdd: false,
      sendAdd_org: false,
      sendDel: false,
      role2: "",
      dataUser: {
        id: null,
        login: '',
        password: null,
        full_name: '',
        organization: '',
        post: '',
        phone: '',
        role: '',
        email: '',
        nomer_tor: null
      },
      dataOrg: {
        nomer_tor: null,
        name: '',
        raion: ''
      },
      dataJM: {
        id: null,
        nomer_tor: null,
        status: '',
        inv_num: '',
        address: '',
        naznachenie: '',
        naimenovanie: '',
        date_sost_tehpas: '',
        god_postr: '',
        objem: '',
        kol_etazh: '',
        kol_kvartir: '',
        obzh_ploshad_zhilih_pomesh: '',
        obzh_ploshad_nezhilih_pomesh: '',
        ploshad_zastr: '',
        data_obsled: '',
        one_room: '',
        one_room_obsh_ploshad: '',
        two_room: '',
        two_room_obsh_ploshad: '',
        three_room: '',
        three_room_obsh_ploshad: '',
        four_room: '',
        four_room_obsh_ploshad: '',
        five_room: '',
        five_room_obsh_ploshad: '',
        bolshe_five_room: '',
        bolshe_five_room_obsh_ploshad: '',
        proizv_pomesh: '',
        sklad_pomesh: '',
        admin_pomesh: '',
        torg_pomesh: '',
        commynal_pomesh: '',
        transport_pomesh: '',
        vspomogatel_pomesh: '',
        drygih_pomesh: '',
        mat_perekr: '',
        mat_krovli: '',
        mat_fund: '',
        mat_sten: '',
        elektroznab: '',
        otoplenie: '',
        holod_vodosnab: '',
        goryach_vodosnab: '',
        gasosnab: '',
        canalis: '',
        tip_doc: '',
        stoimost_po_psd: '',
        stoimost_osn_fond: '',
        primechaniya: '',  
        dopolnitelnoe_pomeschenie: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        vid_konstr: '',
        naimenovanie2: '',
        god_postr2: '',
        objem2: '',
        kol_kvartir2: '',
        obzh_ploshad_zhilih_pomesh2: '',
        ploshad_zemel2: '',
        obzh_ploshad_nezhilih_pomesh2: '',
        ploshad_zastr2: '',
        elektroznab2: '',
        otoplenie2: '',
        holod_vodosnab2: '',
        goryach_vodosnab2: '',
        canalis2: '',
        gasosnab2: '',
        status2: '',
        selected: '',
        selected2: '',
        kol_etazh2: '',
        obsh_ploshad: '',
        obsh_ploshad2: '',
        ploshad_zemel: '',
        data_akta: '',
        cord_x: '',
        cord_y: ''
      },
      dataODObj:{
        id: null,
        address: '',
        kadastr_nomer_zy: '',
        naznachenieks: '',
        naimenovanieks: '',
        naimenovanieks2: '',
        god_postr: '',
        obsh_ploshad:'',
        kol_etazh_nadzem: '',
        objem: '',
        kol_etazh_podzem: '',
        normiryema_ploshad: '',
        vspomogatel_ploshad: '',
        ploshad_zastr: '',
        elektroznab: '',
        otoplenie: '',
        holod_vodosnab: '',
        goryach_vodosnab: '',
        canalis: '',
        gasosnab: '',
        inv_num: '',
        status: '',
        status2: '',
        kadastr_nomer_zy2: '',
        data_sost_teh_pasporta: '',
        god_postr2: '',
        obsh_ploshad2: '',
        kol_etazh_nadzem2: '',
        objem2: '',
        kol_etazh_podzem2: '',
        normiryema_ploshad2: '',
        vspomogatel_ploshad2: '',
        ploshad_zastr2: '',
        data_obsled: '',
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
        cokolni_etaj	: '',
        vspomogatel_pomesh: '',
        mansardnogo_etaja: '',
        drygih_pomesh: '',
        dopolnitelnoe_pomeschenie: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        konstrykcia_ks: '',
        mat_pola: '',
        mat_perekr: '',
        mat_sten: '',
        okonni_proem: '',
        mat_krovli: '',
        vnytr_otdelka_ks: '',
        naryj_otdelka_ks: '',
        vnytr_otdelka_ks2: '',
        naryj_otdelka_ks2: '',
        elektroznab2: '',
        otoplenie2: '',
        holod_vodosnab2: '',
        goryach_vodosnab2: '',
        canalis2: '',
        gasosnab2: '',
        data_akta: '',
        tip_doc: '',
        stoimost_po_psd: '',
        stoimost_osn_fond: '',
        primechaniya: '',
        cord_x: '',
        cord_y: '',
        selected: '',
        selected2: '',
        nomer_tor: null
      },
      dataPSObj:{
        inv_num: '',
        address: '',
        naznachenieks: '',
        naimenovanieks: '',
        naimenovanieks2: '',
        kadastr_nomer_zy: '',
        date_sost_tehpas: '',
        god_postr: '',
        god_postr2: '',
        obsh_ploshad: '',
        obsh_ploshad2: '',
        kol_etazh_nadzem: '',
        kol_etazh_nadzem2: '',
        objem: '',
        objem2: '',
        kol_etazh_podzem: '',
        kol_etazh_podzem2: '',
        normiryema_ploshad: '',
        normiryema_ploshad2: '',
        vspomogatel_ploshad: '',
        vspomogatel_ploshad2: '',
        ploshad_zastr: '',
        ploshad_zastr2: '',
        data_obsled: '',
        proizv_pomesh: '',
        sklad_pomesh: '',
        admin_pomesh: '',
        torg_pomesh: '',
        commynal_pomesh: '',
        transport_pomesh: '',
        vspomogatel_pomesh: '',
        drygih_pomesh: '',
        dopolnitelnoe_pomeschenie: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        shag_kolon: '',
        mat_perekr: '',
        prolet: '',
        mat_krovli: '',
        mat_sten: '',
        konstrykcia_ks: '',
        mat_fundament: '',
        mat_dver_vnutr: '',
        visota_potolka: '',
        mat_dver_naruzn: '',
        mat_pola: '',
        okonni_proem: '',
        vnytr_otdelka_ks: '',
        vnytr_otdelka_ks2: '',
        naryj_otdelka_ks: '',
        naryj_otdelka_ks2: '',
        pogruz_razgruz_oborudovanie: '',
        elektroznab: '',
        elektroznab2: '',
        otoplenie: '',
        otoplenie2: '',
        holod_vodosnab: '',
        holod_vodosnab2: '',
        goryach_vodosnab: '',
        goryach_vodosnab2: '',
        canalis: '',
        canalis2: '',
        gasosnab: '',
        gasosnab2: '',
        vent: '',
        vent2: '',
        data_akta: '',
        tip_doc: '',
        stoimost_po_psd: '',
        selected: '',
        stoimost_osn_fond: '',
        selected2: '',
        primechaniya: '',
        nomer_tor: null,
        cord_x: '',
        cord_y: '',
        id: '',
        status: '',
        status2: '',
      },
      dataODIPObj: {
        id: null,
        status: '',
        status2	: '',
        inv_num_ip	: '',
        inv_num	: '',
        address	: '',
        data_sdelki	: '',
        name_pravoobl	: '',
        kateg_pravoobl	: '',
        naznachenieip	: '',
        naimenovanieip	: '',
        naimenovanieip2	: '',
        naznachenieks	: '',
        naimenovanieks	: '',
        naimenovanieks2	: '',
        god_postr	: '',
        god_postr2	: '',
        obsh_ploshad_ip	: '',
        obsh_ploshad_ip2	: '',
        god_reconstr	: '',
        god_reconstr2	: '',
        obsh_ploshad	: '',
        obsh_ploshad2: '',
        etaj	: '',
        etaj2	: '',
        kol_etazh_nadzem: '',	
        kol_etazh_nadzem2	: '',
        kol_etazh_podzem	: '',
        kol_etazh_podzem2	: '',
        objem_ip	: '',
        objem_ip2	: '',
        iznos	: '',
        iznos2	: '',
        normiryema_ploshad: '',	
        normiryema_ploshad2	: '',
        data_obsled	: '',
        vspomogatel_ploshad: '',	
        vspomogatel_ploshad2	: '',
        torg_pomesh	: '',
        sklad_pomesh	: '',
        admin_pomesh	: '',
        commynal_pomesh	: '',
        transport_pomesh	: '',
        obrazovatelnih_vospitateln_pomesh: '',	
        pomesh_finans_naznachenia	: '',
        kyltyrno_prosvetit	: '',
        sportivnih_pomesh	: '',
        pomesh_zdravohranenia	: '',
        pomesh_obchepit	: '',
        proizv_pomesh	: '',
        podzem_etaji	: '',
        cokolni_etaj	: '',
        vspomogatel_pomesh: '',	
        mansardnogo_etaja	: '',
        drygih_pomesh	: '',
        dopolnitelnoe_pomeschenie: '',	
        konstrykcia_ks	: '',
        mat_perekr	: '',
        mat_sten	: '',
        mat_sten2	: '',
        okonni_proem	: '',
        mat_krovli	: '',
        vnytr_otdelka_ip: '',	
        vnytr_otdelka_ip2	: '',
        naryj_otdelka_ks	: '',
        naryj_otdelka_ks2	: '',
        vnytr_otdelka_ks	: '',
        vnytr_otdelka_ks2	: '',
        mat_pola	: '',
        elektroznab	: '',
        elektroznab2	: '',
        otoplenie	: '',
        otoplenie2	: '',
        holod_vodosnab	: '',
        holod_vodosnab2	: '',
        goryach_vodosnab	: '',
        goryach_vodosnab2	: '',
        canalis	: '',
        canalis2	: '',
        gasosnab	: '',
        gasosnab2	: '',
        cena_sdelki	: '',
        cena_sdelki2	: '',
        valuta	: '',
        valuta2	: '',
        dolya	: '',
        dolya2	: '',
        opisanie	: '',
        nds	: '',
        biznes	: '',
        auctsion	: '',
        sud	: '',
        privatiz: '',	
        dvizimoe	: '',
        cena_dvizimoe	: '',
        valuta_dvizimoe	: '',
        zachetnoe	: '',
        cena_zachetnoe: '',	
        valuta_zachetnoe	: '',
        rassrochka	: '',
        srok_rassrochka	: '',
        primechaniya	: '',
        cord_x	: '',
        cord_y	: '',
        nomer_tor: null
      },
      dataPSIPObj: {
        id : null,
        status: '',
        status2: '',
        inv_num  : '',
        inv_num_ip: '',
        address: '',
        data_sdelki	: '',
        name_pravoobl: '',
        kateg_pravoobl: '',
        naimenovanieip: '',
        naznachenieip: '',
        naznachenieks: '',
        naimenovanieks: '',
        god_postr_ks: '',
        obsh_ploshad_ip: '',
        god_reconstr: '',
        god_reconstr2: '',
        kol_etazh_nadzem: '',
        kol_etazh_nadzem2: '',
        kol_etazh_podzem: '',
        kol_etazh_podzem2: '',
        etaj: '',
        objem_ip: '',
        iznos: '',
        normiryema_ploshad: '',
        vspomogatel_ploshad: '',
        ploshad_zastr: '',
        elektroznab: '',
        otoplenie: '',
        holod_vodosnab: '',
        goryach_vodosnab: '',
        canalis: '',
        gasosnab: '',
        vent: '',
        cena_sdelki: '',
        valuta: '',
        dolya: '',
        gotovnost: '',
        prodaja_v_komplekse: '',
        opisanie: '',
        naimenovanieip2: '',
        naimenovanieks2: '',
        god_postr_ks2: '',
        obsh_ploshad_ip2: '',
        etaj2 : '',
        objem_ip2: '',
        iznos2: '',
        normiryema_ploshad2: '',
        data_obsled: '',
        vspomogatel_ploshad2: '',
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
        shag_kolon: '',
        mat_perekr: '',
        prolet: '',
        mat_krovli: '',
        mat_sten: '',
        konstrykcia_ks: '',
        mat_fundament: '',
        mat_dver_vnutr: '',
        visota_potolka: '',
        mat_dver_naruzn: '',
        mat_pola: '',
        okonni_proem: '',
        vnytr_otdelka_ks: '',
        naryj_otdelka_ks: '',
        vnytr_otdelka_ks2: '',
        naryj_otdelka_ks2 : '',
        pogruz_razgruz_oborudovanie: '',
        vnytr_otdelka_ip: '',
        vnytr_otdelka_ip2 : '',
        elektroznab2: '',
        otoplenie2: '',
        holod_vodosnab2: '',
        goryach_vodosnab2: '',
        canalis2: '',
        gasosnab2: '',
        vent: '',
        vent2: '',
        cena_sdelki2: '',
        valuta2: '', 
        dolya2: '',
        prodaja_v_komplekse: '',
        prodaja_v_komplekse2: '',
        inv_num_v_komplekse: '',
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
        nomer_tor: null
      },
      dataODKSObj: {
        id	: null,
        status	: '',
        status2	: '',
        inv_num	: '',
        data_sdelki	: '',
        address	: '',
        name_pravoobl	: '',
        kateg_pravoobl	: '',
        naznachenieks	: '',
        naznachenieks2: '',
        naimenovanieks	: '',
        naimenovanieks2	: '',
        kadastr_nomer_zy	: '',
        god_postr	: '',
        god_postr2	: '',
        obsh_ploshad	: '',
        obsh_ploshad2	: '',
        god_reconstr	: '',
        god_reconstr2	: '',
        objem	: '',
        objem2	: '',
        kol_etazh_nadzem	: '',
        kol_etazh_nadzem2	: '',
        normiryema_ploshad	: '',
        normiryema_ploshad2	: '',
        kol_etazh_podzem	: '',
        kol_etazh_podzem2	: '',
        vspomogatel_ploshad	: '',
        vspomogatel_ploshad2	: '',
        iznos	: '',
        iznos2	: '',
        ploshad_zastr	: '',
        ploshad_zastr2	: '',
        data_obsled	: '',
        torg_pomesh	: '',
        sklad_pomesh	: '',
        admin_pomesh	: '',
        commynal_pomesh	: '',
        transport_pomesh	: '',
        obrazovatelnih_vospitateln_pomesh	: '',
        pomesh_finans_naznachenia	: '',
        kyltyrno_prosvetit	: '',
        sportivnih_pomesh	: '',
        pomesh_zdravohranenia	: '',
        pomesh_obchepit	: '',
        proizv_pomesh	: '',
        podzem_etaji	: '',
        cokolni_etaj	: '',
        vspomogatel_pomesh	: '',
        mansardnogo_etaja	: '',
        drygih_pomesh	: '',
        dopolnitelnoe_pomeschenie	: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        konstrykcia_ks	: '',
        mat_pola	: '',
        mat_perekr	: '',
        mat_sten	: '',
        okonni_proem	: '',
        mat_krovli	: '',
        vnytr_otdelka_ks	: '',
        vnytr_otdelka_ks2	: '',
        naryj_otdelka_ks	: '',
        naryj_otdelka_ks2	: '',
        elektroznab	: '',
        elektroznab2	: '',
        otoplenie	: '',
        otoplenie2	: '',
        holod_vodosnab	: '',
        holod_vodosnab2	: '',
        goryach_vodosnab	: '',
        goryach_vodosnab2	: '',
        canalis	: '',
        canalis2	: '',
        gasosnab	: '',
        gasosnab2	: '',
        cena_sdelki	: '',
        cena_sdelki2	: '',
        valuta	: '',
        valuta2	: '',
        dolya	: '',
        dolya2	: '',
        opisanie	: '',
        nds	: '',
        biznes	: '',
        auctsion	: '',
        sud	: '',
        privatiz	: '',
        dvizimoe	: '',
        cena_dvizimoe	: '',
        valuta_dvizimoe	: '',
        zachetnoe	: '',
        cena_zachetnoe	: '',
        valuta_zachetnoe	: '',
        rassrochka	: '',
        srok_rassrochka	: '',
        primechaniya	: '',
        nomer_tor	: null,
        cord_x	: '',
        cord_y	: ''
      },
      dataPSKSObj: {
        id	: null,
        status	: '',
        status2	: '',
        inv_num	: '',
        data_sdelki	: '',
        address	: '',
        name_pravoobl	: '',
        kateg_pravoobl	: '',
        naznachenieks	: '',
        naznachenieks2: '',
        naimenovanieks	: '',
        naimenovanieks2	: '',
        kadastr_nomer_zy	: '',
        god_postr	: '',
        god_postr2	: '',
        obsh_ploshad	: '',
        obsh_ploshad2	: '',
        god_reconstr	: '',
        god_reconstr2	: '',
        objem	: '',
        objem2	: '',
        kol_etazh_nadzem	: '',
        kol_etazh_nadzem2	: '',
        normiryema_ploshad	: '',
        normiryema_ploshad2	: '',
        kol_etazh_podzem	: '',
        kol_etazh_podzem2	: '',
        vspomogatel_ploshad	: '',
        vspomogatel_ploshad2	: '',
        iznos	: '',
        iznos2	: '',
        ploshad_zastr	: '',
        ploshad_zastr2	: '',
        data_obsled	: '',
        gotovnost	: '',
        torg_pomesh	: '',
        sklad_pomesh	: '',
        admin_pomesh	: '',
        commynal_pomesh	: '',
        transport_pomesh	: '',
        proizv_pomesh	: '',
        vspomogatel_pomesh	: '',
        drygih_pomesh	: '',
        dopolnitelnoe_pomeschenie	: '',
        ploschad_dopolnitelnih_pomeschenii: '',
        shag_kolon: '',
        konstrykcia_ks	: '',
        mat_pola	: '',
        mat_perekr	: '',
        prolet: '',
        mat_sten	: '',
        okonni_proem	: '',
        mat_krovli	: '',
        mat_fundament: '',
        mat_dver_vnutr: '',
        visota_potolka: '',
        mat_dver_naruzn: '',
        vnytr_otdelka_ks	: '',
        vnytr_otdelka_ks2	: '',
        naryj_otdelka_ks	: '',
        naryj_otdelka_ks2	: '',
        pogruz_razgruz_oborudovanie: '',
        elektroznab	: '',
        elektroznab2	: '',
        otoplenie	: '',
        otoplenie2	: '',
        holod_vodosnab	: '',
        holod_vodosnab2	: '',
        goryach_vodosnab	: '',
        goryach_vodosnab2	: '',
        canalis	: '',
        canalis2	: '',
        gasosnab	: '',
        gasosnab2	: '',
        vent: '',
        vent2: '',
        cena_sdelki	: '',
        cena_sdelki2	: '',
        valuta	: '',
        valuta2	: '',
        dolya	: '',
        dolya2	: '',
        komplex: '',
        komplex2: '',
        obj_komplex: '',
        opisanie	: '',
        nds	: '',
        biznes	: '',
        auctsion	: '',
        sud	: '',
        privatiz	: '',
        dvizimoe	: '',
        cena_dvizimoe	: '',
        valuta_dvizimoe	: '',
        zachetnoe	: '',
        cena_zachetnoe	: '',
        valuta_zachetnoe	: '',
        rassrochka	: '',
        srok_rassrochka	: '',
        primechaniya	: '',
        nomer_tor	: null,
        cord_x	: '',
        cord_y	: ''
      },
      full_name2: "",
      organization2: "",
      post2: "",
      login2: "",
      password2: "",
      phone2: "",
      email2: "",
      id: "",
      nomer_tor: '',
      BdUsers: [],
      BdOrg: [],
      BdOrg_name: [],
      item: {},
      indeterminate: false,
      rolee: [
        'Администратор',
        'Куратор',
        'Пользователь'
      ],
      organizationn: [
        'ГУП "Национальное Кадастровое Агентство"',
        'РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Барановичский филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Берёзовский филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Кобринский филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Лунинецкий филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Пинский филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'Пружанский филиал РУП "Брестское агентство по государственной регистрации и земельному кадастру"',
        'РУП "Витебское агентство по регистрации и земельному кадастру"',
        'Глубокский филиал РУП "Витебское агентство по регистрации и земельному кадастру"',
        'Лепельский филиал РУП "Витебское агентство по регистрации и земельному кадастру"',
        'Оршанский филиал РУП "Витебское агентство по регистрации и земельному кадастру"',
        'Полоцкий филиал РУП "Витебское агентство по регистрации и земельному кадастру"',
        'Гомельский городской филиал РУП "Гомельское агентство по государственной регистрации и земельному кадастру"',
        'Гомельский межгородской филиал РУП "Гомельское агентство по государственной регистрации и земельному кадастру"',
        'Жлобинский филиал РУП "Гомельское агентство по государственной регистрации и земельному кадастру"',
        'Мозырский филиал РУП "Гомельское агентство по государственной регистрации и земельному кадастру"',
        'Речицкий филиал РУП "Гомельское агентство по государственной регистрации и земельному кадастру"',
        'РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'Волковысский филиал РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'Лидский филиал РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'Новогрудский филиал РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'Ошмянский филиал РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'Слонимский филиал РУП "Гродненское агентство по регистрации и земельному кадастру"',
        'РУП "Минское областное агентство по регистрации и земельному кадастру"',
        'Борисовский филиал РУП "Минское областное агентство по регистрации и земельному кадастру"',
        'Дзержинский филиал РУП "Минское областное агентство по регистрации и земельному кадастру"',
        'Молодечненский филиал РУП "Минское областное агентство по регистрации и земельному кадастру"',
        'Слуцкий филиал РУП "Минское областное агентство по регистрации и земельному кадастру"',
        'РУП "Минское городское агентство по государственной регистрации и земельному кадастру"',
        'РУП "Могилевское агентство по государственной регистрации и земельному кадастру"',
        'Бобруйский филиал РУП "Могилевское агентство по государственной регистрации и земельному кадастру"',
        'Горецкий филиал РУП "Могилевское агентство по государственной регистрации и земельному кадастру"',
        'Кричевский филиал РУП "Могилевское агентство по государственной регистрации и земельному кадастру"'
      ]
    }
  },

  BdJM: [],
  ODObj: [],
  ODIPObj: [],
  ODKSObj: [],
  PSObj: [],
  PSIPObj: [],
  PSKSObj: [],
  jso: {},
  itens: 0,
  created() {
    this.auth_geader = {
      Autorization: 'Bearer ' + sessionStorage.getItem("nca_user_token"),
    };
    if ((sessionStorage.getItem("nca_role") != 'Администратор'))
    {
      this.$router.push('/');
    }

    this.initialize();
    this.loadJM();
    this.loadODObj();
    this.loadPSObj();
  },
  computed: {
    form () {
      return {
        login: this.dataUser['login'],
        password: this.dataUser['password'],
        full_name: this.dataUser['full_name'],
        organization: this.dataUser['organization'],
        post: this.dataUser['post'],
        phone: this.dataUser['phone'],
        email: this.dataUser['email'],
        role: this.dataUser['role']
      }
    },
    form2 () {
      return {
        nomer_tor: this.dataOrg['nomer_tor'],
        name: this.dataOrg['name'],
        raion: this.dataOrg['raion']
      }
    },
  },
  methods: {
    nomer_torN: function() {
      this.dataOrg["nomer_tor"] = this.dataOrg["nomer_tor"] != null ? this.dataOrg["nomer_tor"].replace(/[^0-9]/,"") : this.dataOrg["nomer_tor"];
    },
    saveFileUser() {
      this.initialize();
      var opts = [
        {
          sheetid: "Пользователи",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdUser.xlsx",?) FROM ?', [
          opts,
          [this.BdUsers]
        ]);
      }
      catch(error){
        alert("БД Пользоватеелй пуста")
      }
    },
    saveFileJM: async function() {
      this.BdJM = await axios.get("https://82.202.204.7:3333/JM");
      var opts = [
        {
          sheetid: "ЖМ",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdJM.xlsx",?) FROM ?', [
          opts,
          [this.BdJM.data]
        ]);
      }
      catch(error){
        alert("БД ЖМ пуста")
      }  
    },
    saveFileODObj: async function() {
      this.ODObj = await axios.get("https://82.202.204.7:3333/OD");
      var opts = [
        {
          sheetid: "ОД",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdODObj.xlsx",?) FROM ?', [
        opts,
        [this.ODObj.data]
      ]);
      }
      catch(error){
        alert("БД ОД пуста")
      }
    },
    saveFileODIPObj: async function() {
      this.ODIPObj = await axios.get("https://82.202.204.7:3333/ODIP");
      var opts = [
        {
          sheetid: "ОД_сделки_ИП",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdODIPObj.xlsx",?) FROM ?', [
        opts,
        [this.ODIPObj.data]
      ]);
      }
      catch(error){
        alert("БД ОД ИП пуста")
      }
    },
    saveFileODKSObj: async function() {
      this.ODKSObj = await axios.get("https://82.202.204.7:3333/ODKS");
      var opts = [
        {
          sheetid: "ОД_сделки_КС",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdODKSObj.xlsx",?) FROM ?', [
        opts,
        [this.ODKSObj.data]
      ]);
      }
      catch(error){
        alert("БД ОД КС пуста")
      }
    },
    saveFilePSObj: async function() {
      this.PSObj = await axios.get("https://82.202.204.7:3333/PS");
      var opts = [
        {
          sheetid: "ПС",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdPSObj.xlsx",?) FROM ?', [
        opts,
        [this.PSObj.data]
      ]);
      }
      catch(error){
        alert("БД ПС пуста")
      }
    },
    saveFilePSIPObj: async function() {
      this.PSIPObj = await axios.get("https://82.202.204.7:3333/PSIP");
      var opts = [
        {
          sheetid: "ПС_сделки_ИП",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdPSIPObj.xlsx",?) FROM ?', [
        opts,
        [this.PSIPObj.data]
      ]);
      }
      catch(error){
        alert("БД ПС ИП пуста")
      }
    },
    saveFilePSKSObj: async function() {
      this.PSKSObj = await axios.get("https://82.202.204.7:3333/PSKS");
      var opts = [
        {
          sheetid: "ПС_сделки_КС",
          header: true,
        }
      ];
      try {
        var res = alasql('SELECT * INTO XLSX("bdPSKSObj.xlsx",?) FROM ?', [
        opts,
        [this.PSKSObj.data]
      ]);
      }
      catch(error){
        alert("БД ПС КС пуста")
      }
    },
    tojsUser() {
      if (!this.chosenFile) {
          this.sendError = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.dialog2 = false;
        this.sendError2 = true;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.dialog2 = false;
        var ii = 0;
        this.indeterminate= true;
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
        this.sendSuccess2=true;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          
          if(first_sheet_name != "Пользователи") {
            
            this.sendSuccess2=false; 
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];
          this.jso = XLSX.utils.sheet_to_json(worksheet, {
        
          });
          this.chosenFile = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            axios
              .post("users_add",{
                  id: this.dataUser["id"] = this.jso[i].id,
                  login: this.dataUser["login"] = this.jso[i].login!=null ? this.jso[i].login : '',
                  password: this.dataUser["password"] = this.jso[i].password,
                  full_name: this.dataUser["full_name"] = this.jso[i].full_name!=null ? this.jso[i].full_name : '',
                  organization: this.dataUser["organization"] = this.jso[i].organization!=null ? this.jso[i].organization : '',
                  post: this.dataUser["post"] = this.jso[i].post!=null ? this.jso[i].post : '',
                  phone: this.dataUser["phone"] = this.jso[i].phone!=null ? this.jso[i].phone : '',
                  role: this.dataUser["role"] = this.jso[i].role!=null ? this.jso[i].role : '',
                  email: this.dataUser["email"] = this.jso[i].email!=null ? this.jso[i].email : '',
                  nomer_tor: this.dataUser["nomer_tor"] = this.jso[i].nomer_tor,
                  headers: this.auth_geader
              })          
              .then(res => {
                ii += 1;
                if(ii == this.jso.length){
                  this.indeterminate = false;
                    this.sendError = false;
                    this.sendError2 = false;
                    this.sendError3 = false;
                    this.sendCleare = false;
                    this.sendSuccess = false;
                    this.sendSuccess2 = false;
                    this.sendSuccess3 = false;
                    this.sendAdd = false;
                    this.sendDel = false;

                  this.sendSuccess4 = true;
                  setTimeout(() => (this.sendSuccess4 = false), 5000);
                  this.BdUsers = [];
                  this.initialize();
                }
              })
              .catch(function(error) {
                alert("Ошибка при добавлении! в объекте №"+i); 
              });
          }           
        }, 1000);
      }
    },
    tojsJM() {
      setTimeout(() => {
      if (!this.chosenFile1) {
          this.sendError2 = true;
          this.sendError = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.dialog3 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
          this.indeterminate= true;
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendSuccess2=true;    
          this.dialog3 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile1);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ЖМ") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];
          this.jso = XLSX.utils.sheet_to_json(worksheet, {
          });
          this.chosenFile1 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            if(this.jso[i].data_obsled!=null) this.dataJM["data_obsled"] = this.jso[i].data_obsled;
            if(this.jso[i].data_akta!=null) this.dataJM["data_akta"] = this.jso[i].data_akta;
            axios
              .post("JM_add", {
                id: this.dataJM["id"]= this.jso[i].id,
                nomer_tor: this.dataJM["nomer_tor"] = this.jso[i].nomer_tor,
                status: this.dataJM["status"] = this.jso[i].status != null ? this.jso[i].status : '',
                inv_num: this.dataJM["inv_num"] = this.jso[i].inv_num!=null ? this.jso[i].inv_num : '',
                address: this.dataJM["address"] = this.jso[i].address!=null ? this.jso[i].address: '',
                naznachenie: this.dataJM["naznachenie"] = this.jso[i].naznachenie!=null ? this.jso[i].naznachenie : '',
                naimenovanie: this.dataJM["naimenovanie"] = this.jso[i].naimenovanie!=null ? this.jso[i].naimenovanie : '',
                date_sost_tehpas: this.dataJM["date_sost_tehpas"] = this.jso[i].date_sost_tehpas!=null ? this.jso[i].date_sost_tehpas : '',
                god_postr: this.dataJM["god_postr"] = this.jso[i].god_postr!=null ? this.jso[i].god_postr : '',
                objem: this.dataJM["objem"] = this.jso[i].objem!=null ? this.jso[i].objem : '',
                kol_etazh: this.dataJM["kol_etazh"] = this.jso[i].kol_etazh!=null ? this.jso[i].kol_etazh : '',
                kol_kvartir: this.dataJM["kol_kvartir"] = this.jso[i].kol_kvartir!=null ? this.jso[i].kol_kvartir : '',
                obzh_ploshad_zhilih_pomesh: this.dataJM["obzh_ploshad_zhilih_pomesh"] = this.jso[i].obzh_ploshad_zhilih_pomesh!=null ? this.jso[i].obzh_ploshad_zhilih_pomesh : '',
                obzh_ploshad_nezhilih_pomesh: this.dataJM["obzh_ploshad_nezhilih_pomesh"] = this.jso[i].obzh_ploshad_nezhilih_pomesh!=null ? this.jso[i].obzh_ploshad_nezhilih_pomesh : '',
                ploshad_zastr: this.dataJM["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ? this.jso[i].ploshad_zastr : '',
                data_obsled: this.dataJM["data_obsled"] ,
                one_room: this.dataJM["one_room"] = this.jso[i].one_room!=null ? this.jso[i].one_room : '',
                one_room_obsh_ploshad: this.dataJM["one_room_obsh_ploshad"] = this.jso[i].one_room_obsh_ploshad!=null ? this.jso[i].one_room_obsh_ploshad : '',
                two_room: this.dataJM["two_room"] = this.jso[i].two_room!=null ? this.jso[i].two_room : '',
                two_room_obsh_ploshad: this.dataJM["two_room_obsh_ploshad"] = this.jso[i].two_room_obsh_ploshad!=null ? this.jso[i].two_room_obsh_ploshad : '',
                three_room: this.dataJM["three_room"] = this.jso[i].three_room!=null ? this.jso[i].three_room : '',
                three_room_obsh_ploshad: this.dataJM["three_room_obsh_ploshad"] = this.jso[i].three_room_obsh_ploshad!=null ? this.jso[i].three_room_obsh_ploshad : '',
                four_room: this.dataJM["four_room"] = this.jso[i].four_room!=null ? this.jso[i].four_room : '',
                four_room_obsh_ploshad: this.dataJM["four_room_obsh_ploshad"] = this.jso[i].four_room_obsh_ploshad!=null ? this.jso[i].four_room_obsh_ploshad : '',
                five_room: this.dataJM["five_room"] = this.jso[i].five_room!=null ? this.jso[i].five_room : '',
                five_room_obsh_ploshad: this.dataJM["five_room_obsh_ploshad"] = five_room_obsh_ploshad!=null ? this.jso[i].five_room_obsh_ploshad : '',
                bolshe_five_room: this.dataJM["bolshe_five_room"] = this.jso[i].bolshe_five_room!=null ? this.jso[i].bolshe_five_room : '',
                bolshe_five_room_obsh_ploshad: this.dataJM["bolshe_five_room_obsh_ploshad"] = this.jso[i].bolshe_five_room_obsh_ploshad!=null ? this.jso[i].bolshe_five_room_obsh_ploshad : '',
                proizv_pomesh: this.dataJM["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ? this.jso[i].proizv_pomesh : '',
                sklad_pomesh: this.dataJM["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ? this.jso[i].sklad_pomesh : '',
                admin_pomesh: this.dataJM["admin_pomesh"] = this.jso[i].admin_pomesh!=null ? this.jso[i].admin_pomesh : '',
                torg_pomesh: this.dataJM["torg_pomesh"] = this.jso[i].torg_pomesh!=null ? this.jso[i].torg_pomesh : '',
                commynal_pomesh: this.dataJM["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ? this.jso[i].commynal_pomesh : '',
                transport_pomesh:  this.dataJM["transport_pomesh"] = this.jso[i].transport_pomesh!=null ? this.jso[i].transport_pomesh : '',
                vspomogatel_pomesh: this.dataJM["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ? this.jso[i].vspomogatel_pomesh : '',
                drygih_pomesh: this.dataJM["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ? this.jso[i].drygih_pomesh : '',
                mat_perekr: this.dataJM["mat_perekr"] = this.jso[i].mat_perekr!=null ? this.jso[i].mat_perekr : '',
                mat_krovli: this.dataJM["mat_krovli"] = this.jso[i].mat_krovli!=null ? this.jso[i].mat_krovli : '',
                mat_fund: this.dataJM["mat_fund"] = this.jso[i].mat_fund!=null ? this.jso[i].mat_fund : '',
                mat_sten: this.dataJM["mat_sten"] = this.jso[i].mat_sten!=null ? this.jso[i].mat_sten : '',
                elektroznab: this.dataJM["elektroznab"] = this.jso[i].elektroznab!=null ? this.jso[i].elektroznab : '',
                otoplenie: this.dataJM["otoplenie"] = this.jso[i].otoplenie!=null ? this.jso[i].otoplenie : '',
                holod_vodosnab: this.dataJM["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ? this.jso[i].holod_vodosnab : '',
                goryach_vodosnab: this.dataJM["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ? this.jso[i].goryach_vodosnab : '',
                gasosnab: this.dataJM["gasosnab"] = this.jso[i].gasosnab!=null ? this.jso[i].gasosnab : '',
                canalis: this.dataJM["canalis"] = this.jso[i].canalis!=null ? this.jso[i].canalis : '',
                tip_doc: this.dataJM["tip_doc"] = this.jso[i].tip_doc!=null ? this.jso[i].tip_doc : '',
                stoimost_po_psd: this.dataJM["stoimost_po_psd"] = this.jso[i].stoimost_po_psd!=null ? this.jso[i].stoimost_po_psd : '',
                stoimost_osn_fond: this.dataJM["stoimost_osn_fond"] = this.jso[i].stoimost_osn_fond!=null ? this.jso[i].stoimost_osn_fond : '',
                primechaniya: this.dataJM["primechaniya"] = this.jso[i].primechaniya!=null ? this.jso[i].primechaniya : '',
                dopolnitelnoe_pomeschenie: this.dataJM["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ? this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataJM["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ? this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                vid_konstr: this.dataJM["vid_konstr"] = this.jso[i].vid_konstr!=null ? this.jso[i].vid_konstr : '',
                naimenovanie2: this.dataJM["naimenovanie2"] = this.jso[i].naimenovanie2!=null ? this.jso[i].naimenovanie2 : '',
                god_postr2: this.dataJM["god_postr2"] = this.jso[i].god_postr2!=null ? this.jso[i].god_postr2 : '',
                obsh_ploshad2: this.dataJM["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ? this.jso[i].obsh_ploshad2 : '',
                objem2: this.dataJM["objem2"] = this.jso[i].objem2!=null ? this.jso[i].objem2 : '',
                kol_kvartir2: this.dataJM["kol_kvartir2"] = this.jso[i].kol_kvartir2!=null ? this.jso[i].kol_kvartir2 : '',
                obzh_ploshad_zhilih_pomesh2: this.dataJM["obzh_ploshad_zhilih_pomesh2"] = this.jso[i].obzh_ploshad_zhilih_pomesh2!=null ? this.jso[i].obzh_ploshad_zhilih_pomesh2 : '',
                ploshad_zemel2: this.dataJM["ploshad_zemel2"] = this.jso[i].ploshad_zemel2!=null ? this.jso[i].ploshad_zemel2 : '',
                obzh_ploshad_nezhilih_pomesh2: this.dataJM["obzh_ploshad_nezhilih_pomesh2"] = this.jso[i].obzh_ploshad_nezhilih_pomesh2!=null ? this.jso[i].obzh_ploshad_nezhilih_pomesh2 : '',
                ploshad_zastr2: this.dataJM["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ? this.jso[i].ploshad_zastr2 : '',
                elektroznab2: this.dataJM["elektroznab2"] = this.jso[i].elektroznab2!=null ? this.jso[i].elektroznab2 : '',
                otoplenie2: this.dataJM["otoplenie2"] = this.jso[i].otoplenie2!=null ? this.jso[i].otoplenie2 : '',
                holod_vodosnab2: this.dataJM["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ? this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab2: this.dataJM["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ? this.jso[i].goryach_vodosnab2 : '',
                canalis2: this.dataJM["canalis2"] = this.jso[i].canalis2!=null ? this.jso[i].canalis2 : '',
                gasosnab2: this.dataJM["gasosnab2"] = this.jso[i].gasosnab2!=null ? this.jso[i].gasosnab2 : '',
                status2: this.dataJM["status2"] = this.jso[i].status2 != null ? this.jso[i].status2 : '',
                selected: this.dataJM["selected"] = this.jso[i].selected!=null ? this.jso[i].selected : '',
                selected2: this.dataJM["selected2"] = this.jso[i].selected2!=null ? this.jso[i].selected2 : '',
                kol_etazh2: this.dataJM["kol_etazh2"] = this.jso[i].kol_etazh2!=null ? this.jso[i].kol_etazh2 : '',
                obsh_ploshad: this.dataJM["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ? this.jso[i].obsh_ploshad : '',
                ploshad_zemel: this.dataJM["ploshad_zemel"] = this.jso[i].ploshad_zemel != null ? this.jso[i].ploshad_zemel : '',
                data_akta: this.dataJM["data_akta"],
                cord_x: this.dataJM["cord_x"] = this.jso[i].cord_x!=null ? this.jso[i].cord_x : '',
                cord_y: this.dataJM["cord_y"] = this.jso[i].cord_y!=null ? this.jso[i].cord_y : '',
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {                       
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+error); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsODObj() {
      setTimeout(() => {
      if (!this.chosenFile2) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog4 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;    
        this.dialog4 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile2);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ОД") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];

          this.jso = XLSX.utils.sheet_to_json(worksheet, {
          
          });
          this.chosenFile2 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            if(this.jso[i].data_akta!=null) this.dataODObj["data_akta"] = this.jso[i].data_akta;
            if(this.jso[i].data_obsled!=null) this.dataODObj["data_obsled"] = this.jso[i].data_obsled;
            if(this.jso[i].data_sost_teh_pasporta!=null) this.dataODObj["data_sost_teh_pasporta"] = this.jso[i].data_sost_teh_pasporta;
            axios
              .post("ODObj_add", {
                id: this.dataODObj["id"] = this.jso[i].id,
                nomer_tor: this.dataODObj["nomer_tor"] = this.jso[i].nomer_tor,
                address: this.dataODObj["address"] = this.jso[i].address!=null ? this.jso[i].address : '',
                kadastr_nomer_zy: this.dataODObj["kadastr_nomer_zy"] = this.jso[i].kadastr_nomer_zy!=null ? this.jso[i].kadastr_nomer_zy : '',
                naznachenieks: this.dataODObj["naznachenieks"] = this.jso[i].naznachenieks!=null ? this.jso[i].naznachenieks : '',
                naimenovanieks: this.dataODObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ? this.jso[i].naimenovanieks : '',
                naimenovanieks2: this.dataODObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ? this.jso[i].naimenovanieks2 : '',
                god_postr: this.dataODObj["god_postr"] = this.jso[i].god_postr!=null ? this.jso[i].god_postr : '',
                obsh_ploshad: this.dataODObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ? this.jso[i].obsh_ploshad : '',
                kol_etazh_nadzem: this.dataODObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ? this.jso[i].kol_etazh_nadzem : '',
                objem: this.dataODObj["objem"] = this.jso[i].objem!=null ? this.jso[i].objem : '',
                kol_etazh_podzem: this.dataODObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ? this.jso[i].kol_etazh_podzem : '',
                normiryema_ploshad: this.dataODObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ? this.jso[i].normiryema_ploshad : '',
                vspomogatel_ploshad: this.dataODObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                ploshad_zastr: this.dataODObj["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ? this.jso[i].ploshad_zastr : '',
                elektroznab: this.dataODObj["elektroznab"] = this.jso[i].elektroznab!=null ? this.jso[i].elektroznab : '',
                otoplenie: this.dataODObj["otoplenie"] = this.jso[i].otoplenie!=null ? this.jso[i].otoplenie : '',
                holod_vodosnab: this.dataODObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ? this.jso[i].holod_vodosnab : '',
                goryach_vodosnab: this.dataODObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ? this.jso[i].goryach_vodosnab : '',
                canalis: this.dataODObj["canalis"] = this.jso[i].canalis	!=null ? this.jso[i].canalis : '',
                gasosnab: this.dataODObj["gasosnab"] = this.jso[i].gasosnab!=null ? this.jso[i].gasosnab : '',      
                inv_num: this.dataODObj["inv_num"] = this.jso[i].inv_num!=null ? this.jso[i].inv_num : '',
                status: this.dataODObj["status"] = this.jso[i].status!=null ? this.jso[i].status : '',
                status2: this.dataODObj["status2"] = this.jso[i].status2!=null ? this.jso[i].status2 : '',
                kadastr_nomer_zy2: this.dataODObj["kadastr_nomer_zy2"] = this.jso[i].kadastr_nomer_zy2!=null ? this.jso[i].kadastr_nomer_zy2 : '',
                god_postr2: this.dataODObj["god_postr2"] = this.jso[i].god_postr2!=null ? this.jso[i].god_postr2 : '',
                obsh_ploshad2: this.dataODObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ? this.jso[i].obsh_ploshad2 : '',
                kol_etazh_nadzem2	: this.dataODObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ? this.jso[i].kol_etazh_nadzem2 : '',
                objem2: this.dataODObj["objem2"] = this.jso[i].objem2!=null ? this.jso[i].objem2 : '',
                kol_etazh_podzem2: this.dataODObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ? this.jso[i].kol_etazh_podzem2 : '',
                normiryema_ploshad2: this.dataODObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ? this.jso[i].normiryema_ploshad2 : '',
                vspomogatel_ploshad2: this.dataODObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ? this.jso[i].vspomogatel_ploshad2 : '',
                ploshad_zastr2: this.dataODObj["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ? this.jso[i].ploshad_zastr2 : '',
                data_obsled:  this.dataODObj["data_obsled"],
                torg_pomesh: this.dataODObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ? this.jso[i].torg_pomesh : '',
                sklad_pomesh: this.dataODObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ? this.jso[i].sklad_pomesh : '',
                admin_pomesh: this.dataODObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ? this.jso[i].admin_pomesh : '',
                commynal_pomesh: this.dataODObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ? this.jso[i].commynal_pomesh  : '',
                transport_pomesh: this.dataODObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ? this.jso[i].transport_pomesh : '',
                obrazovatelnih_vospitateln_pomesh: this.dataODObj["obrazovatelnih_vospitateln_pomesh"] = this.jso[i].obrazovatelnih_vospitateln_pomesh!=null ? this.jso[i].obrazovatelnih_vospitateln_pomesh : '',
                pomesh_finans_naznachenia: this.dataODObj["pomesh_finans_naznachenia"] = this.jso[i].pomesh_finans_naznachenia!=null ? this.jso[i].pomesh_finans_naznachenia : '',
                kyltyrno_prosvetit: this.dataODObj["kyltyrno_prosvetit"] = this.jso[i].kyltyrno_prosvetit!=null ? this.jso[i].kyltyrno_prosvetit : '',
                sportivnih_pomesh: this.dataODObj["sportivnih_pomesh"] = this.jso[i].sportivnih_pomesh!=null ? this.jso[i].sportivnih_pomesh : '',
                pomesh_zdravohranenia: this.dataODObj["pomesh_zdravohranenia"] = this.jso[i].pomesh_zdravohranenia!=null ? this.jso[i].pomesh_zdravohranenia : '',
                pomesh_obchepit	: this.dataODObj["pomesh_obchepit"] = this.jso[i].pomesh_obchepit	!=null ? this.jso[i].pomesh_obchepit : '',
                proizv_pomesh: this.dataODObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ? this.jso[i].proizv_pomesh : '',
                podzem_etaji: this.dataODObj["podzem_etaji"] = this.jso[i].podzem_etaji!=null ? this.jso[i].podzem_etaji : '',
                cokolni_etaj: this.dataODObj["cokolni_etaj"] = this.jso[i].cokolni_etaj!=null ? this.jso[i].cokolni_etaj : '',
                vspomogatel_pomesh: this.dataODObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ? this.jso[i].vspomogatel_pomesh : '',
                mansardnogo_etaja: this.dataODObj["mansardnogo_etaja"] = this.jso[i].mansardnogo_etaja!=null ? this.jso[i].mansardnogo_etaja : '',
                drygih_pomesh: this.dataODObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ? this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie: this.dataODObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ? this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataODObj["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ? this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                konstrykcia_ks: this.dataODObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ? this.jso[i].konstrykcia_ks : '',
                mat_pola: this.dataODObj["mat_pola"] = this.jso[i].mat_pola!=null ? this.jso[i].mat_pola : '',
                mat_perekr: this.dataODObj["mat_perekr"] = this.jso[i].mat_perekr!=null ? this.jso[i].mat_perekr : '',
                mat_sten: this.dataODObj["mat_sten"] = this.jso[i].mat_sten!=null ? this.jso[i].mat_sten : '',
                okonni_proem: this.dataODObj["okonni_proem"] = this.jso[i].okonni_proem!=null ? this.jso[i].okonni_proem : '',
                mat_krovli: this.dataODObj["mat_krovli"] = this.jso[i].mat_krovli!=null ? this.jso[i].mat_krovli : '',
                vnytr_otdelka_ks: this.dataODObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ? this.jso[i].vnytr_otdelka_ks : '',
                naryj_otdelka_ks: this.dataODObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ? this.jso[i].naryj_otdelka_ks : '',
                vnytr_otdelka_ks2: this.dataODObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ? this.jso[i].vnytr_otdelka_ks2 : '',
                naryj_otdelka_ks2: this.dataODObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ? this.jso[i].naryj_otdelka_ks2 : '',
                elektroznab2	: this.dataODObj["elektroznab2"] = this.jso[i].elektroznab2!=null ? this.jso[i].elektroznab2 : '',
                otoplenie2: this.dataODObj["otoplenie2"] = this.jso[i].otoplenie2!=null ? this.jso[i].otoplenie2 : '',
                holod_vodosnab2: this.dataODObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ? this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab2: this.dataODObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ? this.jso[i].goryach_vodosnab2 : '',
                canalis2	: this.dataODObj["canalis2"] = this.jso[i].canalis2	!=null ? this.jso[i].canalis2 : '',
                gasosnab2: this.dataODObj["gasosnab2"] = this.jso[i].gasosnab2!=null ? this.jso[i].gasosnab2 : '',
                data_sost_teh_pasporta: this.dataODObj["data_sost_teh_pasporta"],
                data_akta: this.dataODObj["data_akta"],
                tip_doc: this.dataODObj["tip_doc"] = this.jso[i].tip_doc!=null ? this.jso[i].tip_doc : '',
                stoimost_po_psd: this.dataODObj["stoimost_po_psd"] = this.jso[i].stoimost_po_psd!=null ? this.jso[i].stoimost_po_psd : '',
                stoimost_osn_fond: this.dataODObj["stoimost_osn_fond"] = this.jso[i].stoimost_osn_fond!=null ? this.jso[i].stoimost_osn_fond : '',
                primechaniya: this.dataODObj["primechaniya"] = this.jso[i].primechaniya!=null ? this.jso[i].primechaniya : '',
                cord_x: this.dataODObj["cord_x"] = this.jso[i].cord_x!=null ? this.jso[i].cord_x : '',
                cord_y: this.dataODObj["cord_y"] = this.jso[i].cord_y!=null ? this.jso[i].cord_y : '',
                selected: this.dataODObj["selected"] = this.jso[i].selected!=null ? this.jso[i].selected : '',
                selected2: this.dataODObj["selected2"] = this.jso[i].selected2!=null ? this.jso[i].selected2 : '',
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {          
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsODIPObj() {
      setTimeout(() => {
      if (!this.chosenFile2_2) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog4 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.dialog4 = false;
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;    
        this.dialog4 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile2_2);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ОД_сделки_ИП") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];
          
          this.jso = XLSX.utils.sheet_to_json(worksheet, {
          });
          this.chosenFile2_2 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            if(this.jso[i].data_obsled!=null) this.dataODIPObj["data_obsled"] = this.jso[i].data_obsled;  
            axios
              .post("ODIPObj_add", {
                id	: this.dataODIPObj["id"] = this.jso[i].id,
                status: this.dataODIPObj["status"] = this.jso[i].status!=null ?  this.jso[i].status : '',
                status2	: this.dataODIPObj["status2"] = this.jso[i].status2!=null ?  this.jso[i].status2 : '',
                inv_num_ip	: this.dataODIPObj["inv_num_ip"] = this.jso[i].inv_num_ip!=null ?  this.jso[i].inv_num_ip : '',
                inv_num	: this.dataODIPObj["inv_num"] = this.jso[i].inv_num!=null ?  this.jso[i].inv_num : '',
                address	: this.dataODIPObj["address"] = this.jso[i].address!=null ?  this.jso[i].address : '',
                data_sdelki	: this.dataODIPObj["data_sdelki"] = this.jso[i].data_sdelki!=null ?  this.jso[i].data_sdelki : '',
                name_pravoobl	: this.dataODIPObj["name_pravoobl"] = this.jso[i].name_pravoobl!=null ?  this.jso[i].name_pravoobl : '',
                kateg_pravoobl	: this.dataODIPObj["kateg_pravoobl"] = this.jso[i].kateg_pravoobl!=null ?  this.jso[i].kateg_pravoobl : '',
                naznachenieip	: this.dataODIPObj["naznachenieip"] = this.jso[i].naznachenieip!=null ?  this.jso[i].naznachenieip : '',
                naimenovanieip	: this.dataODIPObj["naimenovanieip"] = this.jso[i].naimenovanieip!=null ?  this.jso[i].naimenovanieip : '',
                naimenovanieip2	: this.dataODIPObj["naimenovanieip2"] = this.jso[i].naimenovanieip2!=null ?  this.jso[i].naimenovanieip2 : '',
                naznachenieks	: this.dataODIPObj["naznachenieks"] = this.jso[i].naznachenieks!=null ?  this.jso[i].naznachenieks : '',
                naimenovanieks	: this.dataODIPObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ?  this.jso[i].naimenovanieks : '',
                naimenovanieks2	: this.dataODIPObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ?  this.jso[i].naimenovanieks2 : '',
                god_postr	: this.dataODIPObj["god_postr"] = this.jso[i].god_postr!=null ?  this.jso[i].god_postr : '',
                god_postr2	: this.dataODIPObj["god_postr2"] = this.jso[i].god_postr2!=null ?  this.jso[i].god_postr2 : '',
                obsh_ploshad_ip	: this.dataODIPObj["obsh_ploshad_ip"] = this.jso[i].obsh_ploshad_ip!=null ?  this.jso[i].obsh_ploshad_ip : '',
                obsh_ploshad_ip2	: this.dataODIPObj["obsh_ploshad_ip2"] = this.jso[i].obsh_ploshad_ip2!=null ?  this.jso[i].obsh_ploshad_ip2 : '',
                god_reconstr	: this.dataODIPObj["god_reconstr"] = this.jso[i].god_reconstr!=null ?  this.jso[i].god_reconstr : '',
                god_reconstr2	: this.dataODIPObj["god_reconstr2"] = this.jso[i].god_reconstr2!=null ?  this.jso[i].god_reconstr2 : '',
                obsh_ploshad	: this.dataODIPObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ?  this.jso[i].obsh_ploshad : '',
                obsh_ploshad2: this.dataODIPObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ?  this.jso[i].obsh_ploshad2 : '',
                etaj	: this.dataODIPObj["etaj"] = this.jso[i].etaj!=null ?  this.jso[i].etaj : '',
                etaj2	: this.dataODIPObj["etaj2"] = this.jso[i].etaj2!=null ?  this.jso[i].etaj2 : '',
                kol_etazh_nadzem	: this.dataODIPObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ?  this.jso[i].kol_etazh_nadzem : '',
                kol_etazh_nadzem2	: this.dataODIPObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ?  this.jso[i].kol_etazh_nadzem2 : '',
                kol_etazh_podzem	: this.dataODIPObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ?  this.jso[i].kol_etazh_podzem : '',
                kol_etazh_podzem2	: this.dataODIPObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ?  this.jso[i].kol_etazh_podzem2 : '',
                objem_ip	: this.dataODIPObj["objem_ip"] = this.jso[i].objem_ip!=null ?  this.jso[i].objem_ip : '',
                objem_ip2	: this.dataODIPObj["objem_ip2"] = this.jso[i].objem_ip2!=null ?  this.jso[i].objem_ip2 : '',
                iznos	: this.dataODIPObj["iznos"] = this.jso[i].iznos!=null ?  this.jso[i].iznos : '',
                iznos2	: this.dataODIPObj["iznos2"] = this.jso[i].iznos2!=null ?  this.jso[i].iznos2 : '',
                normiryema_ploshad	: this.dataODIPObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ?  this.jso[i].normiryema_ploshad : '',
                normiryema_ploshad2	: this.dataODIPObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ?  this.jso[i].normiryema_ploshad2 : '',
                data_obsled	: this.dataODIPObj["data_obsled"],
                vspomogatel_ploshad	: this.dataODIPObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                vspomogatel_ploshad2	: this.dataODIPObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ?  this.jso[i].vspomogatel_ploshad2 : '',
                torg_pomesh	: this.dataODIPObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ?  this.jso[i].torg_pomesh : '',
                sklad_pomesh	: this.dataODIPObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ?  this.jso[i].sklad_pomesh : '',
                admin_pomesh	: this.dataODIPObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ?  this.jso[i].admin_pomesh : '',
                commynal_pomesh	: this.dataODIPObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ?  this.jso[i].commynal_pomesh : '',
                transport_pomesh	: this.dataODIPObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ?  this.jso[i].transport_pomesh : '',
                obrazovatelnih_vospitateln_pomesh	: this.dataODIPObj["obrazovatelnih_vospitateln_pomesh"] = this.jso[i].obrazovatelnih_vospitateln_pomesh!=null ?  this.jso[i].obrazovatelnih_vospitateln_pomesh : '',
                pomesh_finans_naznachenia	: this.dataODIPObj["pomesh_finans_naznachenia"] = this.jso[i].pomesh_finans_naznachenia!=null ?  this.jso[i].pomesh_finans_naznachenia : '',
                kyltyrno_prosvetit	: this.dataODIPObj["kyltyrno_prosvetit"] = this.jso[i].kyltyrno_prosvetit!=null ?  this.jso[i].kyltyrno_prosvetit : '',
                sportivnih_pomesh	: this.dataODIPObj["sportivnih_pomesh"] = this.jso[i].sportivnih_pomesh!=null ?  this.jso[i].sportivnih_pomesh : '',
                pomesh_zdravohranenia	: this.dataODIPObj["pomesh_zdravohranenia"] = this.jso[i].pomesh_zdravohranenia!=null ?  this.jso[i].pomesh_zdravohranenia : '',
                pomesh_obchepit	: this.dataODIPObj["pomesh_obchepit"] = this.jso[i].pomesh_obchepit!=null ?  this.jso[i].pomesh_obchepit : '',
                proizv_pomesh	: this.dataODIPObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ?  this.jso[i].proizv_pomesh : '',
                podzem_etaji	: this.dataODIPObj["podzem_etaji"] = this.jso[i].podzem_etaji!=null ?  this.jso[i].podzem_etaji : '',
                cokolni_etaj	: this.dataODIPObj["cokolni_etaj"] = this.jso[i].cokolni_etaj!=null ?  this.jso[i].cokolni_etaj : '',
                vspomogatel_pomesh	: this.dataODIPObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ?  this.jso[i].vspomogatel_pomesh : '',
                mansardnogo_etaja	: this.dataODIPObj["mansardnogo_etaja"] = this.jso[i].mansardnogo_etaja!=null ?  this.jso[i].mansardnogo_etaja : '',
                drygih_pomesh	: this.dataODIPObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ?  this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie	: this.dataODIPObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ?  this.jso[i].dopolnitelnoe_pomeschenie : '',
                konstrykcia_ks	: this.dataODIPObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ?  this.jso[i].konstrykcia_ks : '',
                mat_perekr	: this.dataODIPObj["mat_perekr"] = this.jso[i].mat_perekr!=null ?  this.jso[i].mat_perekr : '',
                mat_sten	: this.dataODIPObj["mat_sten"] = this.jso[i].mat_sten!=null ?  this.jso[i].mat_sten : '',
                mat_sten2	: this.dataODIPObj["mat_sten2"] = this.jso[i].mat_sten2!=null ?  this.jso[i].mat_sten2 : '',
                okonni_proem	: this.dataODIPObj["okonni_proem"] = this.jso[i].okonni_proem!=null ?  this.jso[i].okonni_proem : '',
                mat_krovli	: this.dataODIPObj["mat_krovli"] = this.jso[i].mat_krovli!=null ?  this.jso[i].mat_krovli : '',
                vnytr_otdelka_ip	: this.dataODIPObj["vnytr_otdelka_ip"] = this.jso[i].vnytr_otdelka_ip!=null ?  this.jso[i].vnytr_otdelka_ip : '',
                vnytr_otdelka_ip2	: this.dataODIPObj["vnytr_otdelka_ip2"] = this.jso[i].vnytr_otdelka_ip2!=null ?  this.jso[i].vnytr_otdelka_ip2 : '',
                naryj_otdelka_ks	: this.dataODIPObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ?  this.jso[i].naryj_otdelka_ks : '',
                naryj_otdelka_ks2	: this.dataODIPObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ?  this.jso[i].naryj_otdelka_ks2 : '',
                vnytr_otdelka_ks	: this.dataODIPObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ?  this.jso[i].vnytr_otdelka_ks : '',
                vnytr_otdelka_ks2	: this.dataODIPObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ?  this.jso[i].vnytr_otdelka_ks2 : '',
                mat_pola	: this.dataODIPObj["mat_pola"] = this.jso[i].mat_pola!=null ?  this.jso[i].mat_pola : '',
                elektroznab	: this.dataODIPObj["elektroznab"] = this.jso[i].elektroznab!=null ?  this.jso[i].elektroznab : '',
                elektroznab2	: this.dataODIPObj["elektroznab2"] = this.jso[i].elektroznab2!=null ?  this.jso[i].elektroznab2 : '',
                otoplenie	: this.dataODIPObj["otoplenie"] = this.jso[i].otoplenie!=null ?  this.jso[i].otoplenie : '',
                otoplenie2	: this.dataODIPObj["otoplenie2"] = this.jso[i].otoplenie2!=null ?  this.jso[i].otoplenie2 : '',
                holod_vodosnab	: this.dataODIPObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ?  this.jso[i].holod_vodosnab : '',
                holod_vodosnab2	: this.dataODIPObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ?  this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab	: this.dataODIPObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ?  this.jso[i].goryach_vodosnab : '',
                goryach_vodosnab2	: this.dataODIPObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ?  this.jso[i].goryach_vodosnab2 : '',
                canalis	: this.dataODIPObj["canalis"] = this.jso[i].canalis!=null ?  this.jso[i].canalis : '',
                canalis2	: this.dataODIPObj["canalis2"] = this.jso[i].canalis2!=null ?  this.jso[i].canalis2 : '',
                gasosnab	: this.dataODIPObj["gasosnab"] = this.jso[i].gasosnab!=null ?  this.jso[i].gasosnab : '',
                gasosnab2	: this.dataODIPObj["gasosnab2"] = this.jso[i].gasosnab2!=null ?  this.jso[i].gasosnab2 : '',
                cena_sdelki	: this.dataODIPObj["cena_sdelki"] = this.jso[i].cena_sdelki!=null ?  this.jso[i].cena_sdelki : '',
                cena_sdelki2	: this.dataODIPObj["cena_sdelki2"] = this.jso[i].cena_sdelki2!=null ?  this.jso[i].cena_sdelki2 : '',
                valuta	: this.dataODIPObj["valuta"] = this.jso[i].valuta!=null ?  this.jso[i].valuta : '',
                valuta2	: this.dataODIPObj["valuta2"] = this.jso[i].valuta2!=null ?  this.jso[i].valuta2 : '',
                dolya	: this.dataODIPObj["dolya"] = this.jso[i].dolya!=null ?  this.jso[i].dolya : '',
                dolya2	: this.dataODIPObj["dolya2"] = this.jso[i].dolya2!=null ?  this.jso[i].dolya2 : '',
                opisanie	: this.dataODIPObj["opisanie"] = this.jso[i].opisanie!=null ?  this.jso[i].opisanie : '',
                nds	: this.dataODIPObj["nds"] = this.jso[i].nds!=null ?  this.jso[i].nds : '',
                biznes	: this.dataODIPObj["biznes"] = this.jso[i].biznes!=null ?  this.jso[i].biznes : '',
                auctsion	: this.dataODIPObj["auctsion"] = this.jso[i].auctsion!=null ?  this.jso[i].auctsion : '',
                sud	: this.dataODIPObj["sud"] = this.jso[i].sud!=null ?  this.jso[i].sud : '',
                privatiz	: this.dataODIPObj["privatiz"] = this.jso[i].privatiz!=null ?  this.jso[i].privatiz : '',
                dvizimoe	: this.dataODIPObj["dvizimoe"] = this.jso[i].dvizimoe!=null ?  this.jso[i].dvizimoe : '',
                cena_dvizimoe	: this.dataODIPObj["cena_dvizimoe"] = this.jso[i].cena_dvizimoe!=null ?  this.jso[i].cena_dvizimoe : '',
                valuta_dvizimoe	: this.dataODIPObj["valuta_dvizimoe"] = this.jso[i].valuta_dvizimoe!=null ?  this.jso[i].valuta_dvizimoe : '',
                zachetnoe	: this.dataODIPObj["zachetnoe"] = this.jso[i].zachetnoe!=null ?  this.jso[i].zachetnoe : '',
                cena_zachetnoe	: this.dataODIPObj["cena_zachetnoe"] = this.jso[i].cena_zachetnoe!=null ?  this.jso[i].cena_zachetnoe : '',
                valuta_zachetnoe	: this.dataODIPObj["valuta_zachetnoe"] = this.jso[i].valuta_zachetnoe!=null ?  this.jso[i].valuta_zachetnoe : '',
                rassrochka	: this.dataODIPObj["rassrochka"] = this.jso[i].rassrochka!=null ?  this.jso[i].rassrochka : '',
                srok_rassrochka	: this.dataODIPObj["srok_rassrochka"] = this.jso[i].srok_rassrochka!=null ?  this.jso[i].srok_rassrochka : '',
                primechaniya	: this.dataODIPObj["primechaniya"] = this.jso[i].primechaniya!=null ?  this.jso[i].primechaniya : '',
                cord_x	: this.dataODIPObj["cord_x"] = this.jso[i].cord_x!=null ?  this.jso[i].cord_x : '',
                cord_y	: this.dataODIPObj["cord_y"] = this.jso[i].cord_y!=null ?  this.jso[i].cord_y : '',
                nomer_tor: this.dataODIPObj["nomer_tor"] = this.jso[i].nomer_tor,
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {          
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsODKSObj() {
      setTimeout(() => {
      if (!this.chosenFile2_3) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog4 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.dialog4 = false;
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;    
        this.dialog4 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile2_3);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ОД_сделки_КС") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];
          
          this.jso = XLSX.utils.sheet_to_json(worksheet, {
          });
          this.chosenFile2_3 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            if(this.jso[i].data_obsled!=null) this.dataODKSObj["data_obsled"] = this.jso[i].data_obsled;  
            axios
              .post("ODKSObj_add", {
                id	: this.dataODKSObj["id"] = this.jso[i].id,
                status: this.dataODKSObj["status"] = this.jso[i].status!=null ?  this.jso[i].status : '',
                status2	: this.dataODKSObj["status2"] = this.jso[i].status2!=null ?  this.jso[i].status2 : '',
                inv_num	: this.dataODKSObj["inv_num"] = this.jso[i].inv_num!=null ?  this.jso[i].inv_num : '',
                address	: this.dataODKSObj["address"] = this.jso[i].address!=null ?  this.jso[i].address : '',
                data_sdelki	: this.dataODKSObj["data_sdelki"] = this.jso[i].data_sdelki!=null ?  this.jso[i].data_sdelki : '',
                name_pravoobl	: this.dataODKSObj["name_pravoobl"] = this.jso[i].name_pravoobl!=null ?  this.jso[i].name_pravoobl : '',
                kateg_pravoobl	: this.dataODKSObj["kateg_pravoobl"] = this.jso[i].kateg_pravoobl!=null ?  this.jso[i].kateg_pravoobl : '',
                naznachenieks	: this.dataODKSObj["naznachenieks"] = this.jso[i].naznachenieks!=null ?  this.jso[i].naznachenieks : '',
                naznachenieks2	: this.dataODKSObj["naznachenieks2"] = this.jso[i].naznachenieks2!=null ?  this.jso[i].naznachenieks2 : '',
                naimenovanieks	: this.dataODKSObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ?  this.jso[i].naimenovanieks : '',
                naimenovanieks2	: this.dataODKSObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ?  this.jso[i].naimenovanieks2 : '',
                kadastr_nomer_zy : this.dataODKSObj["kadastr_nomer_zy"]= this.jso[i].kadastr_nomer_zy!=null ?  this.jso[i].kadastr_nomer_zy : '',
                god_postr	: this.dataODKSObj["god_postr"] = this.jso[i].god_postr!=null ?  this.jso[i].god_postr : '',
                god_postr2	: this.dataODKSObj["god_postr2"] = this.jso[i].god_postr2!=null ?  this.jso[i].god_postr2 : '',
                obsh_ploshad	: this.dataODKSObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ?  this.jso[i].obsh_ploshad : '',
                obsh_ploshad2	: this.dataODKSObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ?  this.jso[i].obsh_ploshad2 : '',
                god_reconstr	: this.dataODKSObj["god_reconstr"] = this.jso[i].god_reconstr!=null ?  this.jso[i].god_reconstr : '',
                god_reconstr2	: this.dataODKSObj["god_reconstr2"] = this.jso[i].god_reconstr2!=null ?  this.jso[i].god_reconstr2 : '',
                kol_etazh_nadzem	: this.dataODKSObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ?  this.jso[i].kol_etazh_nadzem : '',
                kol_etazh_nadzem2	: this.dataODKSObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ?  this.jso[i].kol_etazh_nadzem2 : '',
                kol_etazh_podzem	: this.dataODKSObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ?  this.jso[i].kol_etazh_podzem : '',
                kol_etazh_podzem2	: this.dataODKSObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ?  this.jso[i].kol_etazh_podzem2 : '',
                objem	: this.dataODKSObj["objem"] = this.jso[i].objem!=null ?  this.jso[i].objem : '',
                objem2	: this.dataODKSObj["objem2"] = this.jso[i].objem2!=null ?  this.jso[i].objem2 : '',
                iznos	: this.dataODKSObj["iznos"] = this.jso[i].iznos!=null ?  this.jso[i].iznos : '',
                iznos2	: this.dataODKSObj["iznos2"] = this.jso[i].iznos2!=null ?  this.jso[i].iznos2 : '',
                normiryema_ploshad	: this.dataODKSObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ?  this.jso[i].normiryema_ploshad : '',
                normiryema_ploshad2	: this.dataODKSObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ?  this.jso[i].normiryema_ploshad2 : '',
                data_obsled	: this.dataODKSObj["data_obsled"],
                ploshad_zastr:this.dataODKSObj["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ?  this.jso[i].ploshad_zastr : '',
                ploshad_zastr2:this.dataODKSObj["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ?  this.jso[i].ploshad_zastr2 : '',
                vspomogatel_ploshad	: this.dataODKSObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                vspomogatel_ploshad2	: this.dataODKSObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ?  this.jso[i].vspomogatel_ploshad2 : '',
                torg_pomesh	: this.dataODKSObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ?  this.jso[i].torg_pomesh : '',
                sklad_pomesh	: this.dataODKSObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ?  this.jso[i].sklad_pomesh : '',
                admin_pomesh	: this.dataODKSObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ?  this.jso[i].admin_pomesh : '',
                commynal_pomesh	: this.dataODKSObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ?  this.jso[i].commynal_pomesh : '',
                transport_pomesh	: this.dataODKSObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ?  this.jso[i].transport_pomesh : '',
                obrazovatelnih_vospitateln_pomesh	: this.dataODKSObj["obrazovatelnih_vospitateln_pomesh"] = this.jso[i].obrazovatelnih_vospitateln_pomesh!=null ?  this.jso[i].obrazovatelnih_vospitateln_pomesh : '',
                pomesh_finans_naznachenia	: this.dataODKSObj["pomesh_finans_naznachenia"] = this.jso[i].pomesh_finans_naznachenia!=null ?  this.jso[i].pomesh_finans_naznachenia : '',
                kyltyrno_prosvetit	: this.dataODKSObj["kyltyrno_prosvetit"] = this.jso[i].kyltyrno_prosvetit!=null ?  this.jso[i].kyltyrno_prosvetit : '',
                sportivnih_pomesh	: this.dataODKSObj["sportivnih_pomesh"] = this.jso[i].sportivnih_pomesh!=null ?  this.jso[i].sportivnih_pomesh : '',
                pomesh_zdravohranenia	: this.dataODKSObj["pomesh_zdravohranenia"] = this.jso[i].pomesh_zdravohranenia!=null ?  this.jso[i].pomesh_zdravohranenia : '',
                pomesh_obchepit	: this.dataODKSObj["pomesh_obchepit"] = this.jso[i].pomesh_obchepit!=null ?  this.jso[i].pomesh_obchepit : '',
                proizv_pomesh	: this.dataODKSObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ?  this.jso[i].proizv_pomesh : '',
                podzem_etaji	: this.dataODKSObj["podzem_etaji"] = this.jso[i].podzem_etaji!=null ?  this.jso[i].podzem_etaji : '',
                cokolni_etaj	: this.dataODKSObj["cokolni_etaj"] = this.jso[i].cokolni_etaj!=null ?  this.jso[i].cokolni_etaj : '',
                vspomogatel_pomesh	: this.dataODKSObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ?  this.jso[i].vspomogatel_pomesh : '',
                mansardnogo_etaja	: this.dataODKSObj["mansardnogo_etaja"] = this.jso[i].mansardnogo_etaja!=null ?  this.jso[i].mansardnogo_etaja : '',
                drygih_pomesh	: this.dataODKSObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ?  this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie	: this.dataODKSObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ?  this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataODKSObj["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ?  this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                konstrykcia_ks	: this.dataODKSObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ?  this.jso[i].konstrykcia_ks : '',
                mat_perekr	: this.dataODKSObj["mat_perekr"] = this.jso[i].mat_perekr!=null ?  this.jso[i].mat_perekr : '',
                mat_sten	: this.dataODKSObj["mat_sten"] = this.jso[i].mat_sten!=null ?  this.jso[i].mat_sten : '',
                okonni_proem	: this.dataODKSObj["okonni_proem"] = this.jso[i].okonni_proem!=null ?  this.jso[i].okonni_proem : '',
                mat_krovli	: this.dataODKSObj["mat_krovli"] = this.jso[i].mat_krovli!=null ?  this.jso[i].mat_krovli : '',
                naryj_otdelka_ks	: this.dataODKSObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ?  this.jso[i].naryj_otdelka_ks : '',
                naryj_otdelka_ks2	: this.dataODKSObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ?  this.jso[i].naryj_otdelka_ks2 : '',
                vnytr_otdelka_ks	: this.dataODKSObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ?  this.jso[i].vnytr_otdelka_ks : '',
                vnytr_otdelka_ks2	: this.dataODKSObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ?  this.jso[i].vnytr_otdelka_ks2 : '',
                mat_pola	: this.dataODKSObj["mat_pola"] = this.jso[i].mat_pola!=null ?  this.jso[i].mat_pola : '',
                elektroznab	: this.dataODKSObj["elektroznab"] = this.jso[i].elektroznab!=null ?  this.jso[i].elektroznab : '',
                elektroznab2	: this.dataODKSObj["elektroznab2"] = this.jso[i].elektroznab2!=null ?  this.jso[i].elektroznab2 : '',
                otoplenie	: this.dataODKSObj["otoplenie"] = this.jso[i].otoplenie!=null ?  this.jso[i].otoplenie : '',
                otoplenie2	: this.dataODKSObj["otoplenie2"] = this.jso[i].otoplenie2!=null ?  this.jso[i].otoplenie2 : '',
                holod_vodosnab	: this.dataODKSObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ?  this.jso[i].holod_vodosnab : '',
                holod_vodosnab2	: this.dataODKSObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ?  this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab	: this.dataODKSObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ?  this.jso[i].goryach_vodosnab : '',
                goryach_vodosnab2	: this.dataODKSObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ?  this.jso[i].goryach_vodosnab2 : '',
                canalis	: this.dataODKSObj["canalis"] = this.jso[i].canalis!=null ?  this.jso[i].canalis : '',
                canalis2	: this.dataODKSObj["canalis2"] = this.jso[i].canalis2!=null ?  this.jso[i].canalis2 : '',
                gasosnab	: this.dataODKSObj["gasosnab"] = this.jso[i].gasosnab!=null ?  this.jso[i].gasosnab : '',
                gasosnab2	: this.dataODKSObj["gasosnab2"] = this.jso[i].gasosnab2!=null ?  this.jso[i].gasosnab2 : '',
                cena_sdelki	: this.dataODKSObj["cena_sdelki"] = this.jso[i].cena_sdelki!=null ?  this.jso[i].cena_sdelki : '',
                cena_sdelki2	: this.dataODKSObj["cena_sdelki2"] = this.jso[i].cena_sdelki2!=null ?  this.jso[i].cena_sdelki2 : '',
                valuta	: this.dataODKSObj["valuta"] = this.jso[i].valuta!=null ?  this.jso[i].valuta : '',
                valuta2	: this.dataODKSObj["valuta2"] = this.jso[i].valuta2!=null ?  this.jso[i].valuta2 : '',
                dolya	: this.dataODKSObj["dolya"] = this.jso[i].dolya!=null ?  this.jso[i].dolya : '',
                dolya2	: this.dataODKSObj["dolya2"] = this.jso[i].dolya2!=null ?  this.jso[i].dolya2 : '',
                opisanie	: this.dataODKSObj["opisanie"] = this.jso[i].opisanie!=null ?  this.jso[i].opisanie : '',
                nds	: this.dataODKSObj["nds"] = this.jso[i].nds!=null ?  this.jso[i].nds : '',
                biznes	: this.dataODKSObj["biznes"] = this.jso[i].biznes!=null ?  this.jso[i].biznes : '',
                auctsion	: this.dataODKSObj["auctsion"] = this.jso[i].auctsion!=null ?  this.jso[i].auctsion : '',
                sud	: this.dataODKSObj["sud"] = this.jso[i].sud!=null ?  this.jso[i].sud : '',
                privatiz	: this.dataODKSObj["privatiz"] = this.jso[i].privatiz!=null ?  this.jso[i].privatiz : '',
                dvizimoe	: this.dataODKSObj["dvizimoe"] = this.jso[i].dvizimoe!=null ?  this.jso[i].dvizimoe : '',
                cena_dvizimoe	: this.dataODKSObj["cena_dvizimoe"] = this.jso[i].cena_dvizimoe!=null ?  this.jso[i].cena_dvizimoe : '',
                valuta_dvizimoe	: this.dataODKSObj["valuta_dvizimoe"] = this.jso[i].valuta_dvizimoe!=null ?  this.jso[i].valuta_dvizimoe : '',
                zachetnoe	: this.dataODKSObj["zachetnoe"] = this.jso[i].zachetnoe!=null ?  this.jso[i].zachetnoe : '',
                cena_zachetnoe	: this.dataODKSObj["cena_zachetnoe"] = this.jso[i].cena_zachetnoe!=null ?  this.jso[i].cena_zachetnoe : '',
                valuta_zachetnoe	: this.dataODKSObj["valuta_zachetnoe"] = this.jso[i].valuta_zachetnoe!=null ?  this.jso[i].valuta_zachetnoe : '',
                rassrochka	: this.dataODKSObj["rassrochka"] = this.jso[i].rassrochka!=null ?  this.jso[i].rassrochka : '',
                srok_rassrochka	: this.dataODKSObj["srok_rassrochka"] = this.jso[i].srok_rassrochka!=null ?  this.jso[i].srok_rassrochka : '',
                primechaniya	: this.dataODKSObj["primechaniya"] = this.jso[i].primechaniya!=null ?  this.jso[i].primechaniya : '',
                cord_x	: this.dataODKSObj["cord_x"] = this.jso[i].cord_x!=null ?  this.jso[i].cord_x : '',
                cord_y	: this.dataODKSObj["cord_y"] = this.jso[i].cord_y!=null ?  this.jso[i].cord_y : '',
                nomer_tor: this.dataODKSObj["nomer_tor"] = this.jso[i].nomer_tor,
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {          
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsPSObj() {
      setTimeout(() => {
      if (!this.chosenFile3) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog5 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;   
        this.dialog5 = false; 
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile3);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ПС") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];

          this.jso = XLSX.utils.sheet_to_json(worksheet, {
           
          });
          this.chosenFile3 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) { 
            if(this.jso[i].data_akta!=null) this.dataPSObj["data_akta"] = this.jso[i].data_akta;
            if(this.jso[i].date_sost_tehpas!=null) this.dataPSObj["date_sost_tehpas"] = this.jso[i].date_sost_tehpas;
            if(this.jso[i].data_obsled!=null) this.dataPSObj["data_obsled"] = this.jso[i].data_obsled;
            axios
              .post("PSObj_add", {
                id: this.dataPSObj["id"] = this.jso[i].id,
                status: this.dataPSObj["status"] = this.jso[i].status!=null ?  this.jso[i].status : '',
                status2: this.dataPSObj["status2"] = this.jso[i].status2!=null ?  this.jso[i].status2 : '',
                inv_num: this.dataPSObj["inv_num"] = this.jso[i].inv_num!=null ?  this.jso[i].inv_num : '',
                address: this.dataPSObj["address"] = this.jso[i].address!=null ?  this.jso[i].address : '',
                naznachenieks: this.dataPSObj["naznachenieks"] = this.jso[i].naznachenieks!=null ?  this.jso[i].naznachenieks : '',
                naimenovanieks: this.dataPSObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ?  this.jso[i].naimenovanieks : '',
                naimenovanieks2: this.dataPSObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ?  this.jso[i].naimenovanieks2 : '',
                kadastr_nomer_zy: this.dataPSObj["kadastr_nomer_zy"] = this.jso[i].kadastr_nomer_zy!=null ?  this.jso[i].kadastr_nomer_zy : '',
                date_sost_tehpas: this.dataPSObj["date_sost_tehpas"] ,
                god_postr: this.dataPSObj["god_postr"] = this.jso[i].god_postr!=null ?  this.jso[i].god_postr : '',
                god_postr2: this.dataPSObj["god_postr2"] = this.jso[i].god_postr2!=null ?  this.jso[i].god_postr2 : '',
                obsh_ploshad: this.dataPSObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ?  this.jso[i].obsh_ploshad : '',
                obsh_ploshad2: this.dataPSObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ?  this.jso[i].obsh_ploshad2 : '',
                kol_etazh_nadzem: this.dataPSObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ?  this.jso[i].kol_etazh_nadzem : '',
                kol_etazh_nadzem2: this.dataPSObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ?  this.jso[i].kol_etazh_nadzem2 : '',
                objem: this.dataPSObj["objem"] = this.jso[i].objem!=null ?  this.jso[i].objem : '',
                objem2: this.dataPSObj["objem2"] = this.jso[i].objem2!=null ?  this.jso[i].objem2 : '',
                kol_etazh_podzem: this.dataPSObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ?  this.jso[i].kol_etazh_podzem : '',
                kol_etazh_podzem2: this.dataPSObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ?  this.jso[i].kol_etazh_podzem2 : '',
                normiryema_ploshad: this.dataPSObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ?  this.jso[i].normiryema_ploshad : '',
                normiryema_ploshad2: this.dataPSObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ?  this.jso[i].normiryema_ploshad2 : '',
                vspomogatel_ploshad: this.dataPSObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                vspomogatel_ploshad2: this.dataPSObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ?  this.jso[i].vspomogatel_ploshad2 : '',
                ploshad_zastr: this.dataPSObj["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ?  this.jso[i].ploshad_zastr : '',
                ploshad_zastr2: this.dataPSObj["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ?  this.jso[i].ploshad_zastr2 : '',
                data_obsled:  this.dataPSObj["data_obsled"],
                proizv_pomesh: this.dataPSObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ?  this.jso[i].proizv_pomesh : '',
                sklad_pomesh: this.dataPSObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ?  this.jso[i].sklad_pomesh : '',
                admin_pomesh: this.dataPSObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ?  this.jso[i].admin_pomesh : '',
                torg_pomesh: this.dataPSObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ?  this.jso[i].torg_pomesh : '',
                commynal_pomesh: this.dataPSObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ?  this.jso[i].commynal_pomesh : '',
                transport_pomesh: this.dataPSObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ?  this.jso[i].transport_pomesh : '',
                vspomogatel_pomesh: this.dataPSObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ?  this.jso[i].vspomogatel_pomesh : '',
                drygih_pomesh: this.dataPSObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ?  this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie: this.dataPSObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ?  this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataPSObj["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ?  this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                shag_kolon: this.dataPSObj["shag_kolon"] = this.jso[i].shag_kolon!=null ?  this.jso[i].shag_kolon : '',
                mat_perekr: this.dataPSObj["mat_perekr"] = this.jso[i].mat_perekr!=null ?  this.jso[i].mat_perekr : '',
                prolet: this.dataPSObj["prolet"] = this.jso[i].prolet!=null ?  this.jso[i].prolet : '',
                mat_krovli: this.dataPSObj["mat_krovli"] = this.jso[i].mat_krovli!=null ?  this.jso[i].mat_krovli : '',
                mat_sten: this.dataPSObj["mat_sten"] = this.jso[i].mat_sten!=null ?  this.jso[i].mat_sten : '',
                konstrykcia_ks: this.dataPSObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ?  this.jso[i].konstrykcia_ks : '',        
                mat_fundament: this.dataPSObj["mat_fundament"] = this.jso[i].mat_fundament!=null ?  this.jso[i].mat_fundament : '',
                mat_dver_vnutr: this.dataPSObj["mat_dver_vnutr"] = this.jso[i].mat_dver_vnutr!=null ?  this.jso[i].mat_dver_vnutr : '',
                visota_potolka: this.dataPSObj["visota_potolka"] = this.jso[i].visota_potolka!=null ?  this.jso[i].visota_potolka : '',
                mat_dver_naruzn: this.dataPSObj["mat_dver_naruzn"] = this.jso[i].mat_dver_naruzn!=null ?  this.jso[i].mat_dver_naruzn : '',
                mat_pola: this.dataPSObj["mat_pola"] = this.jso[i].mat_pola!=null ?  this.jso[i].mat_pola : '',
                okonni_proem: this.dataPSObj["okonni_proem"] = this.jso[i].okonni_proem!=null ?  this.jso[i].okonni_proem : '',
                vnytr_otdelka_ks: this.dataPSObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ?  this.jso[i].vnytr_otdelka_ks : '',
                vnytr_otdelka_ks2: this.dataPSObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ?  this.jso[i].vnytr_otdelka_ks2 : '',
                naryj_otdelka_ks: this.dataPSObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ?  this.jso[i].naryj_otdelka_ks : '',
                naryj_otdelka_ks2: this.dataPSObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ?  this.jso[i].naryj_otdelka_ks2 : '',
                pogruz_razgruz_oborudovanie: this.dataPSObj["pogruz_razgruz_oborudovanie"] = this.jso[i].pogruz_razgruz_oborudovanie!=null ?  this.jso[i].pogruz_razgruz_oborudovanie : '',
                elektroznab: this.dataPSObj["elektroznab"] = this.jso[i].elektroznab!=null ?  this.jso[i].elektroznab : '',
                elektroznab2: this.dataPSObj["elektroznab2"] = this.jso[i].elektroznab2!=null ?  this.jso[i].elektroznab2 : '',
                otoplenie: this.dataPSObj["otoplenie"] = this.jso[i].otoplenie!=null ?  this.jso[i].otoplenie : '',
                otoplenie2: this.dataPSObj["otoplenie2"] = this.jso[i].otoplenie2!=null ?  this.jso[i].otoplenie2 : '',
                holod_vodosnab: this.dataPSObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ?  this.jso[i].holod_vodosnab : '',
                holod_vodosnab2: this.dataPSObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ?  this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab: this.dataPSObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ?  this.jso[i].goryach_vodosnab : '',
                goryach_vodosnab2: this.dataPSObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ?  this.jso[i].goryach_vodosnab2 : '',
                canalis: this.dataPSObj["canalis"] = this.jso[i].canalis	!=null ?  this.jso[i].canalis : '',
                canalis2: this.dataPSObj["canalis2"] = this.jso[i].canalis2	!=null ?  this.jso[i].canalis2 : '',
                gasosnab: this.dataPSObj["gasosnab"] = this.jso[i].gasosnab!=null ?  this.jso[i].gasosnab : '',  
                gasosnab2: this.dataPSObj["gasosnab2"] = this.jso[i].gasosnab2!=null ?  this.jso[i].gasosnab2 : '',
                vent: this.dataPSObj["vent"] = this.jso[i].vent!=null ?  this.jso[i].vent : '',
                vent2: this.dataPSObj["vent2"] = this.jso[i].vent2!=null ?  this.jso[i].vent2 : '',
                data_akta: this.dataPSObj["data_akta"],
                tip_doc: this.dataPSObj["tip_doc"] = this.jso[i].tip_doc!=null ?  this.jso[i].tip_doc : '',
                stoimost_po_psd: this.dataPSObj["stoimost_po_psd"] = this.jso[i].stoimost_po_psd!=null ?  this.jso[i].stoimost_po_psd : '',
                selected: this.dataPSObj["selected"] = this.jso[i].selected!=null ?  this.jso[i].selected : '',
                stoimost_osn_fond: this.dataPSObj["stoimost_osn_fond"] = this.jso[i].stoimost_osn_fond!=null ?  this.jso[i].stoimost_osn_fond : '',
                selected2: this.dataPSObj["selected2"] = this.jso[i].selected2!=null ?  this.jso[i].selected2 : '',
                primechaniya: this.dataPSObj["primechaniya"] = this.jso[i].primechaniya!=null ?  this.jso[i].primechaniya : '', 
                cord_x: this.dataPSObj["cord_x"] = this.jso[i].cord_x!=null ?  this.jso[i].cord_x : '',
                cord_y: this.dataPSObj["cord_y"] = this.jso[i].cord_y!=null ?  this.jso[i].cord_y : '',
                nomer_tor: this.dataPSObj["nomer_tor"] = this.jso[i].nomer_tor,
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)              
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {            
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsPSIPObj() {
      setTimeout(() => {
      if (!this.chosenFile3_2) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog5 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;    
        this.dialog5 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile3_2);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ПС_сделки_ИП") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];

          this.jso = XLSX.utils.sheet_to_json(worksheet, {
           
          });
          this.chosenFile3_2 = '';
        };
        setTimeout(() => {

          for (let i = 0; i < this.jso.length; i++) {
            
            if(this.jso[i].data_obsled!=null) this.dataPSIPObj["data_obsled"] = this.jso[i].data_obsled;  
            axios
              .post("PSIPObj_add", {
                id	: this.dataPSIPObj["id"] = this.jso[i].id,
                status: this.dataPSIPObj["status"] = this.jso[i].status!=null ?  this.jso[i].status : '',
                status2	: this.dataPSIPObj["status2"] = this.jso[i].status2!=null ?  this.jso[i].status2 : '',
                inv_num_ip	: this.dataPSIPObj["inv_num_ip"] = this.jso[i].inv_num_ip!=null ?  this.jso[i].inv_num_ip : '',
                inv_num	: this.dataPSIPObj["inv_num"] = this.jso[i].inv_num!=null ?  this.jso[i].inv_num : '',
                address	: this.dataPSIPObj["address"] = this.jso[i].address!=null ?  this.jso[i].address : '',
                data_sdelki	: this.dataPSIPObj["data_sdelki"] = this.jso[i].data_sdelki!=null ?  this.jso[i].data_sdelki : '',
                name_pravoobl	: this.dataPSIPObj["name_pravoobl"] = this.jso[i].name_pravoobl!=null ?  this.jso[i].name_pravoobl : '',
                kateg_pravoobl	: this.dataPSIPObj["kateg_pravoobl"] = this.jso[i].kateg_pravoobl!=null ?  this.jso[i].kateg_pravoobl : '',
                naznachenieip	: this.dataPSIPObj["naznachenieip"] = this.jso[i].naznachenieip!=null ?  this.jso[i].naznachenieip : '',
                naimenovanieip	: this.dataPSIPObj["naimenovanieip"] = this.jso[i].naimenovanieip!=null ?  this.jso[i].naimenovanieip : '',
                naimenovanieip2	: this.dataPSIPObj["naimenovanieip2"] = this.jso[i].naimenovanieip2!=null ?  this.jso[i].naimenovanieip2 : '',
                naznachenieks	: this.dataPSIPObj["naznachenieks"] = this.jso[i].naznachenieks!=null ?  this.jso[i].naznachenieks : '',
                naimenovanieks	: this.dataPSIPObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ?  this.jso[i].naimenovanieks : '',
                naimenovanieks2	: this.dataPSIPObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ?  this.jso[i].naimenovanieks2 : '',
                god_postr	: this.dataPSIPObj["god_postr"] = this.jso[i].god_postr!=null ?  this.jso[i].god_postr : '',
                god_postr2	: this.dataPSIPObj["god_postr2"] = this.jso[i].god_postr2!=null ?  this.jso[i].god_postr2 : '',
                obsh_ploshad_ip	: this.dataPSIPObj["obsh_ploshad_ip"] = this.jso[i].obsh_ploshad_ip!=null ?  this.jso[i].obsh_ploshad_ip : '',
                obsh_ploshad_ip2	: this.dataPSIPObj["obsh_ploshad_ip2"] = this.jso[i].obsh_ploshad_ip2!=null ?  this.jso[i].obsh_ploshad_ip2 : '',
                god_reconstr	: this.dataPSIPObj["god_reconstr"] = this.jso[i].god_reconstr!=null ?  this.jso[i].god_reconstr : '',
                god_reconstr2	: this.dataPSIPObj["god_reconstr2"] = this.jso[i].god_reconstr2!=null ?  this.jso[i].god_reconstr2 : '',
                obsh_ploshad	: this.dataPSIPObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ?  this.jso[i].obsh_ploshad : '',
                obsh_ploshad2: this.dataPSIPObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ?  this.jso[i].obsh_ploshad2 : '',
                etaj	: this.dataPSIPObj["etaj"] = this.jso[i].etaj!=null ?  this.jso[i].etaj : '',
                etaj2	: this.dataPSIPObj["etaj2"] = this.jso[i].etaj2!=null ?  this.jso[i].etaj2 : '',
                kol_etazh_nadzem	: this.dataPSIPObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ?  this.jso[i].kol_etazh_nadzem : '',
                kol_etazh_nadzem2	: this.dataPSIPObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ?  this.jso[i].kol_etazh_nadzem2 : '',
                kol_etazh_podzem	: this.dataPSIPObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ?  this.jso[i].kol_etazh_podzem : '',
                kol_etazh_podzem2	: this.dataPSIPObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ?  this.jso[i].kol_etazh_podzem2 : '',
                objem_ip	: this.dataPSIPObj["objem_ip"] = this.jso[i].objem_ip!=null ?  this.jso[i].objem_ip : '',
                objem_ip2	: this.dataPSIPObj["objem_ip2"] = this.jso[i].objem_ip2!=null ?  this.jso[i].objem_ip2 : '',
                iznos	: this.dataPSIPObj["iznos"] = this.jso[i].iznos!=null ?  this.jso[i].iznos : '',
                iznos2	: this.dataPSIPObj["iznos2"] = this.jso[i].iznos2!=null ?  this.jso[i].iznos2 : '',
                ploshad_zastr: this.dataPSIPObj["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ?  this.jso[i].ploshad_zastr : '',
                ploshad_zastr2: this.dataPSIPObj["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ?  this.jso[i].ploshad_zastr2 : '',
                gotovnost: this.dataPSIPObj["gotovnost"] = this.jso[i].gotovnost!=null ?  this.jso[i].gotovnost : '',
                normiryema_ploshad	: this.dataPSIPObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ?  this.jso[i].normiryema_ploshad : '',
                normiryema_ploshad2	: this.dataPSIPObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ?  this.jso[i].normiryema_ploshad2 : '',
                data_obsled	: this.dataPSIPObj["data_obsled"],
                vspomogatel_ploshad	: this.dataPSIPObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                vspomogatel_ploshad2	: this.dataPSIPObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ?  this.jso[i].vspomogatel_ploshad2 : '',
                torg_pomesh	: this.dataPSIPObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ?  this.jso[i].torg_pomesh : '',
                sklad_pomesh	: this.dataPSIPObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ?  this.jso[i].sklad_pomesh : '',
                admin_pomesh	: this.dataPSIPObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ?  this.jso[i].admin_pomesh : '',
                commynal_pomesh	: this.dataPSIPObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ?  this.jso[i].commynal_pomesh : '',
                transport_pomesh	: this.dataPSIPObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ?  this.jso[i].transport_pomesh : '',
                proizv_pomesh	: this.dataPSIPObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ?  this.jso[i].proizv_pomesh : '',
                vspomogatel_pomesh	: this.dataPSIPObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ?  this.jso[i].vspomogatel_pomesh : '',
                drygih_pomesh	: this.dataPSIPObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ?  this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie	: this.dataPSIPObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ?  this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataPSIPObj["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ?  this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                konstrykcia_ks	: this.dataPSIPObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ?  this.jso[i].konstrykcia_ks : '',
                mat_perekr	: this.dataPSIPObj["mat_perekr"] = this.jso[i].mat_perekr!=null ?  this.jso[i].mat_perekr : '',
                prolet: this.dataPSIPObj["prolet"] = this.jso[i].prolet!=null ?  this.jso[i].prolet : '',
                mat_sten	: this.dataPSIPObj["mat_sten"] = this.jso[i].mat_sten!=null ?  this.jso[i].mat_sten : '',
                okonni_proem	: this.dataPSIPObj["okonni_proem"] = this.jso[i].okonni_proem!=null ?  this.jso[i].okonni_proem : '',
                mat_krovli	: this.dataPSIPObj["mat_krovli"] = this.jso[i].mat_krovli!=null ?  this.jso[i].mat_krovli : '',
                mat_fundament: this.dataPSIPObj["mat_fundament"] = this.jso[i].mat_fundament!=null ?  this.jso[i].mat_fundament : '',
                mat_dver_vnutr: this.dataPSIPObj["mat_dver_vnutr"] = this.jso[i].mat_dver_vnutr!=null ?  this.jso[i].mat_dver_vnutr : '',
                visota_potolka: this.dataPSIPObj["visota_potolka"] = this.jso[i].visota_potolka!=null ?  this.jso[i].visota_potolka : '',
                mat_dver_naruzn: this.dataPSIPObj["mat_dver_naruzn"] = this.jso[i].mat_dver_naruzn!=null ?  this.jso[i].mat_dver_naruzn : '',
                vnytr_otdelka_ip	: this.dataPSIPObj["vnytr_otdelka_ip"] = this.jso[i].vnytr_otdelka_ip!=null ?  this.jso[i].vnytr_otdelka_ip : '',
                vnytr_otdelka_ip2	: this.dataPSIPObj["vnytr_otdelka_ip2"] = this.jso[i].vnytr_otdelka_ip2!=null ?  this.jso[i].vnytr_otdelka_ip2 : '',
                naryj_otdelka_ks	: this.dataPSIPObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ?  this.jso[i].naryj_otdelka_ks : '',
                naryj_otdelka_ks2	: this.dataPSIPObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ?  this.jso[i].naryj_otdelka_ks2 : '',
                vnytr_otdelka_ks	: this.dataPSIPObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ?  this.jso[i].vnytr_otdelka_ks : '',
                vnytr_otdelka_ks2	: this.dataPSIPObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ?  this.jso[i].vnytr_otdelka_ks2 : '',
                pogruz_razgruz_oborudovanie: this.dataPSIPObj["pogruz_razgruz_oborudovanie"] = this.jso[i].pogruz_razgruz_oborudovanie!=null ?  this.jso[i].pogruz_razgruz_oborudovanie : '',
                mat_pola	: this.dataPSIPObj["mat_pola"] = this.jso[i].mat_pola!=null ?  this.jso[i].mat_pola : '',
                shag_kolon: this.dataPSIPObj["shag_kolon"] = this.jso[i].shag_kolon!=null ?  this.jso[i].shag_kolon : '',
                elektroznab	: this.dataPSIPObj["elektroznab"] = this.jso[i].elektroznab!=null ?  this.jso[i].elektroznab : '',
                elektroznab2	: this.dataPSIPObj["elektroznab2"] = this.jso[i].elektroznab2!=null ?  this.jso[i].elektroznab2 : '',
                otoplenie	: this.dataPSIPObj["otoplenie"] = this.jso[i].otoplenie!=null ?  this.jso[i].otoplenie : '',
                otoplenie2	: this.dataPSIPObj["otoplenie2"] = this.jso[i].otoplenie2!=null ?  this.jso[i].otoplenie2 : '',
                holod_vodosnab	: this.dataPSIPObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ?  this.jso[i].holod_vodosnab : '',
                holod_vodosnab2	: this.dataPSIPObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ?  this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab	: this.dataPSIPObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ?  this.jso[i].goryach_vodosnab : '',
                goryach_vodosnab2	: this.dataPSIPObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ?  this.jso[i].goryach_vodosnab2 : '',
                canalis	: this.dataPSIPObj["canalis"] = this.jso[i].canalis!=null ?  this.jso[i].canalis : '',
                canalis2	: this.dataPSIPObj["canalis2"] = this.jso[i].canalis2!=null ?  this.jso[i].canalis2 : '',
                gasosnab	: this.dataPSIPObj["gasosnab"] = this.jso[i].gasosnab!=null ?  this.jso[i].gasosnab : '',
                gasosnab2	: this.dataPSIPObj["gasosnab2"] = this.jso[i].gasosnab2!=null ?  this.jso[i].gasosnab2 : '',
                vent: this.dataPSIPObj["vent"] = this.jso[i].vent!=null ?  this.jso[i].vent : '',
                vent2: this.dataPSIPObj["vent2"] = this.jso[i].vent2!=null ?  this.jso[i].vent2 : '',
                cena_sdelki	: this.dataPSIPObj["cena_sdelki"] = this.jso[i].cena_sdelki!=null ?  this.jso[i].cena_sdelki : '',
                cena_sdelki2	: this.dataPSIPObj["cena_sdelki2"] = this.jso[i].cena_sdelki2!=null ?  this.jso[i].cena_sdelki2 : '',
                valuta	: this.dataPSIPObj["valuta"] = this.jso[i].valuta!=null ?  this.jso[i].valuta : '',
                valuta2	: this.dataPSIPObj["valuta2"] = this.jso[i].valuta2!=null ?  this.jso[i].valuta2 : '',
                dolya	: this.dataPSIPObj["dolya"] = this.jso[i].dolya!=null ?  this.jso[i].dolya : '',
                dolya2	: this.dataPSIPObj["dolya2"] = this.jso[i].dolya2!=null ?  this.jso[i].dolya2 : '',
                prodaja_v_komplekse: this.dataPSIPObj["prodaja_v_komplekse"] = this.jso[i].prodaja_v_komplekse ? this.jso[i].prodaja_v_komplekse: '',
                prodaja_v_komplekse2: this.dataPSIPObj["prodaja_v_komplekse2"] = this.jso[i].prodaja_v_komplekse2 ? this.jso[i].prodaja_v_komplekse2: '',
                inv_num_v_komplekse: this.dataPSIPObj["inv_num_v_komplekse"] = this.jso[i].inv_num_v_komplekse ? this.jso[i].inv_num_v_komplekse: '',
                opisanie	: this.dataPSIPObj["opisanie"] = this.jso[i].opisanie!=null ?  this.jso[i].opisanie : '',
                nds	: this.dataPSIPObj["nds"] = this.jso[i].nds!=null ?  this.jso[i].nds : '',
                biznes	: this.dataPSIPObj["biznes"] = this.jso[i].biznes!=null ?  this.jso[i].biznes : '',
                auctsion	: this.dataPSIPObj["auctsion"] = this.jso[i].auctsion!=null ?  this.jso[i].auctsion : '',
                sud	: this.dataPSIPObj["sud"] = this.jso[i].sud!=null ?  this.jso[i].sud : '',
                privatiz	: this.dataPSIPObj["privatiz"] = this.jso[i].privatiz!=null ?  this.jso[i].privatiz : '',
                dvizimoe	: this.dataPSIPObj["dvizimoe"] = this.jso[i].dvizimoe!=null ?  this.jso[i].dvizimoe : '',
                cena_dvizimoe	: this.dataPSIPObj["cena_dvizimoe"] = this.jso[i].cena_dvizimoe!=null ?  this.jso[i].cena_dvizimoe : '',
                valuta_dvizimoe	: this.dataPSIPObj["valuta_dvizimoe"] = this.jso[i].valuta_dvizimoe!=null ?  this.jso[i].valuta_dvizimoe : '',
                zachetnoe	: this.dataPSIPObj["zachetnoe"] = this.jso[i].zachetnoe!=null ?  this.jso[i].zachetnoe : '',
                cena_zachetnoe	: this.dataPSIPObj["cena_zachetnoe"] = this.jso[i].cena_zachetnoe!=null ?  this.jso[i].cena_zachetnoe : '',
                valuta_zachetnoe	: this.dataPSIPObj["valuta_zachetnoe"] = this.jso[i].valuta_zachetnoe!=null ?  this.jso[i].valuta_zachetnoe : '',
                rassrochka	: this.dataPSIPObj["rassrochka"] = this.jso[i].rassrochka!=null ?  this.jso[i].rassrochka : '',
                srok_rassrochka	: this.dataPSIPObj["srok_rassrochka"] = this.jso[i].srok_rassrochka!=null ?  this.jso[i].srok_rassrochka : '',
                primechaniya	: this.dataPSIPObj["primechaniya"] = this.jso[i].primechaniya!=null ?  this.jso[i].primechaniya : '',
                cord_x	: this.dataPSIPObj["cord_x"] = this.jso[i].cord_x!=null ?  this.jso[i].cord_x : '',
                cord_y	: this.dataPSIPObj["cord_y"] = this.jso[i].cord_y!=null ?  this.jso[i].cord_y : '',
                nomer_tor: this.dataPSIPObj["nomer_tor"] = this.jso[i].nomer_tor,
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)              
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {            
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    tojsPSKSObj() {
      setTimeout(() => {
      if (!this.chosenFile3_3) {
        this.sendError = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess2 = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendError2 = true;
        this.dialog5 = false;
        setTimeout(() => (this.sendError2 = false), 5000); 
      } else {
        this.dialog4 = false;
        this.indeterminate= true;
        this.sendError = false;
        this.sendError2 = false;
        this.sendError3 = false;
        this.sendCleare = false;
        this.sendSuccess = false;
        this.sendSuccess3 = false;
        this.sendSuccess4 = false;
        this.sendAdd = false;
        this.sendDel = false;
        this.sendSuccess2=true;    
        this.dialog5 = false;
        var ii = 0;
        var reader = new FileReader();
        reader.readAsBinaryString(this.chosenFile3_3);
        reader.onload = () => {
          var workbook = XLSX.read(reader.result, {
            type: "binary"
          });
          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          if(first_sheet_name != "ПС_сделки_КС") {
            this.sendError = false;
            this.sendError2 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
            this.sendError3 = true;
            this.indeterminate= false;
            setTimeout(() => (this.sendError3 = false), 5000); 
            return;
          }
          /* Get worksheet */
          var worksheet = workbook.Sheets[first_sheet_name];
          
          this.jso = XLSX.utils.sheet_to_json(worksheet, {
          });
          this.chosenFile3_3 = ''
        };
        setTimeout(() => {
          for (let i = 0; i < this.jso.length; i++) {
            if(this.jso[i].data_obsled!=null) this.dataPSKSObj["data_obsled"] = this.jso[i].data_obsled;  
            axios
              .post("PSKSObj_add", {
                id	: this.dataPSKSObj["id"] = this.jso[i].id,
                status: this.dataPSKSObj["status"] = this.jso[i].status!=null ?  this.jso[i].status : '',
                status2	: this.dataPSKSObj["status2"] = this.jso[i].status2!=null ?  this.jso[i].status2 : '',
                inv_num	: this.dataPSKSObj["inv_num"] = this.jso[i].inv_num!=null ?  this.jso[i].inv_num : '',
                address	: this.dataPSKSObj["address"] = this.jso[i].address!=null ?  this.jso[i].address : '',
                data_sdelki	: this.dataPSKSObj["data_sdelki"] = this.jso[i].data_sdelki!=null ?  this.jso[i].data_sdelki : '',
                name_pravoobl	: this.dataPSKSObj["name_pravoobl"] = this.jso[i].name_pravoobl!=null ?  this.jso[i].name_pravoobl : '',
                kateg_pravoobl	: this.dataPSKSObj["kateg_pravoobl"] = this.jso[i].kateg_pravoobl!=null ?  this.jso[i].kateg_pravoobl : '',
                naznachenieks	: this.dataPSKSObj["naznachenieks"] = this.jso[i].naznachenieks!=null ?  this.jso[i].naznachenieks : '',
                naznachenieks2	: this.dataPSKSObj["naznachenieks2"] = this.jso[i].naznachenieks2!=null ?  this.jso[i].naznachenieks2 : '',
                naimenovanieks	: this.dataPSKSObj["naimenovanieks"] = this.jso[i].naimenovanieks!=null ?  this.jso[i].naimenovanieks : '',
                naimenovanieks2	: this.dataPSKSObj["naimenovanieks2"] = this.jso[i].naimenovanieks2!=null ?  this.jso[i].naimenovanieks2 : '',
                kadastr_nomer_zy : this.dataPSKSObj["kadastr_nomer_zy"]= this.jso[i].kadastr_nomer_zy!=null ?  this.jso[i].kadastr_nomer_zy : '',
                god_postr	: this.dataPSKSObj["god_postr"] = this.jso[i].god_postr!=null ?  this.jso[i].god_postr : '',
                god_postr2	: this.dataPSKSObj["god_postr2"] = this.jso[i].god_postr2!=null ?  this.jso[i].god_postr2 : '',
                obsh_ploshad	: this.dataPSKSObj["obsh_ploshad"] = this.jso[i].obsh_ploshad!=null ?  this.jso[i].obsh_ploshad : '',
                obsh_ploshad2	: this.dataPSKSObj["obsh_ploshad2"] = this.jso[i].obsh_ploshad2!=null ?  this.jso[i].obsh_ploshad2 : '',
                god_reconstr	: this.dataPSKSObj["god_reconstr"] = this.jso[i].god_reconstr!=null ?  this.jso[i].god_reconstr : '',
                god_reconstr2	: this.dataPSKSObj["god_reconstr2"] = this.jso[i].god_reconstr2!=null ?  this.jso[i].god_reconstr2 : '',
                kol_etazh_nadzem	: this.dataPSKSObj["kol_etazh_nadzem"] = this.jso[i].kol_etazh_nadzem!=null ?  this.jso[i].kol_etazh_nadzem : '',
                kol_etazh_nadzem2	: this.dataPSKSObj["kol_etazh_nadzem2"] = this.jso[i].kol_etazh_nadzem2!=null ?  this.jso[i].kol_etazh_nadzem2 : '',
                kol_etazh_podzem	: this.dataPSKSObj["kol_etazh_podzem"] = this.jso[i].kol_etazh_podzem!=null ?  this.jso[i].kol_etazh_podzem : '',
                kol_etazh_podzem2	: this.dataPSKSObj["kol_etazh_podzem2"] = this.jso[i].kol_etazh_podzem2!=null ?  this.jso[i].kol_etazh_podzem2 : '',
                objem	: this.dataPSKSObj["objem"] = this.jso[i].objem!=null ?  this.jso[i].objem : '',
                objem2	: this.dataPSKSObj["objem2"] = this.jso[i].objem2!=null ?  this.jso[i].objem2 : '',
                iznos	: this.dataPSKSObj["iznos"] = this.jso[i].iznos!=null ?  this.jso[i].iznos : '',
                iznos2	: this.dataPSKSObj["iznos2"] = this.jso[i].iznos2!=null ?  this.jso[i].iznos2 : '',
                normiryema_ploshad	: this.dataPSKSObj["normiryema_ploshad"] = this.jso[i].normiryema_ploshad!=null ?  this.jso[i].normiryema_ploshad : '',
                normiryema_ploshad2	: this.dataPSKSObj["normiryema_ploshad2"] = this.jso[i].normiryema_ploshad2!=null ?  this.jso[i].normiryema_ploshad2 : '',
                data_obsled	: this.dataPSKSObj["data_obsled"],
                ploshad_zastr:this.dataPSKSObj["ploshad_zastr"] = this.jso[i].ploshad_zastr!=null ?  this.jso[i].ploshad_zastr : '',
                ploshad_zastr2:this.dataPSKSObj["ploshad_zastr2"] = this.jso[i].ploshad_zastr2!=null ?  this.jso[i].ploshad_zastr2 : '',
                gotovnost: this.dataPSKSObj["gotovnost"] = this.jso[i].gotovnost!=null ?  this.jso[i].gotovnost : '',
                vspomogatel_ploshad	: this.dataPSKSObj["vspomogatel_ploshad"] = this.jso[i].vspomogatel_ploshad!=null ?  this.jso[i].vspomogatel_ploshad : '',
                vspomogatel_ploshad2	: this.dataPSKSObj["vspomogatel_ploshad2"] = this.jso[i].vspomogatel_ploshad2!=null ?  this.jso[i].vspomogatel_ploshad2 : '',
                torg_pomesh	: this.dataPSKSObj["torg_pomesh"] = this.jso[i].torg_pomesh!=null ?  this.jso[i].torg_pomesh : '',
                sklad_pomesh	: this.dataPSKSObj["sklad_pomesh"] = this.jso[i].sklad_pomesh!=null ?  this.jso[i].sklad_pomesh : '',
                admin_pomesh	: this.dataPSKSObj["admin_pomesh"] = this.jso[i].admin_pomesh!=null ?  this.jso[i].admin_pomesh : '',
                commynal_pomesh	: this.dataPSKSObj["commynal_pomesh"] = this.jso[i].commynal_pomesh!=null ?  this.jso[i].commynal_pomesh : '',
                transport_pomesh	: this.dataPSKSObj["transport_pomesh"] = this.jso[i].transport_pomesh!=null ?  this.jso[i].transport_pomesh : '',
                proizv_pomesh	: this.dataPSKSObj["proizv_pomesh"] = this.jso[i].proizv_pomesh!=null ?  this.jso[i].proizv_pomesh : '',
                vspomogatel_pomesh	: this.dataPSKSObj["vspomogatel_pomesh"] = this.jso[i].vspomogatel_pomesh!=null ?  this.jso[i].vspomogatel_pomesh : '',
                drygih_pomesh	: this.dataPSKSObj["drygih_pomesh"] = this.jso[i].drygih_pomesh!=null ?  this.jso[i].drygih_pomesh : '',
                dopolnitelnoe_pomeschenie	: this.dataPSKSObj["dopolnitelnoe_pomeschenie"] = this.jso[i].dopolnitelnoe_pomeschenie!=null ?  this.jso[i].dopolnitelnoe_pomeschenie : '',
                ploschad_dopolnitelnih_pomeschenii: this.dataPSKSObj["ploschad_dopolnitelnih_pomeschenii"] = this.jso[i].ploschad_dopolnitelnih_pomeschenii!=null ?  this.jso[i].ploschad_dopolnitelnih_pomeschenii : '',
                konstrykcia_ks	: this.dataPSKSObj["konstrykcia_ks"] = this.jso[i].konstrykcia_ks!=null ?  this.jso[i].konstrykcia_ks : '',
                shag_kolon	: this.dataPSKSObj["shag_kolon"] = this.jso[i].shag_kolon!=null ?  this.jso[i].shag_kolon : '',
                mat_perekr	: this.dataPSKSObj["mat_perekr"] = this.jso[i].mat_perekr!=null ?  this.jso[i].mat_perekr : '',	
                mat_sten	: this.dataPSKSObj["mat_sten"] = this.jso[i].mat_sten!=null ?  this.jso[i].mat_sten : '',
                prolet		: this.dataPSKSObj["prolet"] = this.jso[i].prolet	!=null ?  this.jso[i].prolet	 : '',	
                okonni_proem	: this.dataPSKSObj["okonni_proem"] = this.jso[i].okonni_proem!=null ?  this.jso[i].okonni_proem : '',
                mat_krovli	: this.dataPSKSObj["mat_krovli"] = this.jso[i].mat_krovli!=null ?  this.jso[i].mat_krovli : '',
                naryj_otdelka_ks	: this.dataPSKSObj["naryj_otdelka_ks"] = this.jso[i].naryj_otdelka_ks!=null ?  this.jso[i].naryj_otdelka_ks : '',
                naryj_otdelka_ks2	: this.dataPSKSObj["naryj_otdelka_ks2"] = this.jso[i].naryj_otdelka_ks2!=null ?  this.jso[i].naryj_otdelka_ks2 : '',
                vnytr_otdelka_ks	: this.dataPSKSObj["vnytr_otdelka_ks"] = this.jso[i].vnytr_otdelka_ks!=null ?  this.jso[i].vnytr_otdelka_ks : '',
                vnytr_otdelka_ks2	: this.dataPSKSObj["vnytr_otdelka_ks2"] = this.jso[i].vnytr_otdelka_ks2!=null ?  this.jso[i].vnytr_otdelka_ks2 : '',
                mat_fundament: this.dataPSKSObj["mat_fundament"] = this.jso[i].mat_fundament!=null ?  this.jso[i].mat_fundament : '',
                mat_dver_vnutr: this.dataPSKSObj["mat_dver_vnutr"] = this.jso[i].mat_dver_vnutr!=null ?  this.jso[i].mat_dver_vnutr : '',
                visota_potolka: this.dataPSKSObj["visota_potolka"] = this.jso[i].visota_potolka!=null ?  this.jso[i].visota_potolka : '',
                mat_dver_naruzn: this.dataPSKSObj["mat_dver_naruzn"] = this.jso[i].mat_dver_naruzn!=null ?  this.jso[i].mat_dver_naruzn : '',
                pogruz_razgruz_oborudovanie: this.dataPSKSObj["pogruz_razgruz_oborudovanie"] = this.jso[i].pogruz_razgruz_oborudovanie!=null ?  this.jso[i].pogruz_razgruz_oborudovanie : '',
                mat_pola	: this.dataPSKSObj["mat_pola"] = this.jso[i].mat_pola!=null ?  this.jso[i].mat_pola : '',
                elektroznab	: this.dataPSKSObj["elektroznab"] = this.jso[i].elektroznab!=null ?  this.jso[i].elektroznab : '',
                elektroznab2	: this.dataPSKSObj["elektroznab2"] = this.jso[i].elektroznab2!=null ?  this.jso[i].elektroznab2 : '',
                otoplenie	: this.dataPSKSObj["otoplenie"] = this.jso[i].otoplenie!=null ?  this.jso[i].otoplenie : '',
                otoplenie2	: this.dataPSKSObj["otoplenie2"] = this.jso[i].otoplenie2!=null ?  this.jso[i].otoplenie2 : '',
                holod_vodosnab	: this.dataPSKSObj["holod_vodosnab"] = this.jso[i].holod_vodosnab!=null ?  this.jso[i].holod_vodosnab : '',
                holod_vodosnab2	: this.dataPSKSObj["holod_vodosnab2"] = this.jso[i].holod_vodosnab2!=null ?  this.jso[i].holod_vodosnab2 : '',
                goryach_vodosnab	: this.dataPSKSObj["goryach_vodosnab"] = this.jso[i].goryach_vodosnab!=null ?  this.jso[i].goryach_vodosnab : '',
                goryach_vodosnab2	: this.dataPSKSObj["goryach_vodosnab2"] = this.jso[i].goryach_vodosnab2!=null ?  this.jso[i].goryach_vodosnab2 : '',
                canalis	: this.dataPSKSObj["canalis"] = this.jso[i].canalis!=null ?  this.jso[i].canalis : '',
                canalis2	: this.dataPSKSObj["canalis2"] = this.jso[i].canalis2!=null ?  this.jso[i].canalis2 : '',
                gasosnab	: this.dataPSKSObj["gasosnab"] = this.jso[i].gasosnab!=null ?  this.jso[i].gasosnab : '',
                gasosnab2	: this.dataPSKSObj["gasosnab2"] = this.jso[i].gasosnab2!=null ?  this.jso[i].gasosnab2 : '',
                vent: this.dataPSKSObj["vent"] = this.jso[i].vent!=null ?  this.jso[i].vent : '',
                vent2: this.dataPSKSObj["vent2"] = this.jso[i].vent2!=null ?  this.jso[i].vent2 : '',
                cena_sdelki	: this.dataPSKSObj["cena_sdelki"] = this.jso[i].cena_sdelki!=null ?  this.jso[i].cena_sdelki : '',
                cena_sdelki2	: this.dataPSKSObj["cena_sdelki2"] = this.jso[i].cena_sdelki2!=null ?  this.jso[i].cena_sdelki2 : '',
                valuta	: this.dataPSKSObj["valuta"] = this.jso[i].valuta!=null ?  this.jso[i].valuta : '',
                valuta2	: this.dataPSKSObj["valuta2"] = this.jso[i].valuta2!=null ?  this.jso[i].valuta2 : '',
                dolya	: this.dataPSKSObj["dolya"] = this.jso[i].dolya!=null ?  this.jso[i].dolya : '',
                dolya2	: this.dataPSKSObj["dolya2"] = this.jso[i].dolya2!=null ?  this.jso[i].dolya2 : '',
                komplex: this.dataPSKSObj["komplex"] = this.jso[i].komplex!=null ?  this.jso[i].komplex : '',
                komplex2: this.dataPSKSObj["komplex2"] = this.jso[i].komplex2 !=null ?  this.jso[i].komplex2 : '',
                obj_komplex: this.dataPSKSObj["obj_komplex"] = this.jso[i].obj_komplex!=null ?  this.jso[i].obj_komplex : '',
                opisanie	: this.dataPSKSObj["opisanie"] = this.jso[i].opisanie!=null ?  this.jso[i].opisanie : '',
                nds	: this.dataPSKSObj["nds"] = this.jso[i].nds!=null ?  this.jso[i].nds : '',
                biznes	: this.dataPSKSObj["biznes"] = this.jso[i].biznes!=null ?  this.jso[i].biznes : '',
                auctsion	: this.dataPSKSObj["auctsion"] = this.jso[i].auctsion!=null ?  this.jso[i].auctsion : '',
                sud	: this.dataPSKSObj["sud"] = this.jso[i].sud!=null ?  this.jso[i].sud : '',
                privatiz	: this.dataPSKSObj["privatiz"] = this.jso[i].privatiz!=null ?  this.jso[i].privatiz : '',
                dvizimoe	: this.dataPSKSObj["dvizimoe"] = this.jso[i].dvizimoe!=null ?  this.jso[i].dvizimoe : '',
                cena_dvizimoe	: this.dataPSKSObj["cena_dvizimoe"] = this.jso[i].cena_dvizimoe!=null ?  this.jso[i].cena_dvizimoe : '',
                valuta_dvizimoe	: this.dataPSKSObj["valuta_dvizimoe"] = this.jso[i].valuta_dvizimoe!=null ?  this.jso[i].valuta_dvizimoe : '',
                zachetnoe	: this.dataPSKSObj["zachetnoe"] = this.jso[i].zachetnoe!=null ?  this.jso[i].zachetnoe : '',
                cena_zachetnoe	: this.dataPSKSObj["cena_zachetnoe"] = this.jso[i].cena_zachetnoe!=null ?  this.jso[i].cena_zachetnoe : '',
                valuta_zachetnoe	: this.dataPSKSObj["valuta_zachetnoe"] = this.jso[i].valuta_zachetnoe!=null ?  this.jso[i].valuta_zachetnoe : '',
                rassrochka	: this.dataPSKSObj["rassrochka"] = this.jso[i].rassrochka!=null ?  this.jso[i].rassrochka : '',
                srok_rassrochka	: this.dataPSKSObj["srok_rassrochka"] = this.jso[i].srok_rassrochka!=null ?  this.jso[i].srok_rassrochka : '',
                primechaniya	: this.dataPSKSObj["primechaniya"] = this.jso[i].primechaniya!=null ?  this.jso[i].primechaniya : '',
                cord_x	: this.dataPSKSObj["cord_x"] = this.jso[i].cord_x!=null ?  this.jso[i].cord_x : '',
                cord_y	: this.dataPSKSObj["cord_y"] = this.jso[i].cord_y!=null ?  this.jso[i].cord_y : '',
                nomer_tor: this.dataPSKSObj["nomer_tor"] = this.jso[i].nomer_tor,
                headers: this.auth_geader
              })
              .then(res => {
                ii += 1;
                // console.log(ii + "//" + this.jso.length)
                if(ii == this.jso.length){
                  this.sendError = false;
                  this.sendError2 = false;
                  this.sendError3 = false;
                  this.sendCleare = false;
                  this.sendSuccess = false;
                  this.sendSuccess2 = false;
                  this.sendSuccess4 = false;
                  this.sendAdd = false;
                  this.sendDel = false;
                  this.indeterminate = false;
                  this.sendSuccess3 = true; 
                  setTimeout(() => (this.sendSuccess3 = false), 5000);
                }
              })
              .catch(function(error) {          
                // if(ii != this.jso.length){
                //   this.sendError = true;
                //   setTimeout(() => (this.sendError = false), 5000);
                // }
                alert("Ошибка при добавлении! в объекте № "+ii); 
              });
          }
        }, 200);
      }}, 200);
    },
    ClJM() {
      axios
        .post("CleareTable", {
          name_table: 'sdelka_s_izolir_pomesh_jm',
          headers: this.auth_geader
        })
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClUsers() {
      this.dialog2 = false;
      axios
        .post("ClUsers", {headers: this.auth_geader})
        .then(res => {
          this.sendCleare = true;
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          setTimeout(() => (this.sendCleare = false), 5000);
          this.BdUsers = [];
          this.initialize();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClODObj() {
      axios
        .post("CleareTable", {name_table: 'object_vvedeni_v_eksplyataciu_od', headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClODIPObj() {
      axios
        .post("CleareTable", {name_table : 'sdelka_s_izolirovannim_pomejeniem_od', headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClODKSObj() {
      axios
        .post("CleareTable", {name_table: 'sdelka_s_kap_stroeniem_od', headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClPSObj() {
      axios
        .post("CleareTable", {name_table: 'object_vvedeni_v_eksplyataciu_ps', headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClPSIPObj() {
      axios
        .post("CleareTable", {name_table: 'sdelka_s_izolirovannim_pomejeniem_ps', headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ClPSKSObj() {
      axios
        .post("CleareTable", {name_table: 'sdelka_s_kap_stroeniem_ps',headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendAdd = false;
          this.sendDel = false;
          this.sendCleare = true;
          setTimeout(() => (this.sendCleare = false), 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initialize() {
      var self = this;
      axios
        .post("users", {headers: this.auth_geader})
        .then(res => {
          this.BdUsers = res.data;
          this.length = this.BdUsers.length
        })
        .catch(function(error) {
          self.$router.push('/');
        });

      axios
        .post("organizacii", {headers: this.auth_geader})
        .then(res => {
          this.BdOrg = res.data;
          this.length = this.BdOrg.length
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post("organizacii_name", {headers: this.auth_geader})
        .then(res => {
          let dd = [];
          this.BdOrg_name = res.data;
          dd = Array.from(this.BdOrg_name)
          Object.values(this.BdOrg_name)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    loadJM: async function() {
      this.BdJM = await axios.get("https://82.202.204.7:3333/JM");
    },
    loadODObj: async function() {
      this.ODObj = await axios.get("https://82.202.204.7:3333/OD");
    },
    loadPSObj: async function() {
      this.PSObj = await axios.get("https://82.202.204.7:3333/PS");
    },
    addUser() {
      let i = 0;
      Object.keys(this.form).forEach(f => {
      if (!this.form[f]) {
            i+=1;
            this.formHasErrors = true
        }
        this.$refs[f].validate(true)
      })
      if ((i==0) && (this.phone) && (this.emaill)){  
      axios
        .post("users_add", this.dataUser, {headers: this.auth_geader})
        .then(res => {

          console.log(res) 
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendDel = false;
          this.sendAdd = true;
          setTimeout(() => (this.sendAdd = false), 5000);
          this.dialog6 = false;
          this.BdUsers = [];
          this.initialize();
        })
        .catch(function(error) {
          alert("Ошибка при добавлении!" + error);
        });
      }
    },
    addOrg() {
      let i = 0;
      Object.keys(this.form2).forEach(f => {
      if (!this.form2[f]) {
            i+=1;
            this.formHasErrors = true
        }
        this.$refs[f].validate(true)
      })
      if (i==0){  
      axios
        .post("add_Org", this.dataOrg, {headers: this.auth_geader})
        .then(res => {
          this.sendError = false;
          this.sendError2 = false;
          this.sendError3 = false;
          this.sendCleare = false;
          this.sendSuccess = false;
          this.sendSuccess2 = false;
          this.sendSuccess3 = false;
          this.sendSuccess4 = false;
          this.sendDel = false;
          this.sendAdd = false;
          this.sendAdd_org = true;
          setTimeout(() => (this.sendAdd = false), 5000);
          this.dialog8 = false;
          this.BdOrg = [];
          this.initialize();
        })
        .catch(function(error) {
          alert("Ошибка при добавлении!" + error);
        });
      }
    },
    choose(item){
      this.item = item;
      this.dialog7 = true
    },
    choose_org(item){
      this.item = item;
      this.dialog9 = true
    },
    deleteItem() {
      const index = this.BdUsers.indexOf(this.item);
      this.dialog7 = false;
      this.search = "";
      var login = this.BdUsers[index].login;
       axios
          .post("users_remove", { login: login,headers: this.auth_geader })
          .then(res => {
            this.sendError = false;
            this.sendError2 = false;
            this.sendError3 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = true;
            setTimeout(() => (this.sendDel = false), 5000);
            this.BdUsers.splice(index, 1);
          })
          .catch(function(error) {
            alert("Запись не удалена! " + error);
          });
    },
    deleteItem_org() {
      const index = this.BdOrg.indexOf(this.item);
      this.dialog9 = false;
      this.search2 = "";
      var nomer_tor = this.BdOrg[index].nomer_tor;
      var name = this.BdOrg[index].name;
       axios
          .post("org_remove", { nomer_tor: nomer_tor, name: name, headers: this.auth_geader })
          .then(res => {
            this.sendError = false;
            this.sendError2 = false;
            this.sendError3 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendAdd_org = false;
            this.sendDel = true;
            setTimeout(() => (this.sendDel = false), 5000);
            this.BdOrg.splice(index, 1);
          })
          .catch(function(error) {
            alert("Запись не удалена! " + error);
          });
    },
    user(){
      this.dialog2 = true;
    },
    JM(){
      this.dialog3 = true;
    },
    OD(){
      this.dialog4 = true;
    },
    PS(){
      this.dialog5 = true;
    },
    add(){
      this.dialog6 = true;
    },
    add_org(){
      this.dialog8 = true;
    },
    load(item) {
      this.dialog = true;
      const index = this.BdUsers.indexOf(item);
      this.full_name2 = this.BdUsers[index].full_name;
      this.organization2 = this.BdUsers[index].organization;
      this.post2 = this.BdUsers[index].post;
      this.phone2 = this.BdUsers[index].phone;
      this.email2 = this.BdUsers[index].email;
      this.password2 = this.BdUsers[index].password;
      this.login2 = this.BdUsers[index].login;
      this.id = this.BdUsers[index].id;
      this.role2 = this.BdUsers[index].role;
      this.itens = index;
      this.nomer_tor = this.BdUsers[index].nomer_tor;
    },
    changeInfo() {
      this.dialog = false;
      axios
        .post("https://82.202.204.7:3333/api/users_changeInfo", {
          id: this.id,
          login: this.login2,
          password: this.password2,
          full_name: this.full_name2,
          organization: this.organization2,
          post: this.post2,
          phone: this.phone2,
          email: this.email2,
          nomer_tor: this.nomer_tor,
          role: this.role2,
          headers: this.auth_geader
        })
        .then(res => {
            this.sendError = false;
            this.sendError2 = false;
            this.sendError3 = false;
            this.sendCleare = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
          this.sendSuccess = true;
          setTimeout(() => (this.sendSuccess = false), 5000);
          this.search = "";
          this.BdUsers = [];
          this.initialize();
          
        })
        .catch(error => {
            this.sendError2 = false;
            this.sendError3 = false;
            this.sendCleare = false;
            this.sendSuccess = false;
            this.sendSuccess2 = false;
            this.sendSuccess3 = false;
            this.sendSuccess4 = false;
            this.sendAdd = false;
            this.sendDel = false;
          this.sendError = true;
          setTimeout(() => (this.sendError = false), 5000);
        });
    },
    close() {
      this.dialog = false;
      this.dialog6 = false;
      this.dialog8 = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    }
  }
};

</script>

<style>
header {
  height: 150px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  display: inline-table;
  background-color: #1976d2;
}  

.v-text-field.v-text-field--enclosed {
    margin: none; 
    padding: none; 
}

.v-progress-circular{
    margin: 1rem
}

@media screen and (max-width: 960px) {
  .v-file-input {
    margin-left: 12px;
    width: 315px;
    margin-top: -4px;
    flex: none;
  }
}

@media screen and (min-width: 960px) {
  
  .v-file-input {
    margin-left: 12px; 
    width: 315px;
    margin-top: -8px;
    flex: none;
  }
}
</style>
