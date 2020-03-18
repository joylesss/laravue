import axios from 'axios'

export default ({

  state: {
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
    SET_TOKEN (state, token) {
      state.token = token
    },

    SET_USER (state, data) {
      state.user = data
    },
  },

  actions: {
    async login ({ dispatch }, credentials) {
      const response = await axios.post('login', credentials)
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
        .then(() => {
          commit('SET_TOKEN', null)
          commit('SET_USER', null)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
})
