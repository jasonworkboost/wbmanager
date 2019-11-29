import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: 1,
    dataBoost: [],
    boostivities: [
      {
          nr: 1,
          title: "Innovatie",
          icon: "blur_on",
          question:"Stel je hebt onbeperkte tijd en bronnen, wat zou je veranderen binnen je afdeling?",
          challenge:"Bespreek jouw idee met een collega en noteer het idee in de app.",
      },
      {
          nr: 2,
          title: "Tijd",
          icon: "access_time",
          question:"Waar verliest jouw afdeling veel tijd aan?",
          challenge:"Bedenk met een collega een idee om tijd te besparen en noteer dit in de app.",
      },
      {
          nr: 3,
          title: "Versterken",
          icon: "headset_mic",
          question:"Is er een andere afdeling die je hulp kan gebruiken?",
          challenge:"Bespreek met een collega buiten jouw afdeling hoe je elkaar kan versterken.",
      },
    {
          nr: 4,
          title: "Effectiviteit",
          icon: "laptop",
          question:"Wat kan er bij jou effectiever op de afdeling?",
          challenge:"Brainstorm met een collega en noteer dit idee in de app.",
      },
      {
          nr: 5,
          title: "Werksfeer",
          icon: "weekend",
          question:"Hoe is de werksfeer op jouw afdeling?",
          challenge:"Noteer 1 idee in de app hoe of wat werken op jouw afdeling leuker kan maken.",
      },
      {
          nr: 6,
          title: "Klant",
          icon: "wb_sunny",
          question:"Wordt aan de wensen van de klant voldaan?",
          challenge:"Noteer in de app hoe de afdeling meer service kan leveren aan de klant.",

      },
      {
          nr: 7,
          title: "Groei",
          icon: "swap_calls",
          question:"Kan jouw afdeling de groei van de organisatie aan?",
          challenge:"Bespreek met een collega hoe de afdeling op de groei kan inspelen.",
      },
      {
          nr: 8,
          title: "Assortiment",
          icon: "mouse",
          question:"Wat vind je van het huidige assortiment?",
          challenge:"Noteer in de app 1 product wat je zou willen toevoegen en 1 product die je overbodig vindt.",
      },
      {
          nr: 9,
          title: "Invloed",
          icon: "videogame_asset",
          question:"Zijn er andere afdelingen die invloed hebben op jouw werk?",
          challenge:"Noteer 1 manier in de app hoe andere afdelingen jouw werk effectiever kan maken.",
      },
      {
          nr: 10,
          title: "Makkelijker",
          icon: "straighten",
          question:"Wat kan makkelijker op jouw afdeling?",
          challenge:"Noteer in de app 1 proces in je werk wat makkelijker kan.",
      },
      {
          nr:11,
          title: "Markt",
          icon: "beenhere",
          question:"Zie jij nog kansen buiten de zorgmarkt?",
          challenge:"Noteer 1 andere interessante markt voor je organisatie in de app.",
          fact:"Ga zo door!",
      },
    ],

  },
  getters:{
    dataBoost: state => {return state.dataBoost},
    boostivities: state => {return state.boostivities},
    selected: state => {return state.selected},
  },
  mutations: {
    setData(state, payload){
      state.dataBoost = payload;
    },
    changeBoost(state, payload){
      state.selected = payload;
    }

  },
  actions: {
    setData(context, payload){
      context.commit('setData', payload);
    },
    changeBoost(context, payload){
      context.commit('changeBoost', payload);
    },
  },
});
