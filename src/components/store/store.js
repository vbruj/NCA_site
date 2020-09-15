import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import User from './modules/user'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://82.202.204.7:3333/api/'

export default new Vuex.Store({
    actions: {
        
    },
    modules: {
        user: User
    }
    
})
