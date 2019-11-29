<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>BOOST-feedback</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list three-line subheader>
      <v-subheader>Onderstaand de feedback op de BOOST: {{boostivities[selected-1].title}}</v-subheader>

      <v-list-item v-for="(dat, ind) in dataArray" :key="dat.ind">
        <v-list-item-content>
          <v-list-item-title>Onderstaand het belangrijkste resultaat van {{dat.id}}</v-list-item-title>
          <v-list-item-subtitle>"{{dat.score[4]}} "</v-list-item-subtitle>
          <v-list-item-subtitle class="text-right">
            <v-btn icon>
              <v-icon
                :color="dat.rateUsefull? 'primary': 'grey'"
                @click="dat.rateUsefull=!dat.rateUsefull"
              >mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon
                :color="dat.rateInno? 'primary': 'grey'"
                @click="dat.rateInno=!dat.rateInno"
              >mdi-alarm-light</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["boostivities", "dataBoost", "selected"]),
    dataArray: function() {
      let b = this.selected;
      let a = this.dataBoost.filter(function(el) {
        return el.nr === b;
      });
      return a;
    }
  }
};
</script>