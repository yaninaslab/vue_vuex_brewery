import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breweries: []
  },
  mutations: {
    update_breweries(state, payload) {
      state.breweries = payload;
    }
  },
  actions: {
    get_info(store) {
      axios.request({
          url: "https://api.openbrewerydb.org/breweries"

      }).then((response) => {
          store.commit('update_breweries', response.data);
      }).catch((error) => {
          error;
          //this.$emit('button_clicked', "Issue with API, sorry");
      });
  }
  },

})
