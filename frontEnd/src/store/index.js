import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,

    /* Authorization */
    token: null,
    user: null,
  },
  getters: {
    authenticated (state) {
      return state.token && state.user
    },

    user (state) {
      return state.user
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },

    /*  */
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USER (state, data) {
      state.user = data
    },
  },
  actions: {
    async login ({ dispatch }, credentials) {
      const response = await axios.post('login_web', credentials)
      return dispatch('attempt', response.data.access_token)
    },

    async attempt ({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }

      if (!state.token) {
        return
      }

      try {
        const response = await axios.get('me')
        commit('SET_USER', response.data)
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },

    logout ({ commit }) {
      return axios.post('logout')
        .then(res => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },

    async getUsers () {
      return axios.get('info_users')
    },
    async updateUser (_, params) {
      return axios.put('info_users/' + params.id, params)
    },

    async getApps () {
      return axios.get('info_apps')
    },
    async updateApp (_, params) {
      return axios.put('info_apps/' + params.id, params)
    },

    async getQuestions () {
      return axios.get('info_questions')
    },
    async updateQuestion (_, params) {
      return axios.put('info_questions/' + params.id, params)
    },

    async getScores () {
      return axios.get('info_scores')
    },
    async updateScore (_, params) {
      return axios.put('info_scores/' + params.id, params)
    },

    async getWins () {
      return axios.get('info_wins')
    },
    async updateWin (_, params) {
      return axios.put('info_wins/' + params.id, params)
    },
  },
})
