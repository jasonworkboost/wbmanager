<template>
  <v-container fluid>
    <v-row align-content="start" justify="center">
      <div class="home">
        <v-row>
          <v-col cols="3">
            <!-- <v-card class="pa-2" outlined tile>BOOST per week</v-card> -->
            <Week />
          </v-col>
          <v-col cols="3">
            <Day />
          </v-col>
          <v-col cols="3">
            <Target />
          </v-col>
          <v-col cols="3">
            <Details />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <Activity />
          </v-col>
          <v-col cols="6">
            <Rating />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <Boostoverview />
          </v-col>
          <v-col cols="6">
            <Boostfb />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <Boostcom />
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Week from "../components/boostweek.vue";
import Day from "../components/boostday.vue";
import Target from "../components/boostprogress.vue";
import Rating from "../components/generalrating.vue";
import Details from "../components/details.vue";
import Activity from "../components/activity.vue";
import Boostoverview from "../components/boostoverview.vue";
import Boostfb from "../components/boostfb.vue";
import Boostcom from "../components/boostcomments.vue";

export default {
  name: "home",
  components: {
    Week,
    Day,
    Target,
    Rating,
    Details,
    Activity,
    Boostoverview,
    Boostfb,
    Boostcom,
  }
};
</script>
<style>
.home {
  width: 90%;
}
</style>
