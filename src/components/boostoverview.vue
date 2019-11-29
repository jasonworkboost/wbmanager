<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>

      <v-toolbar-title>BOOST-overzicht</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list three-line subheader>
      <v-subheader inset>BOOSTs gesorteerd op "Uitdaging"</v-subheader>

      <v-list-item v-for="boost in boostivities" :key="boost.nr" >
        <v-list-item-avatar>
          <v-icon color="primary" v-text="boost.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="boost.title"></v-list-item-title>
          <v-list-item-subtitle v-text="boost.question"></v-list-item-subtitle>
          <v-list-item-subtitle v-text="boost.challenge"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click="changeBoost(boost.nr)">
            <v-icon color="primary">mdi-arrow-right-bold-circle</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      randomText: [
        "Zonder WorkBoost is geen leven mogelijk.",
        "Ik heb hier heel veel van geleerd!",
        "Mijn collega en ik gaan hier direct mee aan de slag!",
        "Zonder de app had ik dit nooit gedaan...",
        "Twee woorden: Gewoon Geweldig",
        "Ik heb deze BOOST gelijk doorgestuurd naar mijn collega",
      ]
    };
  },
  methods: {
    ...mapActions(["setData","changeBoost"]),
    data: function() {
      console.log(this.boostivities.length);
      const res = 50;
      let len = this.boostivities.length;
      let text = this.randomText.length - 1;
      let arr = [];
      for (let i = 0; i < res; i++) {
        let a = Math.floor(Math.random() * len) + 1;
        let scoreChal = Math.floor(Math.random() * 5) + 1;
        let scoreNov = Math.floor(Math.random() * 5) + 1;
        let scoreFun = Math.floor(Math.random() * 5) + 1;
        let scoreRel = Math.floor(Math.random() * 5) + 1;
        let exp = this.randomText[Math.floor(Math.random() * text)];
        let idpern= Math.floor(Math.random() * 1000);
        let obj = {
          id: idpern,
          nr: a,
          score: [scoreChal, scoreNov, scoreFun, scoreRel, exp],
          rateInno: 0,
          rateUsefull: 0,
          time_stamp:
            "Thu Aug 29 2019 19:09:33 GMT+0200 (Midden-Europese zomertijd)"
        };
        arr.push(obj);
      }
      console.log(arr);
      this.setData(arr);
    }
  },
  computed: {
    ...mapGetters(["boostivities", "dataBoost"])
  },
  created() {
    this.data();
  }
};
</script>