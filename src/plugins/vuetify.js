import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons:{
    iconfont: 'mdi',
  },
  theme:{
    dark: false,
  },
  themes: {
    light: {
      primary: '#17C8BC',//colors.red.darken1, // #E53935
      secondary: '#fc4a1a', // #FFCDD2
      tertiary: '#ffbc00',
      quarter: '#ff6b6b',
      accent: '#3F51B5', // #3F51B5
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    },
  }
});
