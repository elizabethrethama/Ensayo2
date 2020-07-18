import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList: [ ],
    listaComentarios: [ ]
  },
  getters: {
    enviarInfoApi(state){
      return state.infoList;
    },
    enviarListaComentarios(state){
      return state.listaComentarios;
    },
  },
  mutations: {
    mutandoInfoApi(state, recibiendoInfoApi){
      state.infoList = recibiendoInfoApi;
    },
    mutandoInfoComent(state, infoComentRecibiendo){
      state.listaComentarios.push(infoComentRecibiendo);
    },
  },
  actions: {
    infoApi(context,recibiendoInfoApi){
      context.commit('mutandoInfoApi',recibiendoInfoApi);
    },
    guardandoComentario(context,infoComentRecibiendo){
      context.commit('mutandoInfoComent',infoComentRecibiendo);
    },
  },
})
